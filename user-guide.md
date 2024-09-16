---
layout: api-docs
title:  "AB2D API User Guide"
permalink: /user-guide
in-page-nav: true
---
<!--TODO add links to other subpages after those pages have been created; Import sprites if needed-->
# {{ page.title }}

<!--TODO fix hyperlinks in alert-->
{% include alert.html
  variant="info"
  heading="AB2D recommends using V2 of the API"
  text="Version 2 uses the Bulk Data Access Implementation Guide V2.0.0<!--https://hl7.org/fhir/uv/bulkdata/)-->. While V1 is similar to V2, it processes parameters differently. Learn more about migrating from V1 to V2.<!--https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx-->"
%}

The AB2D API exports Medicare Parts A and B claims data. Prescription Drug Plan (PDP) sponsors can access data for any attributed enrollee. PDP sponsors must complete [onboarding]({% link onboarding.md %}) to access the API. During this process, your organization will agree (“attest") to AB2D protocols and retrieve test data in sandbox. Following these steps, you’ll be approved to access production claims data for active enrollees.

## Sandbox vs. production environment

### Accessing test data in sandbox
Sandbox (`sandbox.ab2d.cms.gov`) is a public environment available to anyone who wants to learn how the API works. AB2D provides you with sandbox credentials for access to test data. You’ll use the sandbox identity provider (`test.idm.idp.cms.gov`) for this.

### Accessing enrollee claims data in production
Production (`api.ab2d.cms.gov`) is a private environment available only to attested and onboarded PDP sponsors. During onboarding, you’ll need to provide the static IP address(es) for each system using the API. AB2D then provides you with production credentials for access to your enrollees’ data. You’ll use the production identity provider (`idp.cms.gov`) for this. 

Both environments use the same endpoints with the main differences being the credentials used for your bearer token and the URL. 

## Expected workflow
Jobs are units of work that export and compile Medicare claims data. They are broken into 4 phases. These phases are standard regardless of your programming language or platform. The AB2D workflow is based on the [Bulk Data Implementation Guide](https://hl7.org/fhir/uv/bulkdata/).

<table class="usa-table usa-table--borderless">
  <caption class="usa-sr-only">Expected workflow</caption>
  <thead>
    <tr>
      <th scope="col">Step</th>
      <th scope="col">Goal</th>
      <th scope="col">Endpoint</th>
      <th scope="col">Time</th>
      <th scope="col">Frequency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Get a bearer token</td>
      <td>Get a token for authentication with the AB2D API.</td>
      <td>Learn how to obtain a bearer token.</td>
      <td>Seconds</td>
      <td>At least every hour during the job</td>
    </tr>
    <tr>
        <td>Start a job</td>
        <td>Start a job and save the unique job ID.</td>
        <td>Export endpoint</td>
        <td>Seconds</td>
        <td>Once a job</td>
    </tr>
    <tr>
        <td>Check job status</td>
        <td>Check on the job status as you wait for it to finish.</td>
        <td>Status endpoint</td>
        <td>Minutes to hours depending on contract size</td>
        <td>Once every few minutes</td>
    </tr>
    <tr>
        <td>Download the files</td>
        <td>Download the files returned from a complete job.</td>
        <td>Download endpoint</td>
        <td>Minutes to hours depending on download speeds</td>
        <td>Once a job</td>
    </tr>
    <tr>
        <td>Check the health of the AB2D API</td>
        <td>Check the current status of the API – whether it’s up, down, or busy.</td>
        <td>Health endpoint</td>
        <td>Seconds</td>
        <td>Once a job</td>
    </tr>
    </tbody>
 </table>

## Endpoints, schemas, and parameters
Get an overview of the endpoints you can request at the sandbox or production URL. You can also visit the [AB2D Swagger UI](https://sandbox.ab2d.cms.gov/swagger-ui/index.html?urls.primaryName=V2%20-%20FHIR%20R4), which is based on the OpenAPI specification. While starting a job, you can use parameters to filter or specify the claims data returned. 

## Glossary

**Application Programming Interface (API)**

APIs allow software systems and applications to communicate with each other. APIs follow unique definitions and protocols. The AB2D API is publicly available.

**Base64**

A basic encoding that changes your token from a text format to a standard ASCII format that is easier for computers to interpret.

**Identity Provider (IdP) and Okta** 

An [IdP](https://www.okta.com/identity-101/why-your-company-needs-an-identity-provider/) is a service that stores, verifies, and manages user identities. AB2D uses a third-party IdP tool called [Okta](https://support.okta.com/help/s/article/What-is-Okta?language=en_US). PDP sponsors use their set of Okta credentials to get a bearer token and access the API.

**Bearer token**

Bearer tokens, also referred to as [JSON web tokens (JWT)](https://jwt.io/introduction/), are used during the [OAuth 2.0](https://oauth.net/2/) authentication and authorization process. You need a bearer token every time you access the sandbox or production environment.   

You can get a bearer token by providing Okta with sandbox credentials or the production credentials received during onboarding. Bearer tokens expire after an hour, after which you must complete the process again.


## Troubleshooting guide

### HTTP response codes


**200 HTTP response: request completed successfully**

**202 HTTP response: request accepted but still processing**

**400 HTTP response: bad request**

General response when something is wrong (e.g., missing a request parameter or body).

**401 HTTP response: forbidden**

Your token is incorrect or has expired. Authentication has not been completed successfully. 

**403 HTTP response: unauthorized**

You don’t have permission to access the requested data. This can happen for a variety of reasons:
- Your token has expired.
- You have specified a contract that is not yours
- You’re not authorized to use the API
- Authentication has failed

**403 HTTP response: forbidden**

Authentication succeeded, but you don’t have permission to access the requested data. This can happen due to a variety of reasons:  
- The credentials provided may have a typo or syntax error (e.g., spaces, hidden characters).
- The credentials provided may have been encoded to Base64 incorrectly. 
- You’re connected to the sandbox idP (`test.idp.idm.cms.gov`) instead of the production idP (`idp.cms.gov`).
- Authentication may have failed because of an incorrect header. The correct header is `Authorization : Basic Auth`.

**404 HTTP response: page not found**

Resource or page not found. You could authenticate but the API endpoint does not exist. Troubleshooting:
- Check the URL to make sure it exists. Enter it in a browser to check which error occurred. You won’t have passed credentials or necessary parameters, so it’ll give you another error. However, it shouldn’t give you a 404.
- If you’re using curl at the command line, you may have to escape characters. For example, `$` is used in `$Export` and `$Status`, but `$` is a variable value in the Bash command line.

**405 HTTP response: method not allowed**

You’re trying to execute a method which the endpoint does not support. For example, calling `/secure/get` as a POST method, even though the endpoint only supports GET methods.

**429 HTTP response: too many requests**

You’re creating too many job requests within a short period of time. Try waiting a bit before making another request.

**Unable to download bulk data file**

- Your file name and/or job ID are incorrect. Call the `$Status` command again to verify these details.
- You requested to download the file more than 6 times.
- You waited too long to download your completed job files. Files expire and automatically delete after 72 hours.
- There’s a server error. If this continues to happen, [contact the AB2D team](mailto:ab2d@cms.hhs.gov).

[Learn more about standard HTTP Codes.](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Frequently asked questions

<!--TODO: add an "expand all" feature here. Can appear as a simple hyperlink -->
         
<div class="padding-top-4 usa-accordion usa-accordion--multiselectable" data-allow-multiple>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="true"
      aria-controls="m-a1"
    >
    How do I find my IP address?
    </button>
  </h4>
  <div id="m-a1" class="usa-accordion__content usa-prose">
    <p>
      Using the system that will access the API, open your browser and visit <a href="http://checkip.amazonaws.com">http://checkip.amazonaws.com/</a>. If you don’t have a browser query from your system’s command line:    
    </p>
        <ul>
            <!--TODO with eng support: It's beyond my expertise to format these code snippets in font:roboto-mono without doing freaky stuff-->
            <li>Linux/Mac: Open a terminal and run the command "curl -X GET checkip.amazonaws.com".</li>
            <li>Windows: Open a Powershell terminal and run the command “Invoke-RestMethod -Method GET checkip.amazonaws.com”.</li>
        </ul>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a2"
    >
    The IP address is incorrect, what should I do?
    </button>
  </h4>
  <div id="m-a2" class="usa-accordion__content usa-prose">
    <p>
    Check that you’re using the correct system. The IP address should match what you gave to the AB2D team during onboarding. 
    </p>
    <p>
    If the system is correct, check with your IT team to make sure you have a static IP address. If your IP address isn’t static, it may have changed. You must have a static IP address to use the API. 
    </p>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a3"
    >
    How do I determine if my IP address can connect to AB2D? 
    </button>
  </h4>
  <div id="m-a3" class="usa-accordion__content usa-prose">
    <p>
      Use one of these methods:
    </p>
    <ol>
        <li>On the command line of the system you want to use, run 1 of the following commands:</li>
            <ul>
            <!--TODO with eng support: It's beyond my expertise to format these code snippets in font:roboto-mono without doing freaky stuff-->
            <li>Linux/Mac: In a terminal, run “curl -X GET https://api.ab2d.cms.gov/health --verbose”.</li>
            <li>Windows: In a powershell terminal, run “Invoke-RestMethod -Method GET https://api.ab2d.cms.gov/health”.</li>
            </ul>
        <li>In Postman, create a new GET request against the URL <a href="https://api.ab2d.cms.gov/health">https://api.ab2d.cms.gov/health</a>. If the response has an HTTP status of 200 then your IP address can connect.</li>
        <li>Open a browser and visit <a href="https://api.ab2d.cms.gov/swagger-ui/index.html">https://api.ab2d.cms.gov/swagger-ui/index.html</a>.</li>
    </ol>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a4"
    >
    How many IP addresses can my organization add? 
    </button>
  </h4>
  <div id="m-a4" class="usa-accordion__content usa-prose">
    <p>
     You can provide the AB2D team with up to 8 IP addresses.
    </p>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a5"
    >
    What if I need to change or remove an IP address(es)? 
    </button>
  </h4>
  <div id="m-a5" class="usa-accordion__content usa-prose">
    <p>
      <a href="mailto:ab2d@cms.hhs.gov">Contact the AB2D team</a> to change your organization’s IP address(es).
    </p>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a6"
    >
    Why is my job stuck at 0%? It’s queueing and not starting immediately. 
    </button>
  </h4>
  <div id="m-a6" class="usa-accordion__content usa-prose">
    <p>
      You’re running too many jobs at once. If the API is busy, the job will be queued in a backlog.
    </p>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a7"
    >
    How do I cancel a job that’s already started?
    </button>
  </h4>
  <div id="m-a7" class="usa-accordion__content usa-prose">
    <ul>
      <li>
        On the command line, run 1 of the following commands:
      </li>
        <ul>
          <li>
            <!--TODO with eng support: It's beyond my expertise to format these code snippets in font:roboto-mono without doing freaky stuff-->
            <strong>Linux/Mac:</strong> In a terminal, run “curl -X DELETE https://api.ab2d.cms.gov/api/v2/fhir/Job/{jobUuid}/$status --verbose”. Make sure to fill in {jobUuid} with the ID of the running job.
          </li>
          <li>
            <strong>Windows:</strong> In a Powershell terminal, run “Invoke-RestMethod -Method DELETE https://api.ab2d.cms.gov/api/v2/fhir/Job/{jobUuid}/$status”. Make sure to fill in {jobUuid} with the ID of the running job.
          </li>
        </ul>
      <li>
        In Postman, create a new DELETE request against the URL https://api.ab2d.cms.gov/api/v2/fhir/Job/{jobUuid}/$status. Note the request parameter {jobUuid} must be set in Postman.
      </li>
      <li>
        In a browser, visit https://api.ab2d.cms.gov/swagger-ui/index.html#/Status/deleteRequestUsingDELETE and enter your job ID.
      </li>
    </ul>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a8"
    >
    What response do I get when the job is complete?
    </button>
  </h4>
  <div id="m-a8" class="usa-accordion__content usa-prose">
    <p>
      The response will contain the list of files requested and the URLs to download them.
    </p>
  </div>

   <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a9"
    >
    What happens if the job fails?
    </button>
  </h4>
  <div id="m-a9" class="usa-accordion__content usa-prose">
    <p>
      The status API will return an error for the job. Any files created will be deleted.
    </p>
  </div>

   <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a10"
    >
    Can I retrieve the results of a job that fails?
    </button>
  </h4>
  <div id="m-a10" class="usa-accordion__content usa-prose">
    <p>
      No, you can’t download files from a failed job. You must restart the job.
    </p>
  </div>

<h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a11"
    >
    I tried to download the files and got an error message.
    </button>
  </h4>
  <div id="m-a11" class="usa-accordion__content usa-prose">
    <p>
      If you received a 403 error your bearer token may be expired or incorrect. Get another bearer token and restart the job.
    </p>
    <p>
      4xx errors mean your files have been downloaded more than 6 times or are expired. Files expire and automatically delete after 72 hours. 
    </p>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a12"
    >
    What is FHIR STU3 and R4?
    </button>
  </h4>
  <div id="m-a12" class="usa-accordion__content usa-prose">
    <p>
      STU3 and R4 are different Fast Healthcare Interoperability Resources (FHIR) versions for data transmission. AB2D provides STU3 and R4 versions for 1 resource type, ExplanationOfBenefit.
    </p>
  </div>

 <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a13"
    >
    How does AB2D provide FHIR versions?
    </button>
  </h4>
  <div id="m-a13" class="usa-accordion__content usa-prose">
    <p>
      <!--TODO with eng support: It's beyond my expertise to format these code snippets in font:roboto-mono without doing freaky stuff-->
      Version 1 of the API uses STU3 (https://api.ab2d.cms.gov/api/v1/fhir) and V2 uses R4 (https://api.ab2d.cms.gov/api/v2/fhir). Requests made to both versions of the API are largely the same except for the way they process parameters. The data returned by each version is detailed in the <a href="https://ab2d.cms.gov/data_dictionary.html">AB2D Data Dictionary</a>. <a href="https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx">Learn how to migrate from V1 to V2</a>. 
    </p>
  </div>

 <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a14"
    >
    How are parameters different between V1 and V2?
    </button>
  </h4>
  <div id="m-a14" class="usa-accordion__content usa-prose">
    <p>
     The default value for the _since parameter changes between versions. The _until parameter is also only available with V2.
    </p>
    <p>
      In V1, a date must be specified to use _since. If no _since value is specified, it will default to your organization's attestation date. In V2, if no _since value is specified, it will default to the date of your last successful export. If this is your first job, it will default to your organization’s attestation date. Learn how to use parameters.
    </p>
  </div>
</div>

