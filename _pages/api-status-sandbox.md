---
layout: api-docs
page_title: "API Status Sandbox"
seo_title: ""
permalink: /api-status-sandbox
description:
show-side-nav: false
---

# {{ page.page_title }}

## Footer Icon

<div class="usa-identifier margin-y-3">
  <section class="usa-identifier__section usa-identifier__section--masthead" aria-label="Agency identifier,">
    <div class="usa-identifier__container">
      <div class="usa-identifier__logos">
        <a href="https://www.hhs.gov/" class="usa-identifier__logo" data-tealium="identifier">
          <img class="usa-identifier__logo-img" src="{{ '/assets/img/HHS-logo.svg' | relative_url }}" alt="HHS logo"
            role="img" />
        </a>
        <a href="https://www.cms.gov/" class="usa-identifier__logo" data-tealium="identifier">
          <img class="usa-identifier__logo-img padding-x-2" src="{{ '/assets/img/CMS-logo.svg' | relative_url }}"
            alt="CMS logo" role="img" />
        </a>
      </div>
      <section class="usa-identifier__identity" aria-label="Agency description,">
        <p class="usa-identifier__identity-domain">cms.gov</p>
        <p class="usa-identifier__identity-disclaimer">
          <span aria-hidden="true">An</span>official website of the <a href="https://www.hhs.gov/"
            class="usa-link--external">U.S. Department of Health and Human Services</a> and the <a
            href="https://www.cms.gov/" class="usa-link--external">Centers for Medicare & Medicaid Services</a>.
        </p>
      </section>
    </div>
  </section>
  <nav class="usa-identifier__section usa-identifier__section--required-links" aria-label="Important links,">
    <div class="usa-identifier__container">
      <ul class="usa-identifier__required-links-list">
        {% for item in site.data.identifier-links %}
        <li class="usa-identifier__required-links-item">
          <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer" data-tealium="identifier"
            class="usa-identifier__required-link usa-link usa-link--external">{{ item.text }}</a>
        </li>
        {% endfor %}
        <li class="usa-identifier__required-links-item">
          <a class="usa-identifier__required-link usa-link" data-target="#privacyModal" href="#privacyModal"
            data-privacy-policy="modal-trigger-footer" onclick="utag.gdpr.showConsentPreferences()">
            Privacy Settings</a>
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="{{ '/sitemap' | relative_url }}" data-tealium="identifier"
            class="usa-identifier__required-link usa-link">Sitemap</a>
        </li>
        <li class="usa-identifier__required-links-item">
            <div id="success" class="display-flex flex-row flex-align-center">
                <p class="usa-text">API Status:</p>
                <svg class="usa-icon text-green margin-x-05" aria-hidden="true" role="img">
                    <use xlink:href="{{ '/assets/uswds/img/sprite.svg#check_circle' | relative_url }}"></use>
                </svg>
                <p class="usa-text">Online</p>
            </div>
        </li>
      </ul>
    </div>
  </nav>
  <section class="usa-identifier__section usa-identifier__section--usagov"
    aria-label="U.S. government information and services,">
    <div class="usa-identifier__container">
      <div class="usa-identifier__usagov-description">
        Looking for U.S. government information and services?
      </div>
      <a href="https://www.usa.gov/" class="usa-link usa-link--external" data-tealium="identifier">Visit USA.gov</a>
    </div>
  </section>
</div>

## Footer Tag - Online

<div class="usa-identifier margin-y-3">
  <section class="usa-identifier__section usa-identifier__section--masthead" aria-label="Agency identifier,">
    <div class="usa-identifier__container">
      <div class="usa-identifier__logos">
        <a href="https://www.hhs.gov/" class="usa-identifier__logo" data-tealium="identifier">
          <img class="usa-identifier__logo-img" src="{{ '/assets/img/HHS-logo.svg' | relative_url }}" alt="HHS logo"
            role="img" />
        </a>
        <a href="https://www.cms.gov/" class="usa-identifier__logo" data-tealium="identifier">
          <img class="usa-identifier__logo-img padding-x-2" src="{{ '/assets/img/CMS-logo.svg' | relative_url }}"
            alt="CMS logo" role="img" />
        </a>
      </div>
      <section class="usa-identifier__identity" aria-label="Agency description,">
        <p class="usa-identifier__identity-domain">cms.gov</p>
        <p class="usa-identifier__identity-disclaimer">
          <span aria-hidden="true">An</span>official website of the <a href="https://www.hhs.gov/"
            class="usa-link--external">U.S. Department of Health and Human Services</a> and the <a
            href="https://www.cms.gov/" class="usa-link--external">Centers for Medicare & Medicaid Services</a>.
        </p>
      </section>
    </div>
  </section>
  <nav class="usa-identifier__section usa-identifier__section--required-links" aria-label="Important links,">
    <div class="usa-identifier__container">
      <ul class="usa-identifier__required-links-list">
        {% for item in site.data.identifier-links %}
        <li class="usa-identifier__required-links-item">
          <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer" data-tealium="identifier"
            class="usa-identifier__required-link usa-link usa-link--external">{{ item.text }}</a>
        </li>
        {% endfor %}
        <li class="usa-identifier__required-links-item">
          <a class="usa-identifier__required-link usa-link" data-target="#privacyModal" href="#privacyModal"
            data-privacy-policy="modal-trigger-footer" onclick="utag.gdpr.showConsentPreferences()">
            Privacy Settings</a>
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="{{ '/sitemap' | relative_url }}" data-tealium="identifier"
            class="usa-identifier__required-link usa-link">Sitemap</a>
        </li>
        <li class="usa-identifier__required-links-item">
            <div id="success" class="display-flex flex-row flex-align-center">
                <p class="usa-text">API Status:</p>
                <span class="usa-tag margin-x-05 bg-green">Online</span>
            </div>
        </li>
      </ul>
    </div>
  </nav>
  <section class="usa-identifier__section usa-identifier__section--usagov"
    aria-label="U.S. government information and services,">
    <div class="usa-identifier__container">
      <div class="usa-identifier__usagov-description">
        Looking for U.S. government information and services?
      </div>
      <a href="https://www.usa.gov/" class="usa-link usa-link--external" data-tealium="identifier">Visit USA.gov</a>
    </div>
  </section>
</div>

### Footer Tag - Maintenance

<div class="usa-identifier margin-y-3">
  <section class="usa-identifier__section usa-identifier__section--masthead" aria-label="Agency identifier,">
    <div class="usa-identifier__container">
      <div class="usa-identifier__logos">
        <a href="https://www.hhs.gov/" class="usa-identifier__logo" data-tealium="identifier">
          <img class="usa-identifier__logo-img" src="{{ '/assets/img/HHS-logo.svg' | relative_url }}" alt="HHS logo"
            role="img" />
        </a>
        <a href="https://www.cms.gov/" class="usa-identifier__logo" data-tealium="identifier">
          <img class="usa-identifier__logo-img padding-x-2" src="{{ '/assets/img/CMS-logo.svg' | relative_url }}"
            alt="CMS logo" role="img" />
        </a>
      </div>
      <section class="usa-identifier__identity" aria-label="Agency description,">
        <p class="usa-identifier__identity-domain">cms.gov</p>
        <p class="usa-identifier__identity-disclaimer">
          <span aria-hidden="true">An</span>official website of the <a href="https://www.hhs.gov/"
            class="usa-link--external">U.S. Department of Health and Human Services</a> and the <a
            href="https://www.cms.gov/" class="usa-link--external">Centers for Medicare & Medicaid Services</a>.
        </p>
      </section>
    </div>
  </section>
  <nav class="usa-identifier__section usa-identifier__section--required-links" aria-label="Important links,">
    <div class="usa-identifier__container">
      <ul class="usa-identifier__required-links-list">
        {% for item in site.data.identifier-links %}
        <li class="usa-identifier__required-links-item">
          <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer" data-tealium="identifier"
            class="usa-identifier__required-link usa-link usa-link--external">{{ item.text }}</a>
        </li>
        {% endfor %}
        <li class="usa-identifier__required-links-item">
          <a class="usa-identifier__required-link usa-link" data-target="#privacyModal" href="#privacyModal"
            data-privacy-policy="modal-trigger-footer" onclick="utag.gdpr.showConsentPreferences()">
            Privacy Settings</a>
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="{{ '/sitemap' | relative_url }}" data-tealium="identifier"
            class="usa-identifier__required-link usa-link">Sitemap</a>
        </li>
        <li class="usa-identifier__required-links-item">
            <div id="maintenance" class="display-flex flex-row flex-align-center usa-tooltip" data-position="top"
            title="Please check back later.">
                <p class="usa-text">API Status:</p>
                <span class="usa-tag margin-left-1 bg-warning text-black">Maintenance</span>
            </div>
        </li>
      </ul>
    </div>
  </nav>
  <section class="usa-identifier__section usa-identifier__section--usagov"
    aria-label="U.S. government information and services,">
    <div class="usa-identifier__container">
      <div class="usa-identifier__usagov-description">
        Looking for U.S. government information and services?
      </div>
      <a href="https://www.usa.gov/" class="usa-link usa-link--external" data-tealium="identifier">Visit USA.gov</a>
    </div>
  </section>
</div>

### Footer Tag - Unreachable

<div class="usa-identifier margin-y-3">
  <section class="usa-identifier__section usa-identifier__section--masthead" aria-label="Agency identifier,">
    <div class="usa-identifier__container">
      <div class="usa-identifier__logos">
        <a href="https://www.hhs.gov/" class="usa-identifier__logo" data-tealium="identifier">
          <img class="usa-identifier__logo-img" src="{{ '/assets/img/HHS-logo.svg' | relative_url }}" alt="HHS logo"
            role="img" />
        </a>
        <a href="https://www.cms.gov/" class="usa-identifier__logo" data-tealium="identifier">
          <img class="usa-identifier__logo-img padding-x-2" src="{{ '/assets/img/CMS-logo.svg' | relative_url }}"
            alt="CMS logo" role="img" />
        </a>
      </div>
      <section class="usa-identifier__identity" aria-label="Agency description,">
        <p class="usa-identifier__identity-domain">cms.gov</p>
        <p class="usa-identifier__identity-disclaimer">
          <span aria-hidden="true">An</span>official website of the <a href="https://www.hhs.gov/"
            class="usa-link--external">U.S. Department of Health and Human Services</a> and the <a
            href="https://www.cms.gov/" class="usa-link--external">Centers for Medicare & Medicaid Services</a>.
        </p>
      </section>
    </div>
  </section>
  <nav class="usa-identifier__section usa-identifier__section--required-links" aria-label="Important links,">
    <div class="usa-identifier__container">
      <ul class="usa-identifier__required-links-list">
        {% for item in site.data.identifier-links %}
        <li class="usa-identifier__required-links-item">
          <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer" data-tealium="identifier"
            class="usa-identifier__required-link usa-link usa-link--external">{{ item.text }}</a>
        </li>
        {% endfor %}
        <li class="usa-identifier__required-links-item">
          <a class="usa-identifier__required-link usa-link" data-target="#privacyModal" href="#privacyModal"
            data-privacy-policy="modal-trigger-footer" onclick="utag.gdpr.showConsentPreferences()">
            Privacy Settings</a>
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="{{ '/sitemap' | relative_url }}" data-tealium="identifier"
            class="usa-identifier__required-link usa-link">Sitemap</a>
        </li>
        <li class="usa-identifier__required-links-item">
            <div id="unreachable" class="display-flex flex-row flex-align-center usa-tooltip" data-position="top"
            title="Please check back later.">
                <p class="usa-text">API Status:</p>
                <span class="usa-tag margin-left-1 bg-red">Unavailable</span>
            </div>
        </li>
      </ul>
    </div>
  </nav>
  <section class="usa-identifier__section usa-identifier__section--usagov"
    aria-label="U.S. government information and services,">
    <div class="usa-identifier__container">
      <div class="usa-identifier__usagov-description">
        Looking for U.S. government information and services?
      </div>
      <a href="https://www.usa.gov/" class="usa-link usa-link--external" data-tealium="identifier">Visit USA.gov</a>
    </div>
  </section>
</div>

## Footer link + page

See live implementation at the bottom of this page.
