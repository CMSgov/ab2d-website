const callFetch = (file) => {
  let selectedFile = ''

  switch (file) {
    case 'r4-v2':
      selectedFile = 'assets/data/r4-v2.json'
      break;
    case 'stu3-v1':
      selectedFile = 'assets/data/stu3-v1.json'
      break;
    default:
      selectedFile = 'assets/data/r4-v2.json'
      break;
  }

  $('#data_dictionary').empty()
  $('.description').empty()

  fetch(selectedFile)
    .then(res => res.json())
    .then(json => {
      $('.description').html(json.description)
      json.sections.forEach(section => {
        createSection($, section)
      })
      let definitionsCount = 0
      // hacky way to set the example height to something fixed so it gets a scroll bar when it's too long
      $('.section__wrapper').each(function () {
        const definitions = this.children[1].children[0].children
        let definitionHeight = 0
        // go through each definition and grab its height and add it to the total
        for (let index = 0; index < this.children[1].children[0].children.length; index++) {
          definitionHeight += definitions[index].clientHeight
        }
        // set the example elements height to the sum of the definitions
        // $(this.children[1].children[1]).height(definitionHeight)

        // increment the definitions count for display in the header
        definitionsCount += definitions.length
      })

      $('.definition-count').text(`${definitionsCount} data elements`)
    })
}

(function ($) {
  "use strict";
  $(document).ready(function () {
    callFetch()
  })

})(jQuery);

const createSection = ($, section) => {
  const section_markup = $('<div class="section__wrapper">')
  section_markup.append($('<div class="section-title">').text(section.title))

  const definitionExample_markup = $('<div class="definition-example__wrapper">')
  definitionExample_markup.append(createDefinition(section.definitions))
  definitionExample_markup.append(createExample(section.example))

  section_markup.append(definitionExample_markup)
  $('#data_dictionary').append(section_markup)
}

const createDefinition = (definitions) => {
  const definition_wrapper_markup = $('<div class="definition__wrapper">')

  definitions.forEach(definition => {
    const definition_markup = $('<div class="definition">')
    const { field_name, field_description, claim_types, ccw_column_name, type_size } = definition

    // field name description //
    const field_name_desc = $('<div class="field-name-desc__wrapper">')
    field_name_desc.append($('<div class="field-name">').html(field_name))
    field_name_desc.append($('<div class="field-desc">').text(field_description))
    definition_markup.append(field_name_desc)
    ////////////////////////////

    // claim types //
    createClaimTypes(claim_types, definition_markup)

    // ccw coumn name //
    definition_markup.append($('<div class="ccw-column-name">').text(ccw_column_name))

    // type size //
    definition_markup.append($('<div class="type-size">').text(type_size))
    definition_wrapper_markup.append(definition_markup)
  })

  return definition_wrapper_markup
}

const createClaimTypes = (claimTypes, definition_markup) => {
  const split = claimTypes.split(',')
  const claimType_markup = $('<div class="claim-type">')
  split.forEach(claimType => {
    claimType_markup.append($('<p>').text(claimType))
  })

  definition_markup.append(claimType_markup)
}

const createExample = (example) => {
  const code = $('<code>').html(JSON.stringify(example, null, 2))
  const legend = $("<div class='legend'><pre class= 'red-highlight'>value</pre ><pre class='blue-highlight'>discriminator</pre></div >")
  const preExample = $('<pre class="example">')
  preExample.append(legend)
  preExample.append(code)
  return preExample
}
