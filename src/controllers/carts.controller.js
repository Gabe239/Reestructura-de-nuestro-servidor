import CartManager from '../dao/managers/CartManagerDb.js';

const cartManager = new CartManager();

export const createCart = async (req, res) => {
    try {
        const newCart = await cartManager.createCart();
        return res.status(201).json(newCart);
      } catch (error) {
        return res.status(500).json({ error: 'Error al crear el carrito' });
      }
};

export const getCartById = async (req, res) => {
    try {
        const cartId = req.params.cid;
        const cart = await cartManager.getCartById(cartId);
    
        if (cart) {
          return res.json(cart);
        } else {
          return res.status(404).json({ error: 'Carrito no encontrado' });
        }
      } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el carrito' });
      }
};

export const addProductToCart = async (req, res) => {
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
    
        const updatedProducts = await cartManager.addProductToCart(cartId, productId);
        return res.status(200).json(updatedProducts);
      } catch (error) {
        return res.status(500).json({ error: 'Error al agregar el producto al carrito' });
      }
};

export const removeProductFromCart = async (req, res) => {
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
    
        await cartManager.removeProductFromCart(cartId, productId);
        return res.status(200).json({ message: 'Producto eliminado del carrito' });
      } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el producto del carrito' });
      }
};

export const updateCartProducts = async (req, res) => {
    try {
        const cartId = req.params.cid;
        const products = req.body.products;
    
        await cartManager.updateCartProducts(cartId, products);
        return res.status(200).json({ message: 'Carrito actualizado con éxito' });
      } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el carrito' });
      }
};

export const updateProductQuantity = async (req, res) => {
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
        const quantity = req.body.quantity;
    
        await cartManager.updateProductQuantity(cartId, productId, quantity);
        return res.status(200).json({ message: 'Cantidad del producto actualizada con éxito' });
      } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar la cantidad del producto' });
      }
};

export const clearCart = async (req, res) => {
  try {
    const cartId = req.params.cid;

    await cartManager.clearCart(cartId);
    return res.status(200).json({ message: 'Carrito vaciado con éxito' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al vaciar el carrito' });
  }
};