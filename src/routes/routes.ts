import { Router } from 'express';
import { getProductById, getProducts, postProduct } from 'src/controllers/productController';

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", postProduct);

export default router;


