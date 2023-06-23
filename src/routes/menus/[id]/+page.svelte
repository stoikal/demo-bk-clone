<script>
  export let data
</script>

<div class="mb-24 lg:flex lg:flex-wrap">
  {#each data.products as product}
    <div class="p-2 lg:w-1/2">
      <div
        class="flex flex-wrap items-center text-bk-mocha px-4 py-2 lg:p-6 rounded-lg bg-white cursor-not-allowed"
        style="box-shadow: 2px 2px 15px -4px #6b6b6b;"
      >
        <div class="w-1/4 lg:w-full lg:mb-2">
          <img src={product.image} alt={product.name} class="w-full object-cover">
        </div>
        <div class="font-flame px-5 lg:px-0">
          <p class="text-lg lg:text-2xl">{product.name}</p>
          <p class="lg:text-lg">Rp{product.price.toLocaleString('id')}</p>
        </div>
      </div>
    </div>
  {/each}
</div>
