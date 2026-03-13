


import express from "express"
import { 
  addproduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById
} from "../Controllers/products.js"

import { adminAuth } from "../Middlewares/adminAuth.js"
import { Authenticated } from "../Middlewares/auth.js"
 import upload from "../Middlewares/multer.js"
const router = express.Router()


// add product (admin)
router.post("/add", Authenticated, adminAuth,   upload.single("imgSrc"), addproduct)


// get all products (public)
router.get("/all", getProducts)


// find product by id (public)
router.get("/:id", getProductById)


// update product (admin)
router.put("/:id", Authenticated, adminAuth,    upload.single("imgSrc"),updateProductById)


// delete product (admin)
router.delete("/:id", Authenticated, adminAuth, deleteProductById)


export default router