// *important*
// remover api se rodar sem o docker compose
// de { url: 'api', subUrl: 'login' } para { url: 'login', subUrl: '' }

export const URLS = {
  LOGIN: { url: 'login', subUrl: '' },
  SIGN_UP: { url: 'signup', subUrl: '' },
};

export const getEndpointURL = (key) => {
  let finalUrl = '';
  if (key && URLS[key]) {
    const urlKey = URLS[key];
    if (urlKey.url) {
      finalUrl = urlKey.url;
    }
    if (urlKey.subUrl && urlKey.subUrl.length > 0) {
      finalUrl += `/${urlKey.subUrl}`;
    }
  }
  return finalUrl;
};
