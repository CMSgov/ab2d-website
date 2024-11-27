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
    <p>AB2D is an Application Programming Interface using <a href="https://www.hl7.org/fhir/overview.html">Bulk Fast Healthcare Interoperability Resources (FHIR)</a> in NDJSON format. It provides access to data including:</p>
    <ul>
      <li>enrollee identifiers</li>
      <li>diagnosis codes</li>
      <li>dates and times of service</li>
    </ul>
    <p><a href="{{ '/ab2d-data' | relative_url }}">Learn about the data</a></p>
  </div>
</div>

<div class="grid-row grid-gap-4 desktop:grid-gap-6 padding-y-4 flex-align-center">
  <div class="tablet:grid-col tablet:order-2">
    <img src="{{ '/assets/img/pharmacist.svg' | relative_url }}" alt="pharmacist illustration" />
  </div>
  <div class="tablet:grid-col tablet:order-1">
    <h2>What are permitted uses of the data?</h2>
    <p>AB2D allows PDP sponsors to improve therapeutic outcomes and care coordination, with limitations on how the data can be used to inform coverage determinations.</p>
    <p><a href="{{ '/about' | relative_url }}">View permitted uses</a></p>
  </div>
</div>

