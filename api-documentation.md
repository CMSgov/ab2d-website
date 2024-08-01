---
layout: default
title:  "API Documentation"
active-nav: api-documentation
---

# {{ page.title }}

The AB2D API is a RESTful (representational state transfer) API using Bulk Fast Healthcare Interoperability (FHIR) resources for data exports of Medicare Parts A and B claims data. Visit [API Data]({% link api-data.md %}) to explore the types of data available and how to apply them in context.


## What’s the difference between the sandbox and production environments?

Available to everyone, the sandbox environment lets you retrieve synthetic claims data. The production environment provides access to real Medicare enrollee data. You’ll need to [complete onboarding]({% link onboarding.md %}) to get access to the production environment. There are two versions of the API: V1 ([FHIR STU3](https://api.ab2d.cms.gov/api/v1/fhir)) and v2 ([FHIR R4](https://api.ab2d.cms.gov/api/v2/fhir)). While there are minor differences in how these versions process [parameters](http://link.to.parameters.docsubpage), it is recommended to use V2.

## Getting started

Get an overview of the AB2D API, its endpoints, tutorials, and troubleshooting tips.

- [AB2D user guide](https://docs.google.com/document/d/118joSvh7lsresXSR8Bs2f2CIvDglbfyGBkgwef3RGzM/edit?usp=sharing)
- [How to get a bearer token](https://docs.google.com/document/d/1tYsg4ajj093fOtadzkfcm-FXPsBv8UeNqYL3MjwmJLI/edit?usp=sharing)
- [How to access test claims data](https://docs.google.com/document/d/19gV19BHBqGVezAcpNAm90DlVYlXKZSoW3Tvg4N9Bkq8/edit?usp=sharing)
- [How to access production claims data](https://docs.google.com/document/d/1aerA_DVxZd3sYY0Em5MlcewNtRrhULhU1YBwbz9WcG4/edit?usp=sharing)

## JSON resources

Both versions of AB2D use the JSON (ndjson) data format for the FHIR ExplanationOfBenefit resource.

- [Intro to JSON Format](http://json.org/)
- [Newline Delimited JSON (ndjson)](http://ndjson.org/)
- [JSON format viewer/validator](https://jsonlint.com/)

## Parameters

Parameters can be used when running job requests to filter or specify the claims data returned.

- [AB2D Parameters](https://docs.google.com/document/d/1TeFmFgHBEkgfPg6KeTR3jkfpWWQkfcHVduPZlxmQsQc/edit?usp=sharing)
