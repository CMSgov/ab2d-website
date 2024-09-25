---
layout: default
title:  "Onboarding"
permalink: /onboarding
---

# {{ page.title }}

Only active, stand-alone Prescription Drug Plan (PDP) sponsors can access production enrollee claims data, but anyone can use the sandbox environment to get test claims data and try the API.

<a href="https://docs.google.com/document/d/19gV19BHBqGVezAcpNAm90DlVYlXKZSoW3Tvg4N9Bkq8/edit?usp=sharing" class="usa-button usa-button--unstyled">Visit the sandbox {% include sprite.html icon="arrow_forward" %}</a>
## Step 1


### Attest to AB2D data protocols

A current CEO, CFO, or COO  (“Attestor”) from your organization first needs to agree (“attest") to our Claims Data Usage Protocols. These protocols include [legal limitations on data use and disclosure](https://www.federalregister.gov/documents/2019/04/16/2019-06822/medicare-and-medicaid-programs-policy-and-technical-changes-to-the-medicare-advantage-medicare#page-15745).

Log in to the [Health Plan Management System (HPMS)](https://hpms.cms.gov/app/ng/home/) and select _Claims Data Attestation_ (under _Contract Management_). We encourage you to have multiple Attestors. This prevents gaps in access if Attestors leave the organization. 

#### How do I complete attestation?
Once you log in to the [Health Plan Management System (HPMS)](https://hpms.cms.gov/app/ng/home/) and select _Claims Data Attestation_ (under _Contract Management_):
1. Choose an option for a single, multiple, or all contracts in the _ontracts Without Attestation_ window.
2. Select the _Attest_ button.
3. Review the _Claims Data Usage Protocols_.
4. Select _I hereby certify that I understand the attestation above_.
5. Select _Confirm_.

To add multiple Attestors, follow the same steps and select the _Re-attest_ button in step 4.


#### What are the requirements to be an Attestor?

An Attestor needs to:

- Be part of an active, stand-alone PDP organization (PACE and MAPD are ineligible)
- Hold a current CEO, CFO, or COO role within the organization
- Attest to each contract that will connect to AB2D

#### How does attestation affect your claims data?

- PDP sponsors can retrieve claims data for their active plan enrollees from the date of attestation onwards. Claims data prior to their attestation date will **not** be provided.
- PDP sponsors must have an active Attestor at all times. Your organization will not be able to receive data during periods without an active Attestor. Access to data will only be restored once another active CEO, CFO, or COO attests.


#### When does attestation take effect?
Once an organization attests, it follows the remaining steps in the onboarding process. This includes choosing a technical point of contact, testing synthetic data in the sandbox, and receiving production credentials. Once these steps are complete, the organization will have access to claims data starting from the attestation date. Claims data previous to that date will not be available.

## Step 2

### Choose an AB2D Data Operations Specialist

Once attestation is complete, the Attestor will receive an email with instructions on how to assign an AB2D Data Operations Specialist (ADOS). This is a primary technical point of contact for your organization.

#### What are the requirements to be an ADOS?

- Employee or vendor with authority to access and view your organization’s enrollee data
- Expertise to connect to and retrieve data from the sandbox and production environments
- Ability to provide static IP address(es) and/or CIDR ranges for the network/system accessing the API

## Step 3

### Retrieve test claims data

#### Verify test data retrieval

The ADOS will receive an email with instructions on next steps. They must send the AB2D team the job ID from a successful data export in the sandbox.  Learn [how to get a bearer token]({% link how-to-get-a-bearer-token.md %}) and [access test claims data]({% link how-to-access-test-claims-data.md %}).
#### Provide your IP addresses

Your organization must provide the AB2D team with the public, static IP address(es) of every network or system that will use the API. These will be reviewed, approved, and allowlisted as an additional layer of security.  

## Step 4

### Get production credentials

The Attestor will receive an email with production credentials to share with their ADOS.  Production credentials are Personally Identifiable Information (PII) that allow the ADOS to [get a bearer token]({% link how-to-get-a-bearer-token.md %}) and [access production claims data]({% link how-to-access-production-claims-data.md %}).

If you have questions or need help, visit [Support]({% link support.md %}) or contact the AB2D team at [ab2d@cms.hhs.gov](mailto:ab2d@cms.hhs.gov).
