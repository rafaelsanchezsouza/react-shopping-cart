import { useEffect, useState } from 'react';
import api from './services/api';

// Styles
import './styles/global.css';

// Components
import StoreProduct from './components/storeProduct';
import ShoppingCart from './components/shoppingCart';

const getProducts = require('./products.json');

function App() {
  const [storeProducts, setStoreProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    api.get('').then((response) => {
      // setStoreProducts(response.data);
      setStoreProducts(getProducts.products);
    });
  }, []);

  function handleAddToCart(clickedProduct) {
    setCartProducts((previous) => {
      const isProductInCart = previous.find(
        (product) => product.id === clickedProduct.id
      );
      if (isProductInCart) {
        return previous.map((product) =>
          product.id === clickedProduct.id &&
          product.available - product.amount > 0
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
        <li className="storeName">React Shopping Cart</li>
        <li className="author">by Rafael Sanchez Souza</li>
      </ul>
      <div id="store">
        <div id="productShelf">
          {storeProducts.map((product, index) => {
            // console.log('CartProduct: ');
            // console.log(cartProducts[index]);
            // console.log(cartProducts);
            return (
              <StoreProduct
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                cartProducts={cartProducts}
              />
            );
          })}
        </div>

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
