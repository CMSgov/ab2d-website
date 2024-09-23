---
layout: api-docs
title:  "Setup Instructions"
permalink: /setup-instructions
in-page-nav: true
---

# Setup Instructions

curl is one of the many tools you can use to access the AB2D sandbox and production environments. curl comes preinstalled on some operating systems. In a terminal, type “curl –version” to check if it’s installed.

If you don’t have it installed, use the following system-specific instructions to install jq and curl. If your operating system isn’t listed, follow the installation instructions on the curl and jq websites.

## Mac 
1. Install or update jq using HomeBrew:
{% capture jsonSnippet %}{% raw %}
brew install jq
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}

If you’re on the latest version of jq, you will have a warning that looks like this:
{% capture jsonSnippet %}{% raw %}
Warning: jq {version} is already installed and up-to-date
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}

2. Verify jq is installed by checking the version number:
{% capture jsonSnippet %}{% raw %}
jq --version
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}

## Linux (CentOS/RedHat)
1. Install jq:
{% capture jsonSnippet %}{% raw %}
sudo yum install -y jq 
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}

2. Verify jq is installed by checking the version number:
{% capture jsonSnippet %}{% raw %}
jq --version
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}

## Windows 10
In this example, we will be using the Linux Subsystem for Windows 10.
1. Select _Type here to search_ near the bottom left of your Windows desktop.
2. Enter the following in the text box:
{% capture jsonSnippet %}{% raw %}
windows features
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}
4. Select _Turn Windows features on or off_ from the leftmost panel.
5. Scroll down to and check _Windows Subsystem for Linux_.
6. Select _OK_ on the _Windows Features_ window.
7. Wait for the changes to complete.
8. When prompted, select _Restart now_.
9. Select _Type here to search_ again.
10. Enter the following in the text box:
{% capture jsonSnippet %}{% raw %}
microsoft store
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}
12. Select _Microsoft Store_ from the leftmost panel.
13. Select _Search_ on the Microsoft Store page.
14. Enter the following in the text box:
{% capture jsonSnippet %}{% raw %}
linux
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}
16. Select _Run Linux on Windows_.
17. Select _Ubuntu_.
18. Select _Get_.
19. Select _No, thanks_ on the _Use across your devices_ dialog. The installation will begin automatically. 
20. Once the installation is complete, select _Launch_.
21. When prompted, choose a username and password. 
22. If the installation is successful, you will have a prompt that looks like this:
{% capture jsonSnippet %}{% raw %}
username@machinename:~$
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}
24. You’ll be entering commands at the dollar sign prompt ($). The easiest way to do this is to copy and paste. Update the Ubuntu system by entering the command:
{% capture jsonSnippet %}{% raw %}
sudo apt-get update -y
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}
26. Install jq by entering this command at the dollar sign prompt:
{% capture jsonSnippet %}{% raw %}
sudo apt-get install -y jq
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}
28. When prompted, enter your password.
29. Wait for the installation to complete.
30. Verify that jq is installed by checking its version number:
{% capture jsonSnippet %}{% raw %}
jq --version
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}
32. Close the _Ubuntu_ window.
33. Close the _Microsoft Store_ window.


### Open an Ubuntu terminal 
You can apply these instructions to other Unix-like applications as well. 
1. Select _Type here to search_ near the bottom left of your Windows desktop.
2. Enter the following in the text box:
{% capture jsonSnippet %}{% raw %}
ubuntu
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=jsonSnippet language="json" %}
4. Select _Ubuntu_ from the leftmost panel and a window will appear. You will be entering commands at the dollar sign prompt ($). The easiest way to do this is to use copy and paste. 
