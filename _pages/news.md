---
permalink: /news/
title: "News"
author_profile: false
---
under construction
{% for post in site.posts limit:5 %}
- **[{{ post.title }}]({{ post.url | relative_url }})**  
  <small>{{ post.date | date: "%Y-%m-%d" }}</small>
{% endfor %}

[All news →]({{ '/news/archive/' | relative_url }})
