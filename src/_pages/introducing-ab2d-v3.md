---
layout: api-docs
page_title: "Introducing AB2D v3"
seo_title: "Introducing AB2D v3"
description: "An introduction of AB2D v3 and its benefits"
permalink: /introducing-ab2d-v3
in-page-nav: true
---

# {{ page.page_title }}

{% capture versionAlertHeading %}
  <p class="usa-alert__heading text-bold">
    AB2D v3 is now available
  </p>
{% endcapture %}
{% capture versionAlert %}
    <p>
        Version 3 became available November 3, 2026. Access to v1 and v2 will be removed on July 30, 2027.
    </p>
    <p>
        Read the <a href="">full announcement on AB2D v3</a>, or <a href="">learn how to migrate to v3</a>.
    </p>
{% endcapture %}
{% include alert.html variant="info" text=versionAlert heading=versionAlertHeading classNames="measure-6" %}

AB2D v3 delivers faster, more reliable access to Medicare Parts A and B claims data for Part D plan sponsors. Platform-level improvements include timelier data, better support for Part D programs, and improved standardization.

## Better support your Part D programs
<ul>
  <li>
    Get fresher, more complete claims data for Medication Therapy Management (MTM), Star Ratings measures, and fraud, waste, and abuse prevention.
  </li>
  <li>
    Use improved provider and prescriber data to help care teams catch drug interactions and lower beneficiary out-of-pocket costs.
  </li>
</ul>

## Standardize your FHIR-based data systems
<ul>
  <li>
    Map and aggregate data more easily with improved FHIR conformance.
  </li>
  <li>
    Process less duplicate data with automatic claims deduplication.
  </li>
</ul>

## AB2D v3 improvements

### More updates per week
Patient and enrollment data refreshes 6 times per week, up from once per week. Parts A and B claims refresh weekly on Mondays.

### Fewer missing and duplicate records
v3 largely removes the delay in new enrollees appearing in AB2D. A patient merge feature points all MBIs for a patient to a single active record.

### Easier claims tracking
v3 returns only the most recent version of each claim. A new Claim Control Number (CCN) field lets you track claims across versions of a claim.The CCN replaces Group Claim ID in earlier API versions.

### Targeted exports
The new _typeFilter parameter lets you download only the data you need by filtering by service date.

### Improved FHIR extensions and code systems
v3 uses standard FHIR StructureDefinition and CodeSystem resources for extensions and code systems.

## What stays the same?
The workflow is the same:
<ol>
  <li>
    Authenticate
  </li>
  <li>
    Start a job
  </li>
  <li>
    Check status
  </li>
  <li>
    Download files
  </li>
</ol>
AB2D v3 still returns ExplanationOfBenefit resources in NDJSON format, and 173 of 252 fields are unchanged.

## What this means for your organization
<ul>
  <li>
    <strong>Reduced development time:</strong> Most fields carry over, with the Data Dictionary mapping every change  </li>
  <li>
    <strong>Improved data quality:</strong> A single source removes duplicate patients and claim versions
  </li>
  <li>
    <strong>Faster access to claims data:</strong> Faster, more frequent updates mean more accurate insights
  </li>
</ul>

## Ready to get started?
<ul>
  <li>
    Review the <a href="">v3 Migration Guide</a> for step-by-step instructions
  </li>
  <li>
    Download the <a href="">AB2D v3 Data Dictionary</a>
  </li>
</ul>
Questions? Contact the AB2D team at AB2D@cms.hhs.gov.


{% include feedback-form.html id="0df4c778" %}
