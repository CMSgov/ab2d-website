---
layout: subpage_layout
title: "Data Dictionary"
date: 2019-11-02 09:21:12 -0500
description: Data Dictionary
landing-page: live
active-nav: understanding-the-data-nav
---

<style>
  .bg-light-grey {
    background-color: #f5f5f5;
  }

  .sticky {
    position: fixed;
    top: 90px;
    left: 5%;
  }

  #scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 2;
    background-color: #323A45;
    padding: 16px;
    border-radius: 50%;
    padding: 13px 17px;
    color: white;
    cursor: pointer;
    display: none;
  }

  .show {
    display: block !important;
  }

  .data-dictionary__wrapper {
    width: 90vw;
    margin: 0 auto;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
  }

  .header-meta-data {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    height: 60px;
    border-bottom: 1px solid #CCCCCC;
  }

  .header-meta-data .definition-count {
    font-size: 20px;
    font-weight: 600;
  }

  .header-meta-data>div {
    flex: 1;
  }

  .inputs__wrapper {
    display: flex;
    justify-content: end;
  }

  .inputs__wrapper label {
    font-size: 16px;
    font-weight: 600;
  }

  .column-headers {
    position: relative;
    text-transform: uppercase;
    display: flex;
    font-size: 13px;
    background-color: #F7F7F7;
    font-weight: 900;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1px;
    color: #667987;
  }

  .column-headers>div {
    padding: 15px 10px;
  }

  .column-headers .legend {
    padding: 0;
  }

  .section-title {
    font-family: 'Montserrat';
    font-style: normal;
    background-color: #727f8f;
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    color: white;
    text-align: left;
    padding: 10px 15px;
    text-transform: uppercase
  }

  .column-headers .field-name-desc {
    width: 31%;
  }

  .claim-type {
    width: 10%;
  }

  .ccw-column-name {
    width: 12%;
  }

  .type-size {
    width: 10%;
  }

  .example {
    width: 34%;
    padding: 15px;
  }

  .definition {
    display: flex;
    overflow: auto;
  }

  .definition-example__wrapper {
    display: flex;
  }

  .definition-example__wrapper .example {
    width: 37%;
    display: flex;
    margin: 0;
    position: relative;
  }

  .definition-example__wrapper .legend {
    display: none;
  }

  .definition-example__wrapper .example .number-marker {
    margin-left: -15px;
  }

  .number-marker {
    display: inline-flex;
    width: 20px;
    height: 20px;
    background-color: #0179C9;
    color: white;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    letter-spacing: -1px;
  }

  .definition__wrapper {
    display: block;
    width: 63%;
  }

  .definition__wrapper>div:not(:nth-child(1)) {
    border-top: 1px solid #CCCCCC;
  }

  .definition>div {
    padding: 15px;
    overflow-wrap: break-word;
  }

  .definition .field-name-desc__wrapper {
    width: 49%;
    margin-left: 15px;
  }

  .definition .field-name-desc__wrapper .field-name {
    font-weight: bold;
  }

  .definition .field-name-desc__wrapper .field-name .number-marker {
    margin-left: -25px;
    position: absolute;
  }

  .definition .claim-type {
    width: 16%;
  }

  .definition .ccw-column-name {
    width: 19%;
  }

  .definition .type-size {
    width: 16%;
  }

  .blue-highlight {
    background-color: #BBEFFF;
  }

  .red-highlight {
    background-color: #FFCACD;
  }

  .legend {
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 18px;
    text-transform: none;
  }

  .legend>pre {
    padding: 3px 7px;
    border: none;
    font-weight: 400;
    font-size: 12px;
    color: black
  }

  .legend>pre:first-child {
    margin-right: 10px;
  }

  .description {
    width: 90vw;
    margin: 0 auto;
    padding-bottom: 30px;
  }

  .sticky {
    position: fixed;
    width: calc(90vw - 2px);
    z-index: 1;
    top: 70px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  @media only screen and (max-width: 990px) {
    .definition-example__wrapper {
      flex-direction: column;
    }

    .definition__wrapper {
      width: 100%
    }

    .legend {
      display: none;
    }

    .definition-example__wrapper .example {
      width: 100%;
      max-height: 250px;
    }

    .column-headers .field-name-desc {
      width: 49%;
      margin-left: 15px;
    }

    .claim-type {
      width: 15%;
    }

    .ccw-column-name {
      width: 19%;
    }

    .type-size {
      width: 15%;
    }

    .example {
      display: none;
    }

    .definition-example__wrapper .legend {
      display: flex;
    }

    .sticky {
      top: 63px;
    }
  }
</style>

<script src="assets/js/data-dictionary-parser.js"></script>
<script>
  $(document).ready(function () {
    $('#versions').val('r4-v2')
  })
  function getVersionValue (sel) {
    callFetch(sel.value)
  }
  window.onscroll = function () { scrollSpy() };
  let offset = 0
  $(document).ready(() => {
    offset = $(".column-headers").offset().top + 115
  })

  function scrollSpy () {
    if (window.pageYOffset > offset) {
      $(".column-headers").addClass("sticky");
    } else {
      $(".column-headers").removeClass("sticky");
    }
  } 
</script>

<section class="bg-light-grey page-section py-5" role="main" id="Top">
  <svg class="shape-divider" preserveAspectRatio="xMidYMin slice" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1034.2 43.8"
    style="enable-background:new 0 0 1034.2 43.8;" xml:space="preserve" alt="divider">
    <path fill="#f5f5f5" d="M0,21.3c0,0,209.3-48,517.1,0s517.1,0,517.1,0v22.5H0V21.3z" />
  </svg>
  <div class='description'></div>
  <div class='data-dictionary__wrapper'>
    <div class='header'>
      <div class='header-meta-data'>
        <div class='definition-count'></div>
        <div class='inputs__wrapper'>
          <div>
            <form>
              <label for="versions">Version:</label>
              <select name="versions" id="versions" onchange="getVersionValue(this);">
                <option value="r4-v2">R4 (v2)</option>
                <option value="stu3-v1">STU3 (v1)</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div class='column-headers'>
        <div class='field-name-desc'>field name/description</div>
        <div class='claim-type'>claim type(s)</div>
        <div class='ccw-column-name'>ccw column name</div>
        <div class='type-size'>type (size)</div>
        <div class='example'>example</div>
        <div class='legend'>
          <pre class='blue-highlight'>value</pre>
          <pre class='red-highlight'>descriminator</pre>
        </div>
      </div>
    </div>
    <div id="data_dictionary"></div>
  </div>
</section>