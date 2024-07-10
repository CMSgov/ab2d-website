---
layout: subpage_layout
title: "Overview"
date: 2019-11-02 09:21:12 -0500
description: Overview
landing-page: live
active-nav: overview-nav
---

<section class="bg-white page-section py-5" role="main">
    <svg 
        preserveAspectRatio="xMidYMin slice" 
        class="shape-divider" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 

        x="0px" 
        y="0px"
        viewBox="0 0 1034.2 43.8" 
        style="enable-background:new 0 0 1034.2 43.8;" 
        xml:space="preserve"
    >
	    <path fill="#ffffff" d="M0,21.3c0,0,209.3-48,517.1,0s517.1,0,517.1,0v22.5H0V21.3z"/>
    </svg>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading">Claims data can make medications safe and effective for more than <strong>22 million people</strong>.</h2>
                <div class="divider-small-border center my-4"></div>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-lg-6">
                <img src="assets/img/pharmacist.svg" alt="Pharmaceuticals"/>
            </div>
            <div class="col-lg-6 px-5">
                <p>
                    Of the 65 million beneficiaries covered by Medicare programs, stand-alone Prescription Drug Plan (PDP) sponsors cover more than 22 million people. AB2D provides Medicare Parts A and B claims data to fill gaps in patients' health information for a holistic view that supports better care.
                </p>
                <h2>What requirements led to AB2D?</h2>
                <p>
                   The Centers for Medicare & Medicaid Services (CMS) developed AB2D to implement Section 50354 the <a href="https://www.congress.gov/bill/115th-congress/house-bill/1892/text" target="_blank">Bipartisan Budget Act of 2018 (BBA)</a>. Regulations at 42 CFR § 423.153(g) describe the manner in which CMS will implement this section of the law.
                </p>
                <h2>How does AB2D support these requirements?</h2>
                <p>
                    AB2D provides PDPs with Medicare Parts A and B claims data. This data helps PDPs promote the best use of medications to improve health outcomes. AB2D utilizes the <a href="https://hl7.org/fhir/uv/bulkdata/export/index.html" target="_blank">Bulk Fast Healthcare Interoperability Resources (FHIR)</a> standard for exchanging healthcare information electronically in order to make data sharing efficient and secure.
                </p>
            </div>
        </div>
    </div>
</section>

<section 
    class="bg-light-blue page-section pt-20 pb-10" 
    role="region" 
    aria-label="API Use cases"
>
    <svg 
        preserveAspectRatio="xMidYMin slice" 
        alt="divider" 
        class="shape-divider flip" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        x="0px" 
        y="0px"
        viewBox="0 0 1034.2 43.8" 
        style="enable-background:new 0 0 1034.2 43.8;" 
        xml:space="preserve"
    >
	    <path fill="#ffffff" d="M0,21.3c0,0,209.3-48,517.1,0s517.1,0,517.1,0v22.5H0V21.3z"/>
    </svg>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h3 class="section-heading text-center">What are the use cases for the AB2D API?</h3>
                <div class="divider-small-border center mt-4 mb-5"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <h4 class="section-heading">Find MTM program enrollees</h4>
                <h5 class="section-subheading">Identify Medication Therapy Management enrollees by using data for a more thorough search capability.</h5>
                <p>AB2D data can help you identify beneficiaries who may be eligible for your Part D <a href='https://www.cms.gov/medicare/coverage/prescription-drug-coverage-contracting/medication-therapy-management' target="_blank">Medication Therapy Management (MTM)</a> programs. You can use AB2D data to help identify enrollees who meet the MTM targeting criteria, like those with certain chronic diseases or diagnoses. </p>
            </div>
        <div class="row">
            <div class="col-lg-12">
                <h4 class="section-heading">Boost health outcomes</h4>
                <h5 class="section-subheading">Enhance MTM enrollee health and program results by improving medication use and adherence.</h5>
            </div>
        </div>
        <div class="row">
              <div class="col-lg-12">
                <p>Part D <a href='https://www.cms.gov/medicare/health-drug-plans/part-c-d-performance-data' target="_blank">Star Ratings</a> evaluate the quality of services received by beneficiaries in your plan. CMS offers incentives to Prescription Drug Plan (PDP) sponsors with high Star Ratings:</p>
                 <ul> 
                  <li>CMS highlights contracts with an overall rating of 5 stars.</li>
                  <li>Beneficiaries may enroll in a 5-Star PDP, MA-PD, or MA-only plan through a Special Election Period.</li>
                  <li>PDPs with 5-star plans may market year-round.</li>
                 </ul>
                <p>Medication adherence is one of the quality measures used to rate PDPs. AB2D data can address medication adherence, as well as statin use in persons with diabetes or other medication therapy problems, by proactively identifying MTM enrollees who may benefit from targeted intervention. As a result, this may help improve their health, the effectiveness of your programs, and your Star Ratings.</p>
              </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <h4 class="section-subheading">Prevent fraud, waste, and abuse</h4>
                <h5 class="section-subheading">Identify suspicious activity from providers or suppliers through access to mass data.</h5>
            </div>
        </div>
        <div class="row">
             <div class="col-lg-12">
                <p>Find suspicious patterns from providers or suppliers to reduce fraud and financial losses. By adding AB2D’s <a href='https://www.hl7.org/fhir/overview.html' target="_blank">Bulk FHIR</a> data to your existing data streams, you can conduct trend analysis and search mass enrollee data to quickly identify: </p>
                <ul> 
                  <li>duplicate billing</li>
                  <li>services misaligned with enrollee histories</li>
                  <li>opioid overutilization</li>
                  <li>outliers in cost or service frequency</li>
                 </ul>
                <p>Due to <a href='https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare' target="_blank">final rule</a> regulations, AB2D data can be used to detect fraud, waste, and abuse from providers and suppliers only. This can’t be used to influence coverage determination for enrollees.</p>
             </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <h4 class="section-subheading">Enhance MTM services </h4>
                <h5 class="section-subheading">Leverage insights from enrollee medical histories for more effective services.</h5>
              </div>
            </div>
            <div class="row">
               <div class="col-lg-12">
                <p>Plan sponsors can use AB2D data to get a holistic overview of enrollees' health histories. This allows for more informed discussions between the MTM provider and enrollee during comprehensive or targeted medication reviews: </p>
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

<section 
    class="bg-white page-section pt-20 pb-10" 
    role="region" 
    aria-label="API Comparison"
>
    <svg 
        preserveAspectRatio="xMidYMin slice" 
        alt="divider" 
        class="shape-divider flip" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        x="0px" 
        y="0px"
        viewBox="0 0 1034.2 43.8" 
        style="enable-background:new 0 0 1034.2 43.8;" 
        xml:space="preserve"
    >
	    <path fill="#ffffff" d="M0,21.3c0,0,209.3-48,517.1,0s517.1,0,517.1,0v22.5H0V21.3z"/>
    </svg>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h3 class="section-heading text-center">What are the other CMS claims-based FHIR APIs?</h3>
                <div class="divider-small-border center mt-4 mb-5"></div>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-lg-6 px-5">
                <p>
                    <strong class="ds-u-font-weight--bold">AB2D is one of several CMS APIs that offer Medicare claims data sharing in FHIR format:</strong>
                </p>
                <ul> 
                <li>
                   The <a href='https://bcda.cms.gov/' target="_blank">Beneficiary Claims Data API (BCDA)</a> helps Alternative Payment Model participants who provide high quality, coordinated care by simplifying their access to bulk Medicare Part A, B, and D claims.
                </li>
                <li>
                   The <a href='https://bluebutton.cms.gov/' target="_blank">Blue Button 2.0 (BB 2.0) API</a> enables beneficiaries to connect their Medicare claims data to the applications, services, and research programs they trust.
                </li>
                <li>
                  The <a href='https://dpc.cms.gov/' target="_blank">Data at the Point of Care (DPC) API</a> enables healthcare providers with claims data to fill-in gaps in patient history at the point of care and deliver high quality care to Medicare beneficiaries.
                </li>
                </ul>
            </div>
            <div class="col-lg-6"> <img src="assets/img/programmer.svg" alt="CMS FHIR APIs"/> </div>
        </div>
    </div>
</section>