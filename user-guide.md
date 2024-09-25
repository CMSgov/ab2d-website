---
layout: api-docs
title:  "AB2D API User Guide"
permalink: /user-guide
in-page-nav: true
---
<!--TODO add links to other subpages after those pages have been created, content figure out what copy requires code formatting-->
# {{ page.title }}

The AB2D API exports Medicare Parts A and B claims data. Prescription Drug Plan (PDP) sponsors can access data for any attributed enrollee. PDP sponsors must complete [onboarding]({% link onboarding.md %}) to access the API. During this process, your organization will agree (“attest") to AB2D protocols and [retrieve test data]({% link how-to-access-test-claims-data.md %}) in the sandbox. Following these steps, you’ll be approved to [access production claims data]({% link how-to-access-production-claims-data.md %}) for active enrollees.

{% capture versionAlertHeading %}
    AB2D recommends using V2 of the API
{% endcapture %}
{% capture versionAlert %}
    Version 2 uses the <a href="https://hl7.org/fhir/uv/bulkdata/">Bulk Data Access Implementation Guide V2.0.0</a>. While V1 is similar to V2, it processes parameters differently. <a href="https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx">Learn more about migrating from V1 to V2</a>.
{% endcapture %}
{% include alert.html variant="info" text=versionAlert heading=versionAlertHeading classNames="measure-6" %}


## Differences between the sandbox and production environment

### The sandbox environment
The sandbox (`sandbox.ab2d.cms.gov`) is a public environment available to anyone who wants to learn how the API works. AB2D provides you with sandbox credentials for access to test data. You’ll use the sandbox identity provider (`test.idm.idp.cms.gov`) for this.

### The production environment
Production (`api.ab2d.cms.gov`) is a private environment available only to attested and onboarded PDP sponsors. During onboarding, you’ll need to provide the static IP address(es) for each system using the API. AB2D then provides you with production credentials for access to your enrollees’ data. You’ll use the production identity provider (`idp.cms.gov`) for this. 

Both environments use the same endpoints with the main differences being the credentials used for your [bearer token]({% link how-to-get-a-bearer-token.md %}) and the URL. 

## Expected workflow
Jobs are units of work that export and compile Medicare claims data. They are broken into 4 phases. These phases are standard regardless of your programming language or platform. The AB2D workflow is based on the [Bulk Data Implementation Guide](https://hl7.org/fhir/uv/bulkdata/).

  <table class="usa-table usa-table--stacked usa-table--borderless">
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
        <th data-label="Step" scope="row">
          Get a bearer token
        </th>
        <td data-label="Goal">
          Get a token for authentication with the AB2D API.	
        </td>
        <td data-label="Endpoint">
          <a href="{% link how-to-get-a-bearer-token.md %}">Learn how to get a bearer token.</a>
        </td>
        <td data-label="Time">
          Seconds
        </td>
        <td data-label="Frequency">
          At least every hour during the job.
        </td>
      </tr>
      <tr>
        <th data-label="Step" scope="row">
          Start a job	
        </th>
        <td data-label="Goal">
          Start a job and save the unique job ID.	
        </td>
        <td data-label="Endpoint">
          Export endpoint	
        </td>
        <td data-label="Time">
          Seconds
        </td>
        <td data-label="Frequency">
          Once a job
        </td>
      </tr>
      <tr>
        <th data-label="Step" scope="row">
          Check job status
        </th>
        <td data-label="Goal">
          Check on the job status as you wait for it to finish.		
        </td>
        <td data-label="Endpoint">
          Status endpoint
        </td>
        <td data-label="Time">
          Minutes to hours depending on contract size
        </td>
        <td data-label="Frequency">
          Once every few minutes
        </td>
      </tr>
      <tr>
        <th data-label="Step" scope="row">
          Download the files	
        </th>
        <td data-label="Goal">
          Download the files returned from a complete job.
        </td>
        <td data-label="Endpoint">
          Download endpoint
        </td>
        <td data-label="Time">
          Minutes to hours depending on download speeds
        </td>
        <td data-label="Frequency">
          Once a job
        </td>
      </tr>
      <tr>
        <th data-label="Step" scope="row">
          Check the health of the AB2D API
        </th>
        <td data-label="Goal">
          Check the current status of the API – whether it’s up, down, or busy.
        </td>
        <td data-label="Endpoint">
          Health endpoint
        </td>
        <td data-label="Time">
          Seconds
        </td>
        <td data-label="Frequency">
          Once a job
        </td>
      </tr>
    </tbody>
  </table>

## Endpoints, schemas, and parameters
Get an overview of the endpoints you can request at the [sandbox]({% link how-to-access-test-claims-data.md %}) or [production URL]({% link how-to-access-production-claims-data.md %}). You can also visit the [AB2D Swagger UI](https://sandbox.ab2d.cms.gov/swagger-ui/index.html?urls.primaryName=V2%20-%20FHIR%20R4), which is based on the OpenAPI specification. While starting a job, you can use [parameters]({% link http-query-parameters.md %}) to filter or specify the claims data returned. 

## Glossary
       
<div class="padding-top-4 usa-accordion usa-accordion--multiselectable" data-allow-multiple>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="true"
      aria-controls="m-a1"
    >
    Application Programming Interface (API)
    </button>
  </h4>
  <div id="m-a1" class="usa-accordion__content usa-prose">
    <p>
      APIs allow software systems and applications to communicate with each other. APIs follow unique definitions and protocols. The AB2D API is publicly available.
    </p>
  </div>
    <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a2"
    >
    Base64
    </button>
  </h4>
  <div id="m-a2" class="usa-accordion__content usa-prose">
    <p>
    A basic encoding that changes your token from a text format to a standard ASCII format that is easier for computers to interpret.
    </p>
  </div>
    <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a3"
    >
    Identity Provider (IdP) and Okta
    </button>
  </h4>
  <div id="m-a3" class="usa-accordion__content usa-prose">
    <p>
    An <a href="https://www.okta.com/identity-101/why-your-company-needs-an-identity-provider/">IDP</a> is a service that stores, verifies, and manages user identities. AB2D uses a third-party IdP tool called <a href="https://support.okta.com/help/s/article/What-is-Okta?language=en_US">Okta</a>. PDP sponsors use their set of Okta credentials to get a bearer token and access the API.
    </p>
  </div>
    <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a4"
    >
    Bearer token
    </button>
  </h4>
  <div id="m-a4" class="usa-accordion__content usa-prose">
    <p>
      Bearer tokens, also referred to as <a href="https://jwt.io/introduction/">JSON web tokens </a>, are used during the <a href="https://oauth.net/2/">OAuth 2.0</a> authentication and authorization process. You need a bearer token every time you access the sandbox or production environment.
    </p>
    <p>
      You can get a bearer token by providing Okta with sandbox credentials or the production credentials received during onboarding. Bearer tokens expire after an hour, after which you must complete the process again.
    </p>
  </div>

</div>

## Troubleshooting guide

### HTTP response codes

#### 200 HTTP response: request completed successfully 

#### 202 HTTP response: request accepted but still processing

#### 400 HTTP response: bad request

General response when something is wrong (e.g., missing a request parameter or body).

#### 401 HTTP response: forbidden

Your token is incorrect or has expired. Authentication has not been completed successfully. 

#### 403 HTTP response: unauthorized

You don’t have permission to access the requested data. This can happen for a variety of reasons:
- Your token has expired.
- You have specified a contract that is not yours
- You’re not authorized to use the API
- Authentication has failed

#### 403 HTTP response: forbidden

Authentication succeeded, but you don’t have permission to access the requested data. This can happen due to a variety of reasons:  
- The credentials provided may have a typo or syntax error (e.g., spaces, hidden characters).
- The credentials provided may have been encoded to Base64 incorrectly. 
- You’re connected to the sandbox idP (`test.idp.idm.cms.gov`) instead of the production idP (`idp.cms.gov`).
- Authentication may have failed because of an incorrect header. The correct header is `Authorization : Basic Auth`.

#### 404 HTTP response: page not found

Resource or page not found. You could authenticate but the API endpoint does not exist. Troubleshooting:
- Check the URL to make sure it exists. Enter it in a browser to check which error occurred. You won’t have passed credentials or necessary parameters, so it’ll give you another error. However, it shouldn’t give you a 404.
- If you’re using curl at the command line, you may have to escape characters. For example, `$` is used in `$Export` and `$Status`, but `$` is a variable value in the Bash command line.

#### 405 HTTP response: method not allowed

You’re trying to execute a method which the endpoint does not support. For example, calling `/secure/get` as a POST method, even though the endpoint only supports GET methods.

#### 429 HTTP response: too many requests

You’re creating too many job requests within a short period of time. Try waiting a bit before making another request.

#### Unable to download bulk data file

- Your file name and/or job ID are incorrect. Check the job status again to verify these details.
- You requested to download the file more than 6 times.
- You waited too long to download your completed job files. Files expire and automatically delete after 72 hours.
- There’s a server error. If this continues to happen, contact the AB2D team at [ab2d@cms.hhs.gov](mailto:ab2d@cms.hhs.gov).

[Learn more about standard HTTP Codes.](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Frequently asked questions

<!--TODO: add an "expand all" feature here. Can appear as a simple hyperlink -->
         
<div class="padding-top-4 usa-accordion usa-accordion--multiselectable" data-allow-multiple>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a5"
    >
    How do I find my IP address?
    </button>
  </h4>
  <div id="m-a5" class="usa-accordion__content usa-prose">
    <p>
      Using the system that will access the API, open your browser and visit <a href="http://checkip.amazonaws.com">http://checkip.amazonaws.com/</a>. If you don’t have a browser query from your system’s command line:    
    </p>
        <ul>
            <li>Linux/Mac: Open a terminal and run the command <code>curl -X GET checkip.amazonaws.com</code></li>
            <li>Windows: Open a Powershell terminal and run the command <code>Invoke-RestMethod -Method GET checkip.amazonaws.com</code></li>
        </ul>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a6"
    >
    The IP address is incorrect, what should I do?
    </button>
  </h4>
  <div id="m-a6" class="usa-accordion__content usa-prose">
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
      aria-controls="m-a7"
    >
    How do I determine if my IP address can connect to AB2D? 
    </button>
  </h4>
  <div id="m-a7" class="usa-accordion__content usa-prose">
    <p>
      Use 1 of these methods:
    </p>
    <ol>
        <li>On the command line of the system you want to use, run 1 of the following commands:</li>
            <ul>
            <li>
              Linux/Mac: In a terminal, run <code>curl -X GET https://api.ab2d.cms.gov/health --verbose</code>
            </li>
            <li>
              Windows: In a powershell terminal, run <code>Invoke-RestMethod -Method GET https://api.ab2d.cms.gov/health </code>
            </li>
            </ul>
        <li>In Postman, create a new GET request against the URL <code>https://api.ab2d.cms.gov/health</code>. If the response has an HTTP status of 200 then your IP address can connect.</li>
        <li>Open a browser and visit <code>https://api.ab2d.cms.gov/swagger-ui/index.html</code></li>
    </ol>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a8"
    >
    How many IP addresses can my organization add? 
    </button>
  </h4>
  <div id="m-a8" class="usa-accordion__content usa-prose">
    <p>
     You can provide the AB2D team with up to 8 IP addresses.
    </p>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a9"
    >
    What if I need to change or remove an IP address(es)? 
    </button>
  </h4>
  <div id="m-a9" class="usa-accordion__content usa-prose">
    <p>
     Contact the AB2D team at <a href="mailto:ab2d@cms.hhs.gov">ab2d@cms.hhs.gov</a> to change your organization’s IP address(es).
    </p>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a10"
    >
    Why is my job stuck at 0%? It’s queueing and not starting immediately. 
    </button>
  </h4>
  <div id="m-a10" class="usa-accordion__content usa-prose">
    <p>
      You’re running too many jobs at once. If the API is busy, the job will be queued in a backlog.
    </p>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a11"
    >
    How do I cancel a job that’s already started?
    </button>
  </h4>
  <div id="m-a11" class="usa-accordion__content usa-prose">
    <ul>
      <li>
        On the command line, run 1 of the following commands:
      </li>
        <ul>
          <li>
            <strong>Linux/Mac:</strong> In a terminal, run <code>curl -X DELETE https://api.ab2d.cms.gov/api/v2/fhir/Job/{jobUuid}/$status --verbose</code>. Make sure to fill in {jobUuid} with the ID of the running job.
          </li>
          <li>
            <strong>Windows:</strong> In a Powershell terminal, run <code>Invoke-RestMethod -Method DELETE https://api.ab2d.cms.gov/api/v2/fhir/Job/{jobUuid}/$status</code>. Make sure to fill in {jobUuid} with the ID of the running job.
          </li>
        </ul>
      <li>
        In Postman, create a new DELETE request against the URL <code>https://api.ab2d.cms.gov/api/v2/fhir/Job/{jobUuid}/$status</code>. Note the request parameter <code>{jobUuid}</code> must be set in Postman.
      </li>
      <li>
        In a browser, visit <code>https://api.ab2d.cms.gov/swagger-ui/index.html#/Status/deleteRequestUsingDELETE</code> and enter your job ID.
      </li>
    </ul>
  </div>

  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a12"
    >
    What response do I get when the job is complete?
    </button>
  </h4>
  <div id="m-a12" class="usa-accordion__content usa-prose">
    <p>
      The response will contain the list of files requested and the URLs to download them.
    </p>
  </div>

   <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a13"
    >
    What happens if the job fails?
    </button>
  </h4>
  <div id="m-a13" class="usa-accordion__content usa-prose">
    <p>
      The status API will return an error for the job. Any files created will be deleted.
    </p>
  </div>

   <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a14"
    >
    Can I retrieve the results of a job that fails?
    </button>
  </h4>
  <div id="m-a14" class="usa-accordion__content usa-prose">
    <p>
      No, you can’t download files from a failed job. You must restart the job.
    </p>
  </div>

<h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a15"
    >
    I tried to download the files and got an error message.
    </button>
  </h4>
  <div id="m-a15" class="usa-accordion__content usa-prose">
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
      aria-controls="m-a16"
    >
    What is FHIR STU3 and R4?
    </button>
  </h4>
  <div id="m-a16" class="usa-accordion__content usa-prose">
    <p>
      STU3 and R4 are different Fast Healthcare Interoperability Resources (FHIR) versions for data transmission. AB2D provides <a href="http://hl7.org/fhir/STU3/explanationofbenefit.html">STU3</a> and <a href="http://hl7.org/fhir/R4/explanationofbenefit.html">R4</a> versions for 1 resource type, <code>ExplanationOfBenefit</code>.
    </p>
  </div>

 <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a17"
    >
    How does AB2D provide FHIR versions?
    </button>
  </h4>
  <div id="m-a17" class="usa-accordion__content usa-prose">
    <p>
      Version 1 of the API uses STU3 (<code>https://api.ab2d.cms.gov/api/v1/fhir</code>).
    </p>
    <p>
      and V2 uses R4 (<code>https://api.ab2d.cms.gov/api/v2/fhir</code>). 
    </p>
    <p>
      Requests made to both versions of the API are largely the same except for the way they process parameters. The data returned by each version is detailed in the <a href="{% link data.md %}">AB2D Data Dictionary</a>. <a href="https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx">Learn how to migrate from V1 to V2</a>. 
    </p>
  </div>

 <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a18"
    >
    How are parameters different between V1 and V2?
    </button>
  </h4>
  <div id="m-a18" class="usa-accordion__content usa-prose">
    <p>
     The default value for the _since parameter changes between versions. The _until parameter is also only available with V2.
    </p>
    <p>
      In V1, a date must be specified to use _since. If no _since value is specified, it will default to your organization's attestation date. In V2, if no _since value is specified, it will default to the date of your last successful export. If this is your first job, it will default to your organization’s attestation date. <a href="{% link http-query-parameters.md %}">Learn how to use parameters</a>.
    </p>
  </div>
</div>

