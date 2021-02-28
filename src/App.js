import { useEffect, useState } from 'react';
import api from './services/api';

// Styles
import './styles/global.css';

// Components
import Product from './components/storeProduct/index';

function App() {
  const [storeProducts, setStoreProducts] = useState([]);

  console.log(storeProducts);

  useEffect(() => {
    api.get('').then((response) => {
      setStoreProducts(response.data.products);
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
      </div>
    </>
  );
}

export default App;
