{% assign code = include.code %}
{% assign can_copy = include.can_copy %}
{% assign nanosecond = "now" | date: "%N" %}

<div class="bg-base-lightest border-1px border-base-lighter margin-y-2 position-relative">
  <div class="grid-row">
    {% if can_copy == true %}
      <label class="usa-sr-only">Code snippet:
        <input type="text" id="code{{ nanosecond }}" value="{{ code | xml_escape }}" readonly />
      </label>
      <div class="position-absolute top-1 right-1 z-100">
        <a class="usa-button usa-button--outline margin-0 bg-base-lightest hover:bg-base-lightest active:bg-base-lightest" href="javascript:void(0)" onclick="copyText{{ nanosecond }}()" id="copybutton{{ nanosecond }}">Copy</a>
      </div>
    {% endif %}
    <div 
      class="tablet:grid-col-fill" 
      aria-hidden="true"
      {% if can_copy == true %}
        data-canCopy="true"
      {% endif %}
    >
      <!-- TODO: Can we pass the language var to avoid these conditionals -->
      {%- if include.language == "json" -%}
        {%- highlight json %}{{ code }}{% endhighlight -%}
      {%- elsif include.language == "html" -%}
        {%- highlight html %}{{ code }}{% endhighlight -%}
      {%- elsif include.language == "css" -%}
        {%- highlight css %}{{ code }}{% endhighlight -%}
      {%- elsif include.language == "javascript" -%}
        {%- highlight javascript %}{{ code }}{% endhighlight -%}
      {%- elsif include.language == "markdown" -%}
        {%- highlight markdown %}{{ code }}{% endhighlight -%}
      {%- elsif include.language == "shell" -%}
        {%- highlight shell %}{{ code }}{% endhighlight -%}
      {%- else -%}
        {%- highlight plaintext %}{{ code }}{% endhighlight -%}
      {%- endif -%}
    </div>
    {% if can_copy == true %}
    {% endif %}
  </div>
</div>

{% if can_copy == true %}
<script>
function copyText{{ nanosecond }}(){
  /* Get the text field */
  var copyText = document.getElementById("code{{ nanosecond }}");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");
}
</script>
{% endif %}