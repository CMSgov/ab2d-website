---
layout: api-docs
page_title: "How to Filter Claims Data"
seo_title: "Filter Claims Data With Parameters v1"
description: "Filter and refine the Medicare claims data you receive from the AB2D API for faster job times and more efficient requests."
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
    You're viewing v1 documentation
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

AB2D v1 offers 1 query parameter to filter or specify the data returned:

* **_since:** returns claims last updated after a specified date

AB2D also supports the _outputFormat parameter, which is covered at the end of this page.

**Note:** Use parameters when you start a job in the sandbox or production environment to speed up download times and reduce file size.

## The _since parameter

The _since parameter allows users to filter claims data returned by date, which reduces duplication and speeds up job times.

* Dates must use the [ISO datetime format](https://en.wikipedia.org/wiki/ISO_8601) (yyyy-mm-dd'T'hh:mm:ss\[+\|-\]hh:mm).
  * **Sample date:** July 1, 2026, 12:00 PM Eastern Daylight Time
  * **Formatted sample:** 2026-07-01T12:00:00.000-04:00
* Note the ISO8601 dates include characters that can’t appear in URLs.
  * Here is an example of invalid, unencoded URL utilizing both _since and _until parameters:
  `https://sandbox.ab2d.cms.gov/api/v3/fhir/Patient/$export?_since=2023-06-15T00:00:00.000-05:00&_until=2024-06-15T00:00:00.000-05:00`
  * Here is an example of valid, percent-encoded URL utilizing both _since and _until parameters:
  `https://sandbox.ab2d.cms.gov/api/v3/fhir/Patient/$export?_since%3D2023-06-15T00%3A00%3A00.000-05%3A00%26_until%3D2024-06-15T00%3A00%3A00.000-05%3A00`
  * Read more about percent-encoding [here](https://en.wikipedia.org/wiki/Percent-encoding).

The _since parameter allows users to pull data that has been last updated since a specified date. The earliest possible date is January 1, 2020 (2020-01-01T00:00:00-05:00) or your organization's attestation date, whichever is later. If no _since date is specified, it will default to your earliest possible date. It is highly recommended and considered best practice to use the _since parameter on v1 API calls.

{:.margin-bottom-4}
### Examples of valid and invalid _since parameter values

{% capture alertHeading %}
  <h4 class="font-sans-md text-bold line-height-sans-2">Valid _since parameter value</h4>
{% endcapture %}
{% include alert.html variant="success" heading=alertHeading classNames="measure-6 margin-bottom-3" %}
<ul class="usa-list usa-list--unstyled" style="margin-bottom: 2rem;">
  <li class="padding-left-2 border-left-1 border-gray-10 padding-top-05">
    <code class="language-plaintext highlighter-rouge">?_since=2020-10-10T16:00:00.000+10:00</code>
    <p>The datetime is after January 1, 2020 and follows the ISO format.</p>
  </li>
</ul>

{% capture alertHeading %}
  <h4 class="font-sans-md text-bold line-height-sans-2">Invalid _since parameter value, but will run</h4>
{% endcapture %}
{% include alert.html variant="warning" heading=alertHeading classNames="measure-6 margin-bottom-3" %}
<ul class="usa-list usa-list--unstyled" style="margin-bottom: 2rem;">
  <li class="padding-left-2 border-left-1 border-gray-10 padding-top-05">
    <code class="language-plaintext highlighter-rouge">?_since=2020-10-10T16:00:00.000+10:00</code>
    <p>The datetime is before January 1, 2020. The job will still run, but the value will be replaced with your earliest possible date.</p>
  </li>
</ul>

{% capture alertHeading %}
  <h4 class="font-sans-md text-bold line-height-sans-2">Invalid _since parameter value</h4>
{% endcapture %}
{% include alert.html variant="error" heading=alertHeading classNames="measure-6 margin-bottom-3" %}
<ul class="usa-list usa-list--unstyled" style="margin-bottom: 2rem;">
  <li class="padding-left-2 border-left-1 border-gray-10 padding-top-05">
    <code class="language-plaintext highlighter-rouge">?_since=2020-10-10T16:00:00.000</code>
    <p>A timezone must be provided with the datetime.</p>
  </li>
</ul>

### Why the _since parameter is important

In this scenario, your organization attests on March 1, 2020. Your organization runs its first job on November 1, 2020 and subsequently decides to pull data once a month. Your organization runs its second job on December 1, 2020.

### Without the _since parameter

1. The first job takes 4 hours to export all data available to you added between March 1, 2020 and November 1, 2020.
2. The second job takes 4 and ½ hours to export all data available to you added between March 1, 2020 and December 1, 2020.

Without the _since parameter, the second job will pull all data from March 1st–December 1, 2020. Most of the data pulled is duplicate data. The only new data pulled is from the past month. Using the _since parameter can prevent this.

### With the _since parameter

With the _since parameter manually set to November 1, 2020 on the second job:

1. The first job takes 4 hours to export all data available to you between March 1, 2020 and November 1, 2020.
2. The second job takes ½ hour to only export claims data available to you between November 1, 2020 and December 1, 2020.

With the _since parameter, the second job will only pull data from November 1–December 1. Only pulling data for the past month will be quicker and easier. Though a smaller number of claims may be pulled, a few may still be duplicates of already pulled claims.

## Incremental export model overview

One recommended way to use AB2D is to periodically export any data that has been updated since your last job. We encourage bi-weekly exports to stay updated on new claims data. By using the _since parameter, you can filter for claims data last updated since your last job export. This way, you can run manual incremental exports.

### Example scenario

1. Start a job (JOB ID: ABC), successfully download the files, and save the datetime the job started. The datetime ABC starts will be the _since parameter value for your next job.
2. Wait until the next bi-weekly update (the recommended frequency to run jobs).
3. Start a job (JOB ID: DEF), manually entering the _since parameter with the datetime ABC started. The datetime DEF starts will be the _since parameter value for your next job.
4. Repeat steps 2 and 3 indefinitely.

In this usage model, an organization only pulls the last 2 weeks of claims data delivered to the AB2D API. Please note there may be duplicates returned even when using the _since parameter. AB2D errs on the side of potentially providing a claim twice rather than potentially never providing a claim.

## The _outputFormat parameter

The _outputFormat parameter allows you to request different formats for your data exports. The default and only format AB2D currently supports is application/fhir+NDJSON. The server must support [Newline Delimited JSON (NDJSON)](https://github.com/ndjson/ndjson-spec), but may choose to support additional output formats. The server must also accept the full content type of application/fhir+NDJSON, as well as the abbreviated representations application/NDJSON and NDJSON.

{% include feedback-form.html id="40b9cc72" %}
