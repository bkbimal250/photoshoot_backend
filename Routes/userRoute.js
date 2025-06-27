
const express = require("express");
const router = express.Router();
const {
    registerUser,
     loginUser ,
     getCurrentUser,
     getAllUsers



} = require("../controllers/userController");
const { protect } = require("../Middlewares/authMiddleware");

router.get("/users", protect, getAllUsers); 
router.get("/me", protect, getCurrentUser);     // Logged-in user's data
router.post("/register",registerUser);
router.post("/login",loginUser);




module.exports= router;