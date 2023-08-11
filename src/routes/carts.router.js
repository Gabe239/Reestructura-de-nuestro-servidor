import express from 'express';
import {
  createCart,
  getCartById,
  addProductToCart,
  removeProductFromCart,
  updateCartProducts,
  updateProductQuantity,
  clearCart
} from '../controllers/carts.controller.js';

const router = express.Router();

router.post('/', createCart);
router.get('/:cid', getCartById);
router.post('/:cid/product/:pid', addProductToCart);
router.delete('/:cid/products/:pid', removeProductFromCart);
router.put('/:cid', updateCartProducts);
router.put('/:cid/products/:pid', updateProductQuantity);
router.delete('/:cid', clearCart);

export default router;