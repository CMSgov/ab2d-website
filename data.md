---
layout: default
title:  "AB2D Data"
permalink: /data
---

# {{ page.title }}

{% include alert.html
  variant="info"
  text="Data is received from our upstream data source 1-2 weeks after claims are posted."
%}

Learn about claims data and how to apply it in context. The AB2D API shares large volumes of enrollee data, including:

- **Medicare Part A claims data** – inpatient hospital stays, care in skilled nursing facilities, and hospice care
- **Medicare Part B claims data** – various doctors' services, outpatient care, medical supplies, and preventive services

There are specific [permitted uses]({% link about.md %}) for the data. Visit [API Documentation]({% link api-documentation.md %}) for details on accessing production data and the claims data format.

<div class="grid-row grid-gap margin-y-6 tablet:grid-gap-0 tablet:margin-y-8 desktop:margin-y-10">
  <div class="grid-col-2 tablet:grid-col-3 text-center">
    <img src="{{ '/assets/img/book.svg' | relative_url }}" alt="book illustration" />
  </div>
  <div class="grid-col-fill tablet:grid-col-9">
    <h2>Data Dictionary</h2>
    <p>Get a detailed breakdown of data elements provided by AB2D.</p>
    <ul>
      <li><a href="{% link data-dictionary.md %}">Data Dictionary</a></li>
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
      <li><a href="https://docs.google.com/document/d/1phzaexERBLyIO0b-Z3o2t4jkr8i7WRNapld0bI5J8Qc/edit?usp=sharing">Claims Data Details</a></li>
      <li><a href="https://docs.google.com/document/d/1qhslAMkvw-c9BtP_kUq_-J3x1ruoCg49vESN5KYOhsc/edit?usp=sharing">How to Filter Claims Data</a></li>
    </ul>
  </div>
</div>
