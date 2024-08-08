---
layout: default
title:  "About AB2D"
permalink: /about
full-width: true
---

# {{ page.title }}

Of the 65 million beneficiaries covered by Medicare programs, stand-alone Prescription Drug Plan sponsors (PDPs) cover more than 22 million people. The AB2D API provides Medicare Parts A and B claims data to fill gaps in patients' health information for a holistic view that supports better care.

<a href="{% link api-data.md %}" class="usa-button usa-button--unstyled">Explore the data {% include sprite.html icon="arrow_forward" %}</a>

## What are permitted uses of the data? 

<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <p class="margin-bottom-2 text-bold">
      The <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745">final rule</a> specifies that data may be used for:
    </p>
    <ul class="usa-icon-list">
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon" id="status-icon">
          {% include sprite.html icon="check_circle" class="text-green" %}
        </div>
        <div class="usa-icon-list__content" id="status-content">
          Optimizing therapeutic outcomes through improved medication use
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon" id="status-icon">
          {% include sprite.html icon="check_circle" class="text-green" %}
        </div>
        <div class="usa-icon-list__content" id="status-content">
          Improving care coordination
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon" id="status-icon">
          {% include sprite.html icon="check_circle" class="text-green" %}
        </div>
        <div class="usa-icon-list__content" id="status-content">
          Other purposes [that qualify] as “fraud and abuse detection or compliance activities”
        </div>
      </li>
    </ul>
    <p>
      <a href="{% link use-cases.md %}" class="usa-button usa-button--unstyled">Explore use cases {% include sprite.html icon="arrow_forward" %}</a>
    </p>
  </div>

  <div class="tablet:grid-col">
    <p class="margin-bottom-2 text-bold">The following uses are not permitted:</p>
    <ul class="usa-icon-list">
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon" id="status-icon">
          {% include sprite.html icon="cancel" class="text-red" %}
        </div>
        <div class="usa-icon-list__content" id="status-content">
          "(i) To inform coverage determinations under Part D;
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon" id="status-icon">
          {% include sprite.html icon="cancel" class="text-red" %}
        </div>
        <div class="usa-icon-list__content" id="status-content">
          (ii) To conduct retroactive reviews of medically accepted indication(s) determinations;
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon" id="status-icon">
          {% include sprite.html icon="cancel" class="text-red" %}
        </div>
        <div class="usa-icon-list__content" id="status-content">
          (iii) To facilitate enrollment changes to a different prescription drug plan or an MA-PD plan offered by the same parent organization; or
        </div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon" id="status-icon">
          {% include sprite.html icon="cancel" class="text-red" %}
        </div>
        <div class="usa-icon-list__content" id="status-content">
          (iv) To inform marketing of benefits"
        </div>
      </li>
    </ul>
  </div>
</div>

<div class="usa-section--dark bg-primary padding-y-6 margin-y-6" markdown="1">

## What requirements led to AB2D?
The AB2D API (AB2D) supports government initiatives to improve patient health. The Centers for Medicare & Medicaid (CMS) developed AB2D to follow the [Bipartisan Budget Act of 2018 (BBA)](https://www.congress.gov/bill/115th-congress/house-bill/1892/text) and [final rule](https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare). This is in accordance with requirements to share claims data with PDPs who have active contracts.

## How does AB2D support these requirements?
AB2D provides PDPs with Medicare Parts A and B claims data. This data helps PDPs promote the best use of medications to improve health outcomes. AB2D utilizes the [Bulk Fast Healthcare Interoperability Resources (FHIR)](https://www.hl7.org/fhir/overview.html) standard for exchanging healthcare information electronically in order to make data sharing efficient and secure.

</div>

## What are the other CMS Claims-Based FHIR APIs?

<ul class="usa-card-group flex-justify-center padding-y-4">
  {% include card.html
    icon="/assets/img/logo-bcda.svg"
    img-alt="BCDA logo"
    heading-level="h3"
    title="Beneficiary Claims Data API"
    body="The Beneficiary Claims Data API (BCDA) helps Alternative Payment Model participants provide high quality, coordinated care by making it easier to access bulk Medicare Part A, B, and D claims."
    footer-link="https://bcda.cms.gov/"
    footer-link-text="Visit BCDA"
    button=true
  %}

  {% include card.html
    icon="/assets/img/logo-bluebutton.svg"
    img-alt="BB 2.0 logo"
    heading-level="h3"
    title="Blue Button 2.0"
    body="The Blue Button 2.0 (BB 2.0) API enables beneficiaries to connect their Medicare claims data to applications, services, and research programs they trust."
    footer-link="https://bluebutton.cms.gov/"
    footer-link-text="Visit BB 2.0"
    button=true
  %}

  {% include card.html
    icon="/assets/img/logo-dpc.svg"
    img-alt="DPC logo"
    heading-level="h3"
    title="Data at the Point of Care"
    body="The Data at the Point of Care (DPC) API enables healthcare providers with claims data to fill in gaps in patient history at the point of care and deliver high quality services to Medicare beneficiaries."
    footer-link="https://dpc.cms.gov/"
    footer-link-text="Visit DPC"
    button=true
  %}
</ul>
