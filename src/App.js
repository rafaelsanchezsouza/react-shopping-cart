import { useEffect, useState } from 'react';
import api from './services/api';

// Styles
import './styles/global.css';

// Components
import Product from './components/storeProduct';
import ShoppingCart from './components/shoppingCart';

function App() {
  const [storeProducts, setStoreProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    api.get('').then((response) => {
      setStoreProducts(response.data.products);
    });
    // return () => {
    //   cleanup;
    // };
  }, []);

  function handleAddToCart(clickedProduct) {
    setCartProducts((previous) => {
      const isProductInCart = previous.find(
        (product) => product.id === clickedProduct.id
      );
      if (isProductInCart) {
        return previous.map((product) =>
          product.id === clickedProduct.id
            ? { ...product, amount: product.amount + 1 }
            : product
        );
      }
      return [...previous, { ...clickedProduct, amount: 1 }];
    });
  }

  function handleRemoveFromCart(id) {
    setCartProducts((previous) =>
      previous.reduce((accumulator, product) => {
        if (product.id === id) {
          if (product.amount === 1) return accumulator;
          return [...accumulator, { ...product, amount: product.amount - 1 }];
        } else {
          return [...accumulator, product];
        }
      })
    );
  }

  return (
    <>
      <ul className="navBar">
        <li className="storeName">Akita's Shopping Cart</li>
        <li className="author">by Rafael Sanchez Souza</li>
      </ul>

      <div id="store">
        {storeProducts.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          );
        })}

        <ShoppingCart
          cartProducts={cartProducts}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </div>
    </>
  );
}

export default App;
