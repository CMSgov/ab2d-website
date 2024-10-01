---
layout: api-docs
title:  "Setup Instructions"
permalink: /setup-instructions
in-page-nav: true
---

# {{ page.title }}

[curl](https://curl.se/) is one of the many tools you can use to access the AB2D [sandbox]({{ '/how-to-access-test-claims-data' | realtive_url }}) and [production]({{ '/how-to-access-production-claims-data' | realtive_url }}) environments. curl comes preinstalled on some operating systems. In a terminal, type “curl –version” to check if it’s installed.

If you don’t have it installed, use the following system-specific instructions to install jq and curl. If your operating system isn’t listed, follow the installation instructions on the [curl](https://curl.se/) and [jq](https://jqlang.github.io/jq/) websites.

## Mac 

<ol>
    <li>
        Install or update jq using [HomeBrew](https://brew.sh/):
{% capture setupSnippet %}{% raw %}
brew install jq        
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
    <li>
        If you’re on the latest version of jq, you will have a warning that looks like this:
{% capture setupSnippet %}{% raw %}
Warning: jq {version} is already installed and up-to-date        
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
    <li>
        Verify jq is installed by checking the version number:
{% capture setupSnippet %}{% raw %}
jq --version       
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
</ol>

## Linux (CentOS/RedHat)

<ol>
    <li>
        Install jq:
{% capture setupSnippet %}{% raw %}
sudo yum install -y jq
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
    <li>
        Verify jq is installed by checking the version number:
{% capture setupSnippet %}{% raw %}
jq --version       
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
</ol>

## Windows 10 

In this example, we will be using the Linux Subsystem for Windows 10.

<ol>
    <li>Select "Type here to search" near the bottom left of your Windows desktop.</li>
    <li>Enter the following in the text box:
{% capture setupSnippet %}{% raw %}
windows features
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
    <li>Select “Turn Windows features on or off” from the leftmost panel.</li>
    <li>Scroll down to and check “Windows Subsystem for Linux.”</li>
    <li>Select “OK” on the “Windows Features” window.</li>
    <li>Wait for the changes to complete.</li>
    <li>When prompted, select “Restart now.”</li>
    <li>Select “Type here to search” again.</li>
    <li>Enter the following in the text box:
{% capture setupSnippet %}{% raw %}
microsoft store
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
    <li>Select “Microsoft Store” from the leftmost panel.</li>
    <li>Select “Search” on the Microsoft Store page.</li>
    <li>Enter the following in the text box:
{% capture setupSnippet %}{% raw %}
linux
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
    <li>Select “Run Linux on Windows.”</li>
    <li>Select “Ubuntu.”</li>
    <li>Select “Get.”</li>
    <li>Select “No, thanks” on the “Use across your devices” dialog.The installation will begin automatically.</li>
    <li>Once the installation is complete, select “Launch.”</li>
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
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
    <li>Install jq by entering this command at the dollar sign prompt:
{% capture setupSnippet %}{% raw %}
sudo apt-get install -y jq
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
    <li>When prompted, enter your password.</li>
    <li>Wait for the installation to complete.</li>
    <li>Verify that jq is installed by checking its version number:
{% capture setupSnippet %}{% raw %}
jq --version
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
    <li>Close the Ubuntu window.</li>
    <li>Close the Microsoft Store window.</li>
</ol>

### Open an Ubuntu terminal

You can apply these instructions to other Unix-like applications as well.

<ol>
    <li>Select Type here to search near the bottom left of your Windows desktop.</li>
    <li>Enter the following in the text box:
{% capture setupSnippet %}{% raw %}
ubuntu
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=setupSnippet language="shell" %}
    </li>
    <li>
        Select Ubuntu from the leftmost panel and a window will appear. You will be entering commands at the dollar sign prompt ($). The easiest way to do this is to use copy and paste.
    </li>
</ol>

