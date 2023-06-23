<script>
  import '../app.css'
  import logo from '../assets/logo/bk_logo_mobile.png'
  import menuOpen from '../assets/icon/menu_open.png'
  import menuClose from '../assets/icon/menu_close.png'
  import cart from '../assets/icon/cart.png'

  let isMenuOpen = false

  function toggleMenu () {
    isMenuOpen = !isMenuOpen
  }

</script>

<div
  class="
    bg-bk-stone text-white w-full fixed shadow-xl top-0
  "
>
  <div
    class="
      flex h-12.5 m-x-auto
    "
  >

    <div
      class="flex-1"
    >
      <button
        type="button"
        class="bg-transparent h-12.5 px-4"
        on:click={toggleMenu}
      >
        <img
          src={isMenuOpen ? menuClose : menuOpen}
          alt="open navigation drawer"
          class="h-6"
        >
      </button>
    </div>

    <div
      class="h-12.5 flex items-center"
    >
      <a href="/">
        <img
          src={logo}
          alt="Burger King"
          class="h-10"
        />
      </a>
    </div>

    <div
      class="flex flex-1 justify-end"
    >
      <button
        class="bg-bk-orange h-12.5 px-3"
      >
        <img
          src={cart}
          alt="cart"
          class="h-7.5"
        >
      </button>
    </div>

  </div>

  <div
    class={`
      fixed bg-bk-stone top-12.5 left-0 right-0 bottom-0
      transition-all duration-300
      ${isMenuOpen ? 'visible h-full opacity-100' : 'invisible h-0 opacity-0'}
    `}
  >
    <div
      class="px-5 py-12"
    >
      Home
    </div>
  </div>
</div>

<div class="h-12.5" />

<slot />

<footer
  class="bg-bk-stone text-white"
>
  <div>
    <span
      class="text-bk-muted"
    >
      TM & © 2023 Burger King Corporation. Used Under License. All rights reserved.
    </span>
  </div>
</footer>
