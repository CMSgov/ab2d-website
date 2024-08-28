---
layout: default
title:  "API Data"
permalink: /api-data
---

# {{ page.title }}

The AB2D API allows users to handle large volumes of enrollee data, including:

- **Medicare Part A claims data** – inpatient hospital stays, care in skilled nursing facilities, and hospice care
- **Medicare Part B claims data** – various doctors' services, outpatient care, medical supplies, and preventive services

Claims data is automatically updated from the [Beneficiary FHIR Data (BFD) Server](https://github.com/CMSgov/beneficiary-fhir-data) weekly. This provides Prescription Drug Plan sponsors (PDPs) with prompt, valuable information on patients’ health histories to help [boost health outcomes and medication adherence](http://link.to.use.cases.html). Review our [API Documentation]({% link api-documentation.md %}) for information on accessing production data and the claims data format.

## Sample files

Download test data files for examples of AB2D API data.

- [AB2D V2 (recommended) Parts A and Parts B Sample Export (FHIR R4)](https://ab2d.cms.gov/assets/downloads/sample-data-r4.ndjson)
- [AB2D V1 Parts A and Parts B Sample Export (FHIR STU3)](https://ab2d.cms.gov/assets/downloads/sample-data-stu3.ndjson)

## Data Dictionary

Get a detailed breakdown of data elements provided by AB2D.

- [Data Dictionary](https://ab2d.cms.gov/data_dictionary.html)

## Guides

Follow these guides to learn how to use AB2D and enrollee claims data.

- [Claims data details](https://docs.google.com/document/d/1phzaexERBLyIO0b-Z3o2t4jkr8i7WRNapld0bI5J8Qc/edit?usp=sharing)
- [How claims are represented in the AB2D API](https://docs.google.com/document/d/1qhslAMkvw-c9BtP_kUq_-J3x1ruoCg49vESN5KYOhsc/edit?usp=sharing)
