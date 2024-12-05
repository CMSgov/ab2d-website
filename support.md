---
layout: default
title:  "Support"
permalink: /support
---

# Support

<div class="grid-row grid-gap-4 desktop:grid-gap-6 padding-y-4 flex-align-center">
  <div class="tablet:grid-col tablet:order-2">
    <img src="{{ '/assets/img/experts.svg' | relative_url }}" alt="customer support illustration" />
  </div>
  <div class="tablet:grid-col tablet:order-1">
    <h2>Contact Us</h2>
    <p>Email <a href="mailto:ab2d@cms.hhs.gov">ab2d@cms.hhs.gov</a> to troubleshoot or ask questions. </p>
    <p>Join our <a href="https://groups.google.com/u/0/g/cms-ab2d-api">Google Group</a> to give feedback and get notified about planned outages or API updates.</p>
  </div>
</div>

## Frequently asked questions

<div class="padding-top-4"></div>

{% capture a1AccordionContent %}
<p>
Only active, stand-alone Medicare Prescription Drug Plan (PDP) sponsors are eligible to use the AB2D API. This excludes PACE and MAPD. PDP sponsors, also known as Part D sponsors, are private insurers that provide prescription drug benefits to Medicare enrollees. 
</p>
{% endcapture %}

{% capture a2AccordionContent %}
<p>
    Medicare Parts A and B data elements (fields) in the standardized extract include:
</p>
<ul>
    <li>an enrollee identifier</li>
    <li>diagnosis and procedure codes (e.g., ICD-10 diagnosis and Healthcare Common)</li>
</ul>
<p>
    Healthcare Common Procedure Coding System (HCPCS) codes:
</p>
<ul>
    <li>dates of service</li>
    <li>places of service</li>
    <li>National Provider Identifier Standard (NPI) numbers for providers</li>
    <li>claim processing and linking identifiers/codes (e.g., claim ID and claim type code)</li>
</ul>
{% endcapture %}

{% capture a3AccordionContent %}
  <p>
    AB2D receives data upstream from the  <a href="https://www2.ccwdata.org/web/guest/home/">Chronic Conditions Warehouse (CCW)</a>.
  </p>
{% endcapture %}

{% capture a4AccordionContent %}
<p>
    The <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745">final rule</a> specifies that data may used for:
</p>
<ul>
  <li>Optimizing therapeutic outcomes through improved medication use</li>
  <li>Improving care coordination</li>
  <li>Other purposes [that qualify] as “fraud and abuse detection or compliance activities”</li>
</ul>
<p>
    The following uses are <strong>not</strong> permitted:
</p>
<ol>
    <li>Inform coverage determinations under Part D;</li>
    <li>Conduct retroactive reviews of medically accepted indication(s) determinations;</li>
    <li>Facilitate enrollment changes to a different prescription drug plan or an MA-PD plan offered by the same parent organization; or</li>
    <li>Inform marketing of benefits.</li>
</ol>
<p>
<a href="{{ '/about' | relative_url }}">Learn more about permitted uses of the data.</a>
</p>
{% endcapture %}

{% capture a5HeadingContent %}
How can we get additional data elements beyond what’s listed in the <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745">final rule</a>?
{% endcapture %}

{% capture a5AccordionContent %}
<p>
    AB2D evaluates the data elements provided to PDP sponsors based on how well they support the permitted uses. Any proposed changes would be established through rulemaking. If you have any feedback, please email <a href="mailto:ab2d@cms.hhs.gov">ab2d@cms.hhs.gov</a>.
</p>
{% endcapture %}

{% capture a6AccordionContent %}
<p>
    PDP sponsors must have an active Attestor at all times to access claims data. Your organization will not receive data during periods without an active Attestor. If your organization only has 1 Attestor, and they leave without a replacement, then your organization will lose access to the API until another active CEO, CFO, or COO attests.
</p>
<p>
    Re-attestation will restore access to the API, including historical claims data that was not accessible during the lapse in active attestation. It’s strongly encouraged to add multiple Attestors to reduce the risk of gaps in data access.
</p>
{% endcapture %}

{% include accordion.html id="a1" heading="Who's eligible to request Medicare enrollee claims data?" expanded=true bordered=false accordionContent=a1AccordionContent %}

{% include accordion.html id="a2" heading="What data elements can organizations access through the API?" expanded=false bordered=false accordionContent=a2AccordionContent %}

{% include accordion.html id="a3" heading="What is the data source?" expanded=false bordered=false accordionContent=a3AccordionContent %}

{% include accordion.html id="a4" heading="What use of the data is permitted?" expanded=false bordered=false accordionContent=a4AccordionContent %}

{% include accordion.html id="a5" heading=a5HeadingContent expanded=false bordered=false accordionContent=a5AccordionContent %}

{% include accordion.html id="a6" heading="What happens if an Attestor leaves my organization" expanded=false bordered=false accordionContent=a6AccordionContent %}
