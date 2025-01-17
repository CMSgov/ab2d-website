---
layout: default
title:  "Sitemap"
permalink: /sitemap
description: "Explore the AB2D site map to find documentation, resources, and more."
show-side-nav: false
---

# {{ page.title }}

<ul>
    <li><a href="{{ '/index' | relative_url }}">Home</a>
        <ul>
            <li><a href="{{ '/about' | relative_url }}">About</a></li>
            <li><a href="{{ '/use-cases' | relative_url }}">Use cases</a></li>
        </ul>
    </li>
    <li><a href="{{ '/api-documentation' | relative_url }}">API Documentation</a>
        <ul>
            {% for item in site.data.api-docs-nav %}
                {% for child in item.children %}
                <li>
                    <a href="{{ child.url | relative_url }}">{{ child.name }}</a>
                    <ul>
                        {% for grandchild in child.children %}    
                        <li>
                            <a href="{{ grandchild.url | relative_url }}">{{ grandchild.name }}</a>
                        </li>
                        {% endfor %}
                    </ul>
                </li>
                {% endfor %}
            {% endfor %}
        </ul>
    </li>
{% for item in site.data.nav-primary %}
    <li>
        <a href="{{ item.url | relative_url }}">{{ item.text }}</a>
    </li>
{% endfor %}
</ul>