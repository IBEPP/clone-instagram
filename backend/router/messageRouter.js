const router = require("express").Router();
const MessageControllers = require("../controllers/message.controllers");

router.get("/message/:id", MessageControllers.getMessage);
router.patch("/post/:userId", MessageControllers.postMessage);

module.exports = router;
