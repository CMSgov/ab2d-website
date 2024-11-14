---
layout: subpage_layout
title:  "Understand AB2D Data"
date:   2019-11-02 09:21:12 -0500 
description: Understand AB2D Data
landing-page: live
active-nav: understanding-the-data-nav
---

<section class="bg-white page-section py-5" role="main">
    <svg class="shape-divider" preserveAspectRatio="xMidYMin slice" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 1034.2 43.8" style="enable-background:new 0 0 1034.2 43.8;" xml:space="preserve" alt="divider">
	<path fill="#ffffff" d="M0,21.3c0,0,209.3-48,517.1,0s517.1,0,517.1,0v22.5H0V21.3z"/>
    </svg>
    <div class="container">
        <div class="row" style="margin-bottom: 70px;">
            <div class="col-lg-6">
                <div class="step-header">Overview</div>
                <p>
                    <strong class="ds-u-font-weight--bold">What kinds of data are available?</strong>
                </p>
                <p>
                    AB2D is a RESTful (representational state transfer) API providing claims data for active Medicare enrollee groups. The <a href="https://hl7.org/fhir/uv/bulkdata/" target="_blank">Bulk Fast Healthcare Interoperability Resources (FHIR) </a> lets it handle large volumes of enrollee claims data, including:
                </p>
                <ul class="ds-c-list">
                    <li>
                        <strong class="ds-u-font-weight--bold">Medicare Part A claims data.</strong> Inpatient hospital stays, care in skilled nursing facilities, and hospice care.
                    </li>
                    <li>
                        <strong class="ds-u-font-weight--bold">Medicare Part B claims data.</strong> Various doctors' services, outpatient care, medical supplies, and preventive services.
                    </li>
                </ul>
                <p>
                    These claims contain valuable information about enrollee health, which can help fill any gaps in the health records available to stand-alone Prescription Drug Plan (PDP) sponsors.
                </p>
            </div>
            <div class="col-lg-6">
                <img class="mt-3" src="assets/img/data-analysis.svg" alt="data-analysis" />
            </div>
        </div>
    </div>
</section>         
<section class="bg-light-blue page-section pt-20 pb-10" role="region" aria-label="Developer Resources">        
    <svg class="shape-divider flip" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 1034.2 43.8" style="enable-background:new 0 0 1034.2 43.8;" xml:space="preserve" alt="divider">
        <path fill="#ffffff" d="M0,21.3c0,0,209.3-48,517.1,0s517.1,0,517.1,0v22.5H0V21.3z"/>
    </svg>
    <div class="container">    
        <div class="understanding-the-data-section">
            <div class="row">
                <div class="col-lg-2 text-center">
                    <img class="mb-3" src="assets/img/paper.svg" alt="paper" />
                </div>
                <div class="col-lg-10">
                    <div class="header-title">Sample AB2D Files</div>
                    These test data files will give you a good idea of the type of data available through AB2D.
                    <br /><br />
                    <ul class="ds-c-list">
                    <li>
                    <a href="assets/downloads/sample-data-r4.ndjson" download="sample-data-r4.ndjson">AB2D v2 (recommended version) Parts A and Parts B Sample Export (FHIR R4)</a>
                    </li>
                    <li>
                    <a href="assets/downloads/sample-data-stu3.ndjson" download="sample-data-stu3.ndjson">AB2D v1 Parts A and Parts B Sample Export (FHIR STU3)</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="understanding-the-data-section">
            <div class="row">
                <div class="col-lg-2 text-center">
                    <img class="mb-3" src="assets/img/book.svg" alt="book" />
                </div>
                <div class="col-lg-10">
                    <div class="header-title">Data Dictionary</div>
                    Learn more about AB2D data elements. 
                    <br /><br />
                    <ul class="ds-c-list">
                        <li>
                            <a href="data_dictionary.html">
                                View Data Dictionary
                            </a>
                        </li>    
                    </ul>
                </div>
            </div>
        </div>
        <div class="understanding-the-data-section">
            <div class="row">
                <div class="col-lg-2 text-center">
                    <img class="mb-3" src="assets/img/creativity.svg" alt="creativity" />
                </div>
                <div class="col-lg-10">
                    <div class="header-title">JSON resources</div>
                    Introductions to JSON
                    <br /><br />
                    <ul class="ds-c-list">
                        <li>
                            <a href="http://json.org/" target="_blank">Intro to JSON Format </a>
                        </li>
                        <li>
                            <a href="https://github.com/ndjson/ndjson-spec" target="_blank">Newline Delimited JSON (ndjson) </a>
                        </li>
                        <li>
                            <a href="https://jsonlint.com/" target="_blank">JSON format viewer/validator </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    </div>
</section>    
