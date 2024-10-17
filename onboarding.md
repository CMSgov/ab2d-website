---
layout: default
title:  "Onboarding"
permalink: /onboarding
in-page-nav: true
---

# {{ page.title }}

Only active, stand-alone Prescription Drug Plan (PDP) sponsors can access production enrollee claims data, but anyone can use the sandbox environment to get test claims data and try the API.

<a href="{{ '/how-to-access-test-claims-data' | relative_url }}" class="usa-button margin-bottom-3">Visit the sandbox</a>

## Get production access

<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading margin-bottom-2">Attest to AB2D data protocols</h3>
      <span class="usa-tag bg-accent-cool-dark">Completed by Attestor</span>
      <p>
          A current CEO, CFO, or COO  (“Attestor”) from your organization first needs to agree (“attest") to our Claims Data Usage Protocols. These protocols include <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745">legal limitations on data use and disclosure.</a>
      </p>
      <p> 
          Log in to the <a href="https://hpms.cms.gov/app/ng/cda/attestations">Health Plan Management System (HPMS)</a> and select <a href="https://hpms.cms.gov/app/ng/cda/attestations"><em>Claims Data Attestation</em></a> (under Contract Management). We encourage you to have multiple Attestors. This prevents gaps in access if Attestors leave the organization.
      </p>
      <div class="padding-top-4"></div>
{% capture a1Content %}{% raw %}
<div>
  <p>
    Once you log in to the <a href="https://hpms.cms.gov/app/ng/cda/attestations">HPMS</a> and select <a href="https://hpms.cms.gov/app/ng/cda/attestations"><em>Claims Data Attestation</em></a> (under Contract Management):
  </p>
  <ol>
    <li>Choose an option for a single, multiple, or all contracts in the Contracts Without Attestation window.</li>
    <li>Select the Attest button.</li>
    <li>Review the Claims Data Usage Protocols.</li>
    <li>Select I hereby certify that I understand the attestation above.</li>
    <li>Select Confirm.</li>
  </ol>
  <p>
    To add multiple Attestors, follow the same steps and select the Re-attest button in step 4.
  </p>
</div>
{% endraw %}{% endcapture %}

{% capture a2Content %}{% raw %}
<ul>
  <li>Be part of an active, stand-alone PDP organization (PACE and MAPD are ineligible)</li>
  <li>Hold a current CEO, CFO, or COO role within the organization</li>
  <li>Attest to each contract that will connect to AB2D</li>
</ul>
{% endraw %}{% endcapture %}

{% capture a3Content %}{% raw %}
<ul>
  <li>
    PDP sponsors can retrieve claims data for their active plan enrollees from the date of attestation onwards. Claims data prior to their attestation date will not be provided.
  </li>
  <li>
    PDP sponsors must have an active Attestor at all times. Your organization will not be able to receive data during periods without an active Attestor. Access to data will only be restored once another active CEO, CFO, or COO attests. 
  </li>
</ul>
{% endraw %}{% endcapture %}

{% capture a4Content %}{% raw %}
<p>
  Once an organization attests, it must follow the remaining steps in the onboarding process. This includes choosing a technical point of contact, testing synthetic data in the sandbox, and receiving production credentials. Once these steps are complete, the organization will have access to claims data starting from the attestation date. Claims data previous to that date will not be available. 
</p>
{% endraw %}{% endcapture %}

{% include accordion.html heading="How do I complete attestation?" expanded=true id="a1" bordered=true accordionContent=a1Content %}

{% include accordion.html heading="What are the requirements to be an Attestor?" expanded=false id="a2" accordionContent=a2Content %}

{% include accordion.html heading="How does attestation affect your claims data?" expanded=false id="a3" accordionContent=a3Content %}

{% include accordion.html heading="When does attestation take effect?" expanded=false id="a4" accordionContent=a4Content %}
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading margin-bottom-2">Choose an AB2D Data Operations Specialist</h3>
    <span class="usa-tag bg-accent-cool-dark">Completed by Attestor</span>
    <p>
      Once attestation is complete, the Attestor will receive an email with instructions on how to assign an AB2D Data Operations Specialist (ADOS). This is a primary technical point of contact for your organization.
    </p>
    <p>What are the requirements to be an ADOS?</p>
    <ul>
      <li>Employee or vendor with authority to access and view your organization’s enrollee data</li>
      <li>Expertise to connect to and retrieve data from the sandbox and production environments</li>
      <li>Ability to provide static IP address(es) and/or CIDR ranges for the network/system accessing the API</li>
    </ul>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading margin-bottom-2">Retrieve test claims data</h3>
    <span class="usa-tag">Completed by an AB2D Data Ops Specialist</span>
    <h4>Verify test data retrieval</h4>
      <p>
        The ADOS will receive an email with instructions on next steps. They must send the AB2D team the job ID from a successful data export in the sandbox. Learn <a href="{{ '/how-to-get-a-bearer-token' | relative_url }}">how to get a bearer token</a> and <a href="{{ '/how-to-access-test-claims-data' | relative_url }}">access test claims data</a>.
      </p>
    <h4>Provide your IP addresses</h4>
      <p>
        Your organization must provide the AB2D team with the public, static IP address(es) of every network or system that will use the API. These will be reviewed, approved, and allowlisted as an additional layer of security.  
      </p>
  </li>
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading margin-bottom-2">Get production credentials</h3>
    <span class="usa-tag bg-accent-cool-dark">Completed by Attestor</span>
    <span>and</span>
    <span class="usa-tag">Completed by an AB2D Data Ops Specialist</span>
    <p>
      The Attestor will receive an email with production credentials to share with their ADOS.  Production credentials are Personally Identifiable Information (PII) that allow the ADOS to <a href="{{ '/how-to-get-a-bearer-token' | relative_url }}">get a bearer token</a> and <a href="{{ '/how-to-access-production-claims-data' | relative_url }}">access production claims data</a>.
    </p>
    <p>
      If you have questions or need help, visit Support or contact the AB2D team at <a href="mailto:ab2d@cms.hhs.gov">ab2d@cms.hhs.gov</a>.
    </p>
  </li>
</ol>