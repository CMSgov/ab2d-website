---
layout: api-docs
title:  "Troubleshooting Guide"
description:  "Technical assistance to Prescription Drug Plan (PDP) sponsors trying to use the AB2D API."
permalink: /troubleshooting-guide
in-page-nav: true
in-page-nav-levels: "h2"
---

# {{ page.title }}

The troubleshooting guide provides technical assistance to Prescription Drug Plan (PDP) sponsors trying to use the AB2D API. For further assistance, visit [Support]({{ '/support' | realtive_url }}). 

## HTTP response codes

<dl>
  <dt class="font-sans-md text-bold margin-bottom-4">200 HTTP response: request completed successfully</dt>
  <dd></dd>
  
  <dt class="font-sans-md text-bold margin-bottom-4">202 HTTP response: request accepted but still processing</dt>
  <dd></dd>
  
  <dt class="font-sans-md text-bold">400 HTTP response: bad request</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p>General response when something is wrong (e.g., missing a request parameter or body).</p>
  </dd>
  
  <dt class="font-sans-md text-bold">401 HTTP response: forbidden</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p>Your token is incorrect or has expired. Authentication has not been completed successfully.</p>
  </dd>
  
  <dt class="font-sans-md text-bold">403 HTTP response: unauthorized</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p>You don’t have permission to access the requested data. This can happen for a variety of reasons:</p>
    <ul>
      <li>Your token has expired.</li>
      <li>You have specified a contract that is not yours.</li>
      <li>You’re not authorized to use the API.</li>
      <li>Authentication has failed.</li>
    </ul>
  </dd>
  
  <dt class="font-sans-md text-bold">403 HTTP response: forbidden</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p>Authentication succeeded, but you don’t have permission to access the requested data. This can happen due to a variety of reasons:</p>
    <ul>
      <li>The credentials provided may have a typo or syntax error (e.g., spaces, hidden characters).</li>
      <li>The credentials provided may have been encoded to Base64 incorrectly.</li>
      <li>You’re connected to the sandbox idP (test.idp.idm.cms.gov) instead of the production idP (idp.cms.gov).</li>
      <li>Authentication may have failed because of an incorrect header. "Authorization : Basic Auth" is the correct header.</li>
    </ul>
  </dd>
  
  <dt class="font-sans-md text-bold">404 HTTP response: page not found</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p>Resource or page not found. You could authenticate but the API endpoint does not exist. Troubleshooting:</p>
    <ul>
      <li>Check the URL to make sure it exists. Enter it in a browser to check which error occurred. You won’t have passed credentials or necessary parameters, so it’ll give you another error. However, it shouldn’t give you a 404.</li>
      <li>If you’re using curl at the command line, you may have to escape characters. For example, $ is used in $Export and $Status, but $ is a variable value in the Bash command line.</li>
    </ul>
  </dd>
  
  <dt class="font-sans-md text-bold">405 HTTP response: method not allowed</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p>You’re trying to execute a method which the endpoint does not support. For example, calling "/secure/get" as a POST method, even though the endpoint only supports GET methods.</p>
  </dd>
  
  <dt class="font-sans-md text-bold">429 HTTP response: too many requests</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p>You’re creating too many job requests within a short period of time. Try waiting a bit before making another request.</p>
  </dd>
  
  <dt class="font-sans-md text-bold">Unable to download bulk data file</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <ul>
      <li>Your file name and/or job ID are incorrect. Check the job status again to verify these details.</li>
      <li>You requested to download the file more than 6 times.</li>
      <li>You waited too long to download your completed job files. Files expire and automatically delete after 72 hours.</li>
      <li>There’s a server error. If this continues to happen, contact the AB2D team at <a href="mailto:ab2d@cms.hhs.gov">ab2d@cms.hhs.gov</a>.</li>
    </ul>
  </dd>
</dl>

[Learn more about standard HTTP Codes.](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Common questions

<!--TODO: add an "expand all" feature here. Can appear as a simple hyperlink -->

<div class="padding-top-4"></div>

{% capture a5AccordionContent %}
<p>
  Using the system that will access the API, open your browser and visit <a href="http://checkip.amazonaws.com">http://checkip.amazonaws.com/</a>. If you don’t have a browser query from your system’s command line:    
</p>
<ul>
    <li>Linux/Mac: Open a terminal and run the command <code class="inline-code">curl -X GET checkip.amazonaws.com</code></li>
    <li>Windows: Open a Powershell terminal and run the command <code class="inline-code">Invoke-RestMethod -Method GET checkip.amazonaws.com</code></li>
</ul>
{% endcapture %}

{% capture a6AccordionContent %}
<p>
Check that you’re using the correct system. The IP address should match what you gave to the AB2D team during [production access]({{ '/production-access' | realtive_url }}) . 
</p>
<p>
If the system is correct, check with your IT team to make sure you have a static IP address. If your IP address isn’t static, it may have changed. You must have a static IP address to use the API. 
</p>
{% endcapture %}

{% capture a7AccordionContent %}
<p>
  Use 1 of these methods:
</p>
<ol>
    <li>On the command line of the system you want to use, run 1 of the following commands:</li>
        <ul>
        <li>
          Linux/Mac: In a terminal, run <code class="inline-code">curl -X GET https://api.ab2d.cms.gov/health --verbose</code>
        </li>
        <li>
          Windows: In a powershell terminal, run <code class="inline-code">Invoke-RestMethod -Method GET https://api.ab2d.cms.gov/health </code>
        </li>
        </ul>
        <li>In Postman, create a new GET request against the URL <code class="inline-code"><a href="https://api.ab2d.cms.gov/health">https://api.ab2d.cms.gov/health</a></code>. If the response has an HTTP status of 200 then your IP address can connect.</li>
        <li>Open a browser and visit <code class="inline-code"><a href="https://api.ab2d.cms.gov/swagger-ui/index.html">https://api.ab2d.cms.gov/swagger-ui/index.html</a></code>.</li>    
        <li>Open a browser and visit <code class="inline-code">https://api.ab2d.cms.gov/swagger-ui/index.html</code></li>
</ol>
{% endcapture %}

{% capture a8AccordionContent %}
<p>
  You can provide the AB2D team with up to 8 IP addresses.
</p>
{% endcapture %}

{% capture a9AccordionContent %}
<p>
  Contact the AB2D team at <a href="mailto:ab2d@cms.hhs.gov">ab2d@cms.hhs.gov</a> to change your organization’s IP address(es).
</p>
{% endcapture %}

{% capture a10AccordionContent %}
<p>
  You’re running too many jobs at once. If the API is busy, the job will be queued in a backlog.
</p>
{% endcapture %}

{% capture a11AccordionContent %}
<ul>
  <li>
    On the command line, run 1 of the following commands:
  </li>
    <ul>
      <li>
        <strong>Linux/Mac:</strong> In a terminal, run <code class="inline-code">curl -X DELETE https://api.ab2d.cms.gov/api/v2/fhir/Job/{job_uuid}/$status --verbose</code>. Make sure to fill in {job_uuid} with the ID of the running job.
      </li>
      <li>
        <strong>Windows:</strong> In a Powershell terminal, run <code class="inline-code">Invoke-RestMethod -Method DELETE https://api.ab2d.cms.gov/api/v2/fhir/Job/{job_uuid}/$status</code>. Make sure to fill in {job_uuid} with the ID of the running job.
      </li>
    </ul>
  <li>
    In Postman, create a new DELETE request against the URL <code class="inline-code">https://api.ab2d.cms.gov/api/v2/fhir/Job/{job_uuid}/$status</code>. Note the request parameter {job_uuid} must be set in Postman.
  </li>
  <li>
    In a browser, visit <code class="inline-code"><a href="https://api.ab2d.cms.gov/swagger-ui/index.html#/Status/deleteRequestUsingDELETE">https://api.ab2d.cms.gov/swagger-ui/index.html#/Status/deleteRequestUsingDELETE</a></code> and enter your job ID.
  </li>
</ul>
{% endcapture %}

{% capture a12AccordionContent %}
<p>
  The response will contain the list of files requested and the URLs to download them.
</p>
{% endcapture %}

{% capture a13AccordionContent %}
<p>
  The status API will return an error for the job. Any files created will be deleted.
</p>
{% endcapture %}

{% capture a14AccordionContent %}
<p>
  No, you can’t download files from a failed job. You must restart the job.
</p>
{% endcapture %}

{% capture a15AccordionContent %}
<p>
  If you received a 403 error your bearer token may be expired or incorrect. Get another bearer token and restart the job.
</p>
<p>
  4xx errors mean your files have been downloaded more than 6 times or are expired. Files expire and automatically delete after 72 hours. 
</p>
{% endcapture %}

{% capture a16AccordionContent %}
<p>
  STU3 and R4 are different Fast Healthcare Interoperability Resources (FHIR) versions for data transmission. AB2D provides <a href="http://hl7.org/fhir/STU3/explanationofbenefit.html">STU3</a> and <a href="http://hl7.org/fhir/R4/explanationofbenefit.html">R4</a> versions for 1 resource type, ExplanationOfBenefit.
</p>
{% endcapture %}

{% capture a17AccordionContent %}
<p>
 Version 1 of the API uses STU3 (https://api.ab2d.cms.gov/api/v1/fhir) and version 2, which is recommended by the AB2D team, uses R4 (https://api.ab2d.cms.gov/api/v2/fhir). 
</p>
<p>
 Requests made to both versions of the API are largely the same except for the way they process parameters. The data returned by each version is detailed in the <a href="{{ '/ab2d-data' | relative_url }}">AB2D Data Dictionary</a>. <a href="https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx">Learn how to migrate from V1 to V2</a>. 
</p>
{% endcapture %}

{% capture a18AccordionContent %}
<p>
  The default value for the _since parameter changes between versions. The _until parameter is also only available with V2.
</p>
<p>
  In V1, a date must be specified to use _since. If no _since value is specified, it will default to February 13, 2020 or your organization's attestation date, whichever is later. In V2, if no _since value is specified, it will default to the date of your last successful export. If this is your first job, it will default to the same date as V1. <a href="{{ '/query-parameters-V2' | relative_url }}">Learn how to use parameters</a>.
</p>
{% endcapture %}

{% include accordion.html id="a5" heading="How do I find my IP address?" expanded=false bordered=false accordionContent=a5AccordionContent %}

{% include accordion.html id="a6" heading="The IP address is incorrect, what should I do?" expanded=false bordered=false accordionContent=a6AccordionContent %}

{% include accordion.html id="a7" heading="How do I determine if my IP address can connect to AB2D?" expanded=false bordered=false accordionContent=a7AccordionContent %}

{% include accordion.html id="a8" heading="How many IP addresses can my organization add?" expanded=false bordered=false accordionContent=a8AccordionContent %}

{% include accordion.html id="a9" heading="What if I need to change or remove an IP address(es)?" expanded=false bordered=false accordionContent=a9AccordionContent %}

{% include accordion.html id="a10" heading="Why is my job stuck at 0%? It’s queueing and not starting immediately." expanded=false bordered=false accordionContent=a10AccordionContent %}

{% include accordion.html id="a11" heading="How do I cancel a job that’s already started?" expanded=false bordered=false accordionContent=a11AccordionContent %}

{% include accordion.html id="a12" heading="What response do I get when the job is complete?" expanded=false bordered=false accordionContent=a12AccordionContent %}

{% include accordion.html id="a13" heading="What happens if the job fails?" expanded=false bordered=false accordionContent=a13AccordionContent %}

{% include accordion.html id="a14" heading="Can I retrieve the results of a job that fails?" expanded=false bordered=false accordionContent=a14AccordionContent %}

{% include accordion.html id="a15" heading="I tried to download the files and got an error message." expanded=false bordered=false accordionContent=a15AccordionContent %}

{% include accordion.html id="a16" heading="What is FHIR STU3 and R4?" expanded=false bordered=false accordionContent=a16AccordionContent %}

{% include accordion.html id="a17" heading="How does AB2D provide FHIR versions?" expanded=false bordered=false accordionContent=a17AccordionContent %}

{% include accordion.html id="a18" heading="How are parameters different between V1 and V2?" expanded=false bordered=false accordionContent=a18AccordionContent %}
