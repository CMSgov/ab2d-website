---
layout: api-docs
page_title: "Claims Data Details"
seo_title: "Claims Data Details"
description: "Explore detailed information on the claims data available with the AB2D API, including diagnoses, procedures, providers, and service utilization."
in-page-nav: true
---

# {{ page.page_title }}

AB2D and its upstream data source generate and add fields to claims data in an effort to help make managing and providing those claims easier.

## Important AB2D claim fields

<dl>
  <dt class="font-sans-md text-bold margin-bottom-105">
    <a href="{{ '/claims-data-details' | relative_url }}#identifying-claims-and-claim-versions">Claim ID</a>
  </dt>
  <dd class="margin-left-0 margin-bottom-4">
    <code class="language-plaintext highlighter-rouge">eob.identifier list</code>
    <p class="margin-top-105">Unique identifier of a single version of a claim. Not the same across updates.</p>
  </dd>

  <dt class="font-sans-md text-bold margin-bottom-105">
    <a href="{{ '/claims-data-details' | relative_url }}#identifying-claims-and-claim-versions">Claim Control Number</a>
  </dt>
  <dd class="margin-left-0 margin-bottom-4">
    <code class="language-plaintext highlighter-rouge">eob.identifier list</code>
    <p class="margin-top-105">Unique identifier of a claim which is usually the same across claim updates. Use this field  to identify a group of related claim objects.</p>
  </dd>

  <dt class="font-sans-md text-bold margin-bottom-105">
    <a href="{{ '/claims-data-details' | relative_url }}#identifying-claims-and-claim-versions">Original Claim Control Number</a>
  </dt>
  <dd class="margin-left-0 margin-bottom-4">
    <code class="language-plaintext highlighter-rouge">eob.identifier list</code>
    <p class="margin-top-105">Identifies the original Claim Control Number (CCN) on an adjusted claim, in the event that the Claim Control Number has changed.</p>
  </dd>

  <dt class="font-sans-md text-bold margin-bottom-105">
    <a href="{{ '/claims-data-details' | relative_url }}#claim-status">Claim Status</a>
  </dt>
  <dd class="margin-left-0 margin-bottom-4">
    <code class="language-plaintext highlighter-rouge">eob.status</code>
    <p class="margin-top-105">Current status of the claim, which is either active or canceled. If the latest version (Claim ID) in a family of claims is canceled, then the entire claim is canceled.</p>
  </dd>

  <dt class="font-sans-md text-bold margin-bottom-105">
    <a href="{{ '/claims-data-details' | relative_url }}#last-updated">Last Updated</a>
  </dt>
  <dd class="margin-left-0 margin-bottom-4">
    <code class="language-plaintext highlighter-rouge">eob.meta.lastUpdated</code>
    <p class="margin-top-105">The last time any modification (new version) of a claim was received by AB2D.</p>
  </dd>

  <dt class="font-sans-md text-bold margin-bottom-105">
    <a href="{{ '/claims-data-details' | relative_url }}#last-updated">Claim Effective Date</a>
  </dt>
  <dd class="margin-left-0 margin-bottom-4">
    <code class="language-plaintext highlighter-rouge">eob.created</code>
    <p class="margin-top-105">Corresponds to the National Claim History (NCH) weekly processing date and used in final action processing to identify a version of a claim.</p>
  </dd>

  <dt class="font-sans-md text-bold margin-bottom-105">
    <a href="{{ '/claims-data-details' | relative_url }}#identifying-patients">Medicare Beneficiary Identifier (MBI)</a>
  </dt>
  <dd class="margin-left-0 margin-bottom-4">
    <code class="language-plaintext highlighter-rouge">eob.extension</code>
    <p class="margin-top-105">Unique identifier for an enrollee or patient across CMS. An MBI can be current or historic.</p>
  </dd>
</dl>

## The difference between a claim and a claim object

Each claim made by a provider translates into an immutable claim object in AB2D’s upstream data source. Any change to the claim leads to the creation of a completely new claim object. This new claim object “version” along with prior versions are stored by AB2D’s upstream data source and provided by the AB2D API.

Thus, the AB2D API can/will provide multiple claim objects that map to a single claim made by a provider.

Importantly, the following are true about claim objects and AB2D:
- AB2D only returns the latest available version of a claim object.
- Updates can cause the creation of new claim objects at any time.
- Organizations using AB2D are responsible for matching a new claim object to previous versions of a claim.
- The Claim Control Number is the best way to match claim objects across updates.

## Identifying claims and claim versions

There are 2 primary claim identifiers used to logically identify and map relationships between business claims and claim object versions:

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
      <tr>
        <th scope="col">Claim identifier</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th data-label="Claim identifier" scope="row">
          Claim Control Number
        </th>
        <td data-label="Description">
          The unique identification number of the business concept of a claim made by a provider. While each change to a claim will result in a new claim object, each of these “versions” falls under the same Claim Control Number. The Claim Control Number is the parent or common identifier linking related claim object versions.
        </td>
      </tr>
      <tr>
        <th data-label="Claim identifier" scope="row">
          Claim ID
        </th>
        <td data-label="Description">
          The unique identification number of a single claim object “version.” Each change to a claim will result in a new claim object with a unique Claim ID. A Claim ID may have multiple Claim Line IDs.
        </td>
      </tr>
    </tbody>
  </table>

## Example claim versions

A claim object enters the AB2D data source on January 1, 2026. This is the first claim object “version” (claim version 1) of the claim to arrive.

The claim comes with the following identifiers:

- Claim Control Number: 99995
- Claim ID: 321

A month later on February 1, 2026 the claim is updated and a new claim object version arrives. The new claim version has an additional line.

This new claim version (claim version 2) comes with the following identifiers:

- Claim Control Number: 99995
- Claim ID: 789

Notice 2 things:

1. The Claim Control Number stays the same between versions of the claim.
2. The Claim ID changes between versions of the claim.

<div class="usa-alert usa-alert--info usa-alert--slim">
    <div class="usa-alert__body">
        <p class="usa-alert__text">Note: Claim version is not a field in the data and will not be reported to Prescription Drug Plan sponsors.</p>
    </div>
</div>

<div class="overflow-x-auto" tabindex="0">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Control Number</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Claim ID</th>
              <th scope="col">Claim Line ID</th>
              <th scope="col">Version</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td data-label="Claim Control Number">99995</td>
              <td data-label="Last Updated">01/01/2026</td>
              <td data-label="Claim ID">321</td>
              <td data-label="Claim Line ID">
                  <p>ABCD</p>
                  <p>DEFG</p>
                  <p>HIJK</p>
              </td>
              <td data-label="Version">Version 1</td>
          </tr>
          <tr>
              <td data-label="Claim Control Number">99995</td>
              <td data-label="Last Updated">02/01/2026</td>
              <td data-label="Claim ID">798</td>
              <td data-label="Claim Line ID">
                  <p>ABCD</p>
                  <p>DEFG</p>
                  <p>HIJK</p>
                  <p>LMNO</p>
              </td>
              <td data-label="Version">Version 2</td>
          </tr>
      </tbody>
  </table>
</div>

## Claim Control Number
The Claim Control Number is always 1 of a list of IDs found in the identifier field. The Claim Control Number remains the same between all versions of a claim. It can be used to group together a “family” of claims.

- Format: string
- Location: found in the eob.identifier list
- Claim Identifier System: [https://bluebutton.cms.gov/identifiers/CLM-CNTL-NUM](https://bluebutton.cms.gov/identifiers/CLM-CNTL-NUM)

For more information see: [FHIR Identifier Explanation](http://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.identifier)

### Example JSON

{% capture jsonSnippet %}{% raw %}
...
    "identifier": [
    {
      "type": {
        "coding": [
          {
            "code": "uc",
            "display": "Unique Claim ID",
            "system": "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType"
          }
        ]
      },
      "value": "3418964649622"
    },
    {
      "system": "https://bluebutton.cms.gov/identifiers/CLM-CNTL-NUM",
      "value": "17569173545883GFU"
    }
  ]
...

{% endraw %}{% endcapture %}
{% include copy_snippet.html code=jsonSnippet language="json" %}

## Claim ID

The Claim ID is found in every ExplanationOfBenefit resource as 1 of a list of IDs found in the identifier field.

- Format: a positive number
- Location: found in eob.id element and in eob.identifier list
- Claim identifier type: [https://bluebutton.cms.gov/resources/variables/clm_id](https://bluebutton.cms.gov/resources/variables/clm_id)

For more information:
- [FHIR Identifier Explanation](http://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.identifier)
- [Claim ID Explanation](https://bluebutton.cms.gov/resources/variables/clm_id)

### Example JSON

{% capture jsonSnippet %}{% raw %}
...
    "identifier": [
        {
            "system": "https://bluebutton.cms.gov/resources/variables/clm_id",
            "value": "10000521860"
        },
        {
            "system": "https://bluebutton.cms.gov/resources/identifier/claim-group",
            "value": "7653956538"
        }
    ],
...
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=jsonSnippet language="json" %}

*Note: Claim ID will be in the list of identifiers and identified by the claim identification system.*

##  Claim Status

Claims reported by AB2D API have only 2 potential values for Claim Status. Claims are either active or canceled. If a claim object is active then it is the latest version of the claim received. If a claim is canceled, then the claim object is not the latest version of the claim or the claim itself has been revoked.

- Format: string with 1 of 2 values active or canceled
- Location: found directly on the claim
- URI: http://hl7.org/fhir/explanationofbenefit-status

For more information: [FHIR Specification for Claim Status](http://hl7.org/fhir/R4/valueset-explanationofbenefit-status.html)

## Last Updated

The Last Updated field is a metadata field reflecting the last time the claim object was refreshed. For example, the Last Updated field will change after a claim object’s status changes (e.g., from active to canceled). It shows when AB2D received a change, not when the change was actually made and submitted to Medicare.

- Format: ISO datetime with a timezone
- Location: found in claims metadata (eob.meta.lastUpdated)
- URI: http://hl7.org/fhir/R4/resource-definitions.html#Meta.lastUpdated

For more information:
- [ExplanationOfBenefit.created](http://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.created)
- [Common FHIR Metadata](http://hl7.org/fhir/R4/resource-definitions.html#Resource.meta)

## Effective Date

The Effective Date field corresponds to the National Claim History (NCH) weekly processing date, and is used in final action processing to identify a version of a claim. It will always be a Friday.

- Format: ISO datetime with a timezone
- Location: found in the eob.created field

For more information:
- [ExplanationOfBenefit.created](http://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.created)
- [Common FHIR Metadata](http://hl7.org/fhir/R4/resource-definitions.html#Resource.meta)

## Identifying patients

Each claim contains patient identifiers necessary to map a claim to a specific patient. The primary identifier used to associate a claim with a patient is the Medicare Beneficiary Identifier (MBI). As part of each claim, AB2D reports all MBIs including the current MBI and historic MBIs used in the past.

<div class="usa-alert usa-alert--info usa-alert--slim">
    <div class="usa-alert__body">
        <p class="usa-alert__text">Test data from the sandbox contains only negative Patient IDs.</p>
    </div>
</div>

<div class="overflow-x-auto" tabindex="0">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Identifier name</th>
              <th scope="col">Description</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td data-label="Identifier Name">Current MBI</td>
              <td data-label="Description">The current Medicare Beneficiary Identifier (MBI) for a patient. Uniquely identifies a patient across CMS.</td>
          </tr>
          <tr>
              <td data-label="Identifier Name">Historic MBI</td>
              <td data-label="Description">An inactive Medicare Beneficiary Identifier (MBI) for a patient. Uniquely identifies a patient across CMS.</td>
          </tr>
      </tbody>
  </table>
</div>

### MBI extension structure

Extensions referring to identifiers will have the following structure:

- The FHIR Identifier Extension URI is always the same: http://hl7.org/fhir/StructureDefinition/elementdefinition-identifier
- Identifier Currency Code Extension URI: https://bluebutton.cms.gov/resources/codesystem/identifier-currency
- The URL code identifies whether the MBI is currently in use or a historical value.
- The MBI Identifier System is always the same: http://hl7.org/fhir/sid/us-mbi.
- The identifier will be located at: extension.valueIdentifier.value.
- “Value” displays the actual MBI.

#### Example JSON

{% capture jsonSnippet %}{% raw %}
{
    "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-identifier",
    "valueIdentifier": {
        "extension": [
            {
                "url": "https://bluebutton.cms.gov/resources/codesystem/identifier-currency",
                "valueCoding": {
                    "code": "current"
                }
            }
        ],
        "system": “http://hl7.org/fhir/sid/us-mbi”,
        "value": "7S94E00AA00"
    }
}
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=jsonSnippet language="json" %}

### Current MBI

The current Medicare Beneficiary Identifier (MBI) used to identify a patient.

- Format: A string following the [CMS standards](https://www.cms.gov/Medicare/New-Medicare-Card/Understanding-the-MBI.pdf)
- Location: found in the list of extensions provided with the EOB
- Identifier System: http://hl7.org/fhir/sid/us-mbi

### Historic MBI

A Medicare Beneficiary Identifier (MBI), which in the past was used to identify the patient.

- Format: A string following the [CMS standards](https://www.cms.gov/Medicare/New-Medicare-Card/Understanding-the-MBI.pdf)
- Location: found in the list of extensions provided with the EOB
- Identifier System: http://hl7.org/fhir/sid/us-mbi

### Determining current vs. historic MBI

The list of extensions provided with each MBI includes an extension containing whether the MBI is current or historic.

If an MBI is current then the following example is representative.

{% capture jsonSnippet %}{% raw %}
"extension": [
    {
        "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-identifier",
        "valueIdentifier": {
            "extension": [
                {
                    "url": "https://bluebutton.cms.gov/resources/codesystem/identifier-currency",
                    "valueCoding": {
                        "code": "current"
                    }
                }
            ],
            "system": "http://hl7.org/fhir/sid/us-mbi",
            "value": "7S94E00AA00"
        }
    }
]
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=jsonSnippet language="json" %}

*Note: The code value for identifier-currency will be current.*

Whereas if the MBI was historic then the value would be switched to historic.

{% capture jsonSnippet %}{% raw %}
"extension": [
    {
        "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-identifier",
        "valueIdentifier": {
            "extension": [
                {
                    "url": "https://bluebutton.cms.gov/resources/codesystem/identifier-currency",
                    "valueCoding": {
                        "code": "historic"
                    }
                }
            ],
            "system": "http://hl7.org/fhir/sid/us-mbi",
            "value": "7S94E00AA00"
        }
    }
]
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=jsonSnippet language="json" %}

*Note: The code value for identifier-currency will be historic.*

## Identifying updates to existing claims

AB2D reports the most recent data available to it. Updates to existing claims may arrive at any time. Only the most recent version of a claim will be returned in any given export.

To detect an updated claim, look for a claim in the current export that has a Claim Control Number that matches a Claim Control Number from a previous export.

To detect updated claims the following fields on each claim must be tracked:

- Claim Control Number: unique ID of the claim family which is the same regardless of the claim version
- Original Claim Control Number: if a new Claim Control Number is assigned, this field serves as a reference to the previous Claim Control Number
- Claim ID: unique ID of the claim object which changes for each version of a claim
- Last Updated: when the most recent change to the claim was received by AB2D
- Effective Date: when the claim was sent to the National Claim History system
- Claim Status: the current status of the claim (active or canceled)

### Example scenario

In the example, a single claim will be tracked through several evolutions:

<div class="overflow-x-auto" tabindex="0">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim update</th>
              <th scope="col">Details</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td data-label="Claim update">Update 1</td>
              <td data-label="Details">Claim 99995 is received by AB2D on January 1, 2026.</td>
          </tr>
          <tr>
              <td data-label="Claim update">Update 2</td>
              <td data-label="Details">An update to Claim 99995 (additional claim line item) is received by AB2D on February 10, 2026.</td>
          </tr>
          <tr>
              <td data-label="Claim update">Update 3</td>
              <td data-label="Details">An update to Claim 99995 (removal of claim line item) is received by AB2D on March 31, 2026.</td>
          </tr>
      </tbody>
  </table>
</div>

In the example, 4 exports are run using the <a href="{{ '/query-parameters-v2' | relative_url }}">_since parameter</a> to limit duplicate data. Using the _since parameter alone returns claims data last updated after a specified date and up until the current date.

<div class="overflow-x-auto" tabindex="0">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Export</th>
              <th scope="col">Run on</th>
              <th scope="col">Since</th>
              <th scope="col">Description</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td data-label="Export">Export 1</td>
              <td data-label="Run On">January 31, 2026</td>
              <td data-label="Since">January 1, 2026</td>
              <td data-label="Description">Provide all claims information and updates received in January</td>
          </tr>
          <tr>
              <td data-label="Export">Export 2</td>
              <td data-label="Run On">February 28, 2026</td>
              <td data-label="Since">January 31, 2026</td>
              <td data-label="Description">Provide all claims information and updates received in February</td>
          </tr>
          <tr>
              <td data-label="Export">Export 3a</td>
              <td data-label="Run On">March 15, 2026</td>
              <td data-label="Since">February 14, 2026</td>
              <td data-label="Description">Provide all claims information and updates received after the first half of February</td>
          </tr>
          <tr>
              <td data-label="Export">Export 3b</td>
              <td data-label="Run On">March 31, 2026</td>
              <td data-label="Since">February 28, 2026</td>
              <td data-label="Description">Provide all claims information and updates received in March</td>
          </tr>
      </tbody>
  </table>
</div>

The dates used in this example are just random dates. Organizations cannot pull data before January 1, 2020 or their date of attestation (whichever is later).

### Updated claims scenario - export details

#### Export 1 01/01/2026 - 01/31/2026

On January 31, 2026, organization XYZ runs its first export. The export uses a _since parameter date of January 1, 2026. The _since date tells AB2D to report all claims information received between January 1, 2026 and January 31, 2026.

The export pulls a claim version with Claim Control Number 99995. At this time, the only version of the claim available to AB2D is 12987987. This version (claim update 1) is the latest claim version available as it is marked active.

<div class="overflow-x-auto" tabindex="0">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Control Number</th>
              <th scope="col">Claim ID</th>
              <th scope="col">Claim Line ID</th>
              <th scope="col">Claim Query Code</th>
              <th scope="col">Received</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Claim Status (as of 01/31/20)</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td data-label="Claim Control Number">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2026</td>
              <td data-label="Last Updated">01/01/2026</td>
              <td data-label="Claim Status (as of 01/31/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Control Number">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2026</td>
              <td data-label="Last Updated">01/01/2026</td>
              <td data-label="Claim Status (as of 01/31/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Control Number">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2026</td>
              <td data-label="Last Updated">01/01/2026</td>
              <td data-label="Claim Status (as of 01/31/20)">active</td>
          </tr>
      </tbody>
  </table>
</div>

#### Export 2 01/31/2026 - 02/28/2026

On February 28, 2026, organization XYZ runs an export with a _since parameter date of January 31, 2026. The _since date tells AB2D to report all claims information received between January 31, 2026 and February 28, 2026.

The export returns the new claim version with the same Claim Control Number (99995) and new claim ID (54689123). Because the export only returns the most recent version of the claim, the old, canceled claim version (12987987) is not returned in the export.

Claim ID 54689123 is pulled for the first time. Here is why:

1. The claim object was received on February 10, 2026. Since there hasn’t been any changes since, the Last Updated field is February 10, 2026 as well.
2. The claim object is included in the export because the Last Updated date (February 10, 2026) is after the _since parameter date (January 31, 2026).

Claim ID 12987987 is not returned. Here is why:

1. The new version of the claim was created (54689123). Since AB2D only returns the most recent version of a claim, this past version of the claim will not be returned.

<div class="overflow-x-auto" tabindex="0">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Control Number</th>
              <th scope="col">Claim ID</th>
              <th scope="col">Claim Line ID</th>
              <th scope="col">Claim Query Code</th>
              <th scope="col">Received</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Claim Status (as of 02/28/20)</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td data-label="Claim Control Number">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2026</td>
              <td data-label="Last Updated">02/10/2026</td>
              <td data-label="Claim Status (as of 02/28/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Control Number">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2026</td>
              <td data-label="Last Updated">02/10/2026</td>
              <td data-label="Claim Status (as of 02/28/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Control Number">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2026</td>
              <td data-label="Last Updated">02/10/2026</td>
              <td data-label="Claim Status (as of 02/28/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Control Number">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">LMNO</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2026</td>
              <td data-label="Last Updated">02/10/2026</td>
              <td data-label="Claim Status (as of 02/28/20)">active</td>
          </tr>
      </tbody>
  </table>
</div>

#### Export 3a 02/14/2026 - 03/15/2026

On March 15, 2026, organization XYZ runs an export with a _since parameter date of February 14, 2026. The _since date tells AB2D to report all claims information received between February 14, 2026 and March 15, 2026.

The export returns no information on claim 99995. AB2D has received no updates for the time interval and so no records are pulled.

#### Export 3b 02/28/2026 - 03/31/2026

On March 31, 2026, organization XYZ runs an export with a _since parameter date of February 28, 2026. The _since date tells AB2D to report all claims information received between February 28, 2026 and March 31, 2026.

The export returns a new version of the claim that originally had Claim Control Number 99995. It has a new claim ID (34543) and a new Claim Control Number (77774). The Original Claim Control Number is found in the eob.related element.

Again, because the export only returns the most recent version of the claim, the old, canceled claim version (54689123) is not returned in the export.

Claim version 34543 is pulled for the first time. Here is why:

1. The claim object was received on March 31, 2026. Since there hasn’t been any changes since, the Last Updated field is March 31, 2026 as well.
2. The claim object is included in the export because the Last Updated date (March 31, 2026) is after the _since parameter date (February 28, 2026).

<div class="overflow-x-auto" tabindex="0">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Control Number</th>
              <th scope="col">Original Claim Control Number</th>
              <th scope="col">Claim ID</th>
              <th scope="col">Claim Line ID</th>
              <th scope="col">Claim Query Code</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Claim Status (as of 03/31/20)</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td data-label="Claim Control Number">77774</td>
              <td data-label="Original Claim Control Number">99995</td>
              <td data-label="Claim ID">34543</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Last Updated">03/31/2026</td>
              <td data-label="Claim Status (as of 03/31/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Control Number">77774</td>
              <td data-label="Original Claim Control Number">99995</td>
              <td data-label="Claim ID">34543</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Last Updated">03/31/2026</td>
              <td data-label="Claim Status (as of 03/31/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Control Number">77774</td>
              <td data-label="Original Claim Control Number">99995</td>
              <td data-label="Claim ID">34543</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Last Updated">03/31/2026</td>
              <td data-label="Claim Status (as of 03/31/20)">active</td>
          </tr>
      </tbody>
  </table>
</div>

## Resolving canceled claims

AB2D provides claims based on the current information available. A claim may later be canceled at any time.

A claim is canceled when the latest version of the claim (the only version returned by BCDA v3) is marked as canceled

## Detecting duplicate claims

Duplicate claims occur when an organization pulls the same claim version twice and all field values are the same. Even using the _since parameter, the AB2D API makes no guarantee that this will never happen.

To detect duplicate claims the following fields on each claim must be tracked:

- Claim Control Number: unique ID of the claim family which is the same regardless of the claim version
- Claim ID: unique ID of the claim version which changes for each version of a claim

If the Claim ID and Claim Control Number match an existing claim you have in your system, then it is the same claim. The claim in the export is the most up to date version of claim.

{% include feedback-form.html id="a9031f20" %}
