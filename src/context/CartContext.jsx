import { createContext, useContext, useEffect, useState } from "react";

//step 1 create the context
export const CartContext = createContext(null);

//step 2 create the provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  //useeffect for addtocart first 1
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //create addtocart function with its product id name and image,price at second 2
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1,
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

  //step 3 put all the shared values inside value
  const value = {
    addToCart,
    cart,
    setCart,
    removeCart,
    increaseQuantity,
    decreaseQuantity,
  };

  //step 4
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

//step 5
export const useCartContext = () => useContext(CartContext);
