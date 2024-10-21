---
layout: api-docs
title:  "API Documentation"
permalink: /api-documentation
in-page-nav: true
---

# {{ page.title }}

Learn how to access AB2D claims data. AB2D is an open source RESTful (Representational State Transfer) API. Offered by the Centers for Medicare & Medicaid Services (CMS), it uses [Bulk Fast Healthcare Interoperability (FHIR)](https://hl7.org/fhir/uv/bulkdata/) resources for data exports of Medicare Parts A and B claims data. Visit [AB2D Data]({{ '/data' | relative_url }}) to explore the types of data available and how to apply them in context.

## What’s the difference between the sandbox and production environments?
{: .font-sans-lg }

{% capture tableHeadContent %}
<tr>
  <th scope="col">Sandbox</th>
  <th scope="col">Production</th>
</tr>
{% endcapture %}

{% capture tableBodyContent %}
<tr>
  <td>Available to everyone</td>
  <td>Must complete <a href="{{ '/onboarding' | relative_url }}">onboarding</a> to access</td>
</tr>
<tr>
  <td>Contains synthetic claims data</td>
  <td>Contains real Medicare enrollee data</td>
</tr>
{% endcapture %}

{% include table.html borderless=true captionSrOnly=true captionContent="Sandbox and Production environments comparison" headContent=tableHeadContent bodyContent=tableBodyContent %}

<table class="usa-table usa-table--borderless">
  <caption class="usa-sr-only">Sandbox and Production environments comparison</caption>
  <thead>
  <tr>
    <th scope="col">Sandbox</th>
    <th scope="col">Production</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>Available to everyone</td>
      <td>Must complete <a href="{{ '/onboarding' | relative_url }}">onboarding</a> to access</td>
    </tr>
    <tr>
      <td>Contains synthetic claims data</td>
      <td>Contains real Medicare enrollee data</td>
    </tr>
  </tbody>
</table>

## Getting started

Get an overview of the AB2D API, how it works, its endpoints, and troubleshooting tips.

<ul>
  {% for item in site.data.api-docs-nav %}
    {% for child in item.children %}
    <li>
      <a href="{{ child.url | relative_url }}">{{ child.name }}</a>
    </li>
    {% endfor %}
  {% endfor %}
</ul>

## API versions

We recommend using AB2D V2 which supports the [Bulk Data Access Implementation Guide V2.0.0](https://hl7.org/fhir/uv/bulkdata/). [Learn how to migrate from V1 to V2](https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx).

- V2 ([R4](https://hl7.org/fhir/R4/)) — `api.ab2d.cms.gov/api/v2/fhir`
- V1 ([STU3](https://hl7.org/fhir/STU3)) — `api.ab2d.cms.gov/api/v1/fhir`

## JSON resources

Both versions of AB2D use the JSON (NDJSON) data format for the FHIR ExplanationOfBenefit resource.

- [Intro to JSON Format](http://json.org/)
- [Newline Delimited JSON (NDJSON)](https://github.com/ndjson/ndjson-spec)
- [JSON format viewer/validator](https://jsonlint.com/)
