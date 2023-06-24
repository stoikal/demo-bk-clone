<script>
  export let data
</script>

<div class="bg-[url(/BK_bg.jpg)] bg-no-repeat bg-cover bg-fixed p-2 lg:p-6">
  <div class="max-w-screen-lg mx-auto lg:flex">
    <div class="p-2 mb-2 lg:hidden">
      <button
        class="bg-bk-yellow text-white text-left font-flame text-lg rounded-lg px-4 py-2 w-full cursor-not-allowed"
      >
        {data.category.name}
      </button>
    </div>

    <div class="hidden lg:block w-1/4 p-2 text-lg font-flame ">
      {#each data.categories as c}
        <div class="pb-2 pr-6">
          <a
            href={`/menus/${c.id}`}
            class="text-bk-mocha px-5 py-1.5 rounded-lg flex items-center min-h-[52px] focus:bg-bk-orange transition-color"
            class:bg-bk-yellow={c.id === data.category.id}
            class:bg-bk-lightorange={c.id !== data.category.id}
          >
            <h3 class="leading-[20px]">
              {c.name}
            </h3>
          </a>
        </div>
      {/each}
    </div>

    <div class="flex-1">
      <slot />
    </div>
  </div>
</div>
