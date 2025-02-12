---
layout: api-docs
page_title: "AB2D Use Cases"
seo_title: "Claims Data Use Cases for Part D Sponsors | AB2D API"
description: "Review use cases explaining how the AB2D API helps Prescription Drug Plan sponsors leverage Medicare claims data for enhanced care."
permalink: /use-cases
in-page-nav: true
show-side-nav: false
---

# {{ page.page_title }}

<div class="grid-row grid-gap margin-y-4">
  <div class="grid-col-auto">
    {% include sprite.html icon="people" size=5 %}
  </div>
  <div class="grid-col-fill">
    <h2>Target MTM program enrollees</h2>
    <p class="usa-intro text-balance measure-4">Identify Medication Therapy Management enrollees by using data for a more thorough search capability.</p>
    <p>AB2D data can help you identify enrollees who may be eligible for your Part D <a href="https://www.cms.gov/medicare/coverage/prescription-drug-coverage-contracting/medication-therapy-management">Medication Therapy Management (MTM)</a> programs. You can use AB2D data to help identify enrollees who meet the MTM targeting criteria, like those with certain chronic diseases or diagnoses.</p>
  </div>
</div>

<div class="grid-row grid-gap margin-y-4">
  <div class="grid-col-auto">
    {% include sprite.html icon="local_pharmacy" size=5 %}
  </div>
  <div class="grid-col-fill">
    <h2>Enhance MTM consultations</h2>
    <p class="usa-intro text-balance measure-4">Leverage insights from enrollee medical histories for more effective services.</p>
    <p>Prescription Drug Plan (PDP) sponsors can use AB2D data to get a holistic overview of enrollees' health histories. This allows for more informed discussions between the MTM provider and enrollee during comprehensive or targeted medication reviews:</p>
    <ul>
      <li>Promote safe and effective medication use.</li>
      <li>Prevent potential gaps in medication therapies.</li>
      <li>Identify appropriate medication alternatives.</li>
      <li>Reduce adverse drug events or interactions.</li>
      <li>Enhance coordination of care across providers and pharmacists.</li>
      <li>Allocate resources efficiently to save on costs.</li>
    </ul>
  </div>
</div>

<div class="grid-row grid-gap margin-y-4">
  <div class="grid-col-auto">
    {% include sprite.html icon="insights" size=5 %}
  </div>
  <div class="grid-col-fill">
    <h2>Boost health outcomes</h2>
    <p class="usa-intro text-balance measure-4">Enhance MTM enrollee health and program results by improving medication use and adherence.</p>
    <p>Part D <a href="https://www.cms.gov/medicare/health-drug-plans/part-c-d-performance-data">Star Ratings</a> evaluate the quality of services received by enrollees in your plan. The Centers for Medicare & Medicaid Services (CMS) offers incentives to PDP sponsors with high Star Ratings:</p>
    <ul>
      <li>CMS highlights contracts with an overall rating of 5 stars.</li>
      <li>Enrollees may enroll in a 5-star PDP sponsor, MA-PD, or MA-only plan through a Special Election Period.</li>
      <li>PDP sponsors with 5-star plans may market year-round.</li>
    </ul>
    <p>Medication adherence is a quality measure used to rate PDP sponsors. AB2D data can improve medication adherence by proactively identifying MTM enrollees who may benefit from targeted intervention, such as statin use in persons with diabetes. AB2D can help improve enrollee health outcomes, the effectiveness of your programs, and your Star Ratings.</p>
  </div>
</div>

<div class="grid-row grid-gap margin-y-4">
  <div class="grid-col-auto">
    {% include sprite.html icon="security" size=5 %}
  </div>
  <div class="grid-col-fill">
    <h2>Prevent fraud, waste, and abuse</h2>
    <p class="usa-intro text-balance measure-4">Identify suspicious activity from providers or suppliers through access to mass data.</p>
    <p>Find suspicious patterns from providers or suppliers to reduce fraud and financial losses. By adding AB2D’s data to your existing data streams, you can conduct trend analysis and search mass enrollee data to quickly identify:</p>
    <ul>
      <li>duplicate billing</li>
      <li>services misaligned with enrollee histories</li>
      <li>opioid overutilization</li>
      <li>outliers in cost or service frequency</li>
    </ul>

    {% capture finalRuleAlert %}
    According to the <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745">final rule</a>, AB2D data can not be used to influence coverage determination. Permitted uses include fraud, waste, and abuse detection from providers and suppliers only.
    {% endcapture %}
    {% include alert.html variant="info" text=finalRuleAlert classNames="measure-6" %}
  </div>
</div>
