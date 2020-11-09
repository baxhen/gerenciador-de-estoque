const routes = require('express').Router()
const passport = require('passport')
const Authentication = require('./controllers/authentication')
const ProductController = require('./controllers/productController')
const CategoryController = require('./controllers/categoryController')
const SupplierController = require('./controllers/supplierController')
const EntranceController = require('./controllers/entranceController')
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
routes.post('/edit/product', requireAuth, ProductController.editProduct)
routes.delete(
  '/delete/product/:_id',
  requireAuth,
  ProductController.deleteProduct,
)

// SUPPLIERS ROUTES

routes.post('/add/supplier', requireAuth, SupplierController.addSupplier)
routes.get('/get/suppliers', requireAuth, SupplierController.getSuppliers)
routes.get('/get/supplier', requireAuth, SupplierController.getSupplier)
routes.get(
  '/supplier/search/by_field',
  requireAuth,
  SupplierController.getSupplierByField,
)
routes.post('/edit/supplier', requireAuth, SupplierController.editSupplier)
routes.delete(
  '/delete/supplier/:_id',
  requireAuth,
  SupplierController.deleteSupplier,
)

// CATEGORIES ROUTES

routes.post('/add/category', requireAuth, CategoryController.addCategory)
routes.get('/get/categories', requireAuth, CategoryController.getCategories)
routes.get('/get/category/:_id', requireAuth, CategoryController.getCategory)
routes.post('/edit/category/:_id', requireAuth, CategoryController.editCategory)
routes.delete(
  '/delete/category/:_id',
  requireAuth,
  CategoryController.deleteCategory,
)
// ENTRANCES ROUTES

routes.post('/add/entrance', requireAuth, EntranceController.addEntrance)
routes.get('/get/entrances', requireAuth, EntranceController.getEntrances)
// routes.get('/get/category/:_id', requireAuth, EntranceController.getCategory)
// routes.post('/edit/category/:_id', requireAuth, EntranceController.editCategory)
// routes.delete(
//   '/delete/category/:_id',
//   requireAuth,
//   EntranceController.deleteCategory,
// )

module.exports = routes
