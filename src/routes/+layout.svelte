<script>
  import 'virtual:uno.css'
  import '@unocss/reset/tailwind-compat.css'
</script>

<div class="bg-bk-stone">
  <div class="text-bk-white">
    navbar
  </div>
</div>

<slot />

<footer
  bg="bk-stone"
  text="bk-white"
>
  <div>
    <span
      text="bk-muted"
    >
      TM & © 2023 Burger King Corporation. Used Under License. All rights reserved.
    </span>
  </div>
</footer>
