---
layout: api-docs
page_title: "Setup Instructions"
seo_title: "Setup Instructions for Enrollee Medicare Claims Data | AB2D API"
description: "Set up curl and jq on your system to begin using the AB2D Medicare API and access your enrollees’ claims data."
permalink: /setup-instructions
in-page-nav: true
---

# {{ page.page_title }}

curl and jq are tools you can use to access the AB2D [sandbox]({{ '/access-sandbox-data' | relative_url }}) and [production]({{ '/access-production-claims-data' | relative_url }}) environments. curl comes preinstalled on some operating systems. In a terminal, type `curl --version` to check if it’s installed.

If you don’t have it installed, use the following system-specific instructions to install jq and curl. If your operating system isn’t listed, follow the installation instructions on the [curl](https://curl.se/) and [jq](https://jqlang.github.io/jq/) websites.

## Mac

<ol>
    <li>
        Install or update jq using <a href="https://brew.sh/" target="_blank" rel="noopener">Homebrew</a>:
{% capture setupSnippet %}{% raw %}
brew install jq
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" can_copy=true %}
        <ul>
            <li>
        If you have already installed jq, you may receive and ignore the following warning:
{% capture setupSnippet %}{% raw %}
Warning: jq {version} is already installed and up-to-date
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" %}
            </li>
        </ul>
    </li>
    <li>
        You can verify if jq is installed if you enter the following and receive a version number in response. Any version of jq will work for this set up.
{% capture setupSnippet %}{% raw %}
jq --version
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" can_copy=true %}
    </li>
</ol>

## Linux (CentOS/RedHat)

The following instructions are intended for systems using yum as the package installer. In the case of other Linux distributions with alternative package managers, please use the equivalent package manager command(s) to install jq.

<ol>
    <li>
        Install jq:
{% capture setupSnippet %}{% raw %}
sudo yum install -y jq
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>
        You can verify if jq is installed if you enter the following and receive a version number in response. Any version of jq will work for this set up.
{% capture setupSnippet %}{% raw %}
jq --version
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" can_copy=true %}
    </li>
</ol>

## Windows 10 and 11

In this example, we will be using the Linux Subsystem for Windows 10.

<ol>
    <li>Select <em>Type here to search</em> near the bottom left of your Windows desktop.</li>
    <li>Enter the following in the text box:
{% capture setupSnippet %}{% raw %}
windows features
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>Select <em>Turn Windows features on or off</em> from the leftmost panel.</li>
    <li>Scroll down to and check <em>Windows Subsystem for Linux</em>. If it is already installed, skip to step 10 to install Ubuntu.
</li>
    <li>Select <em>OK</em> on the <em>Windows Features</em> window.</li>
    <li>Wait for the changes to complete. If installation is successful, skip to step 9.</li>
    <li>If the installation is unsuccessful, open the PowerShell or Windows Command Prompt in administrator mode by right-clicking and selecting <em>Run as administrator</em>.</li>
    <li>Enter the following in your terminal:
{% capture setupSnippet %}{% raw %}
wsl -- install
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>When prompted, restart your system.</li>
    <li>Select <em>Type here to search</em> again.</li>
    <li>Enter the following in the text box:
{% capture setupSnippet %}{% raw %}
microsoft store
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>Select <em>Microsoft Store</em> from the leftmost panel.</li>
    <li>Select <em>Search</em> on the <em>Microsoft Store</em> page.</li>
    <li>Enter the following in the text box:
{% capture setupSnippet %}{% raw %}
linux
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>Select <em>Run Linux on Windows</em>.</li>
    <li>Select <em>Ubuntu</em>.</li>
    <li>Select <em>Get</em>.</li>
    <li>Select <em>No, thanks</em> on the <em>Use across your devices</em> dialog. The installation will begin automatically.</li>
    <li>Once the installation is complete, select <em>Launch</em>.</li>
    <li>When prompted, choose a username and password.</li>
    <li>If the installation is successful, you will have a prompt that looks like this:
{% capture setupSnippet %}{% raw %}
username@machinename:~$
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" %}
    </li>
    <li>You’ll be entering commands at the dollar sign prompt ($). The easiest way to do this is to copy and paste. Update the Ubuntu system by entering the command:
{% capture setupSnippet %}{% raw %}
sudo apt-get update -y
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>Install jq by entering this command at the dollar sign prompt:
{% capture setupSnippet %}{% raw %}
sudo apt-get install -y jq
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>When prompted, enter your password.</li>
    <li>Wait for the installation to complete.</li>
    <li>You can verify if jq is installed if you enter the following and receive a version number in response. Any version of jq will work for this set up.
{% capture setupSnippet %}{% raw %}
jq --version
{% endraw %}{% endcapture %}
{% include copy_snippet.html code=setupSnippet language="shell" can_copy=true %}
    </li>
</ol>

{% include feedback-form.html url="c7268c09" %}
