const routes = require('express').Router()
const passport = require('passport')
const Authentication = require('./controllers/authentication')
const ProductController = require('./controllers/productController')
const CategoryController = require('./controllers/categoryController')
require('./services/passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireLogIn = passport.authenticate('local', { session: false })

// routes.get('/', requireAuth, (req, res) => {
//   res.send({ message: 'this is a protected content', user: req.user })
// })
// AUTHENTICATION ROUTES
routes.post('/login', requireLogIn, Authentication.signin)
routes.post('/forgot_password', Authentication.forgotPassword)
routes.post('/signup', Authentication.signup)
routes.post('/reset_password', Authentication.resetPassword)
routes.post('/verify_email', Authentication.verifyEmail)

// PRODUCTS ROUTES

routes.post('/add/product', requireAuth, ProductController.addProduct)
routes.get('/get/products', requireAuth, ProductController.getProducts)
routes.get('/get/product/:_id', requireAuth, ProductController.getProduct)
routes.get(
  '/product/search/by_field',
  requireAuth,
  ProductController.getProductByField,
)
routes.post('/edit/product/:_id', requireAuth, ProductController.editProduct)
routes.delete(
  '/delete/product/:_id',
  requireAuth,
  ProductController.deleteProduct,
)

routes.post('/add/category', requireAuth, CategoryController.addCategory)
routes.get('/get/categories', requireAuth, CategoryController.getCategories)
routes.get('/get/category/:_id', requireAuth, CategoryController.getCategory)
routes.post('/edit/category/:_id', requireAuth, CategoryController.editCategory)
routes.delete(
  '/delete/category/:_id',
  requireAuth,
  CategoryController.deleteCategory,
)

module.exports = routes
