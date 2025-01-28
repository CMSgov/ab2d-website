---
layout: api-docs
page_title: "How to Filter Claims Data – V2"
seo_title: "Filter Claims Data With Parameters V2 | AB2D Medicare API"
description: "Filter and refine AB2D’s Medicare claims data using HTTP query parameters such as _until, available only with version 2."
permalink: /filter-claims-data-v2
in-page-nav: true
---

# {{ page.page_title }}

[HTTP query parameters]({{ '/query-parameters-V2' | relative_url }}) can help you efficiently maximize the value of the AB2D API. The default behavior of parameters supports the incremental export model and varies depending on your API version. You can use parameters while starting a job request in the sandbox or production environment. 

Learn how to access [sandbox data]({{ '/access-sandbox-data' | relative_url }}) or [production claims data]({{ '/access-production-claims-data' | relative_url }}).

{% capture versionAlertHeading %}
  <p class="usa-alert__heading text-bold">
    AB2D recommends using V2 of the API
  </p>
{% endcapture %}
{% capture versionAlert %}
    <p>
        This documentation is for AB2D version 2, which implements the <a href="https://hl7.org/fhir/uv/bulkdata/">Bulk Data Access Implementation Guide V2.0.0</a>. The _until parameter is only available with V2. 
    </p>
    <p>    
        For organizations using V1, visit our <a href="{{ '/filter-claims-data-v1' | relative_url }}">V1 documentation</a> to learn about parameters. <a href="https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx">Learn more about migrating from V1 to V2</a>.
    </p>
{% endcapture %}
{% include alert.html variant="info" text=versionAlert heading=versionAlertHeading classNames="measure-6" %}

## The _since and _until parameters

The [_since and _until parameters]({{ '/query-parameters-V2' | relative_url }}#the-since-and-until-parameters) filter for claims data last updated since or until a specified date. These can be used while starting a job to speed up download times and reduce duplication. Visit the <a href="{{ '/troubleshooting-guide' | relative_url }}">Troubleshooting Guide</a> to learn more about the export workflow for the AB2D API. 

The following examples use the _since and _until parameters separately and together. Note the ISO8601 dates include characters that can’t appear in URLs. [Learn more about percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding). There are unencoded and percent-encoded examples. Only the encoded versions will work, but the unencoded examples show how the URL is formed before encoding.

### When only the _since parameter is specified

#### Unencoded: 

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_since=2023-02-13T00:00:00.000-05:00`

#### Precent-encoded: 

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_since%3D2023-02-13T00%3A00%3A00.000-05%3A00`

#### curl command

{% capture curlSnippet %}{% raw %}
curl "https://api.ab2d.cms.gov/api/v2/fhir/Patient/\$export?_since%3D2023-02-13T00%3A00%3A00.000-05%3A00" \
-H "Accept: application/json" \
-H "Accept: application/fhir+json" \
-H "Prefer: respond-async" \
-H "Authorization: Bearer ${bearer_token}
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}

### When only the _until parameter is specified

#### Unencoded

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_until=2024-06-15T00:00:00.000-05:00`

#### Precent-encoded

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_until%3D2024-06-15T00%3A00%3A00.000-05%3A00`

#### curl command

{% capture curlSnippet %}{% raw %}
curl "https://api.ab2d.cms.gov/api/v2/fhir/Patient/\$export?_until%3D2024-06-15T00%3A00%3A00.000-05%3A00" \-H "accept: application/json" \
-H "Accept: application/fhir+json" \
-H "Prefer: respond-async" \
-H "Authorization: Bearer ${bearer_token}
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}

### When both the _since and _until parameters are specified

#### Unencoded

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_since=2023-06-15T00:00:00.000-05:00&_until=2024-06-15T00:00:00.000-05:00`

#### Precent-encoded

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_since%3D2023-06-15T00%3A00%3A00.000-05%3A00%26_until%3D2024-06-15T00%3A00%3A00.000-05%3A00`

#### curl command

{% capture curlSnippet %}{% raw %}
curl "https://api.ab2d.cms.gov/api/v2/fhir/Patient/\$export?_since%3D2023-06-15T00%3A00%3A00.000-05%3A00%26_until%3D2024-06-15T00%3A00%3A00.000-05%3A00" \-H "accept: application/json" \
-H "Accept: application/fhir+json" \
-H "Prefer: respond-async" \
-H "Authorization: Bearer ${bearer_token}
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}

## Incremental export model
One recommended way to use AB2D is to periodically export any data that has been updated since your last job. The AB2D team encourages bi-weekly exports to stay updated on new claims.

Incremental exports occur by default when you start a job, even without using parameters, so no further action is required. This is because _since defaults to the datetime of your last successful export, and _until defaults to the current datetime. 

### Example scenario

This is a scenario demonstrating how the default capability works for _since and _until:

1. You start your first job (JOB ID: ABC). 
2. Once the job is complete, you download the files.
3. You wait until the next bi-weekly update (the recommended frequency to run jobs).
4. You start a new job (JOB ID: DEF). 
5. You forget to download the files until after they’ve expired (72 hours).
6. You start another job (JOB ID: GHI). The _since value will default to when you started job ABC, not job DEF. This is because no files were downloaded with job DEF, so it wasn’t completed successfully.
7. Once the job is complete, download the files.
8. Repeat these steps.

In this usage model, AB2D automatically populates the _since value with the datetime of your last successfully completed export. For Job GHI, this is the date job ABC was created. Job DEF isn’t considered a successfully completed export since its files weren’t downloaded.
