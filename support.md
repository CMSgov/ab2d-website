---
layout: subpage_layout
title: "Support"
date: 2019-11-02 09:21:12 -0500
description: Support
landing-page: live
active-nav: support-nav
---

<script type="text/javascript">
  $(document).ready(function () {
    $('.card-header').on('click', function (event) {
      $(this).parent().find('.card-expand').toggleClass('icon-flipped');
    });
  });
</script>


<section class="bg-white page-section py-5 pb-10" role="main">
  <svg preserveAspectRatio="xMidYMin slice" class="shape-divider" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1034.2 43.8"
    style="enable-background:new 0 0 1034.2 43.8;" xml:space="preserve" alt="divider">
    <path fill="#ffffff" d="M0,21.3c0,0,209.3-48,517.1,0s517.1,0,517.1,0v22.5H0V21.3z" />
  </svg>
  <div class="container">
    <div class="row">
      <div class="col-lg-5">
        <div class="header-title">We're here to help</div>
        Our Google Group is the best way to ask questions, give feedback, and get the latest news on the AB2D API.
        <div class="google-group-wrapper mb-3 mt-4">
          <a class="join-our-google-group" href="https://groups.google.com/u/1/g/cms-ab2d-api" target="_blank">
            JOIN GOOGLE GROUP
            <i class="material-icons pl-1 external-icon">open_in_new</i>
          </a>
        </div>
      </div>
      <div class="col-lg-7">
        <img src="assets/img/experts.svg" alt="experts" />
      </div>
    </div>
    <div class="header-title mb-3 mt-5">
      Frequently asked questions
    </div>
    <div id="accordion-support" class="accordion-white-bg">
      <div class="card">
        <div class="card-header" id="headingEighteen" data-toggle="collapse" data-target="#collapseEighteen"
          aria-expanded="false" aria-controls="collapseSEighteen">
          <div class="mb-0 card-header-h5">
            Do you have documentation to help me use the API once I've received my credentials?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseEighteen" class="collapse" aria-labelledby="headingEighteen">
          <div class="card-body">
            <p>
              Our <a href="https://github.com/CMSgov/ab2d-pdp-documentation" rel="noopener noreferrer" target="_blank">AB2D document repository on GitHub</a> covers topics like:
            </p>
            <p>
              <strong class="ds-u-font-weight--bold">Accessing the production environment:</strong>
            <ul class="ds-c-list">
              <li>Preparing to pull data from production</li>
              <li>Verifying connection to the API</li>
            </ul>
            </p>
            <p>
              <strong class="ds-u-font-weight--bold">Support:</strong>
            <ul class="ds-c-list">
              <li>Processing Explanations of Benefits (EOBs)</li>
              <li>Production errors</li>
            </ul>
            </p>
            <p>
              <strong class="ds-u-font-weight--bold">Understanding the Data:</strong>
            <ul class="ds-c-list">
              <li>Non-standard fields</li>
              <li>Updated or canceled claims</li>
              <li>Uniquely identifying a claim</li>
              <li>How patients are identified in claims data</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
          aria-controls="collapseOne">
          <div class="mb-0 card-header-h5">
            Why is CMS making claims data available to Prescription Drug Plan sponsors (PDPs)? 
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            The <a href="https://www.congress.gov/bill/115th-congress/house-bill/1892/text" target="_blank">Bipartisan Budget Act of 2018 (BBA)</a> and subsequent CMS <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745" target="_blank">Final Rule</a> require CMS to share fee-for-services claims data with PDPs. Extracts contain a subset of Medicare Parts A and B claims data. These must be shared in an electronic format through standardized extracts. 
          </div>
        </div>
      </div> <!-- End Card -->
      <div class="card">
        <div class="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree"
          aria-expanded="false" aria-controls="collapseThree">
          <div class="mb-0 card-header-h5">
            Who's eligible to request Medicare beneficiary claims data?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div class="card-body">
            Active stand-alone Medicare Prescription Drug Plan sponsors (PDPs) are eligible.
          </div>
        </div>
      </div> <!-- End Card -->
      <div class="card">
        <div class="card-header" id="headingFour" data-toggle="collapse" data-target="#collapseFour"
          aria-expanded="false" aria-controls="collapseFour">
          <div class="mb-0 card-header-h5">
            How do I request access to the API?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseFour" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
            There are 4 steps organizations need to complete to get <a href="https://ab2d.cms.gov/accessing-claims-data.html">access to AB2D</a> data:
            <ol class="ds-c-list">
              <li>
                Authorize your organization to use the API and agree to comply with proper data use (attestation) as outlined in the BBA and CMS Final Rule
              </li>
              <li>
                Assign a technical point of contact
              </li>
              <li>
                Complete onboarding prerequisites
              </li>
              <li>
                Access production data
              </li>
            </ol>
          </div>
        </div>
      </div> <!-- End Card -->
      <div class="card">
        <div class="card-header" id="headingSix" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false"
          aria-controls="collapseSix">
          <div class="mb-0 card-header-h5">
            What is claims data attestation?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseSix" class="collapse" aria-labelledby="headingSix">
          <div class="card-body">
            Attestation is the first step in onboarding to AB2D API. In this step, a CEO, CFO, or COO acknowledges they understand and agree to comply with the acceptable uses and limitations of the AB2D claims data. The Attestor completes this step within the <a href="https://www.cms.gov/Research-Statistics-Data-and-Systems/Computer-Data-and-Systems/HPMS/Overview" target="_blank">Health Plan Management System (HPMS)</a>.
          </div>
        </div>
      </div> <!-- End Card -->
      <div class="card">
        <div class="card-header" id="headingSeven" data-toggle="collapse" data-target="#collapseSeven"
          aria-expanded="false" aria-controls="collapseSeven">
          <div class="mb-0 card-header-h5">
            Who within my organization can attest?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven">
          <div class="card-body">
            Attestation must be performed by the CEO, CFO, or COO of a Medicare PDP organization. These individuals are called "Attestors." PDPs are allowed and actually encouraged to have more than one Attestor.
          </div>
        </div>
      </div> <!-- End Card -->
      <div class="card">
        <div class="card-header" id="headingEight" data-toggle="collapse" data-target="#collapseEight"
          aria-expanded="false" aria-controls="collapseEight">
          <div class="mb-0 card-header-h5">
            What happens if an Attestor leaves my organization?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseEight" class="collapse" aria-labelledby="headingEight">
          <div class="card-body">
            <p>
              PDPs must have an active Attestor at all times to access claims data. Your organization will not receive data during periods without an active Attestor. If your organization only has one Attestor, and they leave without a replacement, then your organization will lose access to the API until another active CEO, CFO, or COO attests.
            </p>
            <p>
              Re-attestation will restore access to the API, including historical claims data that was not accessible during the lapse in active attestation. It’s strongly encouraged to add multiple Attestors to reduce the risk of gaps in data access.
            </p>
          </div>
        </div>
      </div> <!-- End Card -->
      <div class="card">
        <div class="card-header" id="headingNine" data-toggle="collapse" data-target="#collapseNine"
          aria-expanded="false" aria-controls="collapseNine">
          <div class="mb-0 card-header-h5">
            What use of the data is acceptable?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseNine" class="collapse" aria-labelledby="headingNine">
          <div class="card-body">
            The <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745" target="_blank">Final Rule</a> specifies that data may used for:
            <ul class="ds-c-list">
              <li>
                Optimizing therapeutic outcomes through improved medication use
              </li>
              <li>
                Improving care coordination
              </li>
              <li>
                Other purposes [that qualify] as “fraud and abuse detection or compliance activities”
              </li>
            </ul>
            <p>
              The following uses are not permitted:
            </p>
            <ul class="ds-c-list" style="list-style-type: none;">
              <li>
                (i) To inform coverage determinations under Part D;
              </li>
              <li>
                (ii) To conduct retroactive reviews of medically accepted indications determinations;
              </li>
              <li>
                (iii) To facilitate enrollment changes to a different prescription drug plan or an MA-PD plan offered by the same parent organization;
              </li>
              <li>
                (iv) To inform marketing of benefits.
              </li>
            </ul>
          </div>
        </div>
      </div> <!-- End Card -->
      <div class="card">
        <div class="card-header" id="headingTwelve" data-toggle="collapse" data-target="#collapseTwelve"
          aria-expanded="false" aria-controls="collapseTwelve">
          <div class="mb-0 card-header-h5">
            What is the data extract format?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve">
          <div class="card-body">
            The AB2D API uses the <a href="http://build.fhir.org/ig/HL7/VhDir/bulk-data.html" target="_blank">Bulk FHIR Specification</a> in the <a href="https://github.com/ndjson/ndjson-spec" target="_blank">New Line Delimited JSON</a> format. An NDJSON file provides a single record on each line. This makes it easy for various tools to look at and process one record at a time.
          </div>
        </div>
      </div> <!-- End Card -->
      <div class="card">
        <div class="card-header" id="headingThirteen" data-toggle="collapse" data-target="#collapseThirteen"
          aria-expanded="false" aria-controls="collapseThirteen">
          <div class="mb-0 card-header-h5">
            What data elements can organizations access through the API?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen">
          <div class="card-body">
            Medicare Parts A and B data elements (fields) in the standardized extract include:
            <ul class="ds-c-list">
              <li>
                An enrollee identifier
              </li>
              <li>
                Diagnosis and procedure codes (e.g., ICD-10 diagnosis and Healthcare Common)
              </li>
            </ul>
            Healthcare Common Procedure Coding System (HCPCS) codes:
            <ul class="ds-c-list">
              <li>
                Dates of service
              </li>
              <li>
                Place of service
              </li>
              <li>
                National Provider Identifier Standard (NPI) numbers for providers
              </li>
              <li>
                Claim processing and linking identifiers/codes (e.g., claim ID and claim type code)
              </li>
            </ul>
          </div>
        </div>
      </div> <!-- End Card -->
      <div class="card">
        <div class="card-header" id="headingFifteen" data-toggle="collapse" data-target="#collapseFifteen"
          aria-expanded="false" aria-controls="collapseFifteen">
          <div class="mb-0 card-header-h5">
            Can PDPs request historical data?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseFifteen" class="collapse" aria-labelledby="headingFifteen">
          <div class="card-body">
            PDPs will only have access to data starting on their attestation date onwards. Claims data previous to that date will not be available. It’s best for PDPs to attest as soon as possible, regardless of their implementation timeline, in order to get access to earlier claims data.
          </div>
        </div>
      </div> <!-- End Card -->
      <div class="card">
        <div class="card-header" id="headingSixteen" data-toggle="collapse" data-target="#collapseSixteen"
          aria-expanded="false" aria-controls="collapseSixteen">
          <div class="mb-0 card-header-h5">
            How can we get additional data elements beyond what’s listed in the Final Rule?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseSixteen" class="collapse" aria-labelledby="headingSixteen">
          <div class="card-body">
            CMS evaluates the data elements provided to PDPs based on how well they support the acceptable uses. Any proposed changes would be established through rule-making. If you have any feedback, please let our team know in the <a href="https://groups.google.com/u/1/g/cms-ab2d-api" target="_blank">Google Group</a>.
          </div>
        </div>
      </div> <!-- End Card -->
      <div class="card">
        <div class="card-header" id="headingSeventeen" data-toggle="collapse" data-target="#collapseSeventeen"
          aria-expanded="false" aria-controls="collapseSeventeen">
          <div class="mb-0 card-header-h5">
            What are the data sources and how often is the data updated?
          </div>
          <i class="material-icons card-expand">expand_more</i>
        </div>
        <div id="collapseSeventeen" class="collapse" aria-labelledby="headingSeventeen">
          <div class="card-body">
            The AB2D API uses the Beneficiary FHIR Data (BFD) server. BFD receives data from the Chronic Condition Warehouse (CCW). The majority of the BFD data is refreshed weekly, with a few data elements being loaded monthly.
          </div>
        </div>
      </div> <!-- End Card -->
    </div>
  </div>
</section>