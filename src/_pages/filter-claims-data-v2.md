---
layout: api-docs
page_title: "How to Filter Claims Data – v2"
seo_title: "Filter Claims Data With Parameters v2"
description: "Filter and refine AB2D’s Medicare claims data using HTTP query parameters such as _until, available only with version 2."
permalink: /filter-claims-data-v2
in-page-nav: true
tabs:
  - label: v3
    url: /filter-claims-data-v3.html
  - label: v2
    url: /filter-claims-data-v2.html
  - label: v1
    url: /filter-claims-data-v1.html

---

# {{ page.page_title }}

{% include tabs.html items=page.tabs %}

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

[HTTP query parameters]({{ '/query-parameters-v2' | relative_url }}) can help you efficiently maximize the value of the AB2D API. The default behavior of parameters supports the incremental export model and varies depending on your API version. You can use parameters while starting a job request in the sandbox or production environment.

Learn how to access [sandbox data]({{ '/access-sandbox-data' | relative_url }}) or [production claims data]({{ '/access-production-claims-data' | relative_url }}).

## The _since and _until parameters

The [_since and _until parameters]({{ '/query-parameters-v2' | relative_url }}#the-since-and-until-parameters) filter for claims data last updated since or until a specified date. These can be used while starting a job to speed up download times and reduce duplication. Visit <a href="{{ '/api-documentation' | relative_url }}#expected-workflow">API Documentation</a> to learn more about the expected workflow for the AB2D API.

The following examples use the _since and _until parameters separately and together. Note the ISO8601 dates include characters that can’t appear in URLs. [Learn more about percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding). There are unencoded and percent-encoded examples. Only the encoded versions will work, but the unencoded examples show how the URL is formed before encoding.

### When only the _since parameter is specified

#### Unencoded:

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_since=2023-02-13T00:00:00.000-05:00`

#### Percent-encoded:

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_since%3D2023-02-13T00%3A00%3A00.000-05%3A00`

#### curl command

{% capture curlSnippet %}{% raw %}
curl -i "https://api.ab2d.cms.gov/api/v2/fhir/Patient/\$export?_since%3D2023-02-13T00%3A00%3A00.000-05%3A00" \
-H "Accept: application/json" \
-H "Accept: application/fhir+json" \
-H "Prefer: respond-async" \
-H "Authorization: Bearer ${bearer_token}"
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}

### When only the _until parameter is specified

#### Unencoded

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_until=2024-06-15T00:00:00.000-05:00`

#### Percent-encoded

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_until%3D2024-06-15T00%3A00%3A00.000-05%3A00`

#### curl command

{% capture curlSnippet %}{% raw %}
curl -i "https://api.ab2d.cms.gov/api/v2/fhir/Patient/\$export?_until%3D2024-06-15T00%3A00%3A00.000-05%3A00" \-H "accept: application/json" \
-H "Accept: application/fhir+json" \
-H "Prefer: respond-async" \
-H "Authorization: Bearer ${bearer_token}"
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}

### When both the _since and _until parameters are specified

#### Unencoded

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_since=2023-06-15T00:00:00.000-05:00&_until=2024-06-15T00:00:00.000-05:00`

#### Percent-encoded

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_since%3D2023-06-15T00%3A00%3A00.000-05%3A00%26_until%3D2024-06-15T00%3A00%3A00.000-05%3A00`

#### curl command

{% capture curlSnippet %}{% raw %}
curl -i "https://api.ab2d.cms.gov/api/v2/fhir/Patient/\$export?_since%3D2023-06-15T00%3A00%3A00.000-05%3A00%26_until%3D2024-06-15T00%3A00%3A00.000-05%3A00" \-H "accept: application/json" \
-H "Accept: application/fhir+json" \
-H "Prefer: respond-async" \
-H "Authorization: Bearer ${bearer_token}"
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}

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

{% include feedback-form.html id="85f95067" %}
