---
layout: ../../layouts/post.astro
title: The Midnight Gospel
description: Clancy, a spacecaster with a malfunctioning multiverse simulator, leaves the comfort of his home to interview beings living in dying worlds.
dateFormatted: Jul 25th, 2024
---


This little toy was finished last week. Just a few lines of code.

Encountered many issues during deployment, mainly related to HTTPS certificates.

The longest segment of the domain name is 63 characters. The commonName of the HTTPS certificate can be up to 64 characters.

This caused Cloudflare, Vercel, and Netlify to be unable to use Let's Encrypt to sign HTTPS certificates (because they use the domain name in commonName), but Zeabur can use Let's Encrypt to sign HTTPS certificates.

Finally, switching the Cloudflare certificate to Google Trust Services LLC successfully signed the certificate.

You can view the relevant certificates at [https://crt.sh/?q=loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.ong](https://crt.sh/?q=loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.ong).
