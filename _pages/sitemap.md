---
layout: default
page_title: "Sitemap"
seo_title: "AB2D Sitemap | Medicare Parts A & B Claims Data API"
permalink: /sitemap
description: "Review a directory for all the pages on the AB2D website."
show-side-nav: false
---

# {{ page.page_title }}

<ul>
    <li><a href="{{ '/index' | relative_url }}">Home</a>
        <ul>
            <li><a href="{{ '/about' | relative_url }}">About</a></li>
            <li><a href="{{ '/use-cases' | relative_url }}">Use Cases</a></li>
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
    <li><a href="{{ '/ab2d-data' | relative_url }}">AB2D Data</a>
        <ul>
            {% for item in site.data.ab2d-data-nav %}
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
