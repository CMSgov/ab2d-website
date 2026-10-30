---
layout: api-docs
page_title: "Troubleshooting Guide"
seo_title: "Troubleshooting Guide for Medicare Claims Data"
description: "Resolve common issues, errors, and technical challenges you may encounter while accessing claims data."
in-page-nav: true
in-page-nav-levels: "h2"
---

<h1>Trouble&shy;shooting Guide</h1>

The troubleshooting guide provides technical assistance to Prescription Drug Plan (PDP) sponsors trying to use the AB2D API. For further assistance, visit [Support]({{ '/support' | relative_url }}).

## HTTP response codes

<dl>
  <dt class="font-sans-md text-bold margin-bottom-4">200 HTTP response: request completed successfully</dt>
  <dd></dd>

  <dt class="font-sans-md text-bold margin-bottom-4">202 HTTP response: request accepted but still processing</dt>
  <dd></dd>

  <dt class="font-sans-md text-bold">400 HTTP response: bad request</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p class="margin-top-105">General response when something is wrong (e.g., missing a request parameter or body).</p>
  </dd>

  <dt class="font-sans-md text-bold">401 HTTP response: forbidden</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p class="margin-top-105">Your token is incorrect or has expired. Authentication has not been completed successfully.</p>
  </dd>

  <dt class="font-sans-md text-bold">403 HTTP response: unauthorized</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p class="margin-top-105">You don’t have permission to access the requested data. This can happen for a variety of reasons:</p>
    <ul>
      <li>Your token has expired.</li>
      <li>You have specified a contract that is not yours.</li>
      <li>You’re not authorized to use the API.</li>
      <li>Authentication has failed.</li>
    </ul>
  </dd>

  <dt class="font-sans-md text-bold">403 HTTP response: forbidden</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p class="margin-top-105">Authentication succeeded, but you don’t have permission to access the requested data. This can happen due to a variety of reasons:</p>
    <ul>
      <li>The credentials provided may have a typo or syntax error (e.g., spaces, hidden characters).</li>
      <li>The credentials provided may have been encoded to Base64 incorrectly.</li>
      <li>You’re connected to the sandbox idP (test.idp.idm.cms.gov) instead of the production idP (idm.cms.gov).</li>
      <li>Authentication may have failed because of an incorrect header. "Authorization : Basic Auth" is the correct header.</li>
    </ul>
  </dd>

  <dt class="font-sans-md text-bold">404 HTTP response: page not found</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p class="margin-top-105">Resource or page not found. You could authenticate but the API endpoint does not exist. Troubleshooting:</p>
    <ul>
      <li>Check the URL to make sure it exists. Enter it in a browser to check which error occurred. You won’t have passed credentials or necessary parameters, so it’ll give you another error. However, it shouldn’t give you a 404.</li>
      <li>If you’re using curl at the command line, you may have to escape characters. For example, $ is used in $Export and $Status, but $ is a variable value in the Bash command line.</li>
    </ul>
  </dd>

  <dt class="font-sans-md text-bold">405 HTTP response: method not allowed</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p class="margin-top-105">You’re trying to execute a method which the endpoint does not support. For example, calling "/secure/get" as a POST method, even though the endpoint only supports GET methods.</p>
  </dd>

  <dt class="font-sans-md text-bold">429 HTTP response: too many requests</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <p class="margin-top-105">You’re creating too many job requests within a short period of time. Try waiting a bit before making another request.</p>
  </dd>

  <dt class="font-sans-md text-bold">Unable to download bulk data file</dt>
  <dd class="margin-left-0 margin-bottom-4">
    <ul class="margin-top-105">
      <li>Your file name and/or job ID are incorrect. Check the job status again to verify these details.</li>
      <li>You requested to download the file more than 6 times.</li>
      <li>You waited too long to download your completed job files. Files expire and automatically delete after 72 hours.</li>
      <li>There’s a server error. If this continues to happen, contact the AB2D team at <a href="mailto:ab2d@cms.hhs.gov">ab2d@cms.hhs.gov</a>.</li>
    </ul>
  </dd>
</dl>

[Learn more about standard HTTP Codes.](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Common questions


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
Check that you’re using the correct system. The IP address should match what you gave to the AB2D team during <a href="{{ '/production-access' | relative_url }}">production access</a>.
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
        <li>In Postman, create a new GET request against the URL https://api.ab2d.cms.gov/health. If the response has an HTTP status of 200 then your IP address can connect.</li>
        <li>Open a browser and visit <a href="https://api.ab2d.cms.gov/swagger-ui/index.html" target="_blank" rel="noopener">https://api.ab2d.cms.gov/swagger-ui/index.html</a>.</li>
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
    In Postman, create a new DELETE request against the URL https://api.ab2d.cms.gov/api/v2/fhir/Job/{job_uuid}/$status. Note the request parameter {job_uuid} must be set in Postman.
  </li>
  <li>
    In a browser, visit <a href="https://api.ab2d.cms.gov/swagger-ui/index.html#/Status/deleteRequestUsingDELETE" target="_blank" rel="noopener">https://api.ab2d.cms.gov/swagger-ui/index.html#/Status/deleteRequestUsingDELETE</a> and enter your job ID.
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
  AB2D sends data using Fast Healthcare Interoperability Resources (FHIR), a standard format for exchanging health data. v1 uses FHIR STU3. v2 and v3 use FHIR R4. All versions return one resource type, ExplanationOfBenefit (EOB).
</p>
{% endcapture %}

{% capture a17AccordionContent %}
<p>
The AB2D team recommends v3. v1 and v2 will be retired on July 30, 2027, so PDPs should plan to migrate to v3 before then.

Read the v3 migration guide here.
</p>
<p>
 Requests made to both versions of the API are largely the same except for the way they process parameters. The data returned by each version is detailed in the <a href="{{ '/ab2d-data#data-dictionary' | relative_url }}">AB2D Data Dictionary</a>.
</p>
{% endcapture %}

{% capture a18AccordionContent %}
<p>
v3 offers the most filtering capability of all AB2D versions. v3 supports filtering on the date a claim was last updated using _since and _until parameters, as well as filtering on a claim's service-date using the _typeFIlter parameter.

Unlike prior versions of the API, v3 does not does not set these parameters for you and does not track the date of your last successful export. As a result, a request with no parameters will return all your data, which can cause long job run times or even timeouts and failed jobs

v2 only supports the _since and _until parameters which are populated by default if a value is not provided. v1 only supports the _until parameter.
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

{% include accordion.html id="a16" heading="Which FHIR versions does AB2D use?" expanded=false bordered=false accordionContent=a16AccordionContent %}

{% include accordion.html id="a17" heading="Which version should I use?" expanded=false bordered=false accordionContent=a17AccordionContent %}

{% include accordion.html id="a18" heading="How are parameters different across versions?" expanded=false bordered=false accordionContent=a18AccordionContent %}

{% include feedback-form.html id="47414305" %}
