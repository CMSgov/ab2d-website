---
layout: api-docs
title:  "How to Access Production Claims Data"
permalink: /how-to-access-production-claims-data
in-page-nav: true
---

# {{ page.title }}

## This page hasn't been built yet. 

<a href="https://docs.google.com/document/d/1aerA_DVxZd3sYY0Em5MlcewNtRrhULhU1YBwbz9WcG4/edit?usp=sharing">View the content document<a>

<table class="usa-table flex-wrap usa-table--stacked">
    <thead>
        <tr>
            <th scope="col">Environment</th>
            <th scope="col">Command</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-label="Environment" scope="row">
            Linux/Mac
            </th>
            <td data-label="Command">
            <code>AUTH_FILE=/home/abcduser/credentials_Z123456_base64.txt</code>
            </td>
        </tr>
        <tr>
            <th data-label="Environment" scope="row">
            Windows
            </th>
            <td data-label="Command">
            <code>$AUTH_FILE=C:\users\abcduser\credentials_Z123456_base64.txt</code>
            </td>
        </tr>
    </tbody>
</table>

<div class="usa-table-container--scrollable" tabindex="0">
    <table class="usa-table usa-table--stacked">
        <thead>
        <tr>
            <th scope="col">Environment</th>
            <th scope="col">Command</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th data-label="Environment" scope="row">
            Linux/Mac
            </th>
            <td data-label="Command">
            <code>AUTH_FILE=/home/abcduser/credentials_Z123456_base64.txt</code>
            </td>
        </tr>
        <tr>
            <th data-label="Environment" scope="row">
            Windows
            </th>
            <td data-label="Command">
            <code>$AUTH_FILE=C:\users\abcduser\credentials_Z123456_base64.txt</code>
            </td>
        </tr>
        </tbody>
    </table>
</div>

<div class="grid-container padding-x-0">
    <table class="usa-table usa-table--stacked">
        <thead>
        <tr>
            <th scope="col">Environment</th>
            <th scope="col">Command</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th data-label="Environment" scope="row">
            Linux/Mac
            </th>
            <td data-label="Command">
{% capture prodSnippet %}{% raw %}
AUTH_FILE=/home/abcduser/credentials_Z123456_base64.txt
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=prodSnippet language="shell" %}
            </td>
        </tr>
        <tr>
            <th data-label="Environment" scope="row">
            Windows
            </th>
            <td data-label="Command">
{% capture prodSnippet %}{% raw %}
$AUTH_FILE=C:\users\abcduser\credentials_Z123456_base64.txt
{% endraw %}{% endcapture %}
{% include copy_snippet.md code=prodSnippet language="shell" %}     
            </td>
        </tr>
        </tbody>
    </table>
</div>