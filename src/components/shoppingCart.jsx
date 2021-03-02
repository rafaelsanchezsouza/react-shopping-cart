import CartProduct from './cartProduct';

// Styles
import '../styles/components.css';

export default function ShoppingCart({
  cartProducts,
  handleAddToCart,
  handleRemoveFromCart,
}) {
  const calculateTotal = (products) =>
    products.reduce(
      (accumulator, product) => accumulator + product.amount * product.price,
      0
    );

  const calculateWeight = (products) =>
    products.reduce((accumulator, product) => accumulator + product.amount, 0);

  const calculateShipping = (products) => {
    if (calculateTotal(products) > 400) return 0;
    if (calculateWeight(products) <= 10) return 30;
    if (calculateWeight(products) > 10)
      return 30 + 7 * Math.floor((calculateWeight(products) - 10) / 5);
    else return 0;
  };

  function calculateDiscount() {
    return 0;
  }

  return (
    <div className="shoppingCart">
      <p className="shoppingCartTitle">Shopping Cart</p>
      {cartProducts.length === 0 ? (
        <p className="emptyCart">No items in cart.</p>
      ) : null}
      {cartProducts.map((product) => (
        <CartProduct
          product={product}
          key={product.id}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      <h4 className="cartTotalWrapper">
        Subtotal: R${calculateTotal(cartProducts).toFixed(2)}
      </h4>
      <h4 className="cartTotalWrapper">
        Shipping: R${calculateShipping(cartProducts).toFixed(2)}
      </h4>
      <h3 className="cartTotalWrapper">
        Total: R$
        {(
          calculateTotal(cartProducts) + calculateShipping(cartProducts)
        ).toFixed(2)}
      </h3>
      <button className="checkoutButton">CHECKOUT</button>
    </div>
  );
}
