---
layout: default
page_title: "Privacy Settings"
seo_title: "Privacy Settings | CMS AB2D Claims API"
description: "Manage your privacy preferences and data permissions for the AB2D Medicare Claims API."
permalink: /privacy-settings
show-side-nav: false
---

# {{ page.page_title }}

We take your privacy seriously. You can change the settings for each category to choose how we collect and use information while you’re on [ab2d.cms.gov](ab2d.cms.gov). For details, review our [full privacy policy](https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Privacy-Policy) or [get the list of specific tools in each category](https://www.hhs.gov/pia/).



<div class="overflow-x-auto maxw-tablet-lg">
  <table class="usa-table usa-table--stacked usa-table--borderless">
      <thead>
          <tr>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td data-label="Category">Web Analytics</td>
              <td data-label="Description">We use various tools to count, track, and analyze visits to ab2d.cms.gov. This helps us understand how people use the site and where we should make improvements. Select "Don't allow" to block this tracking.</td>
              <td data-label="Status">
                <div class="usa-radio">
                    <input
                        class="usa-radio__input"
                        id="analytics-allow"
                        type="radio"
                        name="web-analytics"
                        value="Allow"
                        checked="checked"
                    />
                    <label class="usa-radio__label" for="analytics-allow">Allow</label>
                </div>
                <div class="usa-radio">
                    <input
                        class="usa-radio__input"
                        id="analytics-dont-allow"
                        type="radio"
                        name="web-analytics"
                        value="Don't Allow"
                    />
                    <label class="usa-radio__label" for="analytics-dont-allow">Don't allow</label>
                </div>
              </td>
          </tr>
          <tr>
              <td data-label="Category">Advertising</td>
              <td data-label="Description">We use digital advertising tools, such as web beacons, to track the effectiveness of our digital advertising outreach efforts. This helps us identify ads that are helpful to consumers and efficient for outreach. Select "Don't allow" to block this tracking.</td>
              <td data-label="Status">
                <div class="usa-radio">
                    <input
                        class="usa-radio__input"
                        id="advertising-allow"
                        type="radio"
                        name="advertising"
                        value="Allow"
                        checked="checked"
                    />
                    <label class="usa-radio__label" for="advertising-allow">Allow</label>
                </div>
                <div class="usa-radio">
                    <input
                        class="usa-radio__input"
                        id="advertising-dont-allow"
                        type="radio"
                        name="advertising"
                        value="Don't Allow"
                    />
                    <label class="usa-radio__label" for="advertising-dont-allow">Don't allow</label>
                </div>
              </td>
          </tr>
          <tr>
              <td data-label="Category">Social Media</td>
              <td data-label="Description">If you share our content on Facebook, X, or other social media accounts, we may track what ab2d.cms.gov content you share. This helps us improve our social media outreach. Select "Don't allow" to block this tracking.</td>
              <td data-label="Status">
                <div class="usa-radio">
                    <input
                        class="usa-radio__input"
                        id="social-allow"
                        type="radio"
                        name="social-media"
                        value="Allow"
                        checked="checked"
                    />
                    <label class="usa-radio__label" for="social-allow">Allow</label>
                </div>
                <div class="usa-radio">
                    <input
                        class="usa-radio__input"
                        id="social-dont-allow"
                        type="radio"
                        name="social-media"
                        value="Don't Allow"
                    />
                    <label class="usa-radio__label" for="social-dont-allow">Don't allow</label>
                </div>
              </td>
          </tr>
      </tbody>
  </table>
</div>

<a class="usa-button" href="">Update my settings</a>