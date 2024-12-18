---
layout: api-docs
title:  "API Documentation"
permalink: /api-documentation
in-page-nav: true
---

# {{ page.title }}

The AB2D API uses [Fast Healthcare Interoperability (FHIR)](https://www.hl7.org/fhir/overview.html) resources to share enrollees’ Medicare Parts A and B claims data. Only active, stand-alone Prescription Drug Plan (PDP) sponsors are eligible to use AB2D. You will need a public, static IP address and a client software, like [curl](http://ab2d.cms.gov/setup-instructions), to access the API.

## Getting started

<ol class="usa-process-list margin-top-1">
  <li class="usa-process-list__item">
    <p class="usa-process-list__heading">Learn about AB2D</p>
    <p>
      Explore the <a href="{{ '/api-documentation#what-s-the-difference-between-the-sandbox-and-production-environments' | relative_url }}">documentation</a>, <a href="{{ '/ab2d-data#data-dictionary' | relative_url }}">Data Dictionary</a>, and <a href="{{ '/ab2d-data#sample-files' | relative_url }}">sample files</a>.
    </p>
  </li>
  <li class="usa-process-list__item">
    <p class="usa-process-list__heading">Use the sandbox</p>
    <p>
      Anyone can try out AB2D in the <a href="{{ '/access-test-claims-data' | relative_url }}">sandbox</a>, a test environment that allows you to practice using the API and export sample data. 
    </p>
  </li>
  <li class="usa-process-list__item">
    <p class="usa-process-list__heading">Get production access</p>
    <p>
      PDP sponsors must have <a href="{{ '/production-access' | relative_url }}">production access</a> to access their enrollees’ claims data. Attestation is the first step and it only takes a few minutes to complete.
    </p>
  </li>
</ol>

### What’s the difference between the sandbox and production environments?

<table class="usa-table usa-table--borderless">
  <caption class="usa-sr-only">Sandbox and Production environments comparison</caption>
  <thead>
    <tr>
      <th scope="col">Sandbox</th>
      <th scope="col">Production</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Available to everyone</td>
      <td>Must have completed the steps for <a href="{{ '/production-access' | relative_url }}">production access</a></td>
    </tr>
    <tr>
      <td>Contains synthetic claims data</td>
      <td>Contains real Medicare enrollee data</td>
    </tr>
  </tbody>
</table>

### The sandbox environment

The sandbox (sandbox.ab2d.cms.gov) is a public environment available to anyone who wants to learn how the API works. AB2D provides you with test credentials for access to sandbox data. You’ll use the sandbox identity provider (test.idm.idp.cms.gov) for this.

### The production environment 

Production (api.ab2d.cms.gov) is a private environment available only to PDP sponsors who have completed the steps to gain production access. You’ll need to provide the static IP address(es) for each system using the API. AB2D then provides you with production credentials for access to your enrollees’ data. You’ll use the production identity provider (idp.cms.gov) for this. 

Both environments use the same endpoints with the main differences being the credentials used for your bearer token and the environment URL. 


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
          <a href="{{ '/get-a-bearer-token' | relative_url }}">Learn how to get a bearer token.</a>
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
          Download the files returned from a completed job.
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
          Optional - Check the health of the AB2D API
        </th>
        <td data-label="Goal">
          Check the current status of the API – likewhether it’s up, down, or busy.
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

Get an overview of the endpoints you can request at the [sandbox]({{ '/access-test-claims-data' | relative_url }}) or [production URL]({{ '/access-production-claims-data' | relative_url }}). You can also visit the [AB2D Swagger UI](https://sandbox.ab2d.cms.gov/swagger-ui/index.html?urls.primaryName=V2%20-%20FHIR%20R4), which is based on the OpenAPI specification. While starting a job, you can use [parameters]({{ '/query-parameters-V2' | relative_url }}) to filter or specify the claims data returned. 

## JSON resources

Both versions of AB2D use the JSON (NDJSON) data format for the FHIR ExplanationOfBenefit resource.

- [Intro to JSON Format](http://json.org/)
- [Newline Delimited JSON (NDJSON)](https://github.com/ndjson/ndjson-spec)
- [JSON format viewer/validator](https://jsonlint.com/)

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
    An <a href="https://www.okta.com/identity-101/why-your-company-needs-an-identity-provider/">IdP</a> is a service that stores, verifies, and manages user identities. AB2D uses a third-party IdP tool called <a href="https://support.okta.com/help/s/article/What-is-Okta?language=en_US">Okta</a>. PDP sponsors use their set of Okta credentials to get a bearer token and access the API.
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
