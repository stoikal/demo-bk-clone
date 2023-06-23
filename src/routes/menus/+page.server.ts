import { redirect } from '@sveltejs/kit'
import categories from '../../data/categories'

export function load () {
  throw redirect(308, `menus/${categories[0].id}`)
}
