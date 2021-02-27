import { useEffect, useState } from 'react';
import api from './services/api';

// Styles
import './styles/global.css';

// Components
import Product from './components/storeProduct';

function App() {
  const [storeProducts, setStoreProducts] = useState([]);

  useEffect(() => {
    api.get('').then((response) => {
      setStoreProducts(response.data);
    });
    // return () => {
    //   cleanup;
    // };
  }, []);

  return (
    <>
      <ul className="navBar">
        <li className="storeName">Akita's Shopping Cart</li>
        <li className="author">by Rafael Sanchez Souza</li>
      </ul>

      <div id="store">
        {storeProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
        <h1>Hello</h1>
      </div>
    </>
  );
}

export default App;
