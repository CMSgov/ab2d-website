---
layout: api-docs
title:  "HTTP Query Parameters"
permalink: /http-query-parameters
in-page-nav: true
---

# {{ page.title }}

HTTP query parameters filter or specify the claims data returned during requests. The AB2D API offers a variety of parameters, which can differ depending on what version you’re using. Once you have a good understanding of parameters you can [use them to filter claims data]({{ '/how-to-filter-claims-data' | relative_url }}).

{% capture versionAlertHeading %}
    AB2D recommends using V2 of the API
{% endcapture %}
{% capture versionAlert %}
    <p>
        This documentation is for AB2D version 2, which implements the <a href="https://hl7.org/fhir/uv/bulkdata/">Bulk Data Access Implementation Guide V2.0.0</a>. The _until parameter is only available with V2. 
    </p>
    <p>    
        For organizations using V1, visit our <a href="{{ '/how-to-filter-claims-data' | relative_url }}">V1 documentation</a> to learn about parameters or <a href="https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx">learn more about migrating from V1 to V2</a>.
    </p>
{% endcapture %}
{% include alert.html variant="info" text=versionAlert heading=versionAlertHeading classNames="measure-6" %}

## The _since and _until parameters

The _since and _until parameters let you filter claims data by date to reduce duplication and speed up job times. These parameters follow the [ISO datetime format](https://en.wikipedia.org/wiki/ISO_8601) (`yyyy-MM-dd'T'hh:mm:ss[+|-]hh:mm`). The time zone must be specified using + or - followed by hh:mm. These optional parameters can be used separately or together.

Separately, these parameters allow you to pull data that was last updated since or until a specified date. You can use the meta/lastUpdated property of each ExplanationofBenefit (EOB) resource to see when each record was last updated. This will help you compare claims data when using the  _since and _until parameters. 

Download the data dictionary 
<!--TODO: add downloadable spreadsheet when we have it-->

### For _since

The earliest possible date is February 13th, 2020 (`2020-02-13T00:00:00-05:00`) or your organization's attestation date, whichever is later. If no _since date is specified, it will default to the datetime of your organization’s last successful export. If this is your first job, it will default to your earliest possible date. 

### For _until

The latest possible date is the current date. If no _until date is specified, it will default to the current date. You will receive an error if the _until date is in the future.

### For _since and _until 

Together, the _since and _until parameters allow you to pull data that was last updated within a certain date range. However, the _since parameter value must be an earlier date than the _until parameter value. In other words, the _until datetime must have occurred after the _since datetime. 

### Examples of parameter values

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Parameters</th>
            <th scope="col">Date range of export requests</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Parameters">_since = n/a</td>
            <td data-label="Date range of export requests">From last successful and fully downloaded job date to current date</td>
        </tr>
        <tr>
            <td data-label="Parameters">_since = 1/1/2023 <br> _until = n/a</td>
            <td data-label="Date range of export requests">From 1/1/2023 to current date</td>
        </tr>
        <tr>
            <td data-label="Parameters">_since = n/a <br> _until = 1/1/2024</td>
            <td data-label="Date range of export requests">From last successfully and fully downloaded job date to 1/1/2024</td>
        </tr>
        <tr>
            <td data-label="Parameters">_since = 1/1/2023 <br> _until = 1/1/2024</td>
            <td data-label="Date range of export requests">From 1/1/2023 to 1/1/2024</td>
        </tr>
    </tbody>
</table>

### Valid and invalid parameter values

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">_since datetime</th>
            <th scope="col">_until datetime</th>
            <th scope="col">Is it valid?</th>
            <th scope="col">Why?</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="_since datetime">2020-10-10T00:00:00</td>
            <td data-label="_until datetime">2020-10-20T00:00:00</td>
            <td data-label="Is it valid?">No</td>
            <td data-label="Why?">A time zone must be provided with the datetime.</td>
        </tr>
        <tr>
            <td data-label="_since datetime">2020-02-01T00:00:00+00:00</td>
            <td data-label="_until datetime">2020-02-28T00:00:00+00:00</td>
            <td data-label="Is it valid?">No</td>
            <td data-label="Why?">The _since datetime is before February 13th, 2020. The job will still run, but the datetime will be replaced with a different value.</td>
        </tr>
        <tr>
            <td data-label="_since datetime">2020-10-10T16:00:00+00:00</td>
            <td data-label="_until datetime">3000-10-10T16:00:00+00:00</td>
            <td data-label="Is it valid?">No</td>
            <td data-label="Why?">The _until datetime is in the future. The job will still run, but the parameter value will be replaced with the current date.</td>
        </tr>
        <tr>
            <td data-label="_since datetime">2020-10-10T09:00:00-08:00</td>
            <td data-label="_until datetime">2019-10-10T07:00:00-08:00</td>
            <td data-label="Is it valid?">No</td>
            <td data-label="Why?">The _until datetime is before the _since datetime. No data will be exported.</td>
        </tr>
        <tr>
            <td data-label="_since datetime">2020-10-10T03:00:00-06:00</td>
            <td data-label="_until datetime">2021-10-10T06:00:00-06:00</td>
            <td data-label="Is it valid?">Yes</td>
            <td data-label="Why?">The _until datetime is after the _since datetime. The datetimes are valid and follow the ISO format with time zones.</td>
        </tr>
    </tbody>
</table>

### Parameter scenario for _since and _until 

There may be use cases where a specific date range of claims data is required. For example:
1. Your organization decides to incrementally export data and runs a job on December 1st, 2023 for a month’s worth of data. 
2. The job takes 4 hours to export all the data updated between November 1st, 2023 and December 1st, 2023. 
3. Your organization realizes 1 week’s worth of data was corrupted in your database. Instead of rerunning the job, which would take 4 hours and result in duplicate data, you can use the _since and _until parameters to target the corrupted data:
4. Your organization identifies the corrupted data as claims last updated between November 12–18, 2023. 
5. Your organization runs a 2nd job with November 12, 2023 as the _since parameter value and November 18, 2023 as the _until parameter value. 
6. The job takes less than 1 hour to export the week’s worth of missing data from your database. 

## The _type parameter 

Running a job request returns all resource types by default. The _type parameter allows you to narrow this down and specify one resource you’d like returned. The only value AB2D currently supports for this parameter is EOB. 

## The _outputFormat parameter 

The _outputFormat parameter allows you to request different formats for your data exports. The default and only format AB2D currently supports is application/fhir+NDJSON. The server must support [Newline Delimited JSON (NDJSON)](http://ndjson.org/), but may choose to support additional output formats. The server must also accept the full content type of application/fhir+NDJSON, as well as the abbreviated representations application/NDJSON and NDJSON.