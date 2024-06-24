---
layout: default
title:  "API Documentation"
active-nav: api-documentation
---

<div class="grid-container padding-y-6">
    <h1>{{ page.title }}</h1>
    (Getting the data)
    <div class="grid-row grid-gap">
        <div class="tablet:grid-col-6">
            <h2>API instructions</h2>
            <h3>INITIAL CONNECTION</h3>
            <p>TECHNICAL info on how to connect to:</p>
            <ul>
                <li>sandbox</li>
                <li>production</li>
            </ul>
            <p>LINKS OUT to the "onboarding" page where we explain the non-technical workflow of Attestor/ADOS etc.</p>
            <p>Will contain content from: </p>
            <ul>
                <li>Swagger User Guide</li>
                <li>Advanced User Guide</li>
                <li>Curl User Guide</li>
                <li>Accessing Production (github)</li>
            </ul>
        </div>
        <div class="tablet:grid-col-6">
            <h2>API references</h2>
            <h3>FEATURES AND FUNCTIONALITY</h3>
            <ul>
                <li>Resources: (Intro to JSON Format, Newline Delimited JSON (ndjson), JSON format viewer/validator)</li>
                <li>Endpoints</li>
                <li>Parameters</li>
                <li>Troubleshooting</li>
            </ul>
            <hr />
            <h3>Cross links</h3>
            <ul>
                <li><a href="{% link onboarding.md %}" class="usa-nav-link"><span>Onboarding</span></a></li>
                <li><a href="{% link api-data.md %}" class="usa-nav-link"><span>API Data</span></a></li>
            </ul>
        </div>
    </div>
</div>

