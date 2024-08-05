---
layout: default
title:  "AB2D API"
active-nav: home
hero: true
hero-title: "Improve medication therapy with Medicare claims data"
hero-paragraph: >
  "AB2D is an Application Programming Interface (API) for Prescription Drug
  Plan sponsors (PDPs). Offered by Centers for Medicare & Medicaid Services
  (CMS), AB2D provides Parts A and B claims data for a holistic view into
  patient’s health."
hero-button-url: "/get-started"
hero-button-text: "Getting started for developers"
hero-button-2-url: "https://github.com/orgs/CMSgov/repositories?q=ab2d&type=all"
hero-button-2-text: "Code Repo"

---

<h2 class="">Your enrollees’ health insights in action</h2>

<ul class="usa-card-group flex-justify-center">
  {% include card.html
    heading-level="h3"
    title="Target MTM program enrollees"
    body="Identify Medication Therapy Management enrollees by using data for a more thorough search capability."
  %}

  {% include card.html
    heading-level="h3"
    title="Boost health outcomes"
    body="Enhance MTM enrollee health and program results by improving medication use and adherence."
  %}

  {% include card.html
    heading-level="h1"
    title="Prevent fraud, waste, and abuse"
    body="Identify suspicious activity from providers or suppliers through access to mass data."
  %}

  {% include card.html
    heading-level="h3"
    title="Enhance MTM consultations"
    body="Leverage insights from enrollee medical histories for more effective services."
  %}

  {% include card.html
    bg-color="gray-5"
    footer-link="use-cases.md"
    footer-link-text="Learn more about use cases"
  %}
</ul>
</div>

<div class="grid-container">

<div class="grid-row grid-gap-6 padding-y-4">
  <div class="tablet:grid-col">
    <img src="{{ '/assets/img/data-analysis.svg' | relative_url }}" />
  </div>
  <div class="tablet:grid-col" >
    <h2>Using the data</h2>
    <p>AB2D is an Application Programming Interface (API) using [Bulk Fast Healthcare Interoperability Resources (FHIR)](https://www.hl7.org/fhir/overview.html) in NDJSON format. It provides access to data including:</p>
    <ul>
      <li>enrollee identifiers</li>
      <li>diagnosis codes</li>
      <li>dates and times of service</li>
    </ul>
    <p><a href="{% link api-data.md %}">Learn about the data</a></p>
  </div>
</div>

<div class="grid-row grid-gap-6 padding-y-4">
  <div class="tablet:grid-col tablet:order-2">
    <img src="{{ '/assets/img/pharmacist.svg' | relative_url }}" />
  </div>
  <div class="tablet:grid-col tablet:order-1">
    <h2>What are acceptable uses of the data?</h2>
    <p>AB2D allows PDPs to improve therapeutic outcomes and care coordination, with limitations on how the data can be used to inform coverage determinations.</p>
    <p><a href="#">View permitted uses</a></p>
  </div>
</div>

