<script>
  export let data
</script>

<div class="mb-24">
  {#each data.products as product}
    <div class="p-2">
      <div
        class="flex items-center text-bk-mocha px-4 py-2 rounded-lg bg-white cursor-not-allowed"
        style="box-shadow: 2px 2px 15px -4px #6b6b6b;"
      >
        <div class="w-1/4">
          <img src={product.image} alt={product.name} class="w-full object-cover">
        </div>
        <div class="font-flame px-5">
          <p class="text-lg">{product.name}</p>
          <p>Rp{product.price.toLocaleString('id')}</p>
        </div>
      </div>
    </div>
  {/each}
</div>
