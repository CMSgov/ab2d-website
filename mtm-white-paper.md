---
layout: default
title:  "Using AB2D Medical Claims Data for Medicare Part D MTM Programs"
description:  "A whitepaper detailing using the AB2D to help PDP sponsors manage their Medicare Part D Medication Therapy Management (MTM) programs."
permalink: /mtm-white-paper
in-page-nav: true
---

# {{ page.title }}

<a href="{{ '/assets/downloads/Using AB2D Medical Claims Data for Medicare Part D MTM Programs.pdf' | relative_url }}" class="usa-button margin-bottom-3">Download PDF {% include sprite.html icon="file_download" size="3" %}</a>


## Executive overview 

The AB2D API is developed by the Centers for Medicare & Medicaid Services (CMS). It offers active, stand-alone Prescription Drug Plan (PDP) sponsors access to Medicare Parts A and B claims (“medical claims”) data for permitted uses at no cost. AB2D data use the [Fast Healthcare Interoperability Resources](https://www.hl7.org/fhir/overview.html) (FHIR) format and includes:  

- diagnosis (ICD-10) codes 
- procedural codes 
- primary care providers 
- service utilization history 

One important use case for the medical claims data is to help PDP sponsors  manage their Medicare Part D Medication Therapy Management (MTM) programs. PDP sponsors have traditionally relied only on prescription drug claims data to target enrollees eligible for their MTM programs. However, prescription data alone do not provide a complete history of enrollees’ health. 

As MTM programs become more data-driven, PDP sponsors can leverage the medical claims data available through AB2D. AB2D can improve how PDP sponsors target MTM program enrollees and perform more effective MTM services, such as targeted medication review (TMR) and comprehensive medication review (CMR) consultations. This whitepaper presents a framework for this use case.  

*See Appendix for permitted uses. 

## I. Background on MTM programs and AB2D 

### What are MTM programs? 

Section 1860D–4(c)(2) of the Social Security Act (“The Act”) requires all Part D sponsors to have an MTM program designed to assure, with respect to targeted beneficiaries, that covered Part D drugs are appropriately used to optimize therapeutic outcomes through improved medication use and to reduce the risk of adverse events, including adverse drug interactions. Section 1860D–4(c)(2)(A)(ii) of the Act requires sponsors target those Part D enrollees who  

- have multiple chronic diseases,  
- are taking multiple Part D drugs,  
- and are likely to meet a cost threshold for covered Part D drugs established by the Secretary.  

Since January 1, 2022, Part D sponsors are also required by section 1860D– 4(c)(2)(A)(ii)(II) of the Act to target all at-risk beneficiaries (ARBs) – that is ARBs for misuse or abuse of frequently abused drugs (FADs) with an active coverage limitation under a Part D drug management program (DMP) – must be targeted for enrollment in MTM. MTM program requirements are codified at [42 CFR § 423.153(d)](https://www.ecfr.gov/current/title-42/part-423/section-423.153#p-423.153(d)).  

The April 2024 [final rule](https://www.federalregister.gov/documents/2024/04/23/2024-07105/medicare-program-changes-to-the-medicare-advantage-and-the-medicare-prescription-drug-benefit) (89 FR 30448) implements changes to the MTM program requirements beginning January 1, 2025. For additional information, visit the May 6, 2024 HPMS memorandum, Contract Year [2025 Part D MTM Guidance and Submission Instructions](https://www.cms.gov/files/document/memo-contract-year-2025-medication-therapy-management-mtm-program-submission-v050624.pdf).

### What is the AB2D API? 

In February 2018, the [Bipartisan Budget Act of 2018](https://www.congress.gov/bill/115th-congress/house-bill/1892/text) (BBA) was signed into law and it required a way for PDP sponsors to access Medicare fee-for-services claims data. In response, CMS published the final rule [(84 FR 15880)](https://www.govinfo.gov/content/pkg/FR-2019-04-16/pdf/2019-06822.pdf) in April 2019 to implement section 50354 of the BBA at [42 CFR § 423.153(g)](https://www.ecfr.gov/current/title-42/part-423/section-423.153#p-423.153(g)). 

CMS then launched the AB2D API to provide PDP sponsors with direct access to Medicare Parts A and B claims data. It includes detailed information on historic and current diagnoses, procedures, providers, and service utilization. Available to all certified and eligible PDP sponsors free of charge, AB2D is built with strict data privacy and security standards. 

With AB2D’s detailed claims data, PDP sponsors can get a better understanding of enrollees’ health needs, medication use patterns, and potential intervention points. There are many uses for this data, but this whitepaper will focus specifically on how this data can: 

- Identify MTM program enrollees 
- Enhance MTM services 
- Boost health outcomes 

To access the free AB2D API, PDP sponsors must request prodution access and complete the attestation process. [Learn how to complete onboarding]({{ '/production-access' | relative_url }}). 

## II. Identify MTM program enrollees  

AB2D can help PDP sponsors find MTM program enrollees using data for a more thorough search capability. 

### Diagnosis codes    

AB2D provides medical claims data for enrollees, including diagnosis codes (e.g., ICD-10 codes). The codes describe a history of patients’ current and past diagnoses and procedures.  

With this data, PDP sponsors can identify enrollees who meet the MTM targeting criteria specified in [42 CFR § 423.153(d)(2)](https://www.ecfr.gov/current/title-42/part-423/section-423.153#p-423.153(d)(2)), like those with certain chronic diseases or diagnoses.  

To help identify MTM program enrollees, PDP sponsors could:  

1. Extract the data from AB2D’s interoperable FHIR format. This standard format ensures quality and ease-of-use for technical teams.  
2. Analyze the data and combine with other data sources to develop more advanced targeting methods. 
3. Update algorithms used to identify MTM program enrollees. 

## III. Enhance MTM services 

PDP sponsors can use insights from enrollee medical histories for more effective services. 

### Data analysis and preparation 

AB2D data can help turn large amounts of data into actionable insights.  

To prepare for TMRs and CMRs, PDP sponsors can: 

- Analyze AB2D claims data and other data sources to build more comprehensive health histories.  
- Distill data into a secure and usable format for personalized and high-quality MTM services.  

### Data-informed medication reviews 

PDP sponsors may use AB2D data during CMRs or TMRs for a holistic overview of enrollees' health histories. This allows for more informed discussions between the MTM provider and enrollee to:  

- Promote safe and effective medication use. 
- Prevent potential gaps in medication therapies. 
- Identify appropriate medication alternatives. 
- Reduce adverse drug events or interactions. 
- Enhance coordination of care across providers and pharmacists. 
- Allocate resources efficiently to save on costs. 

PDP sponsors and their MTM providers can use this data to supplement details gathered from enrollees through consultations or other data sources. This allows PDP sponsors to create more personalized medication action plans. 

*Note: AB2D data cannot be used to conduct retroactive reviews of medically accepted indications determinations. See the Appendix for a full list of permitted uses and limitations.*

## IV. Boost health outcomes 

PDP sponsors can enhance MTM enrollees’ health outcomes by improving medication use and adherence. 

Part D [Star Ratings](https://www.cms.gov/medicare/health-drug-plans/part-c-d-performance-data) evaluate the quality of services received by enrollees in a plan. CMS offers incentives to PDP sponsors with high Star Ratings: 

- CMS highlights contracts with an overall rating of 5 stars. 
- Enrollees may enroll in a 5-Star plan through a Special Enrollment Period. 
- PDP sponsors with 5-star plans may market year-round. 

Promoting medication adherence is one area of the quality measures used to rate PDPs. AB2D data can help plans address medication adherence, as well as statin use in persons with diabetes or other medication therapy problems, by proactively identifying MTM enrollees who may benefit from targeted interventions. As a result, this may help improve their health outcomes, the effectiveness of sponsors’ MTM programs, and performance in Star Ratings.  

## V. Value of AB2D data 

In conclusion, AB2D can bring potential value to PDP sponsors in administering their MTM programs through:  

- **FHIR data benefits:** AB2D data are shared directly with PDP sponsors in an interoperable FHIR format, which aggregates and streamlines enrollee information. FHIR is a compliant, secure standard for exchanging healthcare information electronically. 
- **Resource optimization:** Enhanced MTM targeting algorithms may create operational efficiencies and more effective resource allocations.  
- **Care coordination:** AB2D data provide PDP sponsors with enrollees’ detailed health data. This can make it easier for PDP sponsors, providers, and pharmacists to promote effective care coordination. 
- **Higher quality of care:** AB2D provides data insights on specific diagnoses and procedures. This may allow for more personalized MTM consultations and resolutions to medication therapy problems with providers. 
- **Optimizing therapeutic outcomes:** AB2D data can provide a feedback loop to review medication use, improve medication adherence, and inform the effectiveness of medication action plans. This iterative process can help PDP sponsors create MTM programs that are tailored to enrollees’ needs, driving continual enhancements in care, quality, and efficiency. 
- **Reducing enrollee burden:** AB2D offers PDP sponsors and MTM providers medical claims data, potentially reducing enrollees’ burden to provide their complete health history.  

For more information about AB2D and its applied uses, [visit our website]({{ '/index' | relative_url }}). 

## VI. Appendix 

### April 2019 Final Rule ([84 FR 15880](https://www.govinfo.gov/content/pkg/FR-2019-04-16/pdf/2019-06822.pdf)) 

Section 1860D–4(c)(6)(B) of the Act, as added by section 50354 of the [Bipartisan Budget Act of 2018](https://www.congress.gov/bill/115th-congress/house-bill/1892/text) (BBA), specifies the following purposes and limitations for AB2D data which were codified at [42 CFR § 423.153(g)](https://www.ecfr.gov/current/title-42/part-423/section-423.153#p-423.153(g)).  

### Purposes  

PDP sponsors receiving such Medicare claims data for their corresponding PDP plan enrollees may use the data: 

1. To optimize therapeutic outcomes through improved medication use 
2.  To improve care coordination and prevent adverse health outcomes, such as preventable emergency department visits and hospital readmissions 

### Limitations 

PDP sponsors must not use Medicare claims data provided by CMS under this subsection for any of the following purposes:  

1. To inform coverage determinations under Part D 
2. To conduct retroactive reviews of medically accepted indications determinations 
3. To facilitate enrollment changes to a different prescription drug plan or an MA-PD plan offered by the same parent organization 
4. To inform marketing of benefits 