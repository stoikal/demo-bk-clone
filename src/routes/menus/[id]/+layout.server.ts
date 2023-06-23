import categories from '../../../data/categories'

export function load ({ params }) {
  let categoryId = Number(params.id)
  let category = categories.find((category) => category.id === categoryId)

  if (!category) {
    category = categories[0]
    categoryId = 1
  }

  return {
    category,
    categories
  }
}
