---
layout: hero
title:  "AB2D API"
active-nav: home
hero: true
hero-title: "Improve Medication Therapy with Medicare Claims Data"
hero-paragraph: >
  AB2D is an Application Programming Interface (API) for Prescription Drug
  Plan (PDP) sponsors. Offered by the Centers for Medicare & Medicaid Services
  (CMS), AB2D provides Parts A and B claims data for a holistic view into
  patients' health.
hero-button-url: "/api-documentation"
hero-button-text: "Get started"
hero-button-2-url: "https://github.com/CMSgov/ab2d"
hero-button-2-text: "Code Repo"

---

## Use cases for the AB2D API

<ul class="usa-card-group flex-justify-center padding-y-4">
  {% include card.html
    heading-level="h3"
    title="Target MTM program enrollees"
    body="Identify Medication Therapy Management enrollees by using data for a more thorough search capability."
  %}

   {% include card.html
    heading-level="h3"
    title="Enhance MTM consultations"
    body="Leverage insights from enrollee medical histories for more effective services."
  %}

  {% include card.html
    heading-level="h3"
    title="Boost health outcomes"
    body="Enhance MTM enrollee health and program results by improving medication use and adherence."
  %}

  {% include card.html
    heading-level="h3"
    title="Prevent fraud, waste, and abuse"
    body="Identify suspicious activity from providers or suppliers through access to mass data."
  %}

  {% include card.html
    bg-color="base-lightest"
    footer-link="/use-cases"
    footer-link-text="Learn more about use cases"
  %}

    {% include card.html
    bg-color="base-lighter"
    footer-link="/mtm-white-paper"
    footer-link-text="Read the MTM white paper"
  %}

</ul>

<div class="grid-row grid-gap-4 desktop:grid-gap-6 padding-y-4 flex-align-center">
  <div class="tablet:grid-col">
    <img src="{{ '/assets/img/data-analysis.svg' | relative_url }}" alt="data analysis illustration" />
  </div>
  <div class="tablet:grid-col" >
    <h2>Using the data</h2>
    <p>AB2D is an Application Programming Interface using <a href="https://www.hl7.org/fhir/overview.html">Fast Healthcare Interoperability Resources (FHIR)</a> in NDJSON format. It provides access to data including:</p>
    <ul>
      <li>enrollee identifiers</li>
      <li>diagnosis codes</li>
      <li>dates and times of service</li>
    </ul>
    <p><a href="{{ '/ab2d-data' | relative_url }}">Learn about the data</a></p>
  </div>
</div>


<div class="grid-row grid-gap margin-top-4">
  <div class="tablet:grid-col">
    <p class="margin-bottom-2 text-bold">
      The <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745">final rule</a> specifies that data may be used for:
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
    <p>
      <a href="{{ '/about' | relative_url }}" class="usa-button usa-button--unstyled"> Learn more about AB2D {% include sprite.html icon="arrow_forward" %}</a>
    </p>
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


