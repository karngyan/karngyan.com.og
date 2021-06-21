---
id: 8
title: software architecture in 2 minutes
createdAt: "2021-04-09 5:00:00"
tags:
  - software
  - architecture
  - scale
category: dev
author:
  name: karn
  twitter: gyankarn
  image: https://cdn.karngyan.com/bigheadkarngyan.png
---

Quickest explanation of software architecture evolution that now serves billions of users. 
The worst part about being a student is the moment you think you know it. 
It is just the beginning. Bruh! You need to catch up to it.

<!--more-->

In the beginning the cloud was formless and void and the engineers provisioned a server, 
it talked to _**THE DATABASE**_ and served up _**THE WEBPAGE**_ and it was good.

<img width="80%" src="/images/software-architecture/img0.png" alt="simple-archi">

The users came, and the business grew. As the company grew, they formed more engineering teams. 
As the server grew, it became a **monolith**.

<img width="80%" src="/images/software-architecture/img1.png" alt="simple-archi">

They divided the monolith into micro-services, in order to increase the autonomy of the teams so they could move faster. 
Then the engineers created apps that used the services.

<img width="80%" src="/images/software-architecture/img2.png" alt="simple-archi">

But the engineers saw that it was not good for each app to have to talk to every service on its own, 
so they created an API Gateway to bind the services together and in the [seventh year](https://biblehub.com/leviticus/25-4.htm) they rested.

<img width="80%" src="/images/software-architecture/img3.png" alt="simple-archi">

But not for long, because they continued to innovate, they saw that REST was insufficient and they created Graph Query Languages, for the apps to fetch data from the api and it was all good. 
Time passed and the company continued to grow and teams were fruitful and the services multiplied.

The api gateway that bound them together, grew as well in order to compose the many services and then there was temptation, in order to handle failure gracefully. 
They added fallback logic into the gateway. Simple caches gave way to complex memory data stores, along with business logic.

Before they knew it, the API Gateway had become the new monolith.

<img width="80%" src="/images/software-architecture/img4.png" alt="simple-archi">

What happens next? Go [study](https://netflixtechblog.com/how-netflix-scales-its-api-with-graphql-federation-part-1-ae3557c187e2). You got a lot to catch up to. 

Have a fun weekend. Ciao! 👋
