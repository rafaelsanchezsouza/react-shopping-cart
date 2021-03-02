import { useEffect, useState } from 'react';
import api from './services/api';

// Styles
import './styles/global.css';

// Components
import Product from './components/storeProduct';
import ShoppingCart from './components/shoppingCart';

let i = 0;

function App() {
  const [storeProducts, setStoreProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(async () => {
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
      }, [])
    );
  }
  return (
    <>
      <ul className="navBar">
        <li className="storeName">Akita's Shopping Cart</li>
        <li className="author">by Rafael Sanchez Souza</li>
      </ul>
      <div id="store">
        {storeProducts.map((product, index) => {
          return (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              cartProduct={cartProducts[index]}
            />
          );
        })}

        <ShoppingCart
          cartProducts={cartProducts}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </>
  );
}

export default App;
