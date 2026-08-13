/**
 * Data Dictionary renderer.
 *
 * Migrated from the legacy site's assets/js/data-dictionary-parser.js, which
 * depended on jQuery. This site doesn't ship jQuery, so the same logic is
 * expressed with plain DOM APIs. Markup and class names are unchanged so the
 * styles carry over as-is.
 *
 * Data files live at <baseUrl>/assets/data/<version>.json and are authored in
 * this repo. field_name, the section examples, and the description all contain
 * intentional markup (number markers and value/discriminator highlights), so
 * those are assigned as HTML; every other field is set as text.
 */
(function () {
  'use strict';

  var VERSIONS = {
    'r4-v2': 'r4-v2.json',
    'stu3-v1': 'stu3-v1.json',
  };
  var DEFAULT_VERSION = 'r4-v2';

  var root = document.querySelector('[data-data-dictionary]');
  if (!root) return;

  var baseUrl = root.getAttribute('data-base-url') || '';
  var descriptionEl = root.querySelector('.data-dictionary__description');
  var countEl = root.querySelector('.definition-count');
  var tableEl = root.querySelector('#data_dictionary');
  var selectEl = root.querySelector('#versions');

  function el(tag, className) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    return node;
  }

  function createClaimTypes(claimTypes) {
    var wrapper = el('div', 'claim-type');
    claimTypes.split(',').forEach(function (claimType) {
      var p = el('p');
      p.textContent = claimType;
      wrapper.appendChild(p);
    });
    return wrapper;
  }

  function createDefinition(definitions) {
    var wrapper = el('div', 'definition__wrapper');

    definitions.forEach(function (definition) {
      var row = el('div', 'definition');

      var nameDesc = el('div', 'field-name-desc__wrapper');
      var name = el('div', 'field-name');
      name.innerHTML = definition.field_name;
      var desc = el('div', 'field-desc');
      desc.textContent = definition.field_description;
      nameDesc.appendChild(name);
      nameDesc.appendChild(desc);
      row.appendChild(nameDesc);

      row.appendChild(createClaimTypes(definition.claim_types));

      var ccw = el('div', 'ccw-column-name');
      ccw.textContent = definition.ccw_column_name;
      row.appendChild(ccw);

      var typeSize = el('div', 'type-size');
      typeSize.textContent = definition.type_size;
      row.appendChild(typeSize);

      wrapper.appendChild(row);
    });

    return wrapper;
  }

  function createExample(example) {
    var pre = el('pre', 'example');

    // Repeated per section so the legend stays visible on narrow screens,
    // where the shared header legend is hidden.
    var legend = el('div', 'legend');
    var value = el('pre', 'red-highlight');
    value.textContent = 'value';
    var discriminator = el('pre', 'blue-highlight');
    discriminator.textContent = 'discriminator';
    legend.appendChild(value);
    legend.appendChild(discriminator);

    var code = el('code');
    code.innerHTML = JSON.stringify(example, null, 2);

    pre.appendChild(legend);
    pre.appendChild(code);
    return pre;
  }

  function createSection(section) {
    var wrapper = el('div', 'section__wrapper');

    var title = el('div', 'section-title');
    title.textContent = section.title;
    wrapper.appendChild(title);

    var body = el('div', 'definition-example__wrapper');
    body.appendChild(createDefinition(section.definitions));
    body.appendChild(createExample(section.example));
    wrapper.appendChild(body);

    return wrapper;
  }

  function render(version) {
    var file = VERSIONS[version] || VERSIONS[DEFAULT_VERSION];

    tableEl.replaceChildren();
    descriptionEl.replaceChildren();

    return fetch('/' + baseUrl + 'assets/data/' + file)
      .then(function (res) {
        if (!res.ok) throw new Error('Request failed: ' + res.status);
        return res.json();
      })
      .then(function (json) {
        descriptionEl.innerHTML = json.description;

        var fragment = document.createDocumentFragment();
        var definitionsCount = 0;

        json.sections.forEach(function (section) {
          fragment.appendChild(createSection(section));
          definitionsCount += section.definitions.length;
        });

        tableEl.appendChild(fragment);
        countEl.textContent = definitionsCount + ' data elements';
      })
      .catch(function (error) {
        descriptionEl.textContent =
          'Sorry, the Data Dictionary could not be loaded. Please refresh the page to try again.';
        countEl.textContent = '';
        console.error('Data Dictionary failed to load:', error);
      });
  }

  if (selectEl) {
    selectEl.value = DEFAULT_VERSION;
    selectEl.addEventListener('change', function (event) {
      render(event.target.value);
    });
  }

  render(DEFAULT_VERSION);
})();
