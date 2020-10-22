module.exports = {
  secret: process.env.JWT_SECRET || console.log('JWT_SECRET is not provided',JWT_SECRET),
  webUrl: process.env.WEB_URL || console.log('WEB_URL is not provided'),
  user: process.env.EMAIL || console.log('EMAIL is not provided'),
  pass: process.env.EMAIL_PASSWORD || console.log('EMAIL_PASSWORD is not provided'),
  mongoUri:process.env.MONGO_URI || console.log('MONGO_URI is not provided'),
  companyName:process.env.COMPANY_NAME || console.log('COMPANY_NAME is not provided'),
  facebookUrl:process.env.FACEBOOK_URL || console.log('FACEBOOK_URL is not provided'),
  centralAjudaUrl:process.env.CENTRAL_AJUDA_URL || console.log('CENTRAL_AJUDA_URL is not provided'),
};

