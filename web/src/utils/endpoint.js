// *important*
// remover api se rodar sem o docker compose
// de { url: 'api', subUrl: 'login' } para { url: 'login', subUrl: '' }

export const URLS = {
  LOGIN: { url: 'api', subUrl: 'login' },
  SIGN_UP: { url: 'api', subUrl: 'signup' },
  RECOVER_PASSWORD: { url: 'api', subUrl: 'forgot_password' },
  RESET_PASSWORD: { url: 'api', subUrl: 'reset_password' },
  VERIFY_EMAIL: { url: 'api', subUrl: 'verify_email' },
  GET_CATEGORIES: { url: 'api', subUrl: 'get/categories' },
  GET_PRODUCTS: { url: 'api', subUrl: 'get/products' },
  GET_PRODUCTS_BY_FIELD: { url: 'api', subUrl: 'product/search/by_field' },
  ADD_PRODUCT: { url: 'api', subUrl: 'add/product' },
  EDIT_PRODUCT: { url: 'api', subUrl: 'edit/product' },
  DELETE_PRODUCT: { url: 'api', subUrl: 'delete/product/' },
  ADD_CATEGORY: { url: 'api', subUrl: 'add/category' },
  GET_SUPPLIERS: { url: 'api', subUrl: 'get/suppliers' },
  ADD_SUPPLIER: { url: 'api', subUrl: 'add/supplier' },
  DELETE_SUPPLIER: { url: 'api', subUrl: 'delete/supplier/' },
  EDIT_SUPPLIER: { url: 'api', subUrl: 'edit/supplier/' },
  GET_SUPPLIERS_BY_FIELD: { url: 'api', subUrl: 'supplier/search/by_field' },
  GET_ENTRANCES: { url: 'api', subUrl: 'get/entrances' },
}

export const getEndpointURL = (key) => {
  let finalUrl = ''
  if (key && URLS[key]) {
    const urlKey = URLS[key]
    if (urlKey.url) {
      finalUrl = urlKey.url
    }
    if (urlKey.subUrl && urlKey.subUrl.length > 0) {
      finalUrl += `/${urlKey.subUrl}`
    }
  }
  return finalUrl
}
