---
layout: api-docs
title:  "API Documentation"
permalink: /api-documentation
in-page-nav: true
---

# {{ page.title }}

Learn how to access AB2D claims data. AB2D is an open source RESTful (Representational State Transfer) API. Offered by the Centers for Medicare & Medicaid Services (CMS), it uses [Bulk Fast Healthcare Interoperability (FHIR)](https://hl7.org/fhir/uv/bulkdata/) resources for data exports of Medicare Parts A and B claims data. Visit [AB2D Data]({% link data.md %}) to explore the types of data available and how to apply them in context.

## What’s the difference between the sandbox and production environments?
{: .font-sans-lg }

| Sandbox | Production |
| --- | --- |
| Available to everyone | Must complete [onboarding]({% link onboarding.md %}) to access |
| Contains synthetic claims data | Contains real Medicare enrollee data |
{: .usa-table .usa-table--borderless }

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

## Versions

We recommend using AB2D V2 which supports the Bulk Data Access Implementation Guide V2.0.0.

- V2 (R4) — `api.ab2d.cms.gov/api/v2/fhir`
- V1 (STU3) — `api.ab2d.cms.gov/api/v1/fhir`

## JSON resources

Both versions of AB2D use the JSON (ndjson) data format for the FHIR ExplanationOfBenefit resource.

- [Intro to JSON Format](http://json.org/)
- [Newline Delimited JSON (ndjson)](http://ndjson.org/)
- [JSON format viewer/validator](https://jsonlint.com/)
