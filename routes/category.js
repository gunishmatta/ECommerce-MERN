var express = require("express");
var router = express.Router();
const { removeCategory,updateCategory,getCategoryById,getAllCategory,getCategory,createCategory } = require('../controllers/category')
const {isAdmin,isAuthenticated,isSignedIn} = require('../controllers/auth')
const {getUserById} = require('../controllers/user')
//params
router.param("userId",getUserById);
router.param("categoryId",getCategoryById);

//actual routes
router.post("/category/create/:userId",isSignedIn,isAuthenticated,isAdmin,createCategory)

router.get("/category/:categoryId",getCategory)
router.get("/categories",getAllCategory)

//update routes
router.put("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,updateCategory)

//delete route
router.delete("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,removeCategory)


module.exports = router;
 