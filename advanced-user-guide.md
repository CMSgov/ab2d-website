---
layout: tutorial_layout
title:  "Advanced User Guide"
date:   2019-11-02 09:21:12 -0500 
description: Advanced User Guide
landing-page: live
---


<style>
.ds-c-table td,
.ds-c-table th {
    padding: 0.3rem;
    font-size: small;
}
</style>
## Introduction

This is an advanced user's guide on how to use the AB2D API to bulk search select Part A and Part B claims data by 
Medicare Part D plan (PDP) sponsors. This service provides asynchronous access to the data. The sponsor will request data, a 
job will be created to retrieve this data, a job number returned, the job will be processed and once it is complete, 
the data will be available to download. The status of the job can be requested at any time to determine whether it is complete.
The Sandbox is available to everyone but to get access to the production site, the PDP sponsor must first attest and
then verify that they can successfully download sample claim data from the Sandbox. [HAPI FHIR](https://hapifhir.io/) 
was used to implement the [HL7 FHIR standard](https://www.hl7.org/fhir/overview.html) and the API follows the
[FHIR Bulk Data Export](https://hl7.org/fhir/uv/bulkdata/export/index.html) pattern to perform data export. Errors come
back in the [Resource OperationOutcome](errors come back in the https://www.hl7.org/fhir/operationoutcome.html) format.

AB2D supports both R4 and STU3 versions of the FHIR standard. FHIR R4 is available using V2 of AB2D while FHIR STU3 can 
be accessed via AB2D V1. Both API versions return new line delimited JSON (ndjson) objects of the FHIR 
[ExplanationOfBenefit](https://www.hl7.org/fhir/r4/explanationofbenefit.html) Resource.

### Sandbox
The Sandbox/Swagger page is available [here](https://sandbox.ab2d.cms.gov/swagger-ui/index.html).

### AB2D Synthetic Data

AB2D provides four sample contracts that have been designed to provide synthetic data for testing purposes.

**Simple Datasets- Two Contracts**

This dataset provides contracts with a varying number of beneficiaries containing simple approximations of AB2D data. 
These contracts are ideal to test the stress of retrieving and downloading different sized data files. The data 
in these API payloads will not reflect the distribution of disease and demographic information you can expect from 
production data.

   <table class="ds-c-table">
      <thead>
         <tr>
            <th>Sponsor</th>
            <th>Contract</th>
            <th>Number of Benes</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <th>PDP-100</th>
            <th>Z0000</th>
            <th>100</th>
         </tr>
         <tr>
            <th>PDP-10000</th>
            <th>Z0010</th>
            <th>10,000</th>
         </tr>
      </tbody>
   </table>
<br/>

**Advanced Datasets- Two Contracts**

This dataset provides contracts with sample data that is a more accurate representation of AB2D production data. They
follow AB2D’s Bulk FHIR format and contain a more realistic distribution of disease and demographic information.

  <table class="ds-c-table">
      <thead>
         <tr>
            <th>Sponsor</th>
            <th>Contract</th>
            <th>Number of Benes</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <th>PDP-1001</th>
            <th>Z1001</th>
            <th>600-800</th>
         </tr>
         <tr>
            <th>PDP-1002</th>
            <th>Z1002</th>
            <th>600-800</th>
         </tr>
      </tbody>
   </table>
<br/>

## Authentication and Authorization
The API uses the JSON Web Tokens (JWT) to authorize use of the endpoints. The token should be sent using the 
"Authorization" header field with the value specified as "Bearer xxxxx" where xxxxx is the value of the JWT. 

As noted above, there are 4 users set up in the Sandbox.

<table class="ds-c-table">
    <tbody>
        <tr>
            <td><b>Sponsor</b></td>
            <td>PDP-100</td>
        </tr>
        <tr>
            <td><b>Contract</b></td>
            <td>Z0000</td>
        </tr>
        <tr>
            <td><b>Dataset Type</b></td>
            <td>Simple</td>
        </tr>
        <tr>
            <td><b>Client ID</b></td>
            <td>0oa2t0lsrdZw5uWRx297</td>
        </tr>
        <tr>
            <td><b>Client Password</b></td>
            <td>HHduWG6LogIvDIQuWgp3Zlo9OYMValTtH5OBcuHw</td>
        </tr>
        <tr>
            <td><b>Base64-encoded id:password</b></td>
            <td>MG9hMnQwbHNyZFp3NXVXUngyOTc6SEhkdVdHNkxvZ0l2RElRdVdncDNabG85T1lNVmFsVHRINU9CY3VIdw==</td>
        </tr>
    </tbody>
</table>
<br/>

<table class="ds-c-table">
    <tbody>
        <tr>
            <td><b>Sponsor</b></td>
            <td>PDP-10000</td>
        </tr>
        <tr>
            <td><b>Contract</b></td>
            <td>Z0010</td>
        </tr>
        <tr>
            <td><b>Dataset Type</b></td>
            <td>Simple</td>
        </tr>
        <tr>
            <td><b>Client ID</b></td>
            <td>0oa2t0lm9qoAtJHqC297</td>
        </tr>
        <tr>
            <td><b>Client Password</b></td>
            <td>ybR60JmtcpRt6SAeLmvbq6l-3YDRCZP-WN1At6t_</td>
        </tr>
        <tr>
            <td><b>Base64-encoded id:password</b></td>
            <td>MG9hMnQwbG05cW9BdEpIcUMyOTc6eWJSNjBKbXRjcFJ0NlNBZUxtdmJxNmwtM1lEUkNaUC1XTjFBdDZ0Xw==</td>
        </tr>
    </tbody>
</table>
<br/>
<table class="ds-c-table">
    <tbody>
        <tr>
            <td><b>Sponsor</b></td>
            <td>PDP-1001</td>
        </tr>
        <tr>
            <td><b>Contract</b></td>
            <td>Z1001</td>
        </tr>
        <tr>
            <td><b>Dataset Type</b></td>
            <td>Advanced</td>
        </tr>
        <tr>
            <td><b>Client ID</b></td>
            <td>0oa9jyx2w9Z0AntLE297</td>
        </tr>
        <tr>
            <td><b>Client Password</b></td>
            <td>hskbPu-YoWfGDY1gcQq34BfIEyMVuayu87zWDliG</td>
        </tr>
        <tr>
            <td><b>Base64-encoded id:password</b></td>
            <td>MG9hOWp5eDJ3OVowQW50TEUyOTc6aHNrYlB1LVlvV2ZHRFkxZ2NRcTM0QmZJRXlNVnVheXU4N3pXRGxpRw==</td>
        </tr>
    </tbody>
</table>
<br/>
<table class="ds-c-table">
    <tbody>
        <tr>
            <td><b>Sponsor</b></td>
            <td>PDP-1002</td>
        </tr>
        <tr>
            <td><b>Contract</b></td>
            <td>Z1002</td>
        </tr>
        <tr>
            <td><b>Dataset Type</b></td>
            <td>Advanced</td>
        </tr>
        <tr>
            <td><b>Client ID</b></td>
            <td>0oa9jz0e1dyNfRMm6297</td>
        </tr>
        <tr>
            <td><b>Client Password</b></td>
            <td>shnG6NGkHcu29ptDsKKRW6q5uFJSSpIpdl_K5fVW</td>
        </tr>
        <tr>
            <td><b>Base64-encoded id:password</b></td>
            <td>MG9hOWp6MGUxZHlOZlJNbTYyOTc6c2huRzZOR2tIY3UyOXB0RHNLS1JXNnE1dUZKU1NwSXBkbF9LNWZWVw==</td>
        </tr>
    </tbody>
</table>
<br/>

CMS leverages [Okta](http://www.okta.com) for authentication to generate a JWT. Use the  "Client Id" and "Client 
Password" you've chosen from above. The Okta request should look like this:

```
POST https://test.idp.idm.cms.gov/oauth2/aus2r7y3gdaFMKBol297/v1/token
Headers:
        Content-Type: application/x-www-form-urlencoded
        Accept: application/json
Parameters:
        grant_type: client_credentials
        scope: clientCreds
Authorization: Basic Auth
```

Basic Auth uses a Base64-encoded value for ClientId:ClientPassword. The table above, as a convenience, provides that 
encoded information for each Client Id, Client Password combination. The response will contain an access_token, which 
will expire in 1 hour from the time it was obtained. The access_token will be used in the authorization header in 
the AB2D API to authenticate using the syntax

```
Bearer <access_token>
```

## API Endpoints
The following are the list of endpoints the API supports:

### Request data
A job will be created and a job identifier returned for the contract associated with the credentials. 

```
GET /api/v2/fhir/Patient/$export
```

#### Parameters

The `_since` and `_until` parameters allow you to filter claims data by date, which reduces duplication and speeds up job times. They follow the ISO datetime format (e.g: ```yyyy-MM-dd'T'hh:mm:ss[+/-]hh:mm``` ). Time zone must be specified using + or - followed by hh:mm. These optional parameters can be used separately or together.

Separately, these parameters allow you to pull data that was last updated since or until a specified date. You can use the meta/lastUpdated property of each ExplanationofBenefit (EOB) resource to find when each record was last updated. This will help you compare claims data when using the  _since and _until parameters. 

```
GET /api/v2/fhir/Patient/$export?_since=2020-03-16T00:00:00-05:00&_until=2020-06-16T00:00:00-5:00
```

`_since`:

Dates prior to 2020-02-13 are not supported and will result in a failure response.

- AB2D V2/FHIR R4:
  - If no `_since` parameter is provided, the value defaults to the date and time of your organization's last successfully and fully 
  downloaded job. If this is the first job run, it will default to your organization's attestation date or 2020-02-13, whichever is later. 
  Note: Always use the `_since` parameter in the V2 sandbox environment. This will prevent the default value from changing for others as sample contracts are shared resources.   
- AB2D V1/FHIR STU3:
  - If no `_since` parameter is provided, the value defaults to your organization's attestation date. We highly recommend using the `_since` parameter on V1 API calls.

`_until`:

- AB2D V2/FHIR R4:
  - If no `_until` parameter is provided, the value defaults to the current date.
  - `_until` dates in the future are invalid. The job will still run, but the `_until` date will default to the current date.
  - If `_until` is provided and `_since` is not, the range of dates will be from the last successfully and fully downloaded job date to the `_until` date.
  - Providing an `_until` date that is prior to the `_since` date is invalid. This will result in an error and no data will be exported.

Note: The `_until` parameter is currently only supported by the AB2D V2 API. Passing the `_until` parameter to the AB2D V1/FHIR STU3 API is invalid and not supported.


### Status
Once a job has been created, the user can/should request the status of the submitted job. 

```
GET /api/v2/fhir/Job/{jobUuid}/$status
```

The job will either be in progress or completed. The application will limit the frequency in which a job status may 
be queried. The value of "retry-after" passed back in the response header should indicate a minimum amount of time 
between status checks. Once the job is complete, this request will respond with the list of files containing the bulk 
data or any error messages.

### Download
Once the search job has been completed, the contents of the created file(s) can be downloaded by using:

```
GET /api/v2/fhir/Job/{jobUuid}/file/{filename}
```

The file(s) are specified as the output of the status request. Each file will only be available for 72 hours after the 
job has completed.

### Cancellation
A job may be canceled at any point during its processing:

```
DELETE /api/v2/fhir/Job/{jobUuid}/$status
```

### Other
Retrieve the capabilities of the server (required by the standard)

```
GET /api/v2/fhir/metadata
```

## Tutorials

The purpose of these instructions is to provide a way for users to interact with the AB2D API. There are two main ways 
to do that:

### Postman and Swagger. 
Swagger is included with the API and the free Postman application can be downloaded [here](https://www.postman.com/).
If you want to use Postman and Swagger jump to the following page - [Use the API with Postman and Swagger](tutorial-postman.md)

### Using cURL and jq

If you currently don't have both curl and jq installed, jump to the setup page associated with your machine

- [Setup Linux](setup-linux.html)
- [Setup Mac](setup-mac.html)
- [Setup Windows 10](setup-windows.html)

If you already have your machine setup to use both curl and jq, you can jump to the following page - 
[Use the API with Curl](tutorial-curl.html)

## Troubleshooting

While testing, common issues may come up. Here are some suggestions on how to address them:

### 401 HTTP Response - Forbidden
Your token is either incorrect or has expired

### 403 HTTP response - Unauthorized

- Your token has expired
- You have specified a contract that is not yours
- You are not a user authorized to use the service

### 404 HTTP Response - Page not found
- The page doesn't exist. Check the URL to make sure it exists. Put it in a browser and see what the error is. You will 
not have passed credentials or necessary parameters, so it will give you another error, but it shouldn't give you a 404.
- If you are using cURL at the command line, you may have to escape characters. For example, $ is used in $export and 
$status but $ means a variable value in the bash command line.

### Unable to Download Bulk Data File
- Your file name or job name are not correct. You can call the $status command again and verify that you have the file 
name & job name correct.
- You have requested to download the file more than six times.
- The time between when the job completes and you request the file is greater than 72 hours. Files are 
automatically deleted (or expired) after 72 hours.
- There was an error on our server. If this continues to happen, contact technical support at [ab2d@cms.hhs.gov](mailto:ab2d@cms.hhs.gov).

### Other
If none of these hints work, you can always start a new job and retrieve the information again.
