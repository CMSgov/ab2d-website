---
layout: api-docs
page_title: "Production Access"
seo_title: "Production Access to Claims Data for PDP Sponsors | AB2D API"
description: "Prescription Drug Plan sponsors can access enrollees' Parts A & B Medicare claims data with production access to the AB2D API."
permalink: /production-access
in-page-nav: true
in-page-nav-levels: "h2"
show-side-nav: false
---

# {{ page.page_title }}

Only active, stand-alone Prescription Drug Plan (PDP) sponsors can access enrollee claims data in the production environment. Before accessing production claims data, make sure you've followed the steps listed in [API Documentation]({{ '/api-documentation' | relative_url }}).

<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h2 class="usa-process-list__heading margin-bottom-2">Attest to AB2D data protocols</h2>
      <span class="usa-tag bg-accent-cool-darker">Completed by Attestor</span>
      <p>
          A current CEO, CFO, or COO  (“Attestor”) from your organization first needs to agree (“attest") to our Claims Data Usage Protocols. These protocols include <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745" target="_blank" rel="noopener">legal limitations on data use and disclosure.</a>
      </p>
      <p> 
          Log in to the <a href="https://hpms.cms.gov/app/ng/cda/attestations" target="_blank" rel="noopener">Health Plan Management System (HPMS)</a> and select <em>Claims Data Attestation</em> (under <em>Contract Management</em>). We encourage you to have multiple Attestors. This prevents gaps in access if Attestors leave the organization.
      </p>
      <div class="padding-top-4 usa-accordion usa-accordion--multiselectable" data-allow-multiple>
        <h3 class="usa-accordion__heading">
          <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a1">
            How do I complete attestation?
          </button>
        </h3>
        <div id="m-a1" class="usa-accordion__content usa-prose">
          <p>
            Once you log in to the <a href="https://hpms.cms.gov/app/ng/cda/attestations" target="_blank" rel="noopener">HPMS</a> and select <em>Claims Data Attestation</em> (under <em>Contract Management</em>):
          </p>
          <ol>
            <li>Choose single, multiple, or all contracts in the <em>Contracts Without Attestation</em> window.</li>
            <li>Select <em>Attest</em>.</li>
            <li>Agree to the <em>Claims Data Usage Protocols</em>.</li>
          </ol>
          <p>
            To add multiple Attestors, follow the same steps and select <em>Re-attest</em> during step 2.
          </p>
        </div>
        <h3 class="usa-accordion__heading">
          <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a2">
            What are the requirements to be an Attestor?
          </button>
        </h3>
        <div id="m-a2" class="usa-accordion__content usa-prose">
          <ul>
            <li>Be part of an active, stand-alone PDP organization (PACE and MAPD are ineligible)</li>
            <li>Hold a current CEO, CFO, or COO role within the organization</li>
            <li>Attest to each contract that will connect to AB2D</li>
          </ul>
        </div>
        <h3 class="usa-accordion__heading">
          <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a3">
            How does attestation affect your claims data?
          </button>
        </h3>
        <div id="m-a3" class="usa-accordion__content usa-prose">
          <ul>
            <li>
              PDP sponsors can retrieve claims data for their active plan enrollees from the date of attestation onwards. Claims data prior to their attestation date will not be provided.
            </li>
            <li>
              PDP sponsors must have an active Attestor at all times. Your organization will not be able to receive data during periods without an active Attestor. Access to data will only be restored once another active CEO, CFO, or COO attests. 
            </li>
          </ul>
        </div>
        <h3 class="usa-accordion__heading">
          <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a4">
            When does attestation take effect?
          </button>
        </h3>
        <div id="m-a4" class="usa-accordion__content usa-prose">
          <p>
            Once an organization attests, it must complete all the remaining steps for production access. This includes choosing a technical point of contact, testing synthetic data in the sandbox, and receiving production credentials. Once these steps are complete, the organization will have access to claims data starting from the attestation date. Claims data previous to that date will not be available. 
          </p>
        </div>
      </div>
  </li>
  <li class="usa-process-list__item">
    <h2 class="usa-process-list__heading margin-bottom-2">Choose an AB2D Data Operations Specialist</h2>
    <span class="usa-tag bg-accent-cool-darker">Completed by Attestor</span>
    <p>
      Once attestation is complete, the Attestor will receive an email with instructions on how to assign an AB2D Data Operations Specialist (ADOS). This is a primary technical point of contact for your organization.
    </p>
    <p><b>What are the requirements to be an ADOS?</b></p>
    <ul>
      <li>Employee or vendor with authority to access and view your organization’s enrollee data</li>
      <li>Expertise to connect to and retrieve data from the sandbox and production environments</li>
      <li>Ability to provide static IP address(es) and/or CIDR ranges for every system accessing the API</li>
    </ul>
  </li>
  <li class="usa-process-list__item">
    <h2 class="usa-process-list__heading margin-bottom-2">Retrieve sandbox data</h2>
    <span class="usa-tag">Completed by AB2D Data Ops Specialist</span>
    <h3 class="font-sans-sm">Verify sandbox data retrieval</h3>
      <p>
        The ADOS will receive an email with instructions on next steps. They must send the AB2D team the job ID from a successful data export in the sandbox. The sandbox is a test environment that allows anyone to try the API and retrieve synthetic claims data. Learn <a href="{{ '/get-a-bearer-token' | relative_url }}">how to get a bearer token</a> and <a href="{{ '/access-sandbox-data' | relative_url }}">access sandbox data</a>.
      </p>
    <h3 class="font-sans-sm">Provide your IP addresses</h3>
      <p>
        Your organization must provide the AB2D team with the public, static IP address(es) of every system that will use the API. These will be reviewed, approved, and allowlisted as an additional layer of security.  
      </p>
  </li>
  <li class="usa-process-list__item">
    <h2 class="usa-process-list__heading margin-bottom-2">Get production credentials</h2>
    <span class="usa-tag bg-accent-cool-darker">Completed by Attestor</span>
    <span>and</span>
    <span class="usa-tag">Completed by AB2D Data Ops Specialist</span>
    <p>
      The Attestor will receive an email with production credentials to share with their ADOS.  Production credentials are Personally Identifiable Information (PII) that allow the ADOS to <a href="{{ '/get-a-bearer-token' | relative_url }}">get a bearer token</a> and <a href="{{ '/access-production-claims-data' | relative_url }}">access production claims data</a>.
    </p>
    <p>
      If you have questions or need help, visit <a href="{{ '/support' | relative_url }}">Support</a> or contact the AB2D team at <a href="mailto:ab2d@cms.hhs.gov">ab2d@cms.hhs.gov</a>.
    </p>
  </li>
</ol>
