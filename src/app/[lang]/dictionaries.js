import 'server-only'
 
const dictionaries = {
  en: () => import('@/lib/dictionaries/en.json').then((module) => module.default),
  zh: () => import('@/lib/dictionaries/zh.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()