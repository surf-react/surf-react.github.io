---
permalink: /news/archive/
title: "All News"
layout: single
author_profile: false
---

{% for post in site.posts %}
- **[{{ post.title }}]({{ post.url | relative_url }})**  
  <small>{{ post.date | date: "%Y-%m-%d" }}</small>
{% endfor %}
