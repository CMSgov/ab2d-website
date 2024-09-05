{% assign code = include.code %}
{% assign nanosecond = "now" | date: "%N" %}

<div class="bg-base-lightest border-1px border-base-lighter margin-y-2">
  <div class="grid-row">
    <label class="usa-sr-only">Code snippet:
      <input type="text" id="code{{ nanosecond }}" value="{{ code | xml_escape }}" readonly />
    </label>
    <div class="tablet:grid-col-fill margin-2" aria-hidden="true">
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
    <div class="tablet:grid-col-auto padding-1">
      <a class="usa-button usa-button--outline margin-1" href="javascript:void(0)" onclick="copyText{{ nanosecond }}()" id="copybutton{{ nanosecond }}">Copy</a>
    </div>
  </div>
</div>

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