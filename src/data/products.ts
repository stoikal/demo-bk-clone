import type { Product } from '../types/product'
import categories from './categories'

function getRandomNumber (max: number, excludedNumbers: number[] = []) {
  let randomNumber

  do {
    randomNumber = Math.floor(Math.random() * max) + 1
  } while (excludedNumbers.includes(randomNumber))

  return randomNumber
}

const mockProducts: Product[] = []

const productCounts = 50

for (let id = 1; id < productCounts + 1; id++) {
  const categoryId = getRandomNumber(categories.length)
  const category = categories.find((c) => c.id === categoryId)

  const productCategories = [categoryId]

  if (getRandomNumber(3) > 2) {
    const secondCategoryId = getRandomNumber(categories.length, [categoryId])
    productCategories.push(secondCategoryId)
  }

  mockProducts.push(
    {
      id,
      categories: productCategories,
      name: `Product ${id}`,
      description: 'desc',
      price: getRandomNumber(20) * 5000,
      image: category?.image as string
    }
  )
}

export default mockProducts
