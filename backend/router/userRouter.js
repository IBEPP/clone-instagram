const router = require("express").Router();
const UserControllers = require("../controllers/user.controllers");

// Crud User
router.get("/", UserControllers.usersAll);
router.get("/:id", UserControllers.userGetById);
router.post("/signup", UserControllers.userSignup);
router.get("/login", UserControllers.userLogin);
router.put("/update/:id", UserControllers.userPut);
router.delete("/delete/:id", UserControllers.userDelete);

module.exports = router;
