---
layout: api-docs
title:  "Setup Instructions"
description:  "How to set up an environment to access the AB2D."
permalink: /setup-instructions
in-page-nav: true
---

# {{ page.title }}

curl and jq are tools you can use to access the AB2D [sandbox]({{ '/access-test-claims-data' | realtive_url }}) and [production]({{ '/access-production-claims-data' | realtive_url }}) environments. curl comes preinstalled on some operating systems. In a terminal, type `curl –version` to check if it’s installed.

If you don’t have it installed, use the following system-specific instructions to install jq and curl. If your operating system isn’t listed, follow the installation instructions on the [curl](https://curl.se/) and [jq](https://jqlang.github.io/jq/) websites.

## Mac 

<ol>
    <li>
        Install or update jq using <a href="(https://brew.sh/)">Homebrew</a>:
{% capture setupSnippet %}{% raw %}
brew install jq        
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
        <ul>
            <li>
        If you’re on the latest version of jq, you will have a warning that looks like this:
{% capture setupSnippet %}{% raw %}
Warning: jq {version} is already installed and up-to-date        
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
            </li>
        </ul>
    </li>
    <li>
        Verify jq is installed by checking the version number:
{% capture setupSnippet %}{% raw %}
jq --version       
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
    </li>
</ol>

## Linux (CentOS/RedHat)

<ol>
    <li>
        Install jq:
{% capture setupSnippet %}{% raw %}
sudo yum install -y jq
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>
        Verify jq is installed by checking the version number:
{% capture setupSnippet %}{% raw %}
jq --version       
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
    </li>
</ol>

## Windows 10 

In this example, we will be using the Linux Subsystem for Windows 10.

<ol>
    <li>Select <em>Type here to search</em> near the bottom left of your Windows desktop.</li>
    <li>Enter the following in the text box:
{% capture setupSnippet %}{% raw %}
windows features
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>Select <em>Turn Windows features on or off</em> from the leftmost panel.</li>
    <li>Scroll down to and check <em>Windows Subsystem for Linux</em>.</li>
    <li>Select <em>OK</em> on the <em>Windows Features</em> window.</li>
    <li>Wait for the changes to complete.</li>
    <li>When prompted, select <em>Restart now</em>.</li>
    <li>Select <em>Type here to search</em> again.</li>
    <li>Enter the following in the text box:
{% capture setupSnippet %}{% raw %}
microsoft store
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>Select <em>Microsoft Store</em> from the leftmost panel.</li>
    <li>Select <em>Search</em> on the <em>Microsoft Store</em> page.</li>
    <li>Enter the following in the text box:
{% capture setupSnippet %}{% raw %}
linux
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
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
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
    <li>You’ll be entering commands at the dollar sign prompt ($). The easiest way to do this is to copy and paste. Update the Ubuntu system by entering the command:
{% capture setupSnippet %}{% raw %}
sudo apt-get update -y
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>Install jq by entering this command at the dollar sign prompt:
{% capture setupSnippet %}{% raw %}
sudo apt-get install -y jq
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>When prompted, enter your password.</li>
    <li>Wait for the installation to complete.</li>
    <li>Verify that jq is installed by checking its version number:
{% capture setupSnippet %}{% raw %}
jq --version
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>Close the <em>Ubuntu</em> window.</li>
    <li>Close the <em>Microsoft Store</em> window.</li>
</ol>

### Open an Ubuntu terminal

You can apply these instructions to other Unix-like applications as well.

<ol>
    <li>Select <em>Type here to search</em> near the bottom left of your Windows desktop.</li>
    <li>Enter the following in the text box:
{% capture setupSnippet %}{% raw %}
ubuntu
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" can_copy=true %}
    </li>
    <li>
        Select Ubuntu from the leftmost panel and a window will appear. You will be entering commands at the dollar sign prompt ($). The easiest way to do this is to use copy and paste.
    </li>
</ol>
