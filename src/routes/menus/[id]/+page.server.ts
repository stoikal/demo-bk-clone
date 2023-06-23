import products from '../../../data/products'
import categories from '../../../data/categories'

export function load ({ params }) {
  let categoryId = Number(params.id)
  const category = categories.find((category) => category.id === categoryId)

  if (!category) {
    categoryId = 1
  }

  const categoryProducts = products.filter((product) => product.categories.includes(categoryId))

  return {
    products: categoryProducts
  }
}
