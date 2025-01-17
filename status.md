---
layout: default
title:  "System Status"
permalink: /status
description: This page gives an overview of the status of the AB2D systems.
show-side-nav: false
---

<script>
    let baseUrl = 'https://sandbox.ab2d.cms.gov/';

    function pollServer() {
        $.get(baseUrl + 'status', function(data) {
            if(data.maintenanceMode === 'false') {
                $('#status-icon').html('<svg class="usa-icon text-green" aria-hidden="true" role="img"><use xlink:href="{{ '/assets/uswds/img/sprite.svg#check_circle' | relative_url }}"></use></svg>');
                $('#status-content').html("The system is operating normally");
            } else {
                $('#status-icon').html('<svg class="usa-icon text-red" aria-hidden="true" role="img"><use xlink:href="{{ '/assets/uswds/img/sprite.svg#cancel' | relative_url }}"></use></svg>');
                $('#status-content').html("The system is currently in maintenance mode. Please check back later.");
            }
        })
        .fail(function() {
            $('#status-icon').html('<svg class="usa-icon text-red" aria-hidden="true" role="img"><use xlink:href="{{ '/assets/uswds/img/sprite.svg#cancel' | relative_url }}"></use></svg>');
            $('#status-content').html("The system is currently unreachable. Please check back later.");
        })
        .always(function() {
            setTimeout(pollServer, 10000);
        });
    }

    $(document).ready(function() {
        pollServer();
    });
</script>

<h1>System Status</h1>

<ul class="usa-icon-list">
    <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon" id="status-icon"></div>
        <div class="usa-icon-list__content" id="status-content"></div>
    </li>
</ul>