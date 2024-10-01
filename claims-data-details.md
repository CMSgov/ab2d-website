---
layout: default
title:  "Claims Data Details"
permalink: /claims-data-details
in-page-nav: true
---

# {{ page.title }}

AB2D and its upstream data source generate and add fields to claims data in an effort to help make managing and providing those claims easier. 

## Important AB2D claims fields

  <table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
      <tr>
        <th scope="col">Field</th>
        <th scope="col">Description</th>
        <th scope="col">EOB Location</th>
        <th scope="col">For More Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th data-label="Field" scope="row">
          Claim Group
        </th>
        <td data-label="Description">
          Unique identifier of a claim which is the same across claim updates. This field can be used to group together a family of claims.
        </td>
        <td data-label="EOB Location">
          <p>eob.identifier[] </p>
          <ul>
            <li>Found in list of identifiers </li>
          </ul>
        </td>
        <td data-label="For More Details">
          <a href="https://github.com/CMSgov/ab2d-pdp-documentation/blob/main/docs/Claims%20Representation%20Details.md#identifying-claims-and-claim-versions">Identifying Claims and Claim Versions</a>
        </td>
      </tr>
      <tr>
        <th data-label="Field" scope="row">
          Claim ID
        </th>
        <td data-label="Description">
          Unique identifier of a single version of a claim. Not the same across updates.
        </td>
        <td data-label="EOB Location">
          <p>eob.identifier[] </p>
          <ul>
            <li>Found in list of identifiers </li>
          </ul>
        </td>
        <td data-label="For More Details">
          <a href="https://github.com/CMSgov/ab2d-pdp-documentation/blob/main/docs/Claims%20Representation%20Details.md#identifying-claims-and-claim-versions">Identifying Claims and Claim Versions</a>
        </td>
      </tr>
      <tr>
        <th data-label="Field" scope="row">
          Claim Status
        </th>
        <td data-label="Description">
          If you are, however, viewing one version of a claim within the context of a claim family and the last version is canceled, then the claim family is canceled.
        </td>
        <td data-label="EOB Location">
          <p>eob.status</p>
          <ul>
            <li>“Active” or “canceled”</li>
          </ul>
        </td>
        <td data-label="For More Details">
          <a href="https://github.com/CMSgov/ab2d-pdp-documentation/blob/main/docs/Claims%20Representation%20Details.md#claim-status">Claim status</a>
        </td>
      </tr>
      <tr>
        <th data-label="Field" scope="row">
          Claim Last Updated
        </th>
        <td data-label="Description">
          The last time any modification (new version) of a claim was received.
        </td>
        <td data-label="EOB Location">
          eob.meta.lastUpdated
        </td>
        <td data-label="For More Details">
          <a href="https://github.com/CMSgov/ab2d-pdp-documentation/blob/main/docs/Claims%20Representation%20Details.md#last-updated">Last Updated</a>
        </td>
      </tr>
      <tr>
        <th data-label="Field" scope="row">
          MBI
        </th>
        <td data-label="Description">
          Medicare Beneficiary Identifier (Medicare standard identifier).
        </td>
        <td data-label="EOB Location">
          eob.extension
        </td>
        <td data-label="For More Details">
          <a href="https://github.com/CMSgov/ab2d-pdp-documentation/blob/main/docs/Claims%20Representation%20Details.md#identifying-patients">Identifying Patients</a>
        </td>
      </tr>
    </tbody>
  </table>

## The difference between a claim and a claim object

Each claim made by a provider translates into an immutable claim object in AB2D’s upstream data source. Any change to the claim leads to the creation of a completely new claim object. This new claim object “version” along with prior versions are stored by AB2D’s upstream data source and provided by the AB2D API.

Thus, the AB2D API can/will provide multiple claim objects that map to a single claim made by a provider.

Importantly, the following is true about claim objects and AB2D:
- AB2D reports all claim objects regardless of whether those claim objects are the latest version available.
- Only the latest claim object will have Claim Status = `active`. All other claim objects provided will be marked Claim Status = `canceled`.
- Updates can cause the creation of new claim objects at any time.
- Organizations using AB2D are responsible for determining the most recent claim object.

## Identifying claims and claim versions

There are two primary Claim Identifiers used to logically identify and map relationships between business claims and claim object versions:

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
      <tr>
        <th scope="col">Claim Identifier</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th data-label="Claim Identifier" scope="row">
          Claim Group ID
        </th>
        <td data-label="Description">
          The unique identification number of the business concept of a claim made by a provider. While each change to a claim will result in a new claim object, each of these “versions” falls under the same Claim Group ID. The Claim Group ID is the parent or common identifier linking related claim object versions.
        </td>
      </tr>
      <tr>
        <th data-label="Claim Identifier" scope="row">
          Claim ID
        </th>
        <td data-label="Description">
          The unique identification number of a single claim object “version”. Each change to a claim will result in a new claim object and result in the assignment of a new unique Claim ID. Each of these related Claim ID will share a common Claim Group ID. A Claim ID may have multiple claim lines.
        </td>
      </tr>
    </tbody>
  </table>

## Example claim versions

A claim object enters the AB2D data source on January 1st, 2020. This is the first claim object “version” (Claim Version 1) of the claim to arrive.

The claim comes with the following identifiers:

- Claim Group: 99995
- Claim ID: 321

A month later on February 1st, 2020 the claim is updated and a new claim object version arrives. The new claim version has an additional line.

This new claim version (Claim Version 2) comes with the following identifiers:

- Claim Group: 99995
- Claim ID: 789

Notice two things:

1. The claim group stays the same between versions of the claim.
2. The Claim ID changes between versions of the claim.

{% include alert.html
  variant="info"
  text="Note: Claim Version is not a field in the data and will not be reported to Prescription Drug Plan sponsors."
%}

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
            <td data-label="Claim Group ID"></td>
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

## URI vs URL

All URLs below are highlighted in blue. Else they are a URI (uniform resource identifier). See [URI vs URL](https://danielmiessler.com/study/difference-between-uri-url/) for more information.

## Claim group
The claim group is always one of a list of IDs found in the identifier field. The Claim Group ID remains the same between all versions of a claim. It can be used to group together a “family” of claims.

Basic Facts:

- Format: a positive number
- Location: found in the list of identifiers (eob.identifier[])
- <a href="https://bluebutton.cms.gov/resources/identifier/claim-group"> Claim Extension System</a>

For more information see: <a href="http://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.identifier">FHIR Identifier Explanation</a>

### Example JSON

{% capture jsonSnippet %}{% raw %}
...
"identifier": [
    {
    "system": "https://bluebutton.cms.gov/resources/variables/clm_id",
    "value": "-10000521860"
    },
    // Claim group will be in the list of identifiers and identified
    // by the claim group system
    {
    "system": "https://bluebutton.cms.gov/resources/identifier/claim-group",
    "value": "7653956538"
    }
],
...
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %} 

## Claim ID

The claim id is found in every ExplanationOfBenefits as one of a list of IDs found in the identifier field ().

Basic Format:

- Format: a positive number
- Location: found in the list of identifiers (eob.identifier[])
- <a href="https://bluebutton.cms.gov/resources/variables/clm_id">Claim Extension System</a>

For more information: 
- <a href="http://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.identifier">FHIR Identifier Explanation</a>
- <a href="https://bluebutton.cms.gov/resources/variables/clm_id">Claim ID Explanation</a>

### Example JSON

{% capture jsonSnippet %}{% raw %}
...
"identifier": [
    // Claim id will be in the list of identifiers and identified
    // by the claim id system
    {
        "system": "https://bluebutton.cms.gov/resources/variables/clm_id",
        "value": "-10000521860"
    },
    {
        "system": "https://bluebutton.cms.gov/resources/identifier/claim-group",
        "value": "7653956538"
    }
],
...
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %} 

##  Claim Status

Claims reported by AB2D API have only two potential values for Claim Status. Claims are either `active` or `canceled`. If a claim object is `active` then it is the latest version of the claim received. If a claim is `canceled`, then the claim object is not the latest version of the claim or the claim itself has been revoked.

Basic Information on Status:

- Format: string with one of two values `active` or `canceled`
- Location: found directly on the claim
- URI: <a href="http://hl7.org/fhir/explanationofbenefit-status">http://hl7.org/fhir/explanationofbenefit-status</a>

For more information: <a href="http://hl7.org/fhir/R4/valueset-explanationofbenefit-status.html">FHIR Specification for Claim Status</a>

## LastUpdated

Changes to lastUpdated do not necessarily reflect changes to the claim itself. The lastUpdated field is a metadata field reflecting the last time a change was received to a particular claim.

Basic Information on lastUpdated:

- Format: ISO datetime with a timezone
- Location: Found in claims metadata (eob.meta.lastUpdated)
- URI: <a href="http://hl7.org/fhir/R4/resource-definitions.html#Meta.lastUpdated">http://hl7.org/fhir/R4/resource-definitions.html#Meta.lastUpdated</a>

For more information:
- <a href="http://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.created">ExplanationOfBenefit.created</a>
- <a href="http://hl7.org/fhir/R4/resource-definitions.html#Resource.meta">Common FHIR Metadata</a>

## Identifying patients

Each claim contains patient identifiers necessary to map a claim to a specific patient. The primary identifier used to associate a claim with a patient is the Medicare Beneficiary Identifier (MBI). As part of each claim, AB2D reports all MBIs, known to the system, for a patient including the current MBI for a patient and historic MBIs used in the past for a patient.

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Identifier Name</th>
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

### MBI extension structure

Extensions referring to identifiers will have the following structure:

- [FHIR Identifier Extension URI](http://hl7.org/fhir/StructureDefinition/elementdefinition-identifier)
- [MBI Identifier System](http://hl7.org/fhir/sid/us-mbi)
- Identifier location: extension.valueIdentifier.value
- [Identifier Currency Code Extension URI](https://bluebutton.cms.gov/resources/codesystem/identifier-currency)


{% capture jsonSnippet %}{% raw %}
// (1) url is always the same
"url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-identifier",
"valueIdentifier": {

    // (4) whether the MBI is currently in use or a historical value will be found as an extension with the url
    "extension": [
        {
        "url": "https://bluebutton.cms.gov/resources/codesystem/identifier-currency",
        "valueCoding": {
            "code": "current"
        }
        }
    ],

    // (2) system will always be
    "system": “http://hl7.org/fhir/sid/us-mbi”,
    // (3) the actual MBI value will always be found here
    "value": "7S94E00AA00"
}
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %} 

### Current MBI

The current Medicare Beneficiary Identifier (MBI) used to identify a patient.

- Format: A string following the [CMS standards](https://www.cms.gov/Medicare/New-Medicare-Card/Understanding-the-MBI.pdf)
- Location: found in the list of extensions provided with the EOB
- [Identifier System](http://hl7.org/fhir/sid/us-mbi)

### Historic MBI

A Medicare Beneficiary Identifier (MBI), which in the past was used to identify the patient.

- Format: A string following the [CMS standards](https://www.cms.gov/Medicare/New-Medicare-Card/Understanding-the-MBI.pdf)
- Location: found in the list of extensions provided with the EOB
- [Identifier System](http://hl7.org/fhir/sid/us-mbi)

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
                // The code value for identifier-currency will be current
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
{% include copy_snippet.md code=jsonSnippet language="json" %}

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
                // The code value for identifier-currency will be historic
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
{% include copy_snippet.md code=jsonSnippet language="json" %}

## Identifying updates to existing claims

AB2D reports the most recent data available to it. Updates to existing claims may arrive at any time.

To detect updated claims look for a claim group with multiple Claim IDs. Only one claim version (one Claim ID) will be marked active and that is the latest version. If all claim versions are marked as canceled then the entire claim family group is not active.

To detect updated claims the following fields on each claim must be tracked:

- Claim Group ID: Unique ID of the claim family which is the same regardless of the claim version
- Claim ID: Unique ID of the claim object which changes for each version of a claim
- Updated Date: When the most recent change was made to the claim
- Status: The current status of the claim (`active` or `canceled`)

### Example scenario 

In the example, a single claim will be tracked through several evolutions:

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Claim Update</th>
            <th scope="col">Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Claim Update">Update 1</td>
            <td data-label="Details">Claim 99995 is received by AB2D on January 1st, 2020</td>
        </tr>
        <tr>
            <td data-label="Claim Update">Update 2</td>
            <td data-label="Details">An update to Claim 99995--adding another line--is received by AB2D on February 10th, 2020</td>
        </tr>
        <tr>
            <td data-label="Claim Update">Update 3</td>
            <td data-label="Details">An update to Claim 99995--removing the line--is received by AB2D on March 20th, 2020</td>
        </tr>
    </tbody>
</table>

In the example, four exports are run using the [_since parameter]({{ '/http-query-parameters' | relative_url }}) to limit duplicate data. The four exports are described below.

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Export</th>
            <th scope="col">Run On</th>
            <th scope="col">Since</th>
            <th scope="col">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Export">Export 1</td>
            <td data-label="Run On">January 31st, 2020</td>
            <td data-label="Since">December 31st, 2019</td>
            <td data-label="Description">Provide all claims information and updates received in January</td>
        </tr>
        <tr>
            <td data-label="Export">Export 2</td>
            <td data-label="Run On">February 28th, 2020</td>
            <td data-label="Since">January 31st, 2020</td>
            <td data-label="Description">Provide all claims information and updates received in February</td>
        </tr>
        <tr>
            <td data-label="Export">Export 3a</td>
            <td data-label="Run On">March 15th, 2020</td>
            <td data-label="Since">February 14th, 2020</td>
            <td data-label="Description">Provide all claims information and updates received after the first half of February</td>
        </tr>
        <tr>
            <td data-label="Export">Export 3b</td>
            <td data-label="Run On">March 31st, 2020</td>
            <td data-label="Since">February 28th, 2020</td>
            <td data-label="Description">Provide all claims information and updates received in March</td>
        </tr>
    </tbody>
</table>

The dates used in this example are just random dates. Organizations cannot pull data before the date they legally attested for the data and cannot pull data before January 1st, 2020.

### Updated claims scenario - export details

#### Export 1 12/31/2019 - 01/31/2020

On January 31st, 2020 XYZ runs its first export. The export uses a _since parameter date of December 31st, 2019. The _since date tells AB2D to report all claims information received between December 31st, 2019 and January 31st, 2020.

The export pulls a claim version with Claim Group ID 99995. At this time, the only version of the claim available to AB2D is 12987987. This version (corresponding to claim Update #1) is the latest claim version available and is marked active.

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Claim Group</th>
            <th scope="col">Claim ID</th>
            <th scope="col">Claim Line ID</th>
            <th scope="col">Claim Query Code</th>
            <th scope="col">Received</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Status as of 01/31/2020</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">ABCD</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 01/31/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">DEFG</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 01/31/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">HIJK</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 01/31/2020">active</td>
        </tr>
    </tbody>
</table>

#### Export 2 01/31/2020 - 02/28/2020

On February 28th, 2020 XYZ runs a second export. The export uses a _since parameter date of January 31st, 2020. The _since date tells AB2D to report all claims information received between January 31st, 2020 and February 28th, 2020.

The export pulls two claim versions with Claim GroupID 99995 including the old, canceled  claim version and the newest, active claim version correspond to claim Update #2.

Claim version 12987987 is pulled for a second time. Here is why:

1. The claim status was changed to “canceled ” on February 10th, 2020
2. Changing the status triggered a change in the Last Updated field to February 10th, 2020
3. The _since date--January 31st, 2020--is before the Last Updated date so the claim version is pulled

Claim version 54689123 is pulled for the first time. Here is why:

1. The claim version was received on February 10th, 2020
2. Receiving the claim sets the Last Updated date to February 10th, 2020
3. The _since date--January 31st, 2020--is before the Last Updated date so the claim version is pulled.

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Claim Group</th>
            <th scope="col">Claim ID</th>
            <th scope="col">Claim Line ID</th>
            <th scope="col">Claim Query Code</th>
            <th scope="col">Received</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Status as of 02/28/2020</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">ABCD</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">DEFG</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">HIJK</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">ABCD</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">DEFG</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">HIJK</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">LMNO</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">active</td>
        </tr>
    </tbody>
</table>

#### Export 3a 02/28/2020 - 03/15/2020

On March 15th, 2020 XYZ runs a second export. The export uses a _since parameter date of February 28th, 2020. The _since date tells AB2D to report all claims information received between February 28th, 2020 and March 15th, 2020.

The export pulls no information on claim 99995. AB2D has received no updates for the time interval and so no records are pulled.

#### Export 3b 02/28/2020 - 03/31/2020

On March 31st, 2020 XYZ runs a second export. The export uses a _since parameter date of February 28th, 2020. The _since date tells AB2D to report all claims information received between February 28th, 2020 and March 31st, 2020.

The export pulls two claim versions with Claim Group ID 99995 including the second, canceled  claim version and the third, active claim version. These claim versions reflect to claim Update #3.

Claim version 54689123 is pulled for a second time. Here is why:

1. The claim status was changed to “canceled ” on March 20th, 2020
2. Changing the status triggered a change in the lastUpdated field to March 20th, 2020
3. The _since date--February 20th, 2020--is before the lastUpdated date so the claim version is pulled

Claim version 54689123 is pulled for the first time. Here is why:

1. The claim version was received on March 20th, 2020
2. Receiving the claim sets the lastUpdated date to March 20th, 2020
3. The _since date--February 28th, 2020--is before the lastUpdated date so the claim version is pulled.

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Claim Group</th>
            <th scope="col">Claim ID</th>
            <th scope="col">Claim Line ID</th>
            <th scope="col">Claim Query Code</th>
            <th scope="col">Received</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Status as of 03/31/2020</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">ABCD</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">03/31/2020</td>
            <td data-label="Status as of 03/31/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">DEFG</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">03/31/2020</td>
            <td data-label="Status as of 03/31/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">HIJK</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">03/31/2020</td>
            <td data-label="Status as of 03/31/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">LMNO</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">03/31/2020</td>
            <td data-label="Status as of 03/31/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">34543</td>
            <td data-label="Claim Line ID">ABCD</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">03/31/2020</td>
            <td data-label="Last Updated">03/31/2020</td>
            <td data-label="Status as of 03/31/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">34543</td>
            <td data-label="Claim Line ID">DEFG</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">03/31/2020</td>
            <td data-label="Last Updated">03/31/2020</td>
            <td data-label="Status as of 03/31/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">34543</td>
            <td data-label="Claim Line ID">HIJK</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">03/31/2020</td>
            <td data-label="Last Updated">03/31/2020</td>
            <td data-label="Status as of 03/31/2020">active</td>
        </tr>
    </tbody>
</table>

## Resolving canceled claims

AB2D provides claims based on the current information available. A claim may later be canceled at any time.

A claim is canceled when all versions of the claim are marked as canceled.

To detect updated claims the following fields on each claim must be tracked:

- Claim Group ID: Unique ID of the claim which is the same regardless of the claim version
- Claim ID: Unique ID of the claim version which changes for each version of a claim
- Updated Date: When the most recent change was made to the claim
- Status: The current status of the claim

### Example scenario

In the example, a single claim will be tracked through several evolutions:

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Claim Update</th>
            <th scope="col">Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Claim Update">Update 1</td>
            <td data-label="Details">Claim 99995 is received by AB2D on January 1st, 2020</td>
        </tr>
        <tr>
            <td data-label="Claim Update">Update 2</td>
            <td data-label="Details">An update to Claim 99995 is received by AB2D on February 28th, 2020</td>
        </tr>
    </tbody>
</table>

In the example, two exports are run using the _since parameter to limit duplicate data. The two exports are described below.

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Export</th>
            <th scope="col">Run On</th>
            <th scope="col">Since</th>
            <th scope="col">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Export">Export 1</td>
            <td data-label="Run On">January 31st, 2020</td>
            <td data-label="Since">December 31st, 2019</td>
            <td data-label="Description">Provide all claims information and updates received in January</td>
        </tr>
        <tr>
            <td data-label="Export">Export 2</td>
            <td data-label="Run On">February 28th, 2020</td>
            <td data-label="Since">January 31st, 2020</td>
            <td data-label="Description">Provide all claims information and updates received in February</td>
        </tr>
    </tbody>
</table>

The dates used in this example are just random dates. Organizations cannot pull data before the date they legally attested for the data and cannot pull data before January 1st, 2020.

canceled Claims Example- Claim Scenario-Export Details Organization XYZ decides to start exporting claims at the beginning of 2020.

#### Export 1 12/31/2019 - 01/31/2020

On January 31st, 2020 XYZ runs its first export. The export uses a _since parameter date of December 31st, 2019. The _since date tells AB2D to report all claims information received between December 31st, 2019 and January 31st, 2020.

The export pulls a claim version with Claim Group ID 99995. At this time the only version of the claim available to AB2D is 12987987. This version (corresponding to claim Update #1) is the latest claim version available and is marked active.

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Claim Group</th>
            <th scope="col">Claim ID</th>
            <th scope="col">Claim Line ID</th>
            <th scope="col">Claim Query Code</th>
            <th scope="col">Received</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Status as of 01/31/2020</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">ABCD</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 01/31/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">DEFG</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 01/31/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">HIJK</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 01/31/2020">active</td>
        </tr>
    </tbody>
</table>

#### Export 2 01/31/2020 - 02/28/2020

On February 28th, 2020 XYZ runs a second export. The export uses a _since parameter date of January 31st, 2020. The _since date tells AB2D to report all claims information received between January 31st, 2020 and February 28th, 2020.

The export pulls two claim versions with Claim Group ID 99995 including the old, canceled claim version and the newest, also canceled claim version correspond to claim Update #2. Thus, all versions of the claim are canceled 

Claim version 12987987 is pulled for a second time. Here is why:

1. The claim status was changed to “canceled” on February 10th, 2020
2. Changing the status triggered a change in the lastUpdated field to February 10th, 2020
3. The _since date--January 31st, 2020--is before the lastUpdated date so the claim version is pulled

Claim version 54689123 is pulled for the first time. Here is why:

1. The claim version was received and marked as canceled on February 10th, 2020
2. Receiving the claim sets the lastUpdated date to February 10th, 2020
3. The _since date--January 31st, 2020--is before the lastUpdated date so the claim version is pulled.

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Claim Group</th>
            <th scope="col">Claim ID</th>
            <th scope="col">Claim Line ID</th>
            <th scope="col">Claim Query Code</th>
            <th scope="col">Received</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Status as of 02/28/2020</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">ABCD</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">DEFG</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">HIJK</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">ABCD</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">DEFG</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">HIJK</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">canceled</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">54689123</td>
            <td data-label="Claim Line ID">LMNO</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">02/10/2020</td>
            <td data-label="Last Updated">02/10/2020</td>
            <td data-label="Status as of 02/28/2020">canceled</td>
        </tr>
    </tbody>
</table>

## Detecting duplicate claims

Duplicate claims occur when an organization pulls the same claim version twice and all field values are the same. Even using the _since parameter, the AB2D API makes no guarantee that this will never happen.

To detect duplicate claims the following fields on each claim must be tracked:

- Claim Group ID: Unique ID of the claim family which is the same regardless of the claim version
- Claim ID: Unique ID of the claim version which changes for each version of a claim

### Example scenario

In the example, a single claim will be tracked:

- Claim 99995 is received by AB2D on January 1st, 2020

In the example, two exports are run using the _since parameter. These exports are for overlapping time periods so duplicate information will be received. The two exports are described below.

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Export</th>
            <th scope="col">Run On</th>
            <th scope="col">Since</th>
            <th scope="col">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Export">Export 1</td>
            <td data-label="Run On">January 31st, 2020</td>
            <td data-label="Since">December 31st, 2019</td>
            <td data-label="Description">Provide all claims information and updates received in January</td>
        </tr>
        <tr>
            <td data-label="Export">Export 2</td>
            <td data-label="Run On">February 28th, 2020</td>
            <td data-label="Since">December 31st, 2019</td>
            <td data-label="Description">Provide all claims information and updates received in January and February</td>
        </tr>
    </tbody>
</table>

The dates used in this example are just random dates. Organizations cannot pull data before the date they legally attested for the data and cannot pull data before January 1st, 2020.

Detecting Duplicate Claims Example- Claim Scenario-Export Details Organization XYZ decides to start exporting claims at the beginning of 2020.

#### Export 1 12/31/2019 - 01/31/2020

On January 31st, 2020 XYZ runs its first export. The export uses a _since parameter date of December 31st, 2019. The _since date tells AB2D to report all claims information received between December 31st, 2019 and January 31st, 2020.

The export pulls a claim version with Claim Group ID 99995. At this time the only version of the claim available to AB2D is 12987987. This version is the latest claim version available and is marked active.

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Claim Group</th>
            <th scope="col">Claim ID</th>
            <th scope="col">Claim Line ID</th>
            <th scope="col">Claim Query Code</th>
            <th scope="col">Received</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Status as of 01/31/2020</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">ABCD</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 01/31/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">DEFG</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 01/31/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">HIJK</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 01/31/2020">active</td>
        </tr>
    </tbody>
</table>

#### Export 2 01/31/2020 - 02/28/2020

On February 28th, 2020 XYZ runs a second export. The export uses a _since parameter date of January 31st, 2020. The _since date tells AB2D to report all claims information received between January 31st, 2020 and February 28th, 2020.

The export pulls a claim version with Claim Group ID 99995. At this time the only version of the claim available to AB2D is 12987987. This version is the latest claim version available and is marked active.

Claim version 12987987 is pulled for a second time because the _since date remains the same.

<table class="usa-table usa-table--stacked usa-table--borderless">
    <thead>
        <tr>
            <th scope="col">Claim Group</th>
            <th scope="col">Claim ID</th>
            <th scope="col">Claim Line ID</th>
            <th scope="col">Claim Query Code</th>
            <th scope="col">Received</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Status as of 02/28/2020</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">ABCD</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 02/28/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">DEFG</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 02/28/2020">active</td>
        </tr>
        <tr>
            <td data-label="Claim Group">99995</td>
            <td data-label="Claim ID">12987987</td>
            <td data-label="Claim Line ID">HIJK</td>
            <td data-label="Claim Query Code">final</td>
            <td data-label="Received">01/01/2020</td>
            <td data-label="Last Updated">01/01/2020</td>
            <td data-label="Status as of 02/28/2020">active</td>
        </tr>
    </tbody>
</table>