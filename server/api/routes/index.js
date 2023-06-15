const router = require("express").Router();


const userController = require("../controller/userAPI");
const bookController = require("../controller/bookAPI");


// user api
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logout);
router.get("/logedinuser", userController.userDetails);

router.post("/addBook", bookController.addBook);
router.get("/allBook", bookController.getAllBooks);
router.get("/search/:id", bookController.searchBooks);
router.post("/addToCart", bookController.addToCart);
router.post("/checkout", bookController.checkout);
router.post("/returnBooks", bookController.returnBooks);




module.exports = router;