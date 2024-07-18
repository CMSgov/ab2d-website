---
layout: default
title:  "API Data"
active-nav: api-data
---

# {{ page.title }}

The AB2D API’s [Bulk Fast Healthcare Interoperability Resources (FHIR)](https://hl7.org/fhir/uv/bulkdata/) specification allows users to handle large volumes of enrollee data, including:

- Medicare Part A claims data – inpatient hospital stays, care in skilled nursing facilities, and hospice care
- Medicare Part B claims data – various doctors' services, outpatient care, medical supplies, and preventive services

Claims data is automatically updated from the [Beneficiary FHIR Data (BFD)](https://github.com/CMSgov/beneficiary-fhir-data) Server weekly. This provides Prescription Drug Plan sponsors (PDPs) with prompt, valuable information on patients’ health histories to help [boost health outcomes and medication adherence](http://link.to.use.cases.html). Check out the resources below to learn about claims data and how to use AB2D. Review our [API Documentation]({% link api-documentation.md %}) for information on accessing production data and the claims data format.

## Sample files

Download test data files for examples of AB2D API data.

- [AB2D V2 (recommended) Parts A and Parts B Sample Export (FHIR R4)](https://ab2d.cms.gov/assets/downloads/sample-data-r4.ndjson)
- [AB2D V1 Parts A and Parts B Sample Export (FHIR STU3)](https://ab2d.cms.gov/assets/downloads/sample-data-stu3.ndjson)

## Data Dictionary

Get a detailed breakdown of data elements provided by AB2D.

- [Data Dictionary](https://ab2d.cms.gov/data_dictionary.html)

_Editing during technical documentation reorganization_

- [Claims Representation Details](https://github.com/CMSgov/ab2d-pdp-documentation/blob/main/docs/Claims%20Representation%20Details.md)
  - How claims are represented in the AB2D API

_Editing during technical documentation reorganization_

- [Long Term API Usage Model](https://github.com/CMSgov/ab2d-pdp-documentation/blob/main/docs/Long%20Term%20API%20Usage%20Model.md)
  - Using the AB2D API beyond your first job
