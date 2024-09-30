---
layout: default
title:  "Sitemap"
permalink: /sitemap
---

# {{ page.title }}

<ul>
    <li><a href="{{ '/index' | relative_url }}">Home</a>
        <ul>
            <li><a href="{{ '/about' | relative_url }}">About</a></li>
            <li><a href="{{ '/use-cases' | relative_url }}">Use cases</a></li>
        </ul>
    </li>
{% for item in site.data.nav-primary %}
    <li>
      <a href="{{ item.url | relative_url }}">{{ item.text }}</a>
    </li>
{% endfor %}
</ul>