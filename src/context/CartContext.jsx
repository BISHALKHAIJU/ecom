import { createContext, useContext, useEffect, useState } from "react";

//STEP 1 CREATE THE CONTEXT
export const CartContext = createContext(null);


//STEP 2 CREATE THE PROVIDER
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //  Updated Add To Cart (correct merging).create addtocart function with its product id name and image,price at second 2
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Match by id + color + size
      const existingItem = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.selectedColor === product.selectedColor &&
          item.selectedSize === product.selectedSize
      );

      if (existingItem) {
        // If exact match, increase quantity
        return prevCart.map((item) =>
          item.id === product.id &&
          item.selectedColor === product.selectedColor &&
          item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      // Otherwise create NEW cart line
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          selectedColor: product.selectedColor,
          selectedSize: product.selectedSize,
          quantity: product.quantity, // use quantity from detail page
        },
      ];
    });
  };

  const removeCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () =>{
    setCart([]);
  }

  const cartCount = cart.length;


  //STEP 3 PUT ALL THE SHARED VALUES INSIDE VALUE
  const value = {
    addToCart,
    cart,
    setCart,
    removeCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartCount,
  };


  //STEP 4 
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


//STEP 5
export const useCartContext = () => useContext(CartContext);
