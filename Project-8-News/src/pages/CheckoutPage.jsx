import { useCart } from "../context/CartContext";

export const CheckoutPage = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-green-500">✅ Order Placed!</h1>
      <p className="mt-4 text-gray-600">
        Thank you! Your order of ${total.toFixed(2)} is confirmed.
      </p>
    </div>
  );
};
