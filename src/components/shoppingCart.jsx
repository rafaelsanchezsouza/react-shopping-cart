import CartProduct from './cartProduct';

// Styles
import '../styles/components.css';

// const StoreProduct = ({ item, handleAddToCart }) => (
export default function ShoppingCart({ cartProducts }) {
  const calculateTotal = (items) =>
    items.reduce(
      (accumulator, item) => accumulator + item.amount * item.price,
      0
    );

  return (
    <div className="shoppingCart">
      <p className="shoppingCartTitle">Shopping Cart</p>
      {cartProducts.length === 0 ? <p>No items in cart.</p> : null}
      {cartProducts.map((product) => (
        <CartProduct product={product} key={product.id} />
      ))}
      <h4 className="cartTotalWrapper">
        Subtotal: R${calculateTotal([0, 0]).toFixed(2)}
      </h4>
      <h4 className="cartTotalWrapper">
        Discount: R${calculateTotal([0, 0]).toFixed(2)}
      </h4>
      <h3 className="cartTotalWrapper">
        Total: R${calculateTotal([0, 0]).toFixed(2)}
      </h3>
      <button className="checkoutButton">CHECKOUT</button>
    </div>
  );
}
