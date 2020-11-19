const routes = require('express').Router()
const passport = require('passport')
const Authentication = require('./controllers/authentication')
const ProductController = require('./controllers/productController')
const CategoryController = require('./controllers/categoryController')
const SupplierController = require('./controllers/supplierController')
const ClientController = require('./controllers/clientController')
const EntranceController = require('./controllers/entranceController')
const TakeOffController = require('./controllers/takeOffController')
const StockController = require('./controllers/stockController')
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

// STOCK ROUTES
routes.get('/get/stock', requireAuth, StockController.getStock)

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
// CLIENTS ROUTES

routes.post('/add/client', requireAuth, ClientController.addClient)
routes.get('/get/clients', requireAuth, ClientController.getClients)
routes.get('/get/client', requireAuth, ClientController.getClient)
routes.get(
  '/client/search/by_field',
  requireAuth,
  ClientController.getClientByField,
)
routes.post('/edit/client', requireAuth, ClientController.editClient)
routes.delete('/delete/client/:_id', requireAuth, ClientController.deleteClient)

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
routes.get('/get/entrance', requireAuth, EntranceController.getEntrance)
routes.get(
  '/get/entrances/by_field',
  requireAuth,
  EntranceController.getEntrancesByField,
)
routes.post('/edit/entrance', requireAuth, EntranceController.editEntrance)
routes.delete(
  '/delete/entrance/:_id',
  requireAuth,
  EntranceController.deleteEntrance,
)
// TAKEOFF ROUTES

routes.post('/add/take-off', requireAuth, TakeOffController.addTakeOff)
routes.get('/get/take-offs', requireAuth, TakeOffController.getTakeOffs)
routes.get('/get/take-off', requireAuth, TakeOffController.getTakeOff)
routes.get(
  '/get/take-offs/by_field',
  requireAuth,
  TakeOffController.getTakeOffsByField,
)
routes.post('/edit/take-off', requireAuth, TakeOffController.editTakeOff)
routes.delete(
  '/delete/take-off/:_id',
  requireAuth,
  TakeOffController.deleteTakeOff,
)

module.exports = routes
