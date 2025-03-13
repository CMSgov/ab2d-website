---
layout: api-docs
page_title: "AB2D Data"
seo_title: "AB2D Data | Medicare Claims API for Part D Sponsors"
description: "Explore the AB2D API’s Medicare Parts A & B data, its sample files, and claims data details."
permalink: /ab2d-data
in-page-nav: true
---

# AB2D Data

Learn about claims data and how to apply it in context. The AB2D API shares large volumes of enrollee data, including:

<table class="usa-table usa-table--borderless usa-table--stacked margin-bottom-4">
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

There are specific [permitted uses]({{ '/about' | relative_url }}) for the data. Visit [API Documentation]({{ '/api-documentation' | relative_url }}) for details on accessing production data and the claims data format.

<div class="grid-row grid-gap margin-y-6 tablet:grid-gap-0 tablet:margin-y-8 desktop:margin-y-10">
  <div class="grid-col-2 tablet:grid-col-3 text-center">
    <img src="{{ '/assets/img/book.svg' | relative_url }}" alt="book illustration" />
  </div>
  <div class="grid-col-fill tablet:grid-col-9">
    <h2>Data Dictionary</h2>
    <p>Get a detailed breakdown of data elements provided by AB2D. The Data Dictionary covers both V2 (<a href="https://hl7.org/fhir/R4/" target="_blank" rel="noopener">R4</a>) and V1 (<a href="https://hl7.org/fhir/STU3/" target="_blank" rel="noopener">STU3</a>) of the API.</p>
    <ul>
      <li><a href="{{ '/assets/downloads/ab2d-data-dictionary.xlsx' | relative_url }}" data-tealium="download">Data Dictionary {% include sprite.html icon="file_download" class="text-middle" %}</a></li>
    </ul>
  </div>
</div>

<div class="grid-row grid-gap margin-y-6 tablet:grid-gap-0 tablet:margin-y-8 desktop:margin-y-10">
  <div class="grid-col-2 tablet:grid-col-3 text-center">
    <img src="{{ '/assets/img/paper.svg' | relative_url }}" alt="papers illustration" />
  </div>
  <div class="grid-col-fill tablet:grid-col-9">
    <h2>Sample files</h2>
    <p>Download sample, unformatted <a href="https://github.com/ndjson/ndjson-spec" target="_blank" rel="noopener">NDJSON</a> files. Each line is a <a href="https://www.json.org/json-en.html" target="_blank" rel="noopener">JSON</a> object that can be read with a text editor like the <a href="https://jsonlint.com/" target="_blank" rel="noopener">format viewer</a>.</p>
    <ul>
      <li><a href="{{ '/assets/downloads/sample-data-r4.ndjson' | relative_url }}" data-tealium="download">AB2D V2 (recommended) Parts A and B Sample Export (FHIR R4) {% include sprite.html icon="file_download" class="text-middle" %}</a></li>
      <li><a href="{{ '/assets/downloads/sample-data-stu3.ndjson' | relative_url }}" data-tealium="download">AB2D V1 Parts A and B Sample Export (FHIR STU3) {% include sprite.html icon="file_download" class="text-middle" %}</a></li>
    </ul>
  </div>
</div>

<div class="grid-row grid-gap margin-y-6 tablet:grid-gap-0 tablet:margin-y-8 desktop:margin-y-10">
  <div class="grid-col-2 tablet:grid-col-3 text-center">
    <img src="{{ '/assets/img/creativity.svg' | relative_url }}" alt="light bulb illustration" />
  </div>
  <div class="grid-col-fill tablet:grid-col-9">
    <h2>Guides</h2>
    <p>Learn how to use AB2D and understand enrollees’ claims data.</p>
    <ul>
      <li><a href="{{ '/claims-data-details' | relative_url }}">Claims Data Details</a></li>
      <li><a href="{{ '/filter-claims-data-v1' | relative_url }}">How to Filter Claims Data - V1</a></li>
      <li><a href="{{ '/filter-claims-data-v2' | relative_url }}">How to Filter Claims Data - V2</a></li>
    </ul>
  </div>
</div>

