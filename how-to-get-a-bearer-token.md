---
layout: api-docs
title:  "How to Get a Bearer Token"
permalink: /how-to-get-a-bearer-token
in-page-nav: true
---

# {{ page.title }}

Bearer tokens, also known as JSON web tokens, authorize use of the AB2D endpoints and call the API. After getting a bearer token, you can access test claims data in the sandbox environment, and later, production* data. Anyone can access the sandbox, but production data is only available to organizations that complete [onboarding]({{ '/onboarding' | relative_url }}). Accessing test claims data is part of the onboarding process.

**Medicare enrollee data containing Protected Health Information (PHI)*

{% capture versionAlertHeading %}
    AB2D recommends using V2 of the API
{% endcapture %}
{% capture versionAlert %}
    <p>
        Version 2 is the current version and it follows the <a href="https://hl7.org/fhir/R4/">FHIR R4 standard</a>. The _until parameter is only available with V2. Version 1 follows the <a href="https://hl7.org/fhir/STU3/explanationofbenefit.html">FHIR STU3</a> standard.
    </p>
    <p>    
        <a href="https://github.com/CMSgov/ab2d-pdp-documentation/raw/main/AB2D%20STU3-R4%20Migration%20Guide%20Final.xlsx">Learn more about migrating from V1 to V2</a>.
    </p>
{% endcapture %}
{% include alert.html variant="info" text=versionAlert heading=versionAlertHeading classNames="measure-6" %}

## Instructions

<ol>
    <li>
        You can use a variety of tools to get a bearer token, including curl. AB2D uses Okta to authenticate your credentials, which will be a client ID and password. Your credentials will be formatted as a  Base64-encoded value (clientID:password). 
        <ul>
            <li>If you’re trying to access sandbox data: Use 1 of the 4 client ID and password sets provided in the sandbox credentials section. You’ll need to use the sandbox identity provider (test.idm.idp.cms.gov).</li>
            <li>If you’re trying to access production data: Once you complete onboarding, the AB2D team will send you a credentials file with your production client ID and password. You’ll need to use the production identity provider (idp.cms.gov). You can also create your own credential file manually.</li>
        </ul>
    </li>    
    <li>Once you have your client ID and password (sandbox or production environment), create a new text file using your editor of choice. </li>
    <li>Paste the Base64-encoded string into the new text file. The file should only have a single line.</li>
    <li>
        Start a request for the bearer token, using your Base64-encoded string as the authorization. The request will look similar to our example:
{% capture curlSnippet %}{% raw %}
POST https://test.idp.idm.cms.gov/oauth2/aus2r7y3gdaFMKBol297/v21/token
Headers:
        Content-Type: application/x-www-form-urlencoded
        Accept: application/json
Parameters:
        grant_type: client_credentials
        scope: clientCreds
Authorization: Basic Auth
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}
    </li>
    <li>
        The response will contain your bearer token. The token will be sent using the “Authorization” header field with “Bearer {XXX}” where {XXX} “is the value of the token:
{% capture curlSnippet %}{% raw %}
Bearer {bearer_token}
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

{% capture tokenAlert %}
Bearer tokens expire 1 hour from the time they are obtained. Use the token quickly to request your claims data. If your token expires, you’ll need to restart the process.
{% endcapture %}
{% include alert.html variant="info" text=tokenAlert classNames="measure-6" %}
    </li>
    <li class="padding-y-2">
        Save this as the credential file (e.g, C:\users\abcduser\credentials_Z123456_base64.txt). Note the file’s location and name for later. It will be a parameter in other scripts.
    </li>
</ol>

## Sandbox credentials

The sandbox environment is open for anyone to access. The AB2D team provides 4 sets of test credentials for use. Sandbox credentials will not work in the production environment. 

### Test credentials 1

<div class="usa-table-container--scrollable" tabindex="0">
    <table class="usa-table usa-table--stacked">
        <tbody>
            <tr>
                <td>Sponsor</td>
                <td>PDP-100</td>
            </tr>
            <tr>
                <td>Contract</td>
                <td>Z0000</td>
            </tr>
            <tr>
                <td>Dataset type</td>
                <td><strong>Simple</strong></td>
            </tr>
            <tr>
                <td>Client ID</td>
                <td>0oa2t0lsrdZw5uWRx297</td>
            </tr>
            <tr>
                <td>Client password</td>
                <td>HHduWG6LogIvDIQuWgp3Zlo9OYMValTtH5OBcuHw</td>
            </tr>
            <tr>
                <td>Base64-encoded ID:password</td>
                <td>MG9hMnQwbHNyZFp3NXVXUngyOTc6SEhkdVdHNkxvZ0l2RElRdVdncDNabG85T1lNVmFsVHRINU9CY3VIdw</td>
            </tr>
        </tbody>
    </table>
</div>

### Test credentials 2

<div class="usa-table-container--scrollable" tabindex="0">
    <table class="usa-table usa-table--stacked">
        <tbody>
            <tr>
                <td>Sponsor</td>
                <td>PDP-10000</td>
            </tr>
            <tr>
                <td>Contract</td>
                <td>Z0010</td>
            </tr>
            <tr>
                <td>Dataset type</td>
                <td><strong>Simple</strong></td>
            </tr>
            <tr>
                <td>Client ID</td>
                <td>0oa2t0lm9qoAtJHqC297</td>
            </tr>
            <tr>
                <td>Client password</td>
                <td>ybR60JmtcpRt6SAeLmvbq6l-3YDRCZP-WN1At6t_</td>
            </tr>
            <tr>
                <td>Base64-encoded ID:password</td>
                <td>MG9hMnQwbG05cW9BdEpIcUMyOTc6eWJSNjBKbXRjcFJ0NlNBZUxtdmJxNmwtM1lEUkNaUC1XTjFBdDZ0Xw==</td>
            </tr>
        </tbody>
    </table>
</div> 

### Test credentials 3

<div class="usa-table-container--scrollable" tabindex="0">
    <table class="usa-table usa-table--stacked">
        <tbody>
            <tr>
                <td>Sponsor</td>
                <td>PDP-1001</td>
            </tr>
            <tr>
                <td>Contract</td>
                <td>Z1001</td>
            </tr>
            <tr>
                <td>Dataset type</td>
                <td><strong>Advanced</strong></td>
            </tr>
            <tr>
                <td>Client ID</td>
                <td>0oa9jyx2w9Z0AntLE297</td>
            </tr>
            <tr>
                <td>Client password</td>
                <td>hskbPu-YoWfGDY1gcQq34BfIEyMVuayu87zWDliG</td>
            </tr>
            <tr>
                <td>Base64-encoded ID:password</td>
                <td>MG9hOWp5eDJ3OVowQW50TEUyOTc6aHNrYlB1LVlvV2ZHRFkxZ2NRcTM0QmZJRXlNVnVheXU4N3pXRGxpRw==</td>
            </tr>
        </tbody>
    </table>
</div> 

### Test credentials 4

<div class="usa-table-container--scrollable" tabindex="0">
    <table class="usa-table usa-table--stacked">
        <tbody>
            <tr>
                <td>Sponsor</td>
                <td>PDP-1002</td>
            </tr>
            <tr>
                <td>Contract</td>
                <td>Z1002</td>
            </tr>
            <tr>
                <td>Dataset type</td>
                <td><strong>Advanced</strong></td>
            </tr>
            <tr>
                <td>Client ID</td>
                <td>0oa9jz0e1dyNfRMm6297</td>
            </tr>
            <tr>
                <td>Client password</td>
                <td>shnG6NGkHcu29ptDsKKRW6q5uFJSSpIpdl_K5fVW</td>
            </tr>
            <tr>
                <td>Base64-encoded ID:password</td>
                <td>MG9hOWp6MGUxZHlOZlJNbTYyOTc6c2huRzZOR2tIY3UyOXB0RHNLS1JXNnE1dUZKU1NwSXBkbF9LNWZWVw==</td>
            </tr>
        </tbody>
    </table>
</div>

## How to get a sandbox bearer token using curl

Learn how to get a bearer token for sandbox using the [curl](https://curl.se/) command line tool specifically. You can copy and paste these commands into your terminal. In Confluence, use the code block macro. [Learn how to install curl and jq]({{ '/setup-instructions' | relative_url }}).

HTTP responses are saved into shell variables named RESP<n>. Most steps also define shell variables used later in the process. For educational purposes it can be useful to examine variable values by entering “echo ${variable name}”.

### 1.  Encode client credentials into Base64

Encode the client ID and password into Base64, then set the “AUTH” shell variable. This example uses the PDP-100 contract. The credentials are used in the next step to retrieve your token.

{% capture curlSnippet %}{% raw %}
> AUTH=$(echo "0oa2t0lsrdZw5uWRx297:HHduWG6LogIvDIQuWgp3Zlo9OYMValTtH5OBcuHw" | base64)
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

### 2. Get your bearer token

Enter this command to make an HTTP request and set the “RESP1” variable:

{% capture curlSnippet %}{% raw %}
> RESP1=$(curl -X POST "https://test.idp.idm.cms.gov/oauth2/aus2r7y3gdaFMKBol297/v21/token?grant_type=client_credentials&scope=clientCreds" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Accept: application/json" \
  -H "Authorization: Basic ${AUTH}")
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

This extracts the token from the previous response and sets the “TOKEN” variable needed by all subsequent API requests. 

{% capture curlSnippet %}{% raw %}
> TOKEN=$(echo $RESP1 | jq -r ".access_token")
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}

The token is valid for 1 hour. If it expires, repeat the process for a new token. 

## How to create a credential file

Once you finish onboarding, you can either create a Base64-encoded clientID:password manually from your production credentials or use the file the AB2D team sent for convenience. 

In this example, we use “Z123456” as the contract number, “abcd” as the client ID, and “badpassword” as the password. When encoded, the example client ID and password would look like “YWJjZDpiYWRwYXNzd29yZA==.” Your credentials will likely be a little longer, but this gives you an idea of what the value looks like.

### Linux or Mac

<ol>
    <li>
        Create a file in a directory for the Base64 credentials. Make sure you have write access to that directory. This example will use credentials_Z123456_base64.txt in the /home/abcduser directory.
    </li>
    <li>
        Open a Bash terminal and enter the following command:
{% capture curlSnippet %}{% raw %}
AUTH_FILE=/home/abcduser/credentials_Z123456_base64.txt
OKTA_CLIENT_ID=abcd
OKTA_CLIENT_SECRET=badpassword
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}
    </li>
    <li>
        Encode the credentials as Base64.
{% capture curlSnippet %}{% raw %}
echo -n "${OKTA_CLIENT_ID}:${OKTA_CLIENT_PASSWORD}" | base64 > $AUTH_FILE
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}
    </li>
</ol>

### Powershell

<ol>
    <li>Open a PowerShell terminal.</li>
    <li>
        Create a new empty file.
{% capture curlSnippet %}{% raw %}
$AUTH_FILE=C:\users\abcduser\credentials_Z123456_base64.txt
New-Item -Path $AUTH_FILE -ItemType File
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}
    </li>
    <li>
        Create the Base64 credentials.
{% capture curlSnippet %}{% raw %}$BASE64_ENCODED_ID_PASSWORD='{Base64-encoded abcd:badpassword}
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}
    </li>
    <li>
        Save the Base64 credentials as a single line in the authorization file.
{% capture curlSnippet %}{% raw %}Set-Content -Path $AUTH_FILE $BASE64_ENCODED_ID_PASSWORD
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}
    </li>
</ol>

## Guides

Once you get a bearer token, you can access either test or production claims data:
- [How to Access Test Claims Data]({{ '/how-to-access-test-claims-data' | relative_url }})
- [How to Access Production Claims Data]({{ '/how-to-access-production-claims-data' | relative_url }})

## Troubleshooting

Visit our [troubleshooting guide]({{ '/user-guide' | relative_url }}#troubleshooting-guide-2) to explore HTTP response codes and frequently asked questions. If you need additional assistance, email the AB2D team at [ab2d@cms.hhs.gov](mailto:ab2d@cms.hhs.gov).