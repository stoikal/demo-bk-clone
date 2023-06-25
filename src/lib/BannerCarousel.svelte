<script lang="ts">
  import { onMount } from 'svelte'

  // Banner data
  const banners = [
    { id: 1, image: '/banners/spiderman.jpg' },
    { id: 2, image: '/banners/rasa_baru.jpg' },
    { id: 3, image: '/banners/diskon_30.jpg' },
    { id: 4, image: '/banners/cheeseburger.jpg' },
    { id: 5, image: '/banners/begadang_kenyang.jpg' },
    { id: 6, image: '/banners/cashback.jpg' },
    { id: 7, image: '/banners/nastar_crumble.jpg' },
    { id: 8, image: '/banners/tropical_whopper.jpg' },
    { id: 9, image: '/banners/ramadhan.jpg' }
  ]

  // Current active banner index
  let activeBanner = 0

  function nextBanner () {
    activeBanner = (activeBanner + 1) % banners.length
  }

  function prevBanner () {
    activeBanner = activeBanner === 0 ? banners.length - 1 : activeBanner - 1
  }

  onMount(() => {
    const id = setInterval(() => {
      nextBanner()
    }, 5000)

    return () => {
      clearInterval(id)
    }
  })
</script>

<div class="overflow-hidden">
  <div class="relative aspect-[16/5]">
    {#each banners as banner, index}
      <div
        class="absolute transition w-full"
        style={`
          transform: translateX(${(index - activeBanner) * 100}%);
        `}
      >
        <img
          src={banner.image}
          alt="banner"
          class="w-full h-full"
        />
      </div>
    {/each}

    <button
      class="absolute left-[2%] top-[50%] -translate-y-[50%] text-transparent bg-[url(/slider-arrow-left.png)] bg-contain h-6 w-6 sm:h-12 sm:w-12"
      on:click={prevBanner}
    >
      prev
    </button>

    <button
      class="absolute right-[2%] top-[50%] -translate-y-[50%] text-transparent bg-[url(/slider-arrow-right.png)] bg-contain h-6 w-6 sm:h-12 sm:w-12"
      on:click={nextBanner}
    >
      prev
    </button>

  </div>
  <div class="text-center leading-4">
    {#each banners as banner, index}
      <button
        class="rounded-full h-1.5 md:h-2 w-1.5 md:w-2 mx-0.5 md:mx-1.5"
        class:bg-bk-mutedorange={activeBanner !== index}
        class:bg-bk-orange={activeBanner === index}
        on:click={() => { activeBanner = index }}
      />
    {/each}
  </div>
</div>
