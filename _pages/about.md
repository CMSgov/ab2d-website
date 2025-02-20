---
layout: default
page_title: "About AB2D"
seo_title: "About AB2D | Medicare Parts A & B Claims Data API"
description: "AB2D helps Prescription Drug Plan sponsors optimize outcomes for medication therapies. Learn about its permitted uses and history."
permalink: /about
show-side-nav: false
---

<div class="grid-row grid-gap-4 desktop:grid-gap-6 padding-y-4 margin-bottom-10 flex-align-center">
  <div class="tablet:grid-col-5 tablet:order-2">
    <img src="{{ '/assets/img/data-specialist.svg' | relative_url }}" alt="data analysis illustration" class="padding-x-6 padding-y-2"/>
  </div>
  <div class="tablet:grid-col tablet:order-1" >
    <h1>{{ page.page_title }}</h1>
    <p>
      The AB2D API shares access to Medicare Parts A and B data. AB2D is only available to active, stand-alone Prescription Drug Plan (PDP) sponsors. Also known as Part D sponsors, these are insurers that deliver Part D benefits to Medicare enrollees. 
    </p>
    <table class="usa-table usa-table--borderless usa-table--stacked">
      <caption class="usa-sr-only">Definitions of Part A and Part B claims data</caption>
      <thead>
        <tr>
          <th scope="col">Data type</th>
          <th scope="col">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><strong>Medicare Part A claims data</strong></th>
          <td>
            inpatient hospital stays, care in skilled nursing facilities, and hospice care
          </td>
        </tr>
        <tr>
          <th scope="row"><strong>Medicare Part B claims data</strong></th>
          <td>
            various doctors' services, outpatient care, medical supplies, and preventive services
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## What are permitted uses of the data? 

<div class="grid-row grid-gap margin-top-2">
  <div class="tablet:grid-col">
    <p class="margin-bottom-2 text-bold">
      The <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745" target="_blank" rel="noopener">final rule</a> specifies that data may be used for:
    </p>
    <ul class="usa-icon-list">
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon">
          {% include sprite.html icon="check_circle" class="text-green" %}
        </div>
        <div class="usa-icon-list__content">
          Optimizing therapeutic outcomes through improved medication use
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon">
          {% include sprite.html icon="check_circle" class="text-green" %}
        </div>
        <div class="usa-icon-list__content">
          Improving care coordination
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon">
          {% include sprite.html icon="check_circle" class="text-green" %}
        </div>
        <div class="usa-icon-list__content">
          Other purposes [that qualify] as “fraud and abuse detection or compliance activities”
        </div>
      </li>
    </ul>
  </div>

  <div class="tablet:grid-col">
    <p class="margin-bottom-2 text-bold">The following uses are not permitted:</p>
    <ul class="usa-icon-list">
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon">
          {% include sprite.html icon="cancel" class="text-red" %}
        </div>
        <div class="usa-icon-list__content">
          Inform coverage determinations under Part D;
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon">
          {% include sprite.html icon="cancel" class="text-red" %}
        </div>
        <div class="usa-icon-list__content">
          Conduct retroactive reviews of medically accepted indication(s) determinations;
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon">
          {% include sprite.html icon="cancel" class="text-red" %}
        </div>
        <div class="usa-icon-list__content">
          Facilitate enrollment changes to a different prescription drug plan or an MA-PD plan offered by the same parent organization; or
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon">
          {% include sprite.html icon="cancel" class="text-red" %}
        </div>
        <div class="usa-icon-list__content">
          Inform marketing of benefits
        </div>
      </li>
    </ul>
  </div>
</div>

<div>
  <p>
    <a href="{{ '/use-cases' | relative_url }}" class="usa-button usa-button--unstyled">Explore use cases {% include sprite.html icon="arrow_forward" %}</a>
  </p>
</div>


<div class="grid-row grid-gap-4 desktop:grid-gap-6 padding-y-8 flex-align-center">
  <div class="tablet:grid-col-5 tablet:order-1">
    <img src="{{ '/assets/img/production.svg' | relative_url }}" alt="data analysis illustration" class="padding-x-6 padding-y-2"/>
  </div>
  <div class="tablet:grid-col-fill tablet:order-2">
    <h2>History of the AB2D API</h2>
    <p>
      The Centers for Medicare &amp; Medicaid Services (CMS) developed AB2D to follow the <a href="https://www.congress.gov/bill/115th-congress/house-bill/1892/text" target="_blank" rel="noopener">Bipartisan Budget Act of 2018 (BBA)</a> and <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745" target="_blank" rel="noopener">final rule</a>. This is in accordance with requirements to share claims data with PDP sponsors that have active contracts.
    </p>
    <p>
      AB2D provides PDP sponsors with Medicare data to promote the best use of medications and improve health outcomes. AB2D electronically exchanges healthcare information using the <a href="https://hl7.org/fhir/R4/index.html" target="_blank" rel="noopener">Fast Healthcare Interoperability Resources (FHIR)</a> standard for efficient and secure data sharing.
    </p>
  </div>
</div>

## What are the other CMS claims-based FHIR APIs?

<ul class="usa-card-group flex-justify-center padding-y-4">
  {% include card.html
    icon="/assets/img/logo-bcda.svg"
    img-alt="BCDA logo"
    heading-level="h3"
    title="Beneficiary Claims Data API"
    body="The Beneficiary Claims Data API (BCDA) helps Alternative Payment Model participants provide high-quality, coordinated care by making it easier to access bulk Medicare Parts A, B, and D claims data."
    footer-link="https://bcda.cms.gov/"
    footer-link-text="Visit BCDA"
    button=true
  %}

  {% include card.html
    icon="/assets/img/logo-bluebutton.svg"
    img-alt="BB 2.0 logo"
    heading-level="h3"
    title="Blue Button 2.0"
    body="The Blue Button 2.0 (BB2.0) API enables enrollees to connect their Medicare claims data to applications, services, and research programs they trust."
    footer-link="https://bluebutton.cms.gov/"
    footer-link-text="Visit BB2.0"
    button=true
  %}

  {% include card.html
    icon="/assets/img/logo-dpc.svg"
    img-alt="DPC logo"
    heading-level="h3"
    title="Data at the Point of Care"
    body="The Data at the Point of Care (DPC) API enables healthcare providers with claims data to fill in gaps in patient history at the point of care and deliver high-quality services to Medicare enrollees."
    footer-link="https://dpc.cms.gov/"
    footer-link-text="Visit DPC"
    button=true
  %}
</ul>
