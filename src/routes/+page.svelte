<script>
  export let data
</script>

<div class="bg-[url(/BK_bg.jpg)] bg-no-repeat bg-cover bg-fixed">
  <div
    class="max-w-screen-lg mx-auto px-2 py-6 md:py-10"
  >
    <h1 class="font-flame-bold text-center text-xl sm:text-3xl text-bk-brown mb-1 sm:mb-6">
      Our Menus
    </h1>

    <div class="flex flex-wrap">
      {#each data.categories as category}
        <div class="w-1/2 lg:w-1/3 p-[1%]">
          <a href={`/menus/${category.id}`}>
            <div
              class="h-full bg-white rounded-lg p-1.5 pb-2.5 sm:p-5"
              style="box-shadow: 2px 2px 15px -4px #6b6b6b;"
            >
              <img
                src={category.image}
                alt={category.name}
                class="w-full object-cover mb-6"
              />
              <div class="lg:flex">
                <h2 class="font-flame-bold text-center lg:text-left lg:w-1/2 text-xl text-bk-brown">
                  {category.name}
                </h2>
                <div class="hidden lg:block w-1/2 pl-3">
                  <span class="font-flame bg-bk-orange rounded w-full inline-block text-center text-white py-1.5">
                    Order
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>

</div>
