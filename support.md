---
layout: default
title:  "Support"
active-nav: support
---

# We're here to help

Our Google Group is the best way to ask questions, give feedback, and get the latest news on the AB2D API.

<a href="https://groups.google.com/u/1/g/cms-ab2d-api" class="usa-button">JOIN GOOGLE GROUP</a>

## Frequently asked questions

### Do you have documentation to help me use the API once I've received my credentials?

Our AB2D document repository on GitHub covers topics like:

#### Accessing the production environment
- Preparing to pull data from production
- Verifying connection to the API

#### Support
- Processing Explanations of Benefits (EOBs)
- Production errors

#### Understanding the data
- Non-standard fields
- Updated or canceled claims
- Uniquely identifying a claim
- How patients are identified in claims data

### Why is CMS making claims data available to Prescription Drug Plan sponsors (PDPs)?

The [Bipartisan Budget Act of 2018 (BBA)](https://www.congress.gov/bill/115th-congress/house-bill/1892/text) and subsequent CMS [final rule](https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745) require CMS to share fee-for-services claims data with PDPs. Extracts contain a subset of Medicare Parts A and B claims data. These must be shared in an electronic format through standardized extracts.

### How do I request access to the API?

There are 4 steps organizations need to complete to get [access to AB2D](https://ab2d.cms.gov/accessing-claims-data.html) data:

1. Authorize your organization to use the API and agree to comply with proper data use (attestation) as outlined in the BBA and CMS final rule.
1. Assign a technical point of contact.
1. Complete onboarding prerequisites.
1. Access production data.

### What is claims data attestation?

Attestation is the first step in onboarding to AB2D API. In this step, a CEO, CFO, or COO acknowledges they understand and agree to comply with the acceptable uses and limitations of the AB2D claims data. The Attestor completes this step within the [Health Plan Management System (HPMS)](https://www.cms.gov/Research-Statistics-Data-and-Systems/Computer-Data-and-Systems/HPMS/Overview).

### Who within my organization can attest?

Attestation must be performed by the CEO, CFO, or COO of a Medicare PDP organization. These individuals are called "Attestors." PDPs are allowed and actually encouraged to have more than one Attestor.

### What happens if an Attestor leaves my organization?

PDPs must have an active Attestor at all times to access claims data. Your organization will not receive data during periods without an active Attestor. If your organization only has one Attestor, and they leave without a replacement, then your organization will lose access to the API until another active CEO, CFO, or COO attests.

Re-attestation will restore access to the API, including historical claims data that was not accessible during the lapse in active attestation. It’s strongly encouraged to add multiple Attestors to reduce the risk of gaps in data access.

### What use of the data is acceptable?

The [final rule](https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745) specifies that data may used for:

- Optimizing therapeutic outcomes through improved medication use
- Improving care coordination
- Other purposes [that qualify] as “fraud and abuse detection or compliance activities”

The following uses are not permitted:

> "(i) To inform coverage determinations under Part D;
>
> (ii) To conduct retroactive reviews of medically accepted indication(s) determinations;
>
> (iii) To facilitate enrollment changes to a different prescription drug plan or an MA-PD plan offered by the same parent organization; or
>
> (iv) To inform marketing of benefits."

### What is the data extract format?

The AB2D API uses the [Bulk Fast Healthcare Interoperability Resources (FHIR)](http://build.fhir.org/ig/HL7/VhDir/bulk-data.html) specification in the [New Line Delimited JSON](http://ndjson.org/) format. An NDJSON file provides a single record on each line. This makes it easy for various tools to look at and process one record at a time.

### What data elements can organizations access through the API?

Medicare Parts A and B data elements (fields) in the standardized extract include:

- an enrollee identifier
- diagnosis and procedure codes (e.g., ICD-10 diagnosis and Healthcare Common)

Healthcare Common Procedure Coding System (HCPCS) codes:

- dates of service
- place of service
- national Provider Identifier Standard (NPI) numbers for providers
- claim processing and linking identifiers/codes (e.g., claim ID and claim type code)

### Can PDPs request historical data?

PDPs will only have access to data starting on their attestation date onwards. Claims data previous to that date will not be available. It’s best for PDPs to attest as soon as possible, regardless of their implementation timeline, in order to get access to earlier claims data.

### How can we get additional data elements beyond what’s listed in the final rule?

CMS evaluates the data elements provided to PDPs based on how well they support the acceptable uses. Any proposed changes would be established through rule-making. If you have any feedback, please let our team know in the [Google Group](https://groups.google.com/u/1/g/cms-ab2d-api).

### What are the data sources and how often is the data updated?

The AB2D API uses the Beneficiary FHIR Data (BFD) server. BFD receives data from the Chronic Condition Warehouse (CCW). The majority of the BFD data is refreshed weekly, with a few data elements being loaded monthly.
