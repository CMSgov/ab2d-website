---
layout: api-docs
title:  "How to Access Test Claims Data"
permalink: /how-to-access-test-claims-data
in-page-nav: true
---

# {{ page.title }}

The sandbox environment (sandbox.ab2d.cms.gov) is available to anyone who wants to test the API. First, you need to [get a bearer token]({{ '/how-to-get-a-bearer-token' | relative_url }}) with AB2D’s test credentials to access the sandbox. Then you can get test claims data by using a command line tool like curl or or writing your own client. 

Accessing test data in the sandbox is a required step to receive production credentials. You’ll need to provide the AB2D team with the job ID from a successful run in the sandbox. [Learn more about onboarding]({{ '/onboarding' | relative_url }}).

{% capture versionAlertHeading %}
    AB2D recommends using V2 of the API
{% endcapture %}
{% capture versionAlert %}
    <p>
        Version 2 is the current version and it follows the <a href="https://hl7.org/fhir/R4/">FHIR R4 standard</a>. The _until parameter is only available with V2. Version 1 follows the <a href="https://hl7.org/fhir/STU3/explanationofbenefit.html">FHIR STU3</a> standard.
    </p>
    <p>    
        <a href="https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx">Learn more about migrating from V1 to V2</a>.
    </p>
{% endcapture %}
{% include alert.html variant="info" text=versionAlert heading=versionAlertHeading classNames="measure-6" %}

## API endpoints 

AB2D endpoints are used to request test claims data and API information. These endpoints are the same whether you’re in the sandbox or production environment. 

### Export
Create a job to request test claims data. You should receive a response with the job ID (jobUuid). 

{% capture curlSnippet %}{% raw %}
GET /api/v2/fhir/Patient/$export
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

If it takes more than 30 hours to retrieve and download the data, the request will time out and fail. Try using [parameters]({{ '/http-query-parameters' | relative_url }}) when running a job to filter the claims data returned and reduce file size. 

### Status

Once a job has been created, get a status update using the job ID from the previous step. If the job is complete, the status request will return a 200 response code. If it is in progress, it will return a 202 code. 

{% capture curlSnippet %}{% raw %}
GET /api/v2/fhir/Job/{jobUuid}/$status
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

Too many status requests can result in a “Retry-After” response in the header. Wait until the period of time specified in the header has passed before making any more requests. 

### Download

Once the job is complete, the response will return a list of file URLs. In each file URL, you can identify the job ID (jobUuid) and file name:

{% capture curlSnippet %}{% raw %}
https://sandbox.ab2d.cms.gov/api/v2/fhir/Job/{jobUuid}/{filename}
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

Download the file using the job ID and file name. Some downloads may take longer depending on the file size. Files and job IDs are only available for 72 hours, after which they’ll expire and be removed. 

{% capture curlSnippet %}{% raw %}
GET /api/v2/fhir/Job/{jobUuid}/file/{filename}
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

### Cancellation

You can cancel a job, but only if it hasn’t been completed. 

{% capture curlSnippet %}{% raw %}
DELETE /api/v2/fhir/Job/{jobUuid}/$status
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

### Other

Retrieve the capabilities of the server (required by the standard).

{% capture curlSnippet %}{% raw %}
GET /api/v2/fhir/metadata
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

## curl instructions

You can copy and paste [curl](https://curl.se/) commands into your terminal. In Confluence, use the code block macro. [Learn how to install curl and jq]({{ '/setup-instructions' | relative_url }}).

HTTP responses are saved into shell variables named `RESP<n>`. Most steps also define shell variables used later in the process. For educational purposes it can be useful to examine variable values by entering:

{% capture curlSnippet %}{% raw %}
echo ${variable name}
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

### 1. Start a job

Start an export job of FHIR ExplanationOfBenefit (EOB) resources using the following command: 

{% capture curlSnippet %}{% raw %}
> RESP2=$(curl -i "https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/\$export?_type=ExplanationOfBenefit" \
  -H "Accept: application/json" \
  -H "Accept: application/fhir+json" \
  -H "Authorization: Bearer ${bearer_token}")
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

`RESP2` is set to the headers of the HTTP response (by using the -i option of curl).

You’ll receive a response header with a content-location URL. This URL contains the job ID: 

{% capture curlSnippet %}{% raw %}
HTTP/2 202 
date: Thu, 09 Nov 2023 15:52:51 GMT
content-length: 0
content-location: https://sandbox.ab2d.cms.gov/api/v2/fhir/Job/2356b9af-9257-41f4-9d82-4e27542ff1be/$status

x-content-type-options: nosniff
x-xss-protection: 1; mode=block
cache-control: no-cache, no-store, max-age=0, must-revalidate
pragma: no-cache
expires: 0
strict-transport-security: max-age=31536000 ; includeSubDomains
x-frame-options: DENY
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

#### 1a. Extract the job ID from the content-location and set the JOB_ID variable with the following command: 

{% capture curlSnippet %}{% raw %}
> JOB_ID=$(echo $RESP2 | grep content-location | sed 's%^.*Job/\([^/]*\).*$%\1%')
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

### 2. Check the job status

Request the job status and save the response into `RESP3`. If you receive a 200 HTTP response code, the job is complete. If you receive a 202 response code, the job is still in progress. In this case, continue checking the status until the job is complete.

{% capture curlSnippet %}{% raw %}
-H "Accept: application/json" \
-H "Accept: application/fhir+ndjson" \
-H "Authorization: Bearer ${TOKEN}" | {
    read RESP3
> curl -sw '\n%{http_code}' "https://sandbox.ab2d.cms.gov/api/v2/fhir/Job/${JOB_ID}/\$status"  \

    read STATUS
    echo "Status: " $STATUS
    }
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

When the job is complete, the response will contain URLs for the export files to be downloaded. This is an example response returned after executing `echo $RESP3 | jq`:

{% capture curlSnippet %}{% raw %}
{
  "transactionTime": "Nov 9, 2023, 3:52:51 PM",
  "request": "https://sandbox.ab2d.cms.gov/api/v2/fhir/Patient/$export?_type=ExplanationOfBenefit",
  "requiresAccessToken": true,
  "output": [
    {
      "type": "ExplanationOfBenefit",
      "url": "https://sandbox.ab2d.cms.gov/api/v2/fhir/Job/2356b9af-9257-41f4-9d82-4e27542ff1be/file/Z0000_0001.ndjson",
      "extension": [
        {
          "url": "https://ab2d.cms.gov/checksum",
          "valueString": "sha256:4b7b3db7bcb219a1205233a0615bc6851ede5ceb645f90cf52ad4ace76ad2143"
        },
        {
          "url": "https://ab2d.cms.gov/file_length",
          "valueDecimal": 26696409
        }
      ]
    }
  ],
  "error": []
}
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

Piping the response to jq pretty prints it for readability.

#### 2a. Extract the file name from `RESP3` into the FILE variable with the following command:

{% capture curlSnippet %}{% raw %}
> FILE=$(echo $RESP3 | jq -r ".output[0].url" | sed 's%^.*file/\(.*$\)%\1%')
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

### 3. Download your files

Download the exported data using the job ID and file name retrieved from the previous steps. This command downloads the exported data into the `RESP4` variable.

{% capture curlSnippet %}{% raw %}
> RESP4=$(curl "https://sandbox.ab2d.cms.gov/api/v2/fhir/Job/${JOB_ID}/file/${FILE}" \
  -H "Accept: application/fhir+ndjson" \
  -H "Authorization: Bearer ${TOKEN}")
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

#### Managing file size

The data for 100 enrollees is over 25MB. You can enter `echo ${#RESP4}` to check how many bytes a file is. This is too big for most text editors. Since the data is in NDJSON format, it consists of JSON objects separated by newlines. The command `echo $RESP | sed 1q | jq` will extract the first JSON object and pretty print it using jq. The result is small enough to copy and paste into most editors. For exploring the data, it’s handy to use an editor that supports folding of JSON text, like the Intellij or VSCode.

## Swagger instructions 

These instructions walk you through how to authorize your bearer token, request test claims data, check the job status, and download your files using the [AB2D Swagger UI](https://sandbox.ab2d.cms.gov/swagger-ui/index.html). 

### I. Authorize your bearer token

1. Open the *Select a definition* dropdown menu in the top right corner.
2. Select *V2 - FHIR R4*. While you can use V1, we recommend using V2 for access to the _until parameter.
3. Select the *Authorize* button above the commands. 
4. Enter your bearer token. It should be formatted as “Bearer {XXX}” where {XXX} is the value of your token. Each bearer token expires after 1 hour, so you will need a new token every time it expires.
5. Select *Authorize*. 
6. If your bearer token is valid, you’ll be notified of your authorization. Select *Close* on this window.

### II. Start a job

1. On the Swagger UI page, select  the Export command “/api/v2/fhir/Patient/$export”. 
2. With the Export section expanded, select Try it out. 
    - Keep the default values and add a date in [ISO datetime format](https://en.wikipedia.org/wiki/ISO_8601) for the _since parameter value. The _since parameter filters for claims last updated since a specified date. You can use a random date value such as “2021-01-01T00:00:00.000-05:00” for this job.
3. Select *Execute*. If the job was created successfully, you’ll receive a 202 HTTP response code under *Server response*. 
4. Copy the job ID from the *Response header*. The job ID is located in the content-location URL (http://sandbox.ab2d.cms.gov/api/v2/fhir/Job/{job id}/$status).

### III. Check the job status

1. Select the Status command “/api/v2/fhir/Job/{jobUuid}/$status”. 
2. With the *Status* section expanded, select *Try it out*.  
3. Paste the job ID from step II as the *jobUuid* value.
4. Select *Execute*. 
- If the job is still in progress, you’ll receive a 202 response code with a progress percentage by *x-progress*. Re-click the *Execute* button periodically until the job is complete.  
- If the job is complete, you’ll receive a 200 response code. The *Response* body will return a list of file URLs (https://sandbox.ab2d.cms.gov/api/v2/fhir/Job/{jobUuid}/(filename). 

### IV. Download your files

1. Select the *Download* command “/api/v2/fhir/Job/{jobUuid}/file/{filename}”.
2. With the *Download* section expanded, select *Try it out*.  
3. Enter the job ID (jobUuid) and file name from step III. 
4. Select *Execute*. If the download is successful, you’ll receive a 200 response code and a link to download the files. 
5. Select *Download file* (under Response body). The file will be in [NDJSON](https://github.com/ndjson/ndjson-spec), where each line is a [JSON](https://www.json.org/json-en.html) object. You may need a text editor like [JSON viewer](https://jsonlint.com/) to read the file. 
6. Send the AB2D team the job ID by following the instructions in your onboarding email. Note that job IDs expire after 72 hours.

## Troubleshooting

Visit our [troubleshooting guide]({{ '/user-guide' | relative_url }}#troubleshooting-guide-2) for guidance on HTTP response codes and frequently asked questions. If you need additional assistance, email the AB2D team at [ab2d@cms.hhs.gov](mailto:ab2d@cms.hhs.gov).

When contacting our team, please include the following information:

- Your operating system 
- If applicable, your HTTP response code (e.g., 403, 400)
- A description of the issue including which stage of the process you’re on
- Any logs that may help us in resolving the issue