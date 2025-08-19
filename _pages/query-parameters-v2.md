---
layout: api-docs
page_title: "HTTP Query Parameters - V2"
seo_title: "Query Parameters for Filtering Claims Data V2 | AB2D API"
description: "Learn more about HTTP query parameters, and how they can filter Medicare claims data with the AB2D API."
permalink: /query-parameters-v2
in-page-nav: true
---

# {{ page.page_title }}

HTTP query parameters filter or specify the claims data returned during requests. The AB2D API offers a variety of parameters, which can differ depending on what version you’re using. Once you have a good understanding of parameters you can [use them to filter claims data]({{ '/filter-claims-data-v2' | relative_url }}).

{% capture versionAlertHeading %}
  <p class="usa-alert__heading text-bold">
    AB2D recommends using V2 of the API
  </p>
{% endcapture %}
{% capture versionAlert %}
    <p>
        This documentation is for AB2D version 2, which implements the <a href="https://hl7.org/fhir/uv/bulkdata/" target="_blank" rel="noopener">Bulk Data Access Implementation Guide V2.0.0</a>. The _until parameter is only available with V2.
    </p>
    <p>
        For organizations using V1, visit our <a href="{{ '/filter-claims-data-v1' | relative_url }}">V1 documentation</a> to learn about parameters. <a href="https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx" target="_blank" rel="noopener">Learn more about migrating from V1 to V2</a>.
    </p>

{% endcapture %}
{% include alert.html variant="info" text=versionAlert heading=versionAlertHeading classNames="measure-6" %}

## The _since and _until parameters

<p>The _since and _until parameters let you filter claims data by date to reduce duplication and speed up job times. These parameters follow the <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank" rel="noopener">ISO datetime format</a> (yyyy-mm-dd'T'hh:mm:ss[+|-]hh:mm). The time zone must be specified using + or - followed by hh:mm. These optional parameters can be used separately or together.</p>

Separately, these parameters allow you to pull data that was last updated since or until a specified date. You can use the meta/lastUpdated property of each ExplanationOfBenefit (EOB) resource to see when each record was last updated. This will help you compare claims data when using the  _since and _until parameters.

<a href="{{ '/assets/downloads/ab2d-data-dictionary.xlsx' | relative_url }}" data-tealium="download">Download the Data Dictionary {% include sprite.html icon="file_download" class="text-middle" %}</a>

### For _since

The earliest possible date is January 1, 2020 (2020-01-01T00:00:00-05:00) or your organization's attestation date, whichever is later. If no _since date is specified, it will default to the datetime of your organization’s last successful export. If this is your first job, it will default to your earliest possible date.

### For _until

The latest possible date is the current date. If no _until date is specified, it will default to the current date. You will receive an error if the _until date is in the future.

### For _since and _until

Together, the _since and _until parameters allow you to pull data that was last updated within a certain date range. However, the _since parameter value must be an earlier date than the _until parameter value. In other words, the _since datetime must have occurred before the _until datetime.

### Examples of default parameter behavior

<table class="usa-table usa-table--stacked usa-table--borderless width-full">
    <thead>
        <tr>
            <th scope="col">Parameter settings</th>
            <th scope="col">Date range of export requests</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Parameters">
                <b>_since</b> = not set
                <br>
                <b>_until</b> = not set
            </td>
            <td data-label="Date range of export requests">
                <b>From</b> last successful downloaded job date
                <br>
                <b>to</b> current date
            </td>
        </tr>
        <tr>
            <td data-label="Parameters">
                <b>_since</b> = 1/1/2023
                <br>
                <b>_until</b> = not set
            </td>
            <td data-label="Date range of export requests">
                <b>From</b> 1/1/2023
                <br>
                <b>to</b> current date
            </td>
        </tr>
        <tr>
            <td data-label="Parameters">
                <b>_since</b> = not set
                <br>
                <b>_until</b> = 1/1/2024
            </td>
            <td data-label="Date range of export requests">
                <b>From</b> last successfully downloaded job date
                <br>
                <b>to</b> 1/1/2024
            </td>
        </tr>
        <tr>
            <td data-label="Parameters">
                <b>_since</b> = 1/1/2023
                <br>
                <b>_until</b> = 1/1/2024
            </td>
            <td data-label="Date range of export requests">
                <b>From</b> 1/1/2023
                <br>
                <b>to</b> 1/1/2024
            </td>
        </tr>
    </tbody>
</table>

### Example: valid parameter value

<table class="usa-table usa-table--stacked usa-table--borderless width-full">
    <thead>
        <tr>
            <th scope="col">_since datetime</th>
            <th scope="col">_until datetime</th>
        </tr>
    </thead>
    <tbody>
        <td data-label="_since datetime">2020-10-10T03:00:00-06:00</td>
        <td data-label="_until datetime">2021-10-10T06:00:00-06:00</td>
    </tbody>
</table>
The _until datetime is after the _since datetime. The datetimes are valid and follow the ISO format with time zones.

### Example: invalid parameter values

<table class="usa-table usa-table--stacked usa-table--borderless width-full">
    <thead>
        <tr>
            <th scope="col">_since datetime</th>
            <th scope="col">_until datetime</th>
        </tr>
    </thead>
    <tbody>
        <td data-label="_since datetime">2020-10-10T00:00:00</td>
        <td data-label="_until datetime">2020-10-20T00:00:00</td>
    </tbody>
</table>

A time zone must be provided with the datetime.

<table class="usa-table usa-table--stacked usa-table--borderless width-full">
    <thead>
        <tr>
            <th scope="col">_since datetime</th>
            <th scope="col">_until datetime</th>
        </tr>
    </thead>
    <tbody>
        <td data-label="_since datetime">2019-12-30T00:00:00+00:00</td>
        <td data-label="_until datetime">2020-01-14T00:00:00+00:00</td>
    </tbody>
</table>

The _since datetime is before January 1, 2020. The job will still run, but the datetime will be replaced with the default.

<table class="usa-table usa-table--stacked usa-table--borderless width-full">
    <thead>
        <tr>
            <th scope="col">_since datetime</th>
            <th scope="col">_until datetime</th>
        </tr>
    </thead>
    <tbody>
        <td data-label="_since datetime">2020-10-10T16:00:00+00:00</td>
        <td data-label="_until datetime">3000-10-10T16:00:00+00:00</td>
    </tbody>
</table>

The _until datetime is in the future. The job will still run, but the parameter value will be replaced with the current date.

<table class="usa-table usa-table--stacked usa-table--borderless width-full">
    <thead>
        <tr>
            <th scope="col">_since datetime</th>
            <th scope="col">_until datetime</th>
        </tr>
    </thead>
    <tbody>
            <td data-label="_since datetime">2020-10-10T09:00:00-08:00</td>
            <td data-label="_until datetime">2019-10-10T07:00:00-08:00</td>
    </tbody>
</table>

The _until datetime is before the _since datetime. No data will be exported.

### Parameter scenario for _since and _until

There may be use cases where a specific date range of claims data is required. For example:
1. Your organization decides to incrementally export data and runs a job on December 1, 2023 for a month’s worth of data.
2. The job takes 4 hours to export all the data updated between November 1, 2023 and December 1, 2023.
3. Your organization realizes 1 week’s worth of data was corrupted in your database. Instead of rerunning the job, which would take 4 hours and result in duplicate data, you can use the _since and _until parameters to target the corrupted data.
4. Your organization identifies the corrupted data as claims last updated between November 12, 2023 and November 18, 2023.
5. Your organization runs a 2nd job with November 12, 2023 as the _since parameter value and November 18, 2023 as the _until parameter value.
6. The job takes less than 1 hour to export the week’s worth of missing data from your database.

[Review more example scenarios for the _since parameter.]({{ '/claims-data-details' | relative_url }}#example-scenario-3)

## The _outputFormat parameter

The _outputFormat parameter allows you to request different formats for your data exports. The default and only format AB2D currently supports is application/fhir+NDJSON. The server must support [Newline Delimited JSON (NDJSON)](https://github.com/ndjson/ndjson-spec), but may choose to support additional output formats. The server must also accept the full content type of application/fhir+NDJSON, as well as the abbreviated representations application/NDJSON and NDJSON.

{% include feedback-form.html url="f8e40d29" %}
