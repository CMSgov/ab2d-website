---
layout: subpage_layout
title: "Data Dictionary"
date: 2019-11-02 09:21:12 -0500
description: Data Dictionary
landing-page: live
active-nav: understanding-the-data-nav
---

<style>
  .data-table-wrapper {
    background-color: white;
    border: 1px solid #cccccc;
    border-radius: 7px;
    padding: 2px;
  }

  table {
    background-color: #f5f5f5;
  }

  table.data-table {
    display: block;
    overflow-x: auto;
  }

  table thead {
    font-size: 12px;
    text-transform: uppercase;
    color: #748999;
    letter-spacing: 1px;
    background-color: #f7f7f7;
  }

  table tbody {
    font-size: 14px;
  }

  table thead tr:first-child th {
    padding: 20px;
  }

  table thead tr:last-child {
    border-color: #cccccc;
    border-top: 1px solid;
    border-bottom: 1px solid;
  }

  table .top-header :last-child {
    color: #4e5b6b;
    font-style: italic;
    font-size: 13px;
    font-weight: lighter;
    text-align: right;
  }

  table .top-header {
    color: black;
    background-color: white;
    font-size: 18px;
    letter-spacing: 0.5px;

  }

  table .top-header th {
    padding: 20px 5px;
  }

  table tbody tr td,
  table thead tr th {
    padding: 5px 10px;
  }



  table tbody tr td.section-header a {
    display: block;
  }

  table tbody tr td.section-header a::before {
    content: '';
    display: block;
    position: relative;
    width: 0;
    height: 5em;
    margin-top: -5em
  }

  .bg-light-grey {
    background-color: #f5f5f5;
  }

  #index {
    margin: auto;
  }

  #index a {
    color: #6c7b8d;
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

  .column-headers {
    text-transform: uppercase;
    display: flex;
    font-size: 13px;
    background-color: #F7F7F7;
    font-weight: 900;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #667987;
  }

  .column-headers>div {
    padding: 15px 10px;
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
  }

  .definition-example__wrapper {
    display: flex;
  }

  .definition-example__wrapper .example {
    width: 37%;
    display: flex;
    margin: 0;
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
</style>

<script src="assets/js/data-dictionary-parser.js"></script>

<section class="bg-light-grey page-section py-5" role="main" id="Top">
  <svg class="shape-divider" preserveAspectRatio="xMidYMin slice" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1034.2 43.8"
    style="enable-background:new 0 0 1034.2 43.8;" xml:space="preserve" alt="divider">
    <path fill="#f5f5f5" d="M0,21.3c0,0,209.3-48,517.1,0s517.1,0,517.1,0v22.5H0V21.3z" />
  </svg>
  <div class='data-dictionary__wrapper'>
    <div class='header'>
      <div class='header-meta-data'>
        <div class='definition-count'></div>
      </div>
      <div class='column-headers'>
        <div class='field-name-desc'>field name/description</div>
        <div class='claim-type'>claim type(s)</div>
        <div class='ccw-column-name'>ccw column name</div>
        <div class='type-size'>type(size)</div>
        <div class='example'>example</div>
      </div>
    </div>
    <div id="data_dictionary"></div>
  </div>
</section>