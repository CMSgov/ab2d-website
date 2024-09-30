---
layout: default
title:  "AB2D Data"
permalink: /data
---

# AB2D Data

Learn about claims data and how to apply it in context. The AB2D API shares large volumes of enrollee data, including:

- **Medicare Part A claims data** — inpatient hospital stays, care in skilled nursing facilities, and hospice care
- **Medicare Part B claims data** — various doctors' services, outpatient care, medical supplies, and preventive services

There are specific [permitted uses]({{ '/about' | relative_url }}) for the data. Visit [API Documentation]({{ '/api-documentation' | relative_url }}) for details on accessing production data and the claims data format.

<div class="grid-row grid-gap margin-y-6 tablet:grid-gap-0 tablet:margin-y-8 desktop:margin-y-10">
  <div class="grid-col-2 tablet:grid-col-3 text-center">
    <img src="{{ '/assets/img/book.svg' | relative_url }}" alt="book illustration" />
  </div>
  <div class="grid-col-fill tablet:grid-col-9">
    <h2>Data Dictionary</h2>
    <p>Get a detailed breakdown of data elements provided by AB2D. The Data Dictionary covers both V2 (<a href="https://hl7.org/fhir/R4/">R4</a>) and V1 (<a href="https://hl7.org/fhir/STU3/">STU3</a>) of the API.</p>
    <ul>
      <li>Data Dictionary</li>
    </ul>
  </div>
</div>

<div class="grid-row grid-gap margin-y-6 tablet:grid-gap-0 tablet:margin-y-8 desktop:margin-y-10">
  <div class="grid-col-2 tablet:grid-col-3 text-center">
    <img src="{{ '/assets/img/paper.svg' | relative_url }}" alt="papers illustration" />
  </div>
  <div class="grid-col-fill tablet:grid-col-9">
    <h2>Sample files</h2>
    <p>Download sample, unformatted <a href="https://github.com/ndjson/ndjson-spec">NDJSON</a> files. Each line is a JSON object that can be read with a text editor like the <a href="https://json.org">format viewer</a>.</p>
    <ul>
      <li><a href="{{ '/assets/downloads/sample-data-r4.ndjson' | relative_url }}">AB2D V2 (recommended) Parts A and B Sample Export (FHIR R4) {% include sprite.html icon="file_download" %}</a></li>
      <li><a href="{{ '/assets/downloads/sample-data-stu3.ndjson' | relative_url }}">AB2D V1 Parts A and B Sample Export (FHIR STU3) {% include sprite.html icon="file_download" %}</a></li>
    </ul>
  </div>
</div>

<div class="grid-row grid-gap margin-y-6 tablet:grid-gap-0 tablet:margin-y-8 desktop:margin-y-10">
  <div class="grid-col-2 tablet:grid-col-3 text-center">
    <img src="{{ '/assets/img/creativity.svg' | relative_url }}" alt="creativity illustration" />
  </div>
  <div class="grid-col-fill tablet:grid-col-9">
    <h2>Guides</h2>
    <p>Learn how to use AB2D and understand enrollees’ claims data.</p>
    <ul>
      <li><a href="{% link claims-data-details.md %}">Claims Data Details</a></li>
      <li><a href="{% link how-to-filter-claims-data.md %}">How to Filter Claims Data</a></li>
    </ul>
  </div>
</div>

