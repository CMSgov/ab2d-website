---
layout: api-docs
page_title: "How to Filter Claims Data"
seo_title: "Filter Claims Data With Parameters v2"
description: "Filter and refine AB2D’s Medicare claims data using HTTP query parameters such as _until, available only with version 2."
in-page-nav: true
tabs:
  - label: v3
    url: /ab2d-data/filter-claims-data
  - label: v2
    url: /v2/ab2d-data/filter-claims-data
  - label: v1
    url: /v1/ab2d-data/filter-claims-data

---

# {{ page.page_title }}

{% include tabs.html items=page.tabs %}

{% capture versionAlertHeading %}
  <p class="usa-alert__heading text-bold">
    You're viewing v2 documentation
  </p>
{% endcapture %}
{% capture versionAlert %}
<p class="margin-bottom-0">Access to v1 and v2 will be removed on July 30, 2027. Read the <a
    class="usa-link"
    href="{{ '/introducing-ab2d-v3' | relative_url }}"
  >full announcement on AB2D v3</a> and learn <a
    class="usa-link"
    href="{{ '/api-documentation/how-to-migrate-to-v3' | relative_url }}"
  >how to migrate</a>.
</p>
{% endcapture %}
{% include alert.html variant="warning" text=versionAlert heading=versionAlertHeading classNames="measure-6" %}

You can use HTTP query parameters to filter claims data returned during an API job request. To learn how to access data, see [How to Access Sandbox Data]({{ '/api-documentation/access-sandbox-data' | relative_url }}) and [How to Access Production Claims Data]({{ '/api-documentation/access-production-claims-data' | relative_url }}).

AB2D v2 offers 2 query parameters to filter or specify the data returned:

* **_since:** returns claims last updated after a specified date
* **_until:** returns claims last updated before a specified date

AB2D also supports the _outputFormat parameter, which is covered at the end of this page.

**Note:** Use parameters when you start a job in the sandbox or production environment to speed up download times and reduce file size.

## The _since and _until parameters

The _since and _until parameters filter claims data by the date it was last updated.

* You can use the parameters separately or together.
* Dates must use the [ISO datetime format](https://en.wikipedia.org/wiki/ISO_8601) (yyyy-mm-dd'T'hh:mm:ss\[+\|-\]hh:mm).
  * **Sample date:** July 1, 2026, 12:00 PM Eastern Daylight Time
  * **Formatted sample:** 2026-07-01T12:00:00.000-04:00
* Note the ISO8601 dates include characters that can’t appear in URLs.
  * Here is an example of invalid, unencoded URL utilizing both _since and _until parameters:
  `https://sandbox.ab2d.cms.gov/api/v3/fhir/Patient/$export?_since=2023-06-15T00:00:00.000-05:00&_until=2024-06-15T00:00:00.000-05:00`
  * Here is an example of valid, percent-encoded URL utilizing both _since and _until parameters:
  `https://sandbox.ab2d.cms.gov/api/v3/fhir/Patient/$export?_since%3D2023-06-15T00%3A00%3A00.000-05%3A00%26_until%3D2024-06-15T00%3A00%3A00.000-05%3A00`
  * Read more about percent-encoding [here](https://en.wikipedia.org/wiki/Percent-encoding).

### Date limitations for the _since parameter

The earliest possible date you can retrieve data for is either April 1, 2026 (2026-04-01T00:00:00-05:00) or your organization’s attestation date, whichever is later. If no _since date is specified, your export defaults to the datetime of your organization’s last successful export. If this is your first job, results will default to your earliest possible date.

### Date limitations for the _until parameter

The latest possible date you can retrieve data for is the current date. If no _until date is specified, it will default to the current date. You will receive an error if the _until date you entered is in the future.

### Date limitations when using the _since and _until parameters together

Use the _since and _until parameters together to specify a date range (i.e., to export data since \[a date\] until \[a date\]). If you accidentally enter a _since date that falls after the _until date the job will fail.

Default behaviors with the _since and _until parameters together

<div class="overflow-x-auto" tabindex="0">
    <table class="usa-table usa-table--stacked usa-table--borderless width-full">
    <thead>
        <tr>
        <th style="white-space: nowrap;">_since</th>
        <th style="white-space: nowrap;">_until</th>
        <th style="white-space: nowrap;">Resulting date range</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>Not set</td>
        <td>Not set</td>
        <td>From last successful export date to current date</td>
        </tr>
        <tr>
        <td>2026-04-01</td>
        <td>Not set</td>
        <td>From April 1, 2026 to current date</td>
        </tr>
        <tr>
        <td>Not set</td>
        <td>2026-09-01</td>
        <td>From last successful export to September 1, 2026</td>
        </tr>
        <tr>
        <td>2026-04-01</td>
        <td>2026-09-01</td>
        <td>From April 1, 2026 to September 1, 2026</td>
        </tr>
    </tbody>
    </table>
</div>

### Examples of valid and invalid values

#### Valid values

* `?_since%3D2026-04-10T03%3A00%3A00-04%3A00%26_until%3D2026-08-10T06%3A00%3A00-04%3A00`
<br>
**Why this works:** The _until datetime is after the _since datetime. Both datetimes follow the ISO format and include time zones.

#### Invalid values, but the job still runs

* `?_since%3D2026-02-01T00%3A00%3A00-05%3A00%26_until%3D2026-08-01T00%3A00%3A00-04%3A00`
<br>
**Why this works:** The _since datetime is before the earliest possible date. The job runs, and the value is replaced with the default.

* `?_since%3D2026-04-10T16%3A00%3A00%2B00%3A00%26_until%3D3000-10-10T16%3A00%3A00%2B00%3A00`
<br>
**Why this works:** The _until datetime is in the future. The job runs, and the value is replaced with the current date.

#### Invalid values, the job fails or returns no data

* `?_since%3D2026-04-10T00%3A00%3A00%26_until%3D2026-04-20T00%3A00%3A00`
<br>
**Why this doesn't work:** The datetimes have no time zone.

* `?_since%3D2026-08-10T09%3A00%3A00-04%3A00%26_until%3D2026-04-10T07%3A00%3A00-04%3A00`
<br>
**Why this doesn't work:** The _until datetime is before the _since datetime.

### Example requests

#### Using the _since parameter only

`GET /api/v3/fhir/Patient/$export?_since=2026-07-01T00%3A00%3A00.000-04%3A00`

{% capture curlSnippet %}{% raw %}
curl -i "https://sandbox.ab2d.cms.gov/api/v3/fhir/Patient/\$export?_since=2026-07-01T00%3A00%3A00.000-04%3A00" \
    -H "Accept: application/fhir+json" \
    -H "Prefer: respond-async" \
    -H "Authorization: Bearer ${bearer_token}"
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}

#### Using the _until parameter only

`GET /api/v3/fhir/Patient/$export?_until=2026-09-01T00%3A00%3A00.000-04%3A00`

{% capture curlSnippet %}{% raw %}
curl -i "https://sandbox.ab2d.cms.gov/api/v3/fhir/Patient/\$export?_until=2026-09-01T00%3A00%3A00.000-04%3A00" \
    -H "Accept: application/fhir+json" \
    -H "Prefer: respond-async" \
    -H "Authorization: Bearer ${bearer_token}"
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}

#### Using both the _since and _until parameters

`GET /api/v3/fhir/Patient/$export?_since=2026-04-01T00%3A00%3A00.000-04%3A00&_until=2026-09-01T00%3A00%3A00.000-04%3A00`

{% capture curlSnippet %}{% raw %}
curl -i "https://sandbox.ab2d.cms.gov/api/v3/fhir/Patient/\$export?_since=2026-04-01T00%3A00%3A00.000-04%3A00&_until=2026-09-01T00%3A00%3A00.000-04%3A00" \
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
