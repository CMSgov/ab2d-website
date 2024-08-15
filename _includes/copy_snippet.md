{% assign code = include.code %}
{% assign nanosecond = "now" | date: "%N" %}

<div class="bg-base-lightest border-1px border-base-lighter">
  <div class="grid-row">
    <input type="text" id="code{{ nanosecond }}" value="{{ code }}" class="usa-sr-only" readonly />
    <div class="tablet:grid-col-fill" aria-hidden="true">
      <pre class="text-pre-wrap overflow-x-auto padding-1 margin-1"><code>{{code}}</code></pre>
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