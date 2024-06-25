---
layout: default
title:  "API Documentation"
active-nav: api-documentation
---

# {{ page.title }}

The AB2D API is a RESTful (representational state transfer) API using [Bulk Fast Healthcare Interoperability (FHIR)](https://hl7.org/fhir/uv/bulkdata/) resources for data exports. It allows Prescription Drug Plan sponsors (PDPs) to asynchronously access and bulk search Medicare Parts A and B claims data. Check out the tutorials and references below to learn how to start using AB2D. Visit [API Data]({% link api-data.md %}) to explore the types of data available and how to apply them in context.

## What’s the difference between the sandbox and production environments?
Available to everyone, the sandbox environment lets you retrieve synthetic claims data. The production environment provides access to real Medicare enrollee data. You’ll need to [complete onboarding]({% link onboarding.md %}) to get access to the production environment. There are two versions of the API: v1 ([FHIR STU3](https://api.ab2d.cms.gov/api/v1/fhir)) and v2 ([FHIR R4](https://api.ab2d.cms.gov/api/v2/fhir)). While there are minor differences in how these versions process [parameters](http://link.to.parameters.docsubpage), it is recommended to use v2.

## JSON resources

Both versions of AB2D use the JSON (ndjson) data format for the FHIR ExplanationOfBenefit resource.
- Intro to JSON Format
- Newline Delimited JSON (ndjson)
- JSON format viewer/validator

_Editing during technical documentation reorganization_

- [Accessing Production](https://github.com/CMSgov/ab2d-pdp-documentation/blob/main/docs/Production%20Access.md)
  - Accessing the AB2D API for the first time

_Editing during technical documentation reorganization_

Content is [swagger instructions(https://ab2d.cms.gov/tutorial-postman-swagger.html)] (link on the right).

_Editing during technical documentation reorganization_

Content is [updated curl instructions](https://docs.google.com/document/d/11ujIc9tV9vN7ulqavekkL16AFOPNowT2rS5UipCyw3Y/edit) (link on the right).

_Editing during technical documentation reorganization_

Content is [advanced user guide](https://ab2d.cms.gov/advanced-user-guide.html) (link on the right).
