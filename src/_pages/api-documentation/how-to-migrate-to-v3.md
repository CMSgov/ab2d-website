---
layout: api-docs
page_title: "How to Migrate to v3"
seo_title: "How to Migrate to v3"
description: "How to Migrate to v3"
in-page-nav: true
---

# {{ page.page_title }}

## Migration overview

This guide helps you migrate from AB2D v1/v2 to v3. Key changes include:
- New endpoint URL structure
- Unified ExplanationOfBenefit resource for all claims
- Updated extension and code system URLs
- Different resource IDs requiring new matching strategies

Learn how AB2D v3 supports better outcomes in our [introduction to v3]({{ "/introducing-ab2d-v3" | relative_url }}).

## Changes to AB2D in v3

If you are currently using AB2D v1 or v2, changes to the API and FHIR Resources to be aware of include:
- A new `/v3` endpoint
- Using `MBI` instead of `BENE_ID` for beneficiary identification
- Updated extension and code system URLs throughout the `ExplanationOfBenefit` resource
- Different resource IDs between v2 and v3
- A new `_typeFilter` parameter for filtering claims by service date
- Automatic claims deduplication within a data source
- A new Claim Control Number (CCN) field for tracking claims across versions


## Requesting data from new v3 endpoints
### Point your app to v3 instead of v2

AB2D v3 uses the same domain as previous versions, but with a new endpoint path. Migrate to v3 by updating the version from v2 to v3 in your export request URL.

Sample v2 export request:
- `GET /api/v2/fhir/Patient/$export`

Sample v3 export request:
- `GET /api/v3/fhir/Patient/$export`

The `/auth` and file download URLs remain the same between versions. You do not need to change how you request a bearer token or download files. The `_since` and `_until` parameters continue to work in v3 with the same behavior as v2.

## New extension and code system URLs
v3 replaces the legacy URL pattern for extensions and code systems with standard FHIR StructureDefinition and CodeSystem resources. This change better conforms with <a href="https://build.fhir.org/ig/HL7/carin-bb/">CARIN standards for Blue Button version 2.1.0</a>. This is a breaking change that affects 26 fields in the EOB resource.

Sample v2 URL pattern:
- `https://bluebutton.cms.gov/resources/variables/{variable_name}`

Sample v3 URL pattern:
- `https://bluebutton.cms.gov/fhir/StructureDefinition/{element-code}`
- `https://bluebutton.cms.gov/fhir/CodeSystem/{element-code}`

In v3, you can access metadata for each extension and code system by requesting the URL directly. This returns a StructureDefinition or CodeSystem FHIR resource.

### Example: Claim Query Code

Sample v2 extension URL:
- `https://bluebutton.cms.gov/resources/variables/claim_query_cd`

Sample v3 extension URL:
- `https://bluebutton.cms.gov/fhir/StructureDefinition/CLM-QUERY-CD`


## Different resource IDs between versions
In v3, the FHIR ID for ExplanationOfBenefit resources (`ExplanationOfBenefit.id`) and Patient resources (`ExplanationOfBenefit.patient`) will not match the v2 FHIR resource IDs. The range of v2 and v3 IDs does overlap, so it is possible for an ID to exist in both versions without representing the same claim.

## Matching claims across AB2D versions
We do not recommend to match new v3 claims with existing v1/v2 claims. The identifier fields cannot be guaranteed to prevent duplicates when attempting to match across API versions.

{% include feedback-form.html id="71834290" %}
