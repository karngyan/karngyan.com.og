---
id: 9
title: auto manage ssl/tls certificates in go
createdAt: '2021-10-15 22:10:00'
tags:
  - ssl
  - tls
  - certificates
  - acme v2
  - lets encrypt
  - dns validation
category: dev
author: 
  name: karn
  twitter: gyankarn
  image: https://cdn.karngyan.com/karn.jpg
description: the right and probably the easiest way to obtain ssl/tls certificates. you can store them in your file system and use them with your load balancer or directly with your application.
---

Generating and maintaining certificates for SSL/TLS has always been a hassle if you've a small tech team and don't want devops work to hinder your development speed.
At [SendPost](https://sendpost.io) we've always tried to be as cloud-agnostic as possible. And since we send emails, we maintain a plethora of domains for various purposes.

One of our tracking domains: `example.com`, used for tracking clicks and opens in emails needed a wildcard certificate `*.example.com` for tracking to work as expected. A week ago from now, this is what we did:

- Manually generate the certificate using `certbot` every 60-90 days.
- Replace the file on our servers.
- Make sure `openresty` config points to the right file.

Even though we're a three people tech team, automation is the key to scaling and sound sleep 😂.

Our backend is entirely in Go. So a golang solution that integrates well with our servers would be awesome. But we still wrote down all our options to automate this:

- a cron that'd check for expired certificates and renew them 30 days (ideal time) before their expiry.
- write a lua script at the load balancer layer to auto generate ssl certificates.
- implement acme v2 protocol with our golang servers, which also extends a feature at SendPost, where users can add a custom track domain.

> [ACME](https://en.wikipedia.org/wiki/Automated_Certificate_Management_Environment) v1 did not support wildcard domains.

Obvious choice, option three. It was time to start researching on existing libraries. I was aware of `caddyserver` and had been playing with it for a while. I knew they provided TLS certificates on the fly. It was probably a good time to reverse engineer that.

I ended up on a few libraries but probably the best one for us was: [certmagic](https://github.com/caddyserver/certmagic) by caddyserver.

> Quoting their description: Compared to other ACME client libraries for Go, only CertMagic supports the full suite of ACME features, and no other library matches CertMagic's maturity and reliability.

Certmagic automates a lot of steps of the ACME v2 like generating a CSR, creating a user account and managing their private keys for requesting certificates. It also takes care of renewing the existing certificates. It literally took me an hour to automate all and deploy it. If you want read about the protocol itself: [Another neat blog](https://www.keyfactor.com/blog/what-is-acme-protocol-and-how-does-it-work/)

---

So today I'll be leveraging `certmagic` to achieve the following:

- Generating TLS certificates for `*.example.com'
- Using AWS Route53 for automatic DNS Validation (note: only DNS Validation is allowed for wildcard domains)
- Storing the certificates in our file system

---

## aws keys

- Since we'll be using Route53 for DNS validation, lets get the IAM User keys for the same.
- Make sure you have the domain's hosted zone setup in route53. Grab the Hosted Zone ID, it'll look like this: Z0818708MU2UVH
- Create an IAM User named `certmagic` (programmatic access) with the following policy attached to it.

> Make sure you replace the hosted zone id in *Resource* section with your domain's.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "",
            "Effect": "Allow",
            "Action": [
                "route53:ListResourceRecordSets",
                "route53:GetChange",
                "route53:ChangeResourceRecordSets"
            ],
            "Resource": [
                "arn:aws:route53:::hostedzone/Z0818708MU2UVH",
                "arn:aws:route53:::change/*"
            ]
        },
        {
            "Sid": "",
            "Effect": "Allow",
            "Action": [
                "route53:ListHostedZonesByName",
                "route53:ListHostedZones"
            ],
            "Resource": "*"
        }
    ]
}
```

- once you have the keys, store it somewhere safe.

## golang bit

Now let's get cracking with the code and get it done. We'll need 2 packages added to your go.mod.

- github.com/caddyserver/certmagic
- github.com/libdns/route53

Certmagic can do the DNS Validation with any of the existing libraries provided by [libdns](https://github.com/libdns). Or you can write your own, it's just an interface that needs some methods to be implemented.


```go
package main

import (
	"context"
	"fmt"
	"github.com/caddyserver/certmagic"
	"github.com/libdns/route53"
	"log"
	"time"
)

func main() {
	autoManageCerts()
	blockForever()
}

func blockForever() {
    select{}
}

func autoManageCerts() {

	cache := certmagic.NewCache(certmagic.CacheOptions{
		GetConfigForCert: func(cert certmagic.Certificate) (*certmagic.Config, error) {
			return &certmagic.Config{
				// any customization based on cert
			}, nil
		},
		RenewCheckInterval: 14 * 24 * time.Hour, // Every two weeks cert is checked for renewal
	})

	r53p := &route53.Provider{
		AccessKeyId:     os.Getenv("AWS_ACCESS_KEY_ID"),
		SecretAccessKey: os.Getenv("AWS_SECRET_ACCESS_KEY"),
	}

	err := r53p.NewSession()
	if err != nil {
		fmt.Println("failed in initializing route53 client")
		log.Fatalln(err)
	}

	magic := certmagic.New(cache, certmagic.Config{
		Storage: &certmagic.FileStorage{Path: "/etc/ssl/certmagic"},
	})

	letsEncryptACME := certmagic.NewACMEManager(magic, certmagic.ACMEManager{
		CA:     certmagic.LetsEncryptStagingCA,
		Email:  "hello@sendx.io",
		Agreed: true,
		DNS01Solver: &certmagic.DNS01Solver{
			DNSProvider:        r53p,
		},
		// plus any other customizations you need
	})

	magic.Issuers = []certmagic.Issuer{letsEncryptACME}
  
  // manage all certificates asynchronously and we're done
	err = magic.ManageAsync(context.Background(), []string{"*.example.com"})
	if err != nil {
		fmt.Println("failed to start manage async")
		log.Fatalln(err)
	}

}
```

You can extend this with any number of domains, any kind of DNS Provider Validation, or use some other kind of Validation. Certmagic also provides certificate generation on demand, which is the USP of caddyserver.

Let me know if you need more explanation on any of the parts. Hope you have a good time managing your certs. 

Ciao! 👋🍺
