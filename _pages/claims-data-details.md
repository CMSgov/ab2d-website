---
layout: api-docs
page_title: "Claims Data Details"
seo_title: "Claims Data Details | AB2D Medicare Patient Claims API"
description: "Explore detailed information on the claims data available with the AB2D API, including diagnoses, procedures, providers, and service utilization."
permalink: /claims-data-details
in-page-nav: true
---

# {{ page.page_title }}

AB2D and its upstream data source generate and add fields to claims data in an effort to help make managing and providing those claims easier.

## Important AB2D claim fields

<div class="overflow-x-auto">
  <table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
      <tr>
        <th scope="col">Field</th>
        <th scope="col">Description</th>
        <th scope="col">EOB location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th data-label="Field" scope="row">
          <a href="{{ '/claims-data-details' | relative_url }}#identifying-claims-and-claim-versions">Claim Group ID</a>
        </th>
        <td data-label="Description">
          Unique identifier of a claim which is the same across claim updates. This field can be used to group together a family of claims.
        </td>
        <td data-label="EOB Location">
          <p>eob.identifier list</p>
        </td>
      </tr>
      <tr>
        <th data-label="Field" scope="row">
          <a href="{{ '/claims-data-details' | relative_url }}#identifying-claims-and-claim-versions">Claim ID</a>
        </th>
        <td data-label="Description">
          Unique identifier of a single version of a claim. Not the same across updates.
        </td>
        <td data-label="EOB Location">
          <p>eob.identifier list</p>
        </td>
      </tr>
      <tr>
        <th data-label="Field" scope="row">
          <a href="{{ '/claims-data-details' | relative_url }}#claim-status">Claim Status</a>
        </th>
        <td data-label="Description">
          Current status of the claim, which is either active or cancelled. If the latest version (Claim ID) in a family of claims is cancelled, then the entire claim is cancelled.
        </td>
        <td data-label="EOB Location">
          <p>eob.status</p>
        </td>
      </tr>
      <tr>
        <th data-label="Field" scope="row">
          <a href="{{ '/claims-data-details' | relative_url }}#last-updated">Last Updated</a>
        </th>
        <td data-label="Description">
          The last time any modification (new version) of a claim was received by AB2D.
        </td>
        <td data-label="EOB Location" style="word-break:break-all">
          eob.meta.lastUpdated
        </td>
      </tr>
      <tr>
        <th data-label="Field" scope="row">
         <a href="{{ '/claims-data-details' | relative_url }}#identifying-patients">Medicare Beneficiary Identifier (MBI)</a>
        </th>
        <td data-label="Description">
          Unique identifier for an enrollee or patient across CMS. An MBI can be current or historic.
        </td>
        <td data-label="EOB Location">
          eob.extension
        </td>
      </tr>
    </tbody>
  </table>
</div>

## The difference between a claim and a claim object

Each claim made by a provider translates into an immutable claim object in AB2D’s upstream data source. Any change to the claim leads to the creation of a completely new claim object. This new claim object “version” along with prior versions are stored by AB2D’s upstream data source and provided by the AB2D API.

Thus, the AB2D API can/will provide multiple claim objects that map to a single claim made by a provider.

Importantly, the following are true about claim objects and AB2D:
- AB2D reports all claim objects regardless of whether those claim objects are the latest version available.
- Only the latest claim object will have Claim Status = active. All other claim objects provided will be marked Claim Status = canceled.
- Updates can cause the creation of new claim objects at any time.
- Organizations using AB2D are responsible for determining the most recent claim object.

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
          Claim Group ID
        </th>
        <td data-label="Description">
          The unique identification number of the business concept of a claim made by a provider. While each change to a claim will result in a new claim object, each of these “versions” falls under the same Claim Group ID. The Claim Group ID is the parent or common identifier linking related claim object versions.
        </td>
      </tr>
      <tr>
        <th data-label="Claim identifier" scope="row">
          Claim ID
        </th>
        <td data-label="Description">
          The unique identification number of a single claim object “version.” Each change to a claim will result in a new claim object with a unique Claim ID. Each of the related Claim IDs will share a common Claim Group ID. A Claim ID may have multiple Claim Line IDs.
        </td>
      </tr>
    </tbody>
  </table>

## Example claim versions

A claim object enters the AB2D data source on January 1, 2020. This is the first claim object “version” (claim version 1) of the claim to arrive.

The claim comes with the following identifiers:

- Claim Group ID: 99995
- Claim ID: 321

A month later on February 1, 2020 the claim is updated and a new claim object version arrives. The new claim version has an additional line.

This new claim version (claim version 2) comes with the following identifiers:

- Claim Group ID: 99995
- Claim ID: 789

Notice 2 things:

1. The Claim Group ID stays the same between versions of the claim.
2. The Claim ID changes between versions of the claim.

{% include alert.html
  variant="info"
  text="Note: Claim version is not a field in the data and will not be reported to Prescription Drug Plan sponsors."
%}

<div class="overflow-x-auto">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Group ID</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Claim ID</th>
              <th scope="col">Claim Line ID</th>
              <th scope="col">Version</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim ID">321</td>
              <td data-label="Claim Line ID">
                  <p>ABCD</p>
                  <p>DEFG</p>
                  <p>HIJK</p>
              </td>
              <td data-label="Version">Version 1</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Last Updated">02/01/2020</td>
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

## Claim Group ID
The Claim Group ID is always 1 of a list of IDs found in the identifier field. The Claim Group ID remains the same between all versions of a claim. It can be used to group together a “family” of claims.

- Format: a positive number
- Location: found in the eob.identifier list
- Claim Extension System: [https://bluebutton.cms.gov/resources/identifier/claim-group](https://bluebutton.cms.gov/resources/identifier/claim-group)

For more information see: [FHIR Identifier Explanation](http://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.identifier)

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

*Note: Claim Group ID will be in the list of identifiers and identified by the claim group system.*

## Claim ID

The Claim ID is found in every ExplanationOfBenefit resource as 1 of a list of IDs found in the identifier field.

- Format: a positive number
- Location: found in eob.identifier list
- Claim Extension System: [https://bluebutton.cms.gov/resources/variables/clm_id](https://bluebutton.cms.gov/resources/variables/clm_id)

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

## Identifying patients

Each claim contains patient identifiers necessary to map a claim to a specific patient. The primary identifier used to associate a claim with a patient is the Medicare Beneficiary Identifier (MBI). As part of each claim, AB2D reports all MBIs including the current MBI and historic MBIs used in the past.

<div class="overflow-x-auto">
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

AB2D reports the most recent data available to it. Updates to existing claims may arrive at any time.

To detect updated claims look for a claim group with multiple Claim IDs. Only 1 claim version (1 Claim ID) will be marked active and that is the latest version. If all claim versions are marked as canceled then the entire claim family group is canceled.

To detect updated claims the following fields on each claim must be tracked:

- Claim Group ID: unique ID of the claim family which is the same regardless of the claim version
- Claim ID: unique ID of the claim object which changes for each version of a claim
- Last Updated: when the most recent change to the claim was received by AB2D
- Claim Status: the current status of the claim (active or canceled)

### Example scenario

In the example, a single claim will be tracked through several evolutions:

<div class="overflow-x-auto">
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
              <td data-label="Details">Claim 99995 is received by AB2D on January 1, 2020.</td>
          </tr>
          <tr>
              <td data-label="Claim update">Update 2</td>
              <td data-label="Details">An update to Claim 99995 (additional claim line item) is received by AB2D on February 10, 2020.</td>
          </tr>
          <tr>
              <td data-label="Claim update">Update 3</td>
              <td data-label="Details">An update to Claim 99995 (removal of claim line item) is received by AB2D on March 31, 2020.</td>
          </tr>
      </tbody>
  </table>
</div>

In the example, 4 exports are run using the <a href="{{ '/query-parameters-v2' | relative_url }}">_since parameter</a> to limit duplicate data. Using the _since parameter alone returns claims data last updated after a specified date and up until the current date.

<div class="overflow-x-auto">
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
              <td data-label="Run On">January 31, 2020</td>
              <td data-label="Since">January 1, 2020</td>
              <td data-label="Description">Provide all claims information and updates received in January</td>
          </tr>
          <tr>
              <td data-label="Export">Export 2</td>
              <td data-label="Run On">February 28, 2020</td>
              <td data-label="Since">January 31, 2020</td>
              <td data-label="Description">Provide all claims information and updates received in February</td>
          </tr>
          <tr>
              <td data-label="Export">Export 3a</td>
              <td data-label="Run On">March 15, 2020</td>
              <td data-label="Since">February 14, 2020</td>
              <td data-label="Description">Provide all claims information and updates received after the first half of February</td>
          </tr>
          <tr>
              <td data-label="Export">Export 3b</td>
              <td data-label="Run On">March 31, 2020</td>
              <td data-label="Since">February 28, 2020</td>
              <td data-label="Description">Provide all claims information and updates received in March</td>
          </tr>
      </tbody>
  </table>
</div>

The dates used in this example are just random dates. Organizations cannot pull data before January 1, 2020 or their date of attestation (whichever is later).

### Updated claims scenario - export details

#### Export 1 01/01/2020 - 01/31/2020

On January 31, 2020, organization XYZ runs its first export. The export uses a _since parameter date of January 1, 2020. The _since date tells AB2D to report all claims information received between January 1, 2020 and January 31, 2020.

The export pulls a claim version with Claim Group ID 99995. At this time, the only version of the claim available to AB2D is 12987987. This version (claim update 1) is the latest claim version available as it is marked active.

<div class="overflow-x-auto">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Group ID</th>
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
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 01/31/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 01/31/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 01/31/20)">active</td>
          </tr>
      </tbody>
  </table>
</div>

#### Export 2 01/31/2020 - 02/28/2020

On February 28, 2020, organization XYZ runs an export with a _since parameter date of January 31, 2020. The _since date tells AB2D to report all claims information received between January 31, 2020 and February 28, 2020.

The export pulls 2 claim versions with Claim Group ID 99995: the old, canceled claim version (12987987) and the new, active version (54689123) from claim update 2.

Claim ID 12987987 is pulled for a second time. Here is why:

1. The Claim Status was changed to canceled on February 10, 2020.
2. Although the claim object was originally received January 1, 2020, the update in Claim Status results in a Last Updated field of February 10, 2020
3. The claim object is included in the export because the Last Updated field (February 10, 2020) is after the _since parameter value (January 31, 2020).

Claim ID 54689123 is pulled for the first time. Here is why:

1. The claim object was received on February 10, 2020. Since there hasn't been any changes since, the Last Updated field is February 10, 2020 as well.
2. The claim object is included in the export because the Last Updated date (February 10, 2020) is after the _since parameter date (January 31, 2020).

<div class="overflow-x-auto">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Group ID</th>
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
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">LMNO</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">active</td>
          </tr>
      </tbody>
  </table>
</div>

#### Export 3a 02/14/2020 - 03/15/2020

On March 15, 2020, organization XYZ runs an export with a _since parameter date of February 14, 2020. The _since date tells AB2D to report all claims information received between February 14, 2020 and March 15, 2020.

The export pulls no information on claim 99995. AB2D has received no updates for the time interval and so no records are pulled.

#### Export 3b 02/28/2020 - 03/31/2020

On March 31, 2020, organization XYZ runs an export with a _since parameter date of February 28, 2020. The _since date tells AB2D to report all claims information received between February 28, 2020 and March 31, 2020.

The export pulls 2 claim versions with Claim Group ID 99995: the older, canceled claim version (54689123) and the newest, active version (34543) from claim update 3.

Claim version 54689123 is pulled for a second time. Here is why:

1. The Claim Status was changed to canceled on March 31, 2020. Although the claim was originally received February 10, 2020, the update in Claim Status results in a Last Updated field of March 31, 2020.
2. The claim is included in the export because the Last Updated field (March 31, 2020) is after the _since parameter value (February 28, 2020).


Claim version 34543 is pulled for the first time. Here is why:

1. The claim object was received on March 31, 2020. Since there hasn’t been any changes since, the Last Updated field is March 31, 2020 as well.
2. The claim object is included in the export because the Last Updated date (March 31, 2020) is after the _since parameter date (February 28, 2020).

<div class="overflow-x-auto">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Group ID</th>
              <th scope="col">Claim ID</th>
              <th scope="col">Claim Line ID</th>
              <th scope="col">Claim Query Code</th>
              <th scope="col">Received</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Claim Status (as of 03/31/20)</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">03/31/2020</td>
              <td data-label="Claim Status (as of 03/31/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">03/31/2020</td>
              <td data-label="Claim Status (as of 03/31/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">03/31/2020</td>
              <td data-label="Claim Status (as of 03/31/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">LMNO</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">03/31/2020</td>
              <td data-label="Claim Status (as of 03/31/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">34543</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">03/31/2020</td>
              <td data-label="Last Updated">03/31/2020</td>
              <td data-label="Claim Status (as of 03/31/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">34543</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">03/31/2020</td>
              <td data-label="Last Updated">03/31/2020</td>
              <td data-label="Claim Status (as of 03/31/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">34543</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">03/31/2020</td>
              <td data-label="Last Updated">03/31/2020</td>
              <td data-label="Claim Status (as of 03/31/20)">active</td>
          </tr>
      </tbody>
  </table>
</div>

## Resolving canceled claims

AB2D provides claims based on the current information available. A claim may later be canceled at any time.

A claim is canceled when all versions (Claim IDs) in the claim group are marked as canceled.

To detect updated claims the following fields on each claim must be tracked:

- Claim Group ID: unique ID of the claim which is the same regardless of the claim version
- Claim ID: unique ID of the claim version which changes for each version of a claim
- Last Updated: when the most recent change to the claim was received by AB2D
- Claim Status: the current status of the claim

### Example scenario

In the example, a single claim will be tracked through several evolutions:

<div class="overflow-x-auto">
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
              <td data-label="Details">Claim 99995 is received by AB2D on January 1, 2020.</td>
          </tr>
          <tr>
              <td data-label="Claim update">Update 2</td>
              <td data-label="Details">An update to Claim 99995 is received by AB2D on February 10, 2020.</td>
          </tr>
      </tbody>
  </table>

  In the example, 2 exports are run using the <a href="{{ '/query-parameters-v2' | relative_url }}">_since parameter</a> to limit duplicate data. Using the _since parameter alone returns claims data last updated after a specified date and up until the current date.

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
              <td data-label="Run On">January 31, 2020</td>
              <td data-label="Since">January 1, 2020</td>
              <td data-label="Description">Provide all claims information and updates received in January</td>
          </tr>
          <tr>
              <td data-label="Export">Export 2</td>
              <td data-label="Run On">February 28, 2020</td>
              <td data-label="Since">January 31, 2020</td>
              <td data-label="Description">Provide all claims information and updates received in February</td>
          </tr>
      </tbody>
  </table>
</div>

The dates used in this example are just random dates. Organizations cannot pull data before January 1, 2020 or their date of attestation (whichever is later).

### Canceled claims scenario - export details

#### Export 1 01/01/2020 - 01/31/2020

On January 31, 2020, organization XYZ runs its first export. The export uses a _since parameter date of January 1, 2020. The _since date tells AB2D to report all claims information received between January 1, 2020 and January 31, 2020.

The export pulls a claim version with Claim Group ID 99995. At this time, the only version of the claim available to AB2D is 12987987. This version (claim update 1) is the latest claim version available as it is marked active.

<div class="overflow-x-auto">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Group ID</th>
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
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 01/31/20">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 01/31/20">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 01/31/20">active</td>
          </tr>
      </tbody>
  </table>
</div>

#### Export 2 01/31/2020 - 02/28/2020

On February 28, 2020, organization XYZ runs an export with a _since parameter date of January 31, 2020. The _since date tells AB2D to report all claims information received between January 31, 2020 and February 28, 2020.

The export pulls 2 claim versions with Claim Group ID 99995: an older, canceled claim version (12987987) and a newer, also canceled version (54689123) from claim update 2. Thus, all versions of the claim are canceled.

Claim version 12987987 is pulled for a second time. Here is why:

1. The Claim Status was changed to canceled on February 10, 2020.
2. Although the claim object was originally received January 1, 2020, the update in Claim Status results in a Last Updated field of February 10, 2020.
3. The claim is included in the export because the Last Updated field (February 10, 2020) is after the _since parameter value (January 31, 2020).

Claim version 54689123 is pulled for the first time. Here is why:

1. The claim object was received and marked as canceled on February 10, 2020. Since there hasn’t been any changes since, the Last Updated field is February 10, 2020 as well.
2. The claim object is included in the export because the Last Updated date (February 10, 2020) is after the _since parameter date (January 31, 2020).

<div class="overflow-x-auto">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Group ID</th>
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
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">canceled</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">54689123</td>
              <td data-label="Claim Line ID">LMNO</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">02/10/2020</td>
              <td data-label="Last Updated">02/10/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">canceled</td>
          </tr>
      </tbody>
  </table>
</div>

## Detecting duplicate claims

Duplicate claims occur when an organization pulls the same claim version twice and all field values are the same. Even using the _since parameter, the AB2D API makes no guarantee that this will never happen.

To detect duplicate claims the following fields on each claim must be tracked:

- Claim Group ID: unique ID of the claim family which is the same regardless of the claim version
- Claim ID: unique ID of the claim version which changes for each version of a claim

### Example scenario

In the example, a single claim will be tracked:

- Claim 99995 is received by AB2D on January 1, 2020

In the example, 2 exports are run using the _since parameter. These exports are for overlapping time periods so duplicate information will be received. The 2 exports are described below.

<div class="overflow-x-auto">
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
              <td data-label="Run On">January 31, 2020</td>
              <td data-label="Since">January 1, 2020</td>
              <td data-label="Description">Provide all claims information and updates received in January</td>
          </tr>
          <tr>
              <td data-label="Export">Export 2</td>
              <td data-label="Run On">February 28, 2020</td>
              <td data-label="Since">January 1, 2020</td>
              <td data-label="Description">Provide all claims information and updates received in January and February</td>
          </tr>
      </tbody>
  </table>
</div>

The dates used in this example are just random dates. Organizations cannot pull data before January 1, 2020 or their date of attestation (whichever is later).

### Duplicate claims scenario - export details

#### Export 1 01/01/2020 - 01/31/2020

On January 31, 2020, organization XYZ runs its first export. The export uses a _since parameter date of January 1, 2020. The _since date tells AB2D to report all claims information received between January 1, 2020 and January 31, 2020.

The export pulls a claim version with Claim Group ID 99995. At this time the only version of the claim available to AB2D is 12987987. This version is the latest claim version available as it is marked active.

<div class="overflow-x-auto">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Group ID</th>
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
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 01/31/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 01/31/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 01/31/20)">active</td>
          </tr>
      </tbody>
  </table>
</div>

#### Export 2 01/01/2020 - 02/28/2020

On February 28, 2020, organization XYZ runs an export with a _since parameter date of January 1, 2020. The _since date tells AB2D to report all claims information received between January 1, 2020 and February 28, 2020.

The export pulls a duplicate of the claim from export 1 as it has the same Claim Group ID (99995), Claim ID (12987987), and Last Updated date (01/01/2020).

The claim was pulled twice because the _since date has not changed in both exports, resulting in an overlap. AB2D recommends following the [incremental export model]({{ '/filter-claims-data-v2' | relative_url }}#incremental-export-model) and using V2 of the API to avoid duplicate claims data.

<div class="overflow-x-auto">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Claim Group ID</th>
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
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">ABCD</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">DEFG</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">active</td>
          </tr>
          <tr>
              <td data-label="Claim Group ID">99995</td>
              <td data-label="Claim ID">12987987</td>
              <td data-label="Claim Line ID">HIJK</td>
              <td data-label="Claim Query Code">final</td>
              <td data-label="Received">01/01/2020</td>
              <td data-label="Last Updated">01/01/2020</td>
              <td data-label="Claim Status (as of 02/28/20)">active</td>
          </tr>
      </tbody>
  </table>
</div>
