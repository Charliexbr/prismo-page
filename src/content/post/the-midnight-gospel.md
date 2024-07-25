---
layout: ../../layouts/post.astro
title: The Midnight Gospel
description: Clancy, a spacecaster with a malfunctioning multiverse simulator, leaves the comfort of his home to interview beings living in dying worlds.
dateFormatted: Jul 25th, 2024
---

[![the midnight gospel](https://occ-0-2299-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVCC2sd1zlrjeY7rFVUYTlKyhG_8Ri90qm-higqS15EXCAxfaa49dBCXiQixUCMW9ZFylh9cr-IX2IBgY--FdAAi3t9wTjtDjWmn.jpg?r=138)]

This little toy was finished last week. Just a few lines of code.

Encountered many issues during deployment, mainly related to HTTPS certificates.

The longest segment of the domain name is 63 characters. The commonName of the HTTPS certificate can be up to 64 characters.

This caused Cloudflare, Vercel, and Netlify to be unable to use Let's Encrypt to sign HTTPS certificates (because they use the domain name in commonName), but Zeabur can use Let's Encrypt to sign HTTPS certificates.

Finally, switching the Cloudflare certificate to Google Trust Services LLC successfully signed the certificate.


<iframe src="https://mastodon.social/@prismo_for_you/112848200335415833/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.social/embed.js" async="async"></script>

