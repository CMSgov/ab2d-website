---
layout: api-docs
page_title: "System Status"
seo_title: ""
permalink: /status
description: This page gives an overview of the status of the AB2D systems.
show-side-nav: false
---

# {{ page.page_title }}

<div class="margin-top-1">
    <div id="success" class="display-flex flex-align-center display-none">
        <svg class="usa-icon text-green" aria-hidden="true" role="img">
            <use xlink:href="{{ '/assets/uswds/img/sprite.svg#check_circle' | relative_url }}"></use>
        </svg>
        <p class="padding-05 margin-0">The system is operating normally.</p>
    </div>
    <div id="maintenance" class="display-flex flex-align-center display-none">
        <svg class="usa-icon text-red" aria-hidden="true" role="img">
            <use xlink:href="{{ '/assets/uswds/img/sprite.svg#cancel' | relative_url }}"></use>
        </svg>
        <p class="padding-05 margin-0">
            The system is currently in maintenance mode. Please check back later.
        </p>
    </div>
    <div id="unreachable" class="display-flex flex-align-center display-none">
        <svg class="usa-icon text-red" aria-hidden="true" role="img">
            <use xlink:href="{{ '/assets/uswds/img/sprite.svg#cancel' | relative_url }}"></use>
        </svg>
        <p class="padding-05 margin-0">
            The system is currently unreachable. Please check back later.
        </p>
    </div>
</div>

<script>
    async function pollServer() {
        const successEl = document.getElementById("success");
        const maintenanceEl = document.getElementById("maintenance");
        const unreachableEl = document.getElementById("unreachable");

        const baseUrl = "https://sandbox.ab2d.cms.gov/status";

        try {
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();

            console.log({ data })

            if (data.maintenanceMode === "false") {
                successEl?.classList.remove("display-none");
            } else {
                maintenanceEl?.classList.remove("display-none");
            }
        } catch (error) {
            console.error(error.message);
            unreachableEl?.classList.remove("display-none");
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        pollServer();
        setInterval(pollServer, 3000);
    })
</script>
