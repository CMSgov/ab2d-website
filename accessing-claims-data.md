---
layout: subpage_layout
title:  "Accessing Claims Data"
date:   2019-11-02 09:21:12 -0500 
description: Accessing Claims Data
landing-page: live
active-nav: accessing-claims-data-nav
---

<script type="text/javascript">
    let scrollLock = false;
    
    const stepMappings = {
        'step-1-icon': 'step-1-content',
        'step-2-icon': 'step-2-content',
        'step-3-icon': 'step-3-content',
        'step-4-icon': 'step-4-content'
    };
    $(document).ready(function() {
        const offset = 100;
    
        $('.step-accessing-claims').on('click', function(event) {
            scrollLock = true;
            highlightNav($(this), true);
        });
        
        $(window).scroll(function() {
            if(scrollLock) {
                return;
            }
                
            if($(this).scrollTop() < $('#step-2-content').offset().top - offset) {
                highlightNav($('#step-1-icon'), false);
            } else if($(this).scrollTop() >= $('#step-2-content').offset().top - offset && $(this).scrollTop() < $('#step-3-content').offset().top - offset) {
                highlightNav($('#step-2-icon'), false);
            } else if($(this).scrollTop() >= $('#step-3-content').offset().top - offset && $(this).scrollTop() < $('#step-4-content').offset().top - offset) {
                highlightNav($('#step-3-icon'), false);
            } else if($(this).scrollTop() >= $('#step-4-content').offset().top - offset) {
                highlightNav($('#step-4-icon'), false);
            }
        });
        
        function highlightNav(id, doScroll) {
            const stepId = id.attr('id');
            const idToShow = stepMappings[stepId];
            
            $('.step-accessing-claims').each(function() {
                $(this).removeClass('step-accessing-claims-active').addClass('step-accessing-claims-nonactive');
                $(this).find('.step-claims-dash').hide();
            });
            
            id.removeClass('step-accessing-claims-nonactive').addClass('step-accessing-claims-active');
            id.find('.step-claims-dash').show();
            
            if(doScroll) {
                $('html, body').animate({
                    scrollTop: $('#' + idToShow).offset().top - offset + 2
                }, 1000, function() {
                  scrollLock = false;
                });
            }
        }
        
        $('.card-header').on('click', function(event) {
            $(this).parent().find('.card-expand').toggleClass('icon-flipped');
        });
        
        if (isIE()) {
            const elements = $('.step-claims-menu');
            Stickyfill.add(elements);
        }
    });
</script>

<section class="bg-white page-section py-5" role="main">
    <svg 
        preserveAspectRatio="xMidYMin slice" 
        class="shape-divider" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        x="0px" 
        y="0px"
        viewBox="0 0 1034.2 43.8" 
        style="enable-background:new 0 0 1034.2 43.8;" 
        xml:space="preserve" 
        alt="divider"
    >
        <path fill="#ffffff" d="M0,21.3c0,0,209.3-48,517.1,0s517.1,0,517.1,0v22.5H0V21.3z"/>
    </svg>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>
                    Accessing claims data
                </h1>
                <p>
                    Active, stand-alone Prescription Drug Plan (PDP) sponsors who want to access Medicare Part A and Part B claims data need to follow four steps:
                </p>
                <ol class="ds-c-list">
                    <li>Attest (agree) to AB2D API data protocols.</li>
                    <li>Appoint a technical point of contact for your organization.</li>
                    <li>Test synthetic data in the sandbox.</li>
                    <li>Receive credentials to access production claims data.</li>
                </ol>
                <hr/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 step-claims-menu-col" style="max-width: 250px;">
                <div class="step-claims-menu">
                    <div id="step-1-icon" class="step-accessing-claims step-accessing-claims-active">
                        Step 1 <span class="step-claims-dash"></span>
                    </div> 
                    <div id="step-2-icon" class="step-accessing-claims step-accessing-claims-nonactive">
                        Step 2 <span class="step-claims-dash" style="display: none;"></span>
                    </div>
                    <div id="step-3-icon" class="step-accessing-claims step-accessing-claims-nonactive">
                        Step 3 <span class="step-claims-dash" style="display: none;"></span>
                    </div>
                    <div id="step-4-icon" class="step-accessing-claims step-accessing-claims-nonactive">
                        Step 4 <span class="step-claims-dash" style="display: none;"></span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div id="step-1-content" class="step-content">
                    <div class="step-header">Step 1</div>
                    <div class="step-title">Begin attestation</div>
                    <div class="line-copy"></div>
                    <div class="header-title">Agreements and authorization</div>
                    <div class="row mb-5">
                        <div class="col-lg-6">
                            <p>
                                To access production claims data, an executive from your organization (“Attestor”) first needs to agree (“attest") to our 
                                <a href="https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745" target="_blank">Claims Data Usage Protocols</a>. These protocols include limitations on data use and disclosure.
                            </p>
                        </div>
                        <div class="col-lg-6 mb-5">
                            <img src="assets/img/attestation.svg" width="424" height="315" alt="attestation" />
                        </div>
                        <div class="col-lg-12">
                            <h2>How do I attest?</h2>
                            <ol class="ds-c-list">
                                <li>
                                    Log into the 
                                    <a href='https://hpms.cms.gov/app/ng/home/' target="_blank">Health Plan Management System</a> (HPMS)
                                </li>
                                <li>
                                    Select <i class="ds-u-font-style--italic">Claims Data Attestation</i> (under <i class=".ds-u-font-style--italic">Contract Management</i>)
                                </li>
                                <li>
                                    Choose an option for one, multiple, or all contracts in the <i class="ds-u-font-style--italic">Contracts Without Attestation</i> window
                                </li>
                                <li>
                                    Select the <i class="ds-u-font-style--italic">Attest</i> button
                                </li>
                                <li>
                                    Review the <i class="ds-u-font-style--italic">Claims Data Usage Protocols</i>
                                </li>
                                <li>
                                    Select <i class="ds-u-font-style--italic">I hereby certify that I understand the attestation above</i>
                                </li>
                                <li>
                                    Select <i class="ds-u-font-style--italic">Confirm</i>
                                </li>
                            </ol>
                            <p>
                                An organization can have multiple Attestors. We strongly encourage that you have multiple executives attest to each of their participating contracts. This is best practice as it prevents gaps in access if one Attestor leaves the organization.
                            </p>
                            <p>
                                To add multiple Attestors:
                            </p>
                            <p>
                                Follow the same steps. The Attest button will now be labeled “re-attest” under step 4. 
                            </p>
                            <h2>What are the requirements to be an Attestor?</h2>
                            <p>
                                An Attestor needs to:
                            </p>
                            <ul class="ds-c-list">
                                <li>
                                    be part of an active, stand-alone PDP organization (PACE and MAPD are ineligible).
                                </li>
                                <li>
                                    hold a current CEO, CFO, or COO role within the organization.
                                </li>
                                <li>
                                    attest to each contract that will connect to AB2D.
                                </li>
                            </ul>
                            <h2>How does attestation affect your claims data?</h2>
                            <ul class="ds-c-list">
                                <li>
                                    PDPs can retrieve claims data for their active plan enrollees from the date of attestation onwards. Claims data prior to their attestation date will <strong class="ds-u-font-weight--bold">not</strong> be provided.
                                </li>
                                <li>
                                    PDPs must have an active Attestor at all times. Your organization will not be able to receive data during periods without an active Attestor. Access to data will only be restored once another active CEO, CFO, or COO attests. We highly recommend adding multiple Attestors to reduce the risk of lapses in your data access. 
                                </li>
                            </ul>
                            <h2>When does attestation take effect?</h2>
                            <p>
                                Once an organization has attested, it follows the remaining steps in the onboarding process, which include appointing a technical specialist, testing synthetic data in the sandbox, and receiving credentials. Once these steps are complete, the organization will have access to claims data starting from the attestation date. Claims data previous to that date won't be available.
                            </p>
                            <hr/>
                        </div>
                    </div>      
                </div> <!-- End Step 1 Content -->
                <div id="step-2-content" class="step-content">
                    <div class="step-header">Step 2</div>
                    <div class="step-title">Choose an AB2D Operations Specialist</div>
                    <div class="line-copy"></div>
                    <div class="header-title">Your technical point of contact</div>
                    <div class="row mb-5">
                        <div class="col-lg-6">
                            <p>
                                After attesting, you will need to assign an AB2D Data Operations Specialist (ADOS). Your ADOS will serve as the primary technical point of contact of your organization. 
                            </p>
                        </div>
                        <div class="col-lg-6 mb-5">
                            <img src="assets/img/data-specialist.svg" alt="data-specialist" />
                        </div>
                        <div class="col-lg-12">
                            <h2>What qualifications does the ADOS need?</h2>
                            <ul class="ds-c-list">
                                <li>
                                    employee or vendor with authority to access and view your organization’s beneficiary data
                                </li>
                                <li>
                                    expertise to connect to and retrieve data from the sandbox and production environments
                                </li>
                                <li>
                                    ability to provide static IP address(es) and/or CIDR ranges for the network/system accessing the API
                                </li>
                            </ul>
                            <hr/>
                        </div>
                    </div>      
                </div> <!-- End Step 2 Content -->
                <div id="step-3-content" class="step-content">
                    <div class="step-header">Step 3</div>
                    <div class="step-title">Retrieve test claims data</div>
                    <div class="line-copy"></div>
                    <div class="header-title">Test the API in our sandbox</div>
                    <div class="row mb-5">
                        <div class="col-lg-6">
                            <p>
                                The sandbox is a test environment that allows anyone to interact with the AB2D API and retrieve test Medicare Parts A and B claims data. The ADOS will need to verify your organization’s retrieval of test data before receiving access to the AB2D API.  
                            </p>
                        </div>
                        <div class="col-lg-6 mb-5">
                            <img src="assets/img/programmer.svg" alt="programmer" />
                        </div>
                        <div class="col-lg-12">
                            <h2>Connecting to the sandbox</h2>
                            <p>
                                There are three ways to retrieve test data from the sandbox, depending on your preference: Postman, Swagger, and curl.
                            </p>
                            <ol class="ds-c-list">
                                <li>
                                    <a href="https://ab2d.cms.gov/tutorial-postman-swagger.html">Postman and Swagger User Guide</a>
                                </li>
                                <li>
                                    <a href="https://ab2d.cms.gov/tutorial-curl.html">curl User Guide</a>
                                </li>
                                <li>
                                    <a href="https://ab2d.cms.gov/advanced-user-guide.html">Advanced User Guide</a>
                                </li>
                            </ol>
                            <h2>Verifying test data retrieval</h2>
                            <p>
                                The ADOS must record the Log ID from successful jobs in the sandbox and provide this ID to the AB2D team for verification. Once verified the AB2D team will provide access to the API. 
                            </p>
                            <hr/>
                        </div>
                    </div>      
                </div> <!-- End Step 3 Content -->
                <div id="step-4-content" class="step-content">
                    <div class="step-header">Step 4</div>
                    <div class="step-title">Receive production API credentials</div>
                    <div class="line-copy"></div>
                    <div class="header-title">Get started with production data</div>
                    <div class="row mb-5">
                        <div class="col-lg-6">
                            <p>
                                Your organization must provide the AB2D team with the public static IP address(es) of the network or system connecting to the API. These will be reviewed, approved, and allow-listed as an additional layer of security. Afterward, the AB2D team will assign and provide the Attestor production credentials, which will allow your organization to use the API to retrieve real Medicare Parts A and B claims data. 
                            </p>
                        </div>
                        <div class="col-lg-6 mb-5">
                            <img src="assets/img/production.svg" alt="production" />
                        </div>
                        <div class="col-lg-12">
                            <p>
                                Our team can work with you to troubleshoot any issues and answer questions through our <a href="https://groups.google.com/u/1/g/cms-ab2d-api" target="_blank">Google Group</a>
                            </p>
                            <a href="https://github.com/CMSgov/ab2d-pdp-documentation" target="_blank">Explore production documentation</a>
                            <hr/>
                        </div>
                    </div>      
                </div> <!-- End Step 4 Content -->
            </div>
        </div>
    </div>
</section>