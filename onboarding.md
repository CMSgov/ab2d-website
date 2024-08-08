---
layout: default
title:  "Onboarding"
permalink: /onboarding
---

# {{ page.title }}

How can my organization start using the AB2D API?

The AB2D API allows active, stand-alone Prescription Drug Plan sponsors (PDPs) to use Medicare Parts A and B data for [more effective services and better health outcomes]({% link use-cases.md %}). To receive access to production data, your organization must:

1. Attest (agree) to AB2D data protocols.
1. Appoint a technical point of contact for your organization.
1. Test synthetic data in the sandbox.
1. Receive credentials to access production claims data.

## Step 1


### Begin attestation

#### Agreements and authorization

To access production claims data, an executive from your organization (“Attestor”) first needs to agree (“attest") to our [Claims Data Usage Protocols](https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745). These protocols include limitations on data use and disclosure.

#### How do I attest?

- Log in to the [Health Plan Management System (HPMS)](https://hpms.cms.gov/app/ng/home/)
- Select Claims Data Attestation (under Contract Management)
- Choose an option for one, multiple, or all contracts in the Contracts Without Attestation window
- Select the Attest button
- Review the Claims Data Usage Protocols
- Select I hereby certify that I understand the attestation above
- Select Confirm

An organization can have multiple Attestors. We encourage that you have multiple executives attest to each of their participating contracts. This prevents gaps in access if one Attestor leaves the organization.

To add multiple Attestors:

Follow the same steps. The Attest button will now be labeled “re-attest” under step 4.


#### What are the requirements to be an Attestor?

An Attestor needs to:

- Be part of an active, stand-alone PDP organization (PACE and MAPD are ineligible)
- Hold a current CEO, CFO, or COO role within the organization
- Attest to each contract that will connect to AB2D

#### How does attestation affect your claims data?

- PDPs can retrieve claims data for their active plan enrollees from the date of attestation onwards. Claims data prior to their attestation date will **not** be provided.
- PDPs must have an active Attestor at all times. Your organization will not be able to receive data during periods without an active Attestor. Access to data will only be restored once another active CEO, CFO, or COO attests.


#### When does attestation take effect?
Once an organization has attested, it follows the remaining steps in the onboarding process, which include appointing a technical specialist, testing synthetic data in the sandbox, and receiving credentials. Once these steps are complete, the organization will have access to claims data starting from the attestation date. Claims data previous to that date won't be available.

## Step 2

### Choose an AB2D Operations Specialist

#### Your technical point of contact

After attesting, you will need to assign an AB2D Data Operations Specialist (ADOS). Your ADOS will serve as the primary technical point of contact of your organization.

#### What qualifications does the ADOS need?

- Employee or vendor with authority to access and view your organization’s beneficiary data
- Expertise to connect to and retrieve data from the sandbox and production environments
- Ability to provide static IP address(es) and/or CIDR ranges for the network/system accessing the API

## Step 3

### Retrieve test claims data

#### Test the API in our sandbox

The sandbox is a test environment that allows anyone to interact with the AB2D API and retrieve test Medicare Parts A and B claims data. The ADOS will need to verify your organization’s retrieval of test data before receiving access to the AB2D API.

#### Connecting to the sandbox

There are three ways to retrieve test data from the sandbox, depending on your preference: Postman, Swagger, and curl.

- [Postman and Swagger User Guide](https://ab2d.cms.gov/tutorial-postman-swagger.html)
- [curl User Guide](https://ab2d.cms.gov/tutorial-curl.html)
- [Advanced User Guide](https://ab2d.cms.gov/advanced-user-guide.html)

#### Verifying test data retrieval

The ADOS must record the Log ID from successful jobs in the sandbox and provide this ID to the AB2D team for verification. Once verified the AB2D team will provide access to the API.

## Step 4

### Receive production API credentials

#### Get started with production data

Your organization must provide the AB2D team with the public static IP address(es) of the network or system connecting to the API. These will be reviewed, approved, and allow-listed as an additional layer of security. Afterward, the AB2D team will assign and provide the Attestor production credentials, which will allow your organization to use the API to retrieve real Medicare Parts A and B claims data.

If you have questions or need help, visit our [Support]({% link support.md %}) page or contact the AB2D team through our Google Group.

[Explore production documentation](https://github.com/CMSgov/ab2d-pdp-documentation).
