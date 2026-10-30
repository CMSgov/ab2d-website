---
layout: api-docs
page_title: "How to Filter Claims Data"
seo_title: "Filter Claims Data With Parameters v3"
description: "Filter and refine AB2D’s Medicare claims data using HTTP query parameters"
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
    What's new in v3
  </p>
{% endcapture %}
{% capture versionAlert %}
    <ul>
      <li>
        The _typeFilter parameter, which filters claims by service date
      </li>
      <li>
        A March 26, 2026 earliest date recommendation for the _since parameter
      </li>
    </ul>
{% endcapture %}
{% include alert.html variant="success" text=versionAlert heading=versionAlertHeading classNames="measure-6" %}

You can use HTTP query parameters to filter claims data returned during an API job request. To learn how to access data, see [How to Access Sandbox Data]({{ '/api-documentation/access-sandbox-data' | relative_url }}) and [How to Access Production Claims Data]({{ '/api-documentation/access-production-claims-data' | relative_url }}).

AB2D offers 3 query parameters to filter or specify the data returned:

* **_since:** returns claims last updated after a specified date
* **_until:** returns claims last updated before a specified date
* **_typeFilter:** returns claims where the service-date matches the date range specified.

AB2D also supports the _outputFormat parameter, which is covered at the end of this page.

**Note:** Use parameters when you start a job in the sandbox or production environment to speed up download times and reduce file size.

## The _since and _until parameters

The _since and _until parameters filter claims data by the date it was last updated.

* You can use the parameters separately or together.
* Dates must use the [ISO datetime format](https://en.wikipedia.org/wiki/ISO_8601) (yyyy-mm-dd'T'hh:mm:ss\[+\|-\]hh:mm).
  * **Sample date:** July 1, 2026, 12:00 PM Eastern Daylight Time
  * **Formatted sample:** 2026-07-01T12:00:00.000-04:00
* ISO 8601 dates include colons (:) and for some time zones, plus signs (+). These characters must be percent-encoded in a URL. The percent-encoded example below also encodes the equal sign (=) and ampersand (&) in the query string.
  * Invalid example of an unencoded URL with both _since and _until parameters
  `https://sandbox.ab2d.cms.gov/api/v3/fhir/Patient/$export?_since=2023-06-15T00:00:00.000-05:00&_until=2024-06-15T00:00:00.000-05:00`
  * Valid example of a percent-encoded URL with both _since and _until parameters:
  `https://sandbox.ab2d.cms.gov/api/v3/fhir/Patient/$export?_since%3D2023-06-15T00%3A00%3A00.000-05%3A00%26_until%3D2024-06-15T00%3A00%3A00.000-05%3A00`
  * Read more about percent-encoding [here](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding).

### Date limitations for the _since parameter

AB2D v3 data became available in March 2026, therefore if you specify a date prior to March 26, 2026 (2026-03-26T00:00:00-05:00) with the _since parameter, your request will include a large amount of additional historical data for your enrollees that may result in your job to timeout.
The earliest possible date for the _since parameter is your organization's attestation date.

If you need to load historical data, AB2D recommends using _typeFilter alone to query claims in biweekly or monthly increments by service date. If you have questions or need an alternative approach, contact the AB2D team at <a href="mailto:ab2d@cms.hhs.gov">ab2d@cms.hhs.gov</a>

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

## The _typeFilter parameter

The _typeFilter parameter filters ExplanationOfBenefit resources by service date. The service date is the date care occurred within a billable period, stored in `ExplanationOfBenefit.billablePeriod`. The value of _typeFilter is a URL-encoded FHIR search query.

_since and _until filter by the lastUpdated timestamp. _typeFilter with service-date filters by the date that care took place. Use _since and _until to get claims that changed recently. Use _typeFilter to get claims for a specific period of care.

### Examples of _typeFilter service date prefixes <!-- Two types of tables exist on tihs page, we should figure out which one we want.-->

To use _typeFilter to filter by service date, add a prefix directly before the date, with no space. Dates use the format YYYY-MM-DD.

<div class="overflow-x-auto" tabindex="0">
    <table class="usa-table usa-table--stacked usa-table--borderless width-full">
    <thead>
        <tr>
        <th style="white-space: nowrap;">Prefix</th>
        <th style="white-space: nowrap;">Meaning</th>
        <th style="white-space: nowrap;">Example filter</th>
        <th style="white-space: nowrap;">Resulting claims</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>eq</td>
        <td>Equal to</td>
        <td>service-date=eq2025-01-01</td>
        <td>Service date is January 1, 2025</td>
        </tr>
        <tr>
        <td>gt</td>
        <td>After</td>
        <td>service-date=gt2025-01-01</td>
        <td>Service date is after January 1, 2025</td>
        </tr>
        <tr>
        <td>ge</td>
        <td>On or after</td>
        <td>service-date=ge2025-01-01</td>
        <td>Service date is January 1, 2025 or later</td>
        </tr>
        <tr>
        <td>lt</td>
        <td>Before</td>
        <td>service-date=lt2025-01-01</td>
        <td>Service date is before January 1, 2025</td>
        </tr>
        <tr>
        <td>le</td>
        <td>On or before</td>
        <td>service-date=le2025-01-01</td>
        <td>Service date is January 1, 2025 or earlier</td>
        </tr>
    </tbody>
    </table>
</div>

<b>Note:</b> If a prefix isn't added, it is assumed the service date is <b>equal to</b> the date specified.

### Combining prefixes

To filter a date range, repeat `service-date` once for each prefix. A claim must match every filter to be returned.

<div class="overflow-x-auto" tabindex="0">
    <table class="usa-table usa-table--stacked usa-table--borderless width-full">
    <thead>
        <tr>
        <th style="white-space: nowrap;">Prefix combinations</th>
        <th style="white-space: nowrap;">Example filter</th>
        <th style="white-space: nowrap;">Resulting claims</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>ge + le</td>
        <td>service-date=ge2025-01-01\&service-date=le2025-12-31</td>
        <td>Service date is from January 1 through December 31, 2025, including both dates</td>
        </tr>
        <tr>
        <td>gt + lt</td>
        <td>service-date=gt2025-01-01\&service-date=lt2025-12-31</td>
        <td>Service date is after January 1 and before December 31, 2025, excluding both dates</td>
        </tr>
        <tr>
        <td>ge + lt</td>
        <td>service-date=ge2025-01-01\&service-date=lt2026-01-01</td>
        <td>Service date is any day in 2025</td>
        </tr>
        <tr>
        <td>gt + le</td>
        <td>service-date=gt2025-01-01\&service-date=le2025-12-31</td>
        <td>Service date is after January 1 and through December 31, 2025</td>
        </tr>
    </tbody>
    </table>
</div>

### Example request

The request below returns only ExplanationOfBenefit resources with a service date on or after January 1, 2025\.

`GET /api/v3/fhir/Patient/$export?_type=ExplanationOfBenefit&_typeFilter=ExplanationOfBenefit%3Fservice-date%3Dge2025-01-01`

{% capture curlSnippet %}{% raw %}
curl -i "https://sandbox.ab2d.cms.gov/api/v3/fhir/Patient/\$export?_type=ExplanationOfBenefit&_typeFilter=ExplanationOfBenefit%3Fservice-date%3Dge2025-01-01" \
    -H "Accept: application/fhir+json" \
    -H "Prefer: respond-async" \
    -H "Authorization: Bearer ${bearer_token}"
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}

## The _outputFormat parameter

AB2D only returns claims data in [Newline Delimited JSON (NDJSON)](https://github.com/ndjson/ndjson-spec) format by default, so the _outputFormat parameter is not required. If you include the _outputFormat parameter, use one of these values:

* `application/fhir+ndjson`
* `application/ndjson`
* `ndjson`

Any other value will return an error.

## Running incremental exports

AB2D strongly recommends **limiting each export to data updated since your last job**. This is a best practice that keeps your data current and stops you from downloading the same claims repeatedly. It also helps you avoid requesting too much data at once, which can cause long job run times or even timeouts and failed jobs.

**Add _since and _until parameters to every request you make to AB2D**. Unlike prior versions of the API, AB2D v3 does not set these parameters for you and does not track the time of your last successful export. As a result, a request with no parameters returns all your data, not just what's new.

We recommend **running jobs on a regular biweekly or monthly cadence**. AB2D refreshes Parts A and B claims every Monday. Run your export after Monday's refresh to get the most recent data.

If your job needs more nuanced or detailed results, **use _typeFilter to filter claims by service date**. This lets you narrow an export beyond what _since and _until alone provide, so you can target a more specific set of claims for jobs that require finer control. If you need to load historical data, AB2D recommends using _typeFilter to query claims incrementally by service date

### How to run incremental exports

1. Record the _until value (or the completion datetime) of each export you download.
2. Use that value as _since on your next request.
3. Set _until explicitly so the window you requested is the window you receive.
4. Add _typeFilter when you only need certain claims. Each filtered request returns only what you specify, so track the date range you've covered for each filter.

{% include feedback-form.html id="85f95067" %}
