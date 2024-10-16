---
layout: default
title:  "Accordion Test"
permalink: /accordion-test
in-page-nav: false
---

# {{ page.title }}

{% capture a1Content %}{% raw %}
<p>This is a test!</p>
{% endraw %}{% endcapture %}

{% capture a2Content %}{% raw %}
<div>
    <p>This is a second test!</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</div>
{% endraw %}{% endcapture %}

{% include accordion.html id="a1" expanded=true heading="Test" bordered=true accordionContent=a1Content %}

{% include accordion.html id="a2" expanded=false heading="Test with list" accordionContent=a2Content %}