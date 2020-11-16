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
  GET_CLIENTS: { url: 'api', subUrl: 'get/clients' },
  GET_PRODUCTS: { url: 'api', subUrl: 'get/products' },
  GET_PRODUCTS_BY_FIELD: { url: 'api', subUrl: 'product/search/by_field' },
  GET_CLIENTS_BY_FIELD: { url: 'api', subUrl: 'client/search/by_field' },
  GET_SUPPLIERS: { url: 'api', subUrl: 'get/suppliers' },
  GET_SUPPLIERS_BY_FIELD: { url: 'api', subUrl: 'supplier/search/by_field' },
  GET_ENTRANCES: { url: 'api', subUrl: 'get/entrances' },
  GET_ENTRANCES_BY_FIELD: { url: 'api', subUrl: 'get/entrances/by_field' },
  ADD_PRODUCT: { url: 'api', subUrl: 'add/product' },
  ADD_SUPPLIER: { url: 'api', subUrl: 'add/supplier' },
  ADD_CATEGORY: { url: 'api', subUrl: 'add/category' },
  ADD_ENTRANCE: { url: 'api', subUrl: 'add/entrance' },
  ADD_CLIENT: { url: 'api', subUrl: 'add/client' },
  EDIT_PRODUCT: { url: 'api', subUrl: 'edit/product' },
  EDIT_SUPPLIER: { url: 'api', subUrl: 'edit/supplier' },
  EDIT_ENTRANCE: { url: 'api', subUrl: 'edit/entrance' },
  EDIT_CLIENT: { url: 'api', subUrl: 'edit/client' },
  DELETE_PRODUCT: { url: 'api', subUrl: 'delete/product/' },
  DELETE_SUPPLIER: { url: 'api', subUrl: 'delete/supplier/' },
  DELETE_ENTRANCE: { url: 'api', subUrl: 'delete/entrance/' },
  DELETE_CLIENT: { url: 'api', subUrl: 'delete/client/' },
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
