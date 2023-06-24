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
  class="bg-bk-stone text-white w-full fixed top-0 z-50"
  style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);"
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
        class="bg-bk-orange h-12.5 px-3 cursor-not-allowed"
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
    <nav
      class="px-5 py-2"
    >
      <ul class="text-3xl font-flame">
        <li class="mb-3">
          <a
            href="/"
            class="pt-2 pb-3 block"
            on:click={() => { isMenuOpen = false }}
          >
            Home
          </a>
        </li>
        <li class="mb-3">
          <a
            href="/menus"
            class="pt-2 pb-3 block"
            on:click={() => { isMenuOpen = false }}
          >
            <span class="text-sm leading-[0.5rem] text-bk-yellow block">Delivery</span>
            Order
          </a>
        </li>
        <li class="mb-3">
          <span
            href="/"
            class="pt-2 pb-3 block cursor-not-allowed"
          >
            <span class="text-sm leading-[0.5rem] text-bk-yellow block">Get Fresh</span>
            Promotions
          </span>
        </li>
      </ul>
    </nav>
  </div>
</div>

<div class="h-12.5" />

<slot />

<footer
  class="bg-bk-stone text-white text-sm p-8"
>
  <div class="max-w-screen-lg mx-auto px-4">
    <p class="text-center font-flame text-2xl mb-3">
      BURGER KING® DELIVERY
    </p>

    <div class="text-center mb-3">
      <a
        href="/"
        class="font-flame text-2xl px-3"
      >
        15000 25
      </a>
      <a
        href="/"
        class="px-3"
      >
        guestservice@burgerking.co.id
      </a>
    </div>

    <div>
      <ul class="text-center mb-5">
        <li class="mb-3">
          <a href="/">
            About Us
          </a>
        </li>
        <li class="mb-3">
          <a href="/">
            Kebijakan Privasi
          </a>
        </li>
        <li class="mb-3">
          <a href="/">
            Syarat dan Ketentuan
          </a>
        </li>
      </ul>
      <p
        class="text-bk-muted text-center"
      >
        TM & © 2023 Burger King Corporation. Used Under License. All rights reserved.
      </p>
  </div>
  </div>
</footer>
