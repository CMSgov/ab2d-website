---
layout: api-docs
title: "How to Access Production Claims Data"
description: "Prescription Drug Plan sponsors can learn how to access Medicare patients’ Parts A & B claims data in the AB2D production environment."
permalink: /access-production-claims-data
in-page-nav: true
---

# {{ page.title }}

The production environment offers access to enrollee claims data, which contains Protected Health Information (PHI). In order to get enrollee claims data, Prescription Drug Plan (PDP) sponsors must have completed the steps for [production access]({{ '/production-access' | relative_url }}) beforehand.

{% capture versionAlertHeading %}
  <p class="usa-alert__heading text-bold">
    AB2D recommends using V2 of the API
  </p>
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

AB2D’s production and sandbox environments use the same workflow, endpoints, parameters, and resource type. You can [follow the same steps as you did in the sandbox]({{ '/access-sandbox-data' | relative_url }}) to retrieve production data.

You’ll still need to [get a bearer token]({{ '/get-a-bearer-token' | relative_url }}) to call the API, but you’ll use the production identity provider (idp.cms.gov) and credentials issued by the AB2D team instead. When requesting endpoints, use the production URL (api.ab2d.cms.gov).

- Start a job: `GET /api/v2/fhir/Patient/$export`
- Retrieve metadata: `GET /api/v2/fhir/metadata`
- Cancel job: `DELETE /api/v2/fhir/Job/{job_uuid}/$status`
- Check the job status: `GET /api/v2/fhir/Job/{job_uuid}/$status`
- Download files: `GET/api/v2/fhir/Job/{job_uuid}/file/{file_name}`

### File expiration

If it takes more than 30 hours to retrieve and download the data, the request will time out and fail. Try using [parameters]({{ '/query-parameters-V2' | relative_url }}) when running a job to filter the claims data returned and reduce file size.

### Format

The files will be in NDJSON format, where each line is a Medicare claim written in JSON. The file naming standard is to use a contract identifier and then a number indicating where it falls in the series of files (e.g., Z123456_0001.ndjson). Data files are often large, so make sure you have adequate storage and a database to process the claims received.

## Sample client scripts

AB2D provides sample client scripts, but we encourage organizations to automate their individual processes. Sample scripts are not suitable for long-term use as they do not provide sufficient error checking, security, or auditing capabilities. You must run these scripts in a secure environment to protect [Protected Health Information (PHI)](https://www.hhs.gov/answers/hipaa/what-is-phi/index.html).

If you have multiple contracts, you can run scripts for them at the same time. However, you must use different directories, credentials, and terminals so each will have defined environment variables.

### Bash client

Download a ZIP file of the [Bash API repository](https://github.com/CMSgov/ab2d-sample-client-bash) or [learn how to clone it](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository). Then, unzip or move the files into a specified directory (e.g., /home/abcduser/ab2d). Copy the script files to that directory.

### I. Set up the environment

<ol>
    <li>
        <p>Open a Bash shell to run your commands. Environment variables will only be valid inside this shell. Do not close this terminal before the download is complete.</p>
    </li>
    <li>
        <p>Go to the directory where the script files are located. Perform a `ls` to make sure the 4 scripts are there.</p>
    </li>
    <li>
        <p>Run the following command using the Base64 credential file you created for your bearer token (e.g.,/home/abcduser/credentials_Z123456_base64.txt):</p>
{% capture curlSnippet %}{% raw %}
source bootstrap.sh -prod --directory /home/abcduser/ab2d --auth /home/abcduser/credentials_Z123456_base64.txt --since 2020-05-01T00:00:00.000-05:00 --fhir R4
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}
    </li>
    <li>
        Verify that the command worked and defined the correct environment variables:
{% capture curlSnippet %}{% raw %}
echo $DIRECTORY
/home/abcduser/ab2d

echo $IDP_URL
https://idm.cms.gov/oauth2/aus2ytanytjdaF9cr297/v2/token

echo $API_URL
https://api.ab2d.cms.gov/api/v2/fhir

echo $AUTH_FILE
/home/abcduser/credentials_Z123456_base64.txt

echo $SINCE
2020-05-01T00:00:00.000-05:00

echo $FHIR_VERSION
R4
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}
    </li>
</ol>

### II. Start a job

<ol>
    <li>Request the Export endpoint in the same window used to create the environment variables and in the same directory where the scripts are located.

{% capture curlSnippet %}{% raw %}
./start-job.sh
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}
    </li>

    <li>Verify that a file named “jobId.txt” was created.</li>
</ol>

### III. Check the job status

Use the same shell to check the job status until it is complete. You do not have to run this script more than once (unless you exit it) as it will pause and recheck automatically:

{% capture curlSnippet %}{% raw %}
./monitor-job.sh
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}

This script will create a file named response.json in the directory. This will contain all the requested files. Files have a max size, so if the data exceeds that size, a new file will be created.

### IV. Download the files

Once the job is complete, download the files from the same shell. You can request compressed data files in gzip format and speed up your download times by including the optional `Accept-Encoding: gzip` header in your command.

{% capture curlSnippet %}{% raw %}
./download-results.sh
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}

## Windows Powershell client

Download a ZIP file of the [Powershell API repository](https://github.com/CMSgov/ab2d-sample-client-powershell) or [learn how to clone it](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository). Then, open a Powershell terminal and go to the home directory. You can run the `dir` command to check for the (.ps1) and README Powershell scripts. Note that the Windows client will always download files to your current working directory, so you may want to move its existing contents elsewhere during the job.

### I. Prepare the environment variables

<ol>
    <li>
        Open a PowerShell terminal and go to the directory that contains the scripts.
    </li>
    <li>
        Set the authentication location as the Base64 credential file you created for your bearer token (e.g.,/home/abcduser/credentials_Z123456_base64.txt):
{% capture curlSnippet %}{% raw %}
$AUTH_FILE=C:\users\abcduser\credentials_Z123456_base64.txt
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}
    </li>
    <li>
        Set the authentication URL as AB2D’s production  identity provider:
{% capture curlSnippet %}{% raw %}
$AUTHENTICATION_URL='https://idm.cms.gov/oauth2/aus2ytanytjdaF9cr297/v2/token'
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}
    </li>
    <li>
        Set the API URL as the production environment URL:
{% capture curlSnippet %}{% raw %}
$AB2D_API_URL='https://api.ab2d.cms.gov/api/v2'
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}
    </li>
</ol>

### II. Start and monitor a job

<ol>
    <li>
        This script will use the environment variables to request data and check when the job is complete:
{% capture curlSnippet %}{% raw %}
$JOB_RESULTS = &.\create-and-monitor-export-job.ps1 | select -Last 1
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}
    </li>
    <li>
        Check the contents of the variable JOB_RESULTS. It will contain the list of files to download. Leave the shell open for the next step. 
{% capture curlSnippet %}{% raw %}
$JOB_RESULTS to check the contents of the variable
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" %}
    </li>
</ol>

### III. Download the files

Download the files into your current directory. You can request compressed data files in gzip format and speed up your download times by including the optional `Accept-Encoding: gzip` header in your command. You can run the `dir` command to check if the download is successful:

{% capture curlSnippet %}{% raw %}
.\download-results.ps1
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}

## Python client

Download a ZIP file of the [Python API repository](https://github.com/CMSgov/ab2d-sample-client-python) or [learn how to clone it](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository). Then, open a terminal and verify the file’s location in your home directory with the `dir` or `ls` command. You should see the job-cli.py script and a README. Make sure you have at least Python 3.6 and PIP3 [installed on your system](https://realpython.com/installing-python/).

### I. Prepare environment variables

<ol>
    <li>
        <p>In a Bash Shell or PowerShell terminal, go to the directory with the script file.</p>
    </li>
    <li>
        <p>Set the authorization file as the Base64 credential file you created for your bearer token (e.g.,/home/abcduser/credentials_Z123456_base64.txt):</p>
        <ul>
            <li>
                <p>Linux/Mac</p>
{% capture curlSnippet %}{% raw %}
AUTH_FILE=/home/abcduser/credentials_Z123456_base64.txt
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}
                        </li>
                        <li>Windows
{% capture curlSnippet %}{% raw %}
$AUTH_FILE=C:\users\abcduser\credentials_Z123456_base64.txt
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}
            </li>
        </ul>
    </li>
    <li>
        <p>Set the directory variable as the location to save your exported files. Leave the shell open for the next step. </p>
        <ul>
            <li>
                <p>Linux/Mac</p>
{% capture curlSnippet %}{% raw %}
DIRECTORY=/home/abcduser/ab2d
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}
            </li>
            <li>
                <p>Windows</p>
{% capture curlSnippet %}{% raw %}
$DIRECTORY=C:\users\abcduser\ab2d
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %}
            </li>
        </ul>
    </li>
</ol>

### II. Start a job

<ol>
    <li>
        <p>Make sure the Python command is mapped to the correct version (3.6 or higher):</p>
{% capture curlSnippet %}{% raw %}
python --version
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
    </li>
    <li>
        <p>Start the export job. You can optionally use <a href="{{ '/query-parameters-V2' | relative_url }}">parameters</a> to filter the data returned.</p>
        <ul>
            <li>
                <p>Linux/Mac</p>
{% capture curlSnippet %}{% raw %}
python job-cli.py -prod --auth $AUTH_FILE --directory $DIRECTORY --since ‘2020-05-01T00:00:00.000-05:00’ --fhir R4 --only_start
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
            <li>
                <p>Windows</p>
{% capture curlSnippet %}{% raw %}
python job-cli.py -prod --auth %AUTH_FILE% --directory %DIRECTORY% --since ‘2020-05-01T00:00:00.000-05:00’ --fhir R4 --only_start
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
        </ul>
    </li>
    <li>
        <p>Verify that a job_id.txt file was created. The file should contain a job ID (e.g.,133039b8-c74c-422f-8836-8335c13f5a8d).</p>
        <ul>
            <li>
                <p>Linux/Mac</p>
{% capture curlSnippet %}{% raw %}
cat $DIRECTORY/job_id.txt
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
            <li>
                <p>Windows</p>
{% capture curlSnippet %}{% raw %}
type %DIRECTORY%\job_id.txt
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
        </ul>
    </li>
</ol>

### III. Check the job status

<ol>
    <li>
        <p>Check the job status in the same shell used to prepare the environment variables. If the script fails for any reason, restart the command. The script can be run as many times as necessary:</p>
        <ul>
            <li>
            <p>Linux/Mac</p>
{% capture curlSnippet %}{% raw %}
python job-cli.py -prod --auth $AUTH --directory $DIRECTORY --only_monitor
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
            <li>
            <p>Windows</p>
{% capture curlSnippet %}{% raw %}
python job-cli.py -prod --auth %AUTH% --directory %DIRECTORY% --only_monitor
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
        </ul>
    </li>
    <li>
        <p>When the job is complete, the script will automatically save a list of files to download. Confirm the location of the files:</p>
        <ul>
            <li>
                <p>Linux/Mac</p>
{% capture curlSnippet %}{% raw %}
cat $DIRECTORY/response.json
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
            <li>
                <p>Windows</p>
{% capture curlSnippet %}{% raw %}
type %DIRECTORY%\response.json
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
        </ul>
    </li>
</ol>

### IV. Download the files

<ol>
    <li>
        <p>Download the files in the same shell used to prepare the environment variables. You can request compressed data files in gzip format and speed up your download times by including the optional <code class="inline-code">Accept-Encoding: gzip</code> header in your command:</p>
        <ul>
            <li>
                <p>Linux/Mac</p>
{% capture curlSnippet %}{% raw %}
python job-cli.py -prod --auth $AUTH --directory $DIRECTORY --only_download
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
            <li>
                <p>Windows</p>
{% capture curlSnippet %}{% raw %}
python job-cli.py -prod --auth %AUTH% --directory %DIRECTORY% --only_download
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
        </ul>
    </li>
    <li>
        <p>List the files that you have downloaded and verify their location:</p>
        <ul>
            <li>
                <p>Linux/Mac</p>
{% capture curlSnippet %}{% raw %}
ls $DIRECTORY/*.ndjson
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
            <li>
                <p>Windows</p>
{% capture curlSnippet %}{% raw %}
dir %TARGET_DIR%\*.ndjson
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=curlSnippet language="shell" can_copy=true %} 
            </li>
        </ul>
    </li>
</ol>

## Clean up your directory

After you download your files, clean up your directory as needed. You can move the NDJSON files to another directory and remove script-generated files (e.g., “jobID.txt”). If the job is re-run, the new files may interfere and overwrite the old files.

## Incremental export model

Incremental exports of data, ideally at a bi-weekly frequency, reduce data duplication and speed up job times. This allows you to request newly updated data that you haven’t downloaded since your last export. [Learn more about the incremental export model.]({{ '/filter-claims-data-v2' | relative_url }})

## Troubleshooting

Review our [troubleshooting guide]({{ '/troubleshooting-guide' | relative_url }}#troubleshooting-guide-2). If you need additional assistance, email the AB2D team at <a href="mailto:ab2d@cms.hhs.gov">ab2d@cms.hhs.gov</a>.

When contacting our team, please include the following information:

- Your operating system (e.g., Windows, Linux)
- Your system’s IP address
- If applicable, your HTTP response code (e.g., 403, 400)
- A description of the issue including what stage of the process you’re on
- Any logs that may help us in resolving the issue. Use caution when sharing any log files as they may contain [sensitive information](https://www.justice.gov/opcl/privacy-act-1974).

Please review all encoded content and/or logs before sharing with the team to ensure they do not contain sensitive details.
