---
id: 2
title: understanding the internet - noob edition
category: dev
createdAt: '2020-04-01 11:00:00'
tags:
  - noob
  - internet
  - quarantine
author:
  name: karn
  twitter: gyankarn
  image: https://cdn.karngyan.com/bigheadkarngyan.png
description: Mostly what people interact with the internet is the World Wide Web, that’s the www dot something. We all know that but I guarantee you my future daughter will not know what www stands for.
---

How does the Internet work?  An interviewer from Amazon asked me.

<div class="spoiler"><p> Oh BTW this arcticle might be a complete rant on the COVID-19 issues which made my college cancel my Internship at Amazon and I might put some of my personal feelings into the content as well. Just kidding! -_-</p></div>

Where does your knowledge lie? At the frontend? Is it the backend? Is it networking? 

Somewhere. If you're into computer science, your understanding lies somewhere. So if you're a person that works on the web, which is what most people interested in CS do, you should know at least some part of this.

So how does the internet work ?

I think a lot of us, when we think of what internet is, we think of web browsers, and we think of, I dont know, may be streaming movies or something like that. Mostly what people interact with the internet is the World Wide Web, that's the www dot something. We all know that but I guarantee you my future daughter will not know what www stands for.

That’s just a part of the internet. There’s still FTP, there's other things that run over the internet, BitTorrent or Movie Streaming, and lots of other examples.

Noob Note: Intranet is  little different from Internet. Intranet is like the internet, but it's private. Most companies use a VPN, a Virtual Private Network, it's one of the best practices. So, if you're on a VPN, you're on an intranet, which is just a private internet of different servers talking to each other, but it's inaccessible from the outside.

<div class="breaker"></div>

### Internet runs on trust

It's a really weird concept that, collectively as humanity, we have our disagreements on politics and war and the best type of linux distribution. But we all collectively said, hey let’s agree on a set of standards and protocols that my computer can use to talk to your computer and vice versa. And believe me, this is a really big deal in the course of mankind. The fact that we can have these disparate ideas about how software engineering should work, what's the best programming language, what's the best OS, but we all agreed on this one thing, is incredible.

I think our cooperation is one of the things that separates us from other organisms in the Animalia biological kingdom. So the internet runs on this trust system and it's a series of protocols that every body sat down to agree on like 30 years ago or something.

They said, hey, this is how my computer can talk to you. And that protocol is called IP (Internet Protocol). Now, a label assigned to an internet connected device is called an IP Address.

**IPv4** 
* e.g. 8.8.8.8
* 4 integers in \[0,255] separated by dots.
* 4,294,967,296 distinct IP Addresses

When IPv4 was being adopted, people thought that there'll definitely be not more than 4.3 billion computers in the world. Well, we're way past that. So, it just gives you the idea how ubiquitous the internet is. 

But again, this just shows you a lesson in history to plan ahead. They thought 4.3 billion would be enough, but no it wasn't. So they invented IPv6

**IPv6** 
* e.g.2001:0db8:85a3:0000:0000:8a2e:0370:7334
* 8 groups of four hexadecimal digits, each group representing 16 bits (a hextet)
* 340,282,366,920,938,463,463,374,607,431,768,211,456 distinct IP Addresses

That is hopefully enough addresses that we won’t run out of any time soon. We'll see what happens in the future, you never know. Maybe we'll go to Mars and by that time I'll be dead and hopefully no one will be reading this article because, if so, we'll have bigger problems in the world.

So, these are IP addresses: 
> Addresses used by the Internet Protocol to kind of talk to each other. Hey, here I am and here's how you can get to me.

Now this all runs on a different Protocol called **TCP**, Transmission Control Protocol. And most of you have heard of TCP over IP, it's just a protocol, a standardization of how computers can talk to each other. And you also hear the phrase **UDP**, User Datagram Protocol. People are probably less familiar with this term because, (though it’s heavily used) you don’t use it on a day to day basis.

Let's go over some differences in TCP and UDP:
* TCP is lossless. If I send you some information over TCP, **it is** going to make it. It's got error correction/checking.
* UDP is different, it's like I just shouted "Hey" and I assume you heard me and I don't care if you didn't. Essentially, it's just a one way blast of information.
* And you can see why UDP is faster. TCP has to say, "hey, you there?" (And that's called a SYN packet) and the client responds with, "yeah! I'm here" (with an ACK). So it sends an ACK package.

> You don’t need to know this stuff, but it’s just like this nerd level trivia that might make you look cool at the bar next time you’re hanging out.

Yeah, so TCP is slower. Oh BTW I have a good joke about UDP but you might not get it.

<div class="breaker"></div>

Time to do an exercise, let's try **ping**.

Ping is just a really short request. It just says hey, hey, hey, that's all it does. So, let's go in ping karngyan.com into your terminal.
<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="/images/the-internet-noob-edition/ping-karngyan.png" alt="ping karngyan.com">
			 <figcaption class="caption">ping karngyan.com (To kill, we just Ctrl+C)</figcaption>
    </div>
		<div class="toright">
			<p> Hey there, it's alive. Ping is useful for debugging your site. If you're saying, man my clients are complaining about the connection being really slow. What's the cheapest, easiest way to find out if my site up and running? And how long's that round trip time? So the round trip refers to when I send the packet out and it comes back. Another thing it measures is, well, I'll talk about hops in a second. But ping is just a nice utility to have in your backpocket just to say like,  "Hey, is this site up? Yeah! cool."
			</p>
		</div>
	</div>
	
### Domain Name System

But I pinged karngyan.com and not an IP Address. And the way that works is another set of protocols, there's a lot of protocols. When you look at the internet and the people that run the internet and by the way there are people that run the internet or run the switches and the connections and backbones. Again it's this trust system and one of those things is the DNS system. DNS is run by ICANN (The Internet Corporation for Assigned Names and Numbers). When you buy a domain name, you actually pay a little bit of fee (may be 18 cents per year, more or less) and they help create this domain name system.

And what it is, it's just an internet phone book. But that's oversimplifying it, it's an intelligent internet phone book. So when I say, hey I wanna go to karngyan.com, it's not necessarily routing you directly to servers in California, because that'd be really slow. There's things called data centers all around the world, which is documented in a second. But DNS says, what's the closest server this resolves to? 

So, all it does is it maps domain names to IP addresses. And we need them because I can't remember my own IP address. I can't remember anybody's IP address, I can barely remember my phone number. <span class="evidence">DNS is just a way of making internet accessible for more people.</span>

<div class="side-by-side">
    <div class="toright">
        <img class="image" src="/images/the-internet-noob-edition/domain.png" alt="Domain">
			 <figcaption class="caption">Domains</figcaption>
    </div>
		<div class="toleft">
			<p> I guarantee you've seen domains and domain is something like google.com, twitter.com etc. The dot com, dot me, dot biz, dot anything that's the top level domain, i.e TLD. TLDs are owned by specific companies, entities or countries.
				My least favorite tld is dot biz. No offense to anybody with dot biz tld, but it just feels like a scam.  And over the years, you might feel like all the good dot coms are taken, which is not necessarily true. You just have to get really really .. really creative.
			</p>
		</div>
	</div>

Remember that phase a few years ago with the dot lys? It was like bitly, fastly, that was like the hot new thing. Now there's dot io which is really expensive. I think it's assigned to the British India Ocean Territory. Almost every country has their own top level domain. For example, [yandex.ru](https://yandex.ru), yandex is the Google of Russia, dot ru is for Russia, cn is for China. But largely dot com is still kind of the domain everyone wants to have because it's the OG domain, one of the originals. 
	
There's dot org, dot edu and a whole bunch of TLDs beacuse these top companies are like why can't I have my own tld and ICANNs like, okay we'll make some new ones for you. So now there's dot google, dot party, dot dev, dot wtf,  **my favorite tld**. So the good thing is if you need a website today and you don't have one. You're gonna have one by the end of the day and you could use whatever TLD you want except for dot biz. I'm telling you don't use dot biz, it's just a bad idea.

And a subdomain would be mail dot, dev dot, test dot something. And that just means it still routes to the main domain but it's probably a different part of the site.

Q: Why would I use a subdomain versus a path ? e.g Path: **karngyan.com/mail**
<div class="spoiler"><p>
It just tells the user you're at a completely different part of the site and it's affiliated with the site, but it's probably a different application entirely. Versus the path like <strong>karngyan.com/about</strong>  which is a part of the site but you're just on a different route, a different page on the main site. </p>
</div>

### Nameservers
Well, because of DNS I can map a domain name to an IP address, so when I type in karngyan.com the DNS resolvers figure out the IP from it. But how do they figure that out ?

**Nameservers.**

More servers. There are a lot of servers. The internet is built on servers and trusts and nodes and things like that but there's an idea call a nameserver. And the name server is the actual entity that keeps that mapping.  So whenever you buy a new domain from GoDaddy, Google or one of the big ones. They all have name servers. And that just says hey, this person bought this domain and it's probably not going anywhere but if you need to look it up, I know exactly where that is. 

So nameservers are essentially the record keepers of the internet.
<div class="breaker"></div>

Let's do an exercise.
#### Trace Routes
I love trace routes.

```bash
$ man traceroute #Traceroute manual
$ traceroute google.com
```

![Traceroute Google.com](/images/the-internet-noob-edition/traceroute.png)
<figcaption>traceroute google.com</figcaption>

Instead of ping, which hits a server that replies back and says hey, I’m alive, Traceroute gives you a map of every single hop along that point. Traceroute gives you a map of every single hop along that point. Remember when I told you Internet is built on trusts in servers and nodes and switches. That's what we're doing, we're trying to reach **google.com** at **172.217.166.238** and we're hitting every server along the way.

I love traceroutes, 'cause 
1. It makes me look cool.
2. It helps diagnose network problems.

Suppose, you have a website and your client says I can't reach your website, you can run traceroute. So you can deduce problems from where the hop dies, like if the hop dies further down i.e. closer to Google resolver we know that may be a load balancer is out, may be google itself is down.

Traceroute and Ping both run a thing called **ICMP** requests (Internet Control Message Protocol), instead of TCP. This is saying, these are health check of sort. So ping is a sort of health check saying, are you alive? 
Traceroute is, how many hops does it take to get to the server, are you alive ?

So you can configure your server not to respond to ICMP requests at all. And this is what we call **blackholing**, whereas if you wanna explicitly deny requests, you can say, not allowed, hey don't do that. We're not gonna accept that. But blackholing is just saying we're not even gonna respond to your requests. And that's why ping and traceroute don't work on some websites because it's configured that way.

Why'd someone configure that ?

May be you don't wanna pinged to death, which usually doesn't happen anymore. But in the old days of the internet, you could take down a site by pinging them. I can set up like five or six servers and keep pinging, ‘cause every ping computer is obligated to respond. You could take down websites but this was back in the old days, not anymore.

But you can just overload the server with pending requests to handle. 

I usually keep it alive, it helps me debug. It totally depends on you and that's the greatest thing about your own servers, you have complete control over it.

<div class="breaker"></div>

### Packet

> It's a little bit of information. 

You can think of a packet like an envelope. And what does an envelope have in it? It’s got the address of where you’re trying to get to, and it’s got information about where you’re coming from, just in case when it has to come back. And inside a packet, we have information. That's what a packet is, it's just this base unit of information of how everything's transmitting.

But packet mainly contains metadata, people think it's mainly data. Like when you mail an envelope you're thinking I sure hope my girlfriend gets this letter or this thing I bought off the internet. But really what a packet represents, is what the key information is and where it’s going and where it came from and all this metadata attached to it which is usually in the form of headers.

For example right now when you opened this blog, it's not just one packet but it's trillions of them and often using **TCP**. It starts with one and it says, hey I've got one but there's 50 more of my cousins coming along too. And when it hits the server, it puts them all together in a checksum. And that's why TCP is called error correcting because it has all these packets and it says like, hey there's 50 packets. And the client says, hey I got all of them except for three. I'm missing 28, 42, and 49 and sends it back to the server and the server says, I acknowledge that, let me send those last three packets. That's why it's called error correcting, because you're guaranteed to get this packet every single time.

<div class="breaker"></div>
 Ah! Alright for a noob you know enough now. In about 50 minutes from now I got to get back to work (from home - COVID Ahhhh). Also I send my article to a few friends of mine for grammar check. Hehe! Thanks Karan and Anamika.
 
 Let's recap a bit.
 
 Q: How does the internet work?
 * Internet runs over TCP/IP, which is a protocol that everybody agrees on.
 * On that protocol, are packets. There's different kind of packets.
 * And all this runs on a series of trust, and trust means that if I send you this packet I guarantee you're gonna hand it off to the next guy.
 * We know that if we type a domain in to the browser, that gets resolved by the name servers using the DNS system and that resolves to a server somewhere.

Not bad, we know how the internet works.

<div class="breaker"></div>

### Politics

Now it is necessary to know about a little bit of the poilitics going around the internet. People talk about net neutrality and what it is. It's a trust system, that if I send a packet to, Mozambique, I know that it'll get there because that's just the way the internet works.

Net neutrality means that ISPs can say like hey, you're sending a text to Mozambique, actually you know what, I wanna tax every bit of data that comes into this particular area, because you know what, I can do that.

So rather than this trust system, it’s just saying that actually, I'm gonna start charging your data depending on where it's going. If you pay me a li'l bit more money, I'll make sure your data gets there a li'l bit faster.

So that's the debate about net neutrality:
> Should the ISPs be just dumb pipes, that if I send a letter it just gets there or should they start prioritizing traffic, based on how much someone pays them.

I didn't take a side in this debate. I was just explaining what the argument was about.
<div class="breaker"></div>
	
But you know what, internet is just a [series of tubes](https://en.wikipedia.org/wiki/Series_of_tubes).
And about the answer I gave to my interviewer. I said, "It's a series of publicly interconnected devices". He said, "Elaborate!"

Hope you had a good time reading it. Have a good day. :)
