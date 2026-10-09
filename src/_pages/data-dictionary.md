---
layout: base
page_title: "Data Dictionary"
seo_title: "Data Dictionary"
description: "A detailed breakdown of the claims data elements provided by the AB2D API, for both v2 (R4) and v1 (STU3)."
permalink: /data-dictionary
---

<div
  class="padding-x-5"
  data-data-dictionary
  data-base-url="{{ site.baseurl }}"
>
  <div class="data-dictionary__description"></div>

  <div class="data-dictionary__wrapper">
    <div class="data-dictionary__header">
      <div class="header-meta-data">
        <div class="definition-count"></div>
        <div class="inputs__wrapper">
          <label for="versions">Version:</label>
          <select
            class="usa-select width-auto"
            name="versions"
            id="versions"
          >
            <option value="r4-v2">R4 (v2)</option>
            <option value="stu3-v1">STU3 (v1)</option>
          </select>
        </div>
      </div>
      <div class="column-headers">
        <div class="field-name-desc">field name/description</div>
        <div class="claim-type">claim type(s)</div>
        <div class="ccw-column-name">ccw column name</div>
        <div class="type-size">type (size)</div>
        <div class="example">example</div>
        <div class="legend">
          <pre class="red-highlight margin-0">value</pre>
          <pre class="blue-highlight margin-0">discriminator</pre>
        </div>
      </div>
    </div>
    <div id="data_dictionary"></div>
  </div>
</div>

<script
  src="{{ '/assets/js/data-dictionary.js' | relative_url }}"
  defer
></script>
