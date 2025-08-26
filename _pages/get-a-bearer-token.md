---
layout: api-docs
page_title: "How to Get a Bearer Token"
seo_title: "Get a Bearer Token for Claims Data | AB2D Medicare API"
description: "Obtain a bearer token for authenticating requests to the AB2D API, ensuring secure access to enrollees’ Medicare claims data."
permalink: /get-a-bearer-token
in-page-nav: true
---

# {{ page.page_title }}

Bearer tokens, also known as access tokens or JSON web tokens, authorize use of the AB2D endpoints. You will need a bearer token to access the sandbox and production environments. Once you have a bearer token, follow the instructions to access either [sandbox data]({{ '/access-sandbox-data' | relative_url }}) or [production claims data]({{ '/access-production-claims-data' | relative_url }}).

## Instructions

<ol>
    <li>
        You can use a variety of tools to get a bearer token, including <a href="{{ '/setup-instructions' | relative_url }}">curl</a>. AB2D uses <a href="http://www.okta.com/">Okta</a> to authenticate your organization's credentials, which will be a client ID and password.
        <ul>
            <li><b>If you’re trying to access sandbox data</b>: Use 1 of the 4 client ID and password sets provided in the <a href="{{ '/get-a-bearer-token' | relative_url }}#sandbox-credentials">sandbox credentials</a> section. You’ll need to use the sandbox identity provider (test.idm.idp.cms.gov).</li>
            <li><b>If you’re trying to access production data</b>: Once you complete the steps for <a href="{{ '/production-access' | relative_url }}">production access</a>, the AB2D team will send your Attestor a credentials file with your production client ID and password. You’ll need to use the production identity provider (idp.cms.gov). You can also <a href="{{ '/get-a-bearer-token' | relative_url }}#how-to-create-a-credential-file">create your own credential file</a> manually.</li>
        </ul>
    </li>
    <li>Once you have your sandbox or production credentials, create a new text file using your editor of choice. </li>
    <li>The credentials (clientID:password) must be encoded in Base64 format. Paste the Base64-encoded string into the new text file. It should only be a single line.</li>
    <li>
        Start a request for the bearer token, using your Base64-encoded string as the authorization. The request will look similar to our example:
{% capture curlSnippet %}{% raw %}
POST https://test.idp.idm.cms.gov/oauth2/aus2r7y3gdaFMKBol297/v1/token
Headers:
        Content-Type: application/x-www-form-urlencoded
        Accept: application/json
        Authorization: Basic {base64_encoded_credentials}
Parameters:
        grant_type: client_credentials
        scope: clientCreds
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="yaml" %}
    </li>
    <li>
        The response will contain your bearer token. The token will be sent using the “Authorization” header field with “Bearer {XXX}” where {XXX} is the value of the token:
{% capture curlSnippet %}{% raw %}
Bearer {bearer_token}
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" %}

{% capture tokenAlert %}
Bearer tokens expire 30 minutes from the time they are obtained. Use the token quickly to request your claims data. If your token expires, you’ll need to restart the process.
{% endcapture %}
{% include alert.html variant="info" text=tokenAlert classNames="measure-6" %}
    </li>
    <li class="padding-y-2">
        Save this as the credential file (e.g., C:\<wbr>users\abcduser\<wbr>credentials_Z123456_base64.txt). Note the file’s location and name for later. It will be a parameter in other scripts.
    </li>
</ol>

## Sandbox credentials

Anyone can try the API and download test data using sample contracts in the sandbox. Sandbox credentials will not work in the production environment.

### Sample contract Z1001 (10,000 enrollees)

Client ID:
{% capture curlSnippet %}{% raw %}
0oa9jyx2w9Z0AntLE297
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="code" can_copy=true %}

Client password:
{% capture curlSnippet %}{% raw %}
hskbPu-YoWfGDY1gcQq34BfIEyMVuayu87zWDliG
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="code" can_copy=true %}

Base64-encoded credentials:
{% capture curlSnippet %}{% raw %}
MG9hOWp5eDJ3OVowQW50TEUyOTc6aHNrYlB1LVlvV2ZHRFkxZ2NRcTM0QmZJRXlNVnVheXU4N3pXRGxpRw=={% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="code" can_copy=true %}

### Sample contract Z1002 (10,000 enrollees)

Client ID:
{% capture curlSnippet %}{% raw %}
0oa9jz0e1dyNfRMm6297
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="code" can_copy=true %}

Client password:
{% capture curlSnippet %}{% raw %}
shnG6NGkHcu29ptDsKKRW6q5uFJSSpIpdl_K5fVW
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="code" can_copy=true %}

Base64-encoded credentials:
{% capture curlSnippet %}{% raw %}
MG9hOWp6MGUxZHlOZlJNbTYyOTc6c2huRzZOR2tIY3UyOXB0RHNLS1JXNnE1dUZKU1NwSXBkbF9LNWZWVw==
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="code" can_copy=true %}

## How to get a bearer token using curl

Learn how to get a bearer token for the sandbox using the [curl](https://curl.se/) command line tool specifically. You can copy and paste these commands into your terminal. In Confluence, use the code block macro. [Learn how to install curl and jq]({{ '/setup-instructions' | relative_url }}).

HTTP responses are saved into shell variables named `RESP<n>`. Most steps also define shell variables used later in the process. For educational purposes it can be useful to examine variable values by entering `echo ${variable}`.

### I.  Encode client credentials into Base64

Encode the credentials (clientid:password) into Base64, and set the AUTH shell variable. Using contract PDP-100 as an example, the credentials are formatted as
`0oa2t0lsrdZw5uWRx297:HHduWG6LogIvDIQuWgp3Zlo9OYMValTtH5OBcuHw`.

{% capture curlSnippet %}{% raw %}
AUTH=$(echo "${okta_client_id}:${okta_client_password}" | base64)
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}

### II. Get your bearer token

Enter this command to make an HTTP request and set the RESP1 variable. The full Base64-encoded credentials for PDP-100 are [listed above]({{ '/get-a-bearer-token' | relative_url }}#sandbox-credentials), but will look something like
`MG9hMnQwbHNyZ…VHRINU9CY3VIdw==`.

{% capture curlSnippet %}{% raw %}
RESP1=$(curl -X POST "https://test.idp.idm.cms.gov/oauth2/aus2r7y3gdaFMKBol297/v1/token?grant_type=client_credentials&scope=clientCreds" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Accept: application/json" \
  -H "Authorization: Basic ${base64_encoded_credentials}")
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}

This extracts the token from the previous response and sets the TOKEN variable needed by all subsequent API requests.

{% capture curlSnippet %}{% raw %}
TOKEN=$(echo $RESP1 | jq -r ".access_token")
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}

The token is valid for 30 minutes. If it expires, repeat the process for a new token.

## How to create a credential file

Once you obtain [production access]({{ '/production-access' | relative_url }}), you can either create a Base64-encoded clientID:password manually from your production credentials or use the file the AB2D team sent for convenience.

In this example, we use “Z123456” as the contract number, “abcd” as the client ID, and “badpassword” as the password. When encoded, the example client ID and password would look like `YWJjZDpiYWRwYXNzd29yZA==`. Your credentials will likely be a little longer, but this gives you an idea of what the value looks like.

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
OKTA_CLIENT_PASSWORD=badpassword
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}
    </li>
    <li>
        Encode the credentials as Base64.
{% capture curlSnippet %}{% raw %}
echo -n "$OKTA_CLIENT_ID:$OKTA_CLIENT_PASSWORD" | base64 > $AUTH_FILE
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}
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
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}
    </li>
    <li>
        Create the Base64 credentials.
{% capture curlSnippet %}{% raw %}$BASE64_ENCODED_ID_PASSWORD='{base64_encoded_credentials}
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}
    </li>
    <li>
        Save the Base64 credentials as a single line in the authorization file.
{% capture curlSnippet %}{% raw %}Set-Content -Path $AUTH_FILE $BASE64_ENCODED_ID_PASSWORD
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=curlSnippet language="shell" can_copy=true %}
    </li>
</ol>

## Guides

Once you get a bearer token, you can access either sandbox or production claims data:
- [How to Access Sandbox Data]({{ '/access-sandbox-data' | relative_url }})
- [How to Access Production Claims Data]({{ '/access-production-claims-data' | relative_url }})

## Troubleshooting

Visit our [Troubleshooting Guide]({{ '/troubleshooting-guide' | relative_url }}) to explore HTTP response codes and common questions. If you need additional assistance, email the AB2D team at [ab2d@cms.hhs.gov](mailto:ab2d@cms.hhs.gov).

When contacting our team, please include the following information:
- Your operating system
- If applicable, your HTTP response code (e.g., 403, 400)
- A description of the issue including which stage of the process you’re on
- Any logs that may help us in resolving the issue

{% include feedback-form.html url="5d9bf43f" %}
