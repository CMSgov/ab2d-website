---
layout: api-docs
page_title: "How to Filter Claims Data – V1"
seo_title: ""
description: "Filter and refine the Medicare claims data you receive from the AB2D API for faster job times and more efficient requests."
permalink: /filter-claims-data-v1
in-page-nav: true
---

# {{ page.page_title }}

[HTTP query parameters]({{ '/query-parameters-v2' | relative_url }}) can help you efficiently maximize the value of the AB2D API. The default behavior of parameters supports the incremental export model and varies depending on your API version. You can use parameters while starting a job request in the sandbox or production environment.

Learn how to access [sandbox data]({{ '/access-sandbox-data' | relative_url }}) or [production claims data]({{ '/access-production-claims-data' | relative_url }}).

{% capture versionAlertHeading %}
  <p class="usa-alert__heading text-bold">
    AB2D recommends using V2 of the API
  </p>
{% endcapture %}
{% capture versionAlert %}
    <p>
        This documentation is for AB2D version 1, which implements the <a href="https://hl7.org/fhir/uv/bulkdata/STU1.0.1/">Bulk Data Access Implementation Guide V1.0.1</a>. The _until parameter is only available with V2. 
    </p>
    <p>    
        For organizations using V1, visit our <a href="{{ '/filter-claims-data-v2' | relative_url }}">V2 documentation</a> to learn about parameters. <a href="https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx">Learn more about migrating from V1 to V2</a>.
    </p>
{% endcapture %}
{% include alert.html variant="info" text=versionAlert heading=versionAlertHeading classNames="measure-6" %}

## The \_since parameter

<p> The _since parameter allows users to filter claims data returned by date, which reduces duplication and speeds up job times. It follows the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO datetime format</a> (yyyy-MM-dd'T'hh:mm:ss[+|-]hh:mm). The time zone must be specified using + or - followed by hh:mm.</p>

The \_since parameter allows users to pull data that has been last updated since a specified date. The earliest possible date is February 13, 2020 (2020-02-13T00:00:00-05:00) or your organization's attestation date, whichever is later. If no \_since date is specified, it will default to your earliest possible date. It is highly recommended and considered best practice to use the \_since parameter on V1 API calls.

The \_until parameter filters for claims data last updated after a specified date. This parameter is only available with V2 [(FHIR R4)](https://api.ab2d.cms.gov/api/v2/fhir), the current and recommended version of the API.

### Valid and invalid \_since parameter values

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">_since</th>
            <th scope="col">Is it valid?</th>
            <th scope="col">Why?</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="_since">2020-02-01T00:00:00.000+00:00</td>
            <td data-label="Is it valid?">No</td>
            <td data-label="Why?">The datetime is before February 13, 2020. The job will still run, but the value will be replaced with your earliest possible date.</td>
        </tr>
        <tr>
            <td data-label="_since">2020-10-10T00:00:00.000</td>
            <td data-label="Is it valid?">No</td>
            <td data-label="Why?">A timezone must be provided with the datetime.</td>
        </tr>
        <tr>
            <td data-label="_since">2020-10-10T16:00:00.000+10:00</td>
            <td data-label="Is it valid?">Yes</td>
            <td data-label="Why?">The datetime is after February 13, 2020 and follows the ISO format.</td>
        </tr>
        <tr>
            <td data-label="_since">2020-10-10T16:00:00.000-10:00</td>
            <td data-label="Is it valid?">Yes</td>
            <td data-label="Why?">The datetime is after February 13, 2020 and follows the ISO format.</td>
        </tr>
    </tbody>
</table>

### Why the \_since parameter is important

In this scenario, your organization attests on March 1, 2020. Your organization runs its first job on November 1, 2020 and subsequently decides to pull data once a month. Your organization runs its second job on December 1, 2020.

### Without the \_since parameter

1. The first job takes 4 hours to export all data available to you added between March 1, 2020 and November 1, 2020.
2. The second job takes 4 and ½ hours to export all data available to you added between March 1, 2020 and December 1, 2020.

Without the \_since parameter, the second job will pull all data from March 1st–December 1, 2020. Most of the data pulled is duplicate data. The only new data pulled is from the past month. Using the \_since parameter prevents this.

### With the \_since parameter

With the \_since parameter manually set to November 1, 2020 on the second job:

1. The first job takes 4 hours to export all data available to you between March 1, 2020 and November 1, 2020.
2. The second job takes ½ hour to only export claims data available to you between November 1, 2020 and December 1, 2020.

With the \_since parameter, the second job will only pull data from November 1–December 1. Only pulling data for the past month will be quicker and easier. Though a smaller number of claims may be pulled, a few may still be duplicates of already pulled claims.

## Incremental export model overview

One recommended way to use AB2D is to periodically export any data that has been updated since your last job. We encourage bi-weekly exports to stay updated on new claims data. By using the \_since parameter, you can filter for claims data last updated since your last job export. This way, you can run manual incremental exports.

### Example scenario

1. Start a job (JOB ID: ABC), successfully download the files, and save the datetime the job started. The datetime ABC starts will be the \_since parameter value for your next job.
2. Wait until the next bi-weekly update (the recommended frequency to run jobs).
3. Start a job (JOB ID: DEF), manually entering the \_since parameter with the datetime ABC started. The datetime DEF starts will be the \_since parameter value for your next job.
4. Repeat steps 2 and 3 indefinitely.

In this usage model, an organization only pulls the last 2 weeks of claims data delivered to the AB2D API. Please note there may be duplicates returned even when using the \_since parameter. AB2D errs on the side of potentially providing a claim twice rather than potentially never providing a claim.

### Example export workflow for parameters

The \_since parameter can be used while starting an export job. Visit the [Troubleshooting Guide]({{ '/troubleshooting-guide' | relative_url }}) to learn more about the export workflow for the AB2D API.
Review both unencoded and percent-encoded examples of the \_since parameter. Note that ISO8601 dates include characters that can’t appear in URLs.
[Learn more about percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding). Only the encoded versions will work, but the unencoded examples will show how the URL is formed before encoding.

### Only \_since parameter is specified

#### Unencoded

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_since=2023-02-13T00:00:00.000-05:00`

#### Percemnt-encoded

`https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_since%3D2023-02-13T00%3A00%3A00.000-05%3A00`

#### curl command

{% capture curlSnippet %}{% raw %}
curl "https://api.ab2d.cms.gov/api/v1/fhir/Patient/\$export?_since%3D2023-02-13T00%3A00%3A00.000-05%3A00" \
-H "Accept: application/json" \
-H "Accept: application/fhir+json" \
-H "Prefer: respond-async" \
-H "Authorization: Bearer ${bearer_token}
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}

## The \_type parameter

Running a job request returns all resource types by default. The \_type parameter allows you to narrow this down and specify one resource you’d like returned. The only value AB2D currently supports for this parameter is ExplanationofBenefit (EOB).

## The \_outputFormat parameter

The \_outputFormat parameter allows you to request different formats for your data exports. The default and only format AB2D currently supports is application/fhir+NDJSON. The server must support Newline Delimited JSON (NDJSON), but may choose to support additional output formats. The server must also accept the full content type of application/fhir+NDJSON, as well as the abbreviated representations application/NDJSON and NDJSON.
