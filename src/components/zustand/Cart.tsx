import { useCartStore } from "../../store/cart";

const Cart = () => {
  const { items, total } = useCartStore();
  return (
    <div>
      <h1 className="text-2xl">Cart</h1>
      <p>The cart displayed here is created in the <code className="bg-gray-200 text-red-700 font-semibold p-1">ZustandBasics.tsx</code> file and then
      displayed from the <code className="bg-gray-200 text-red-700 font-semibold p-1">Cart.tsx</code> file.</p>
      {items.map((item) => (
        <div key={item.id}>
          <strong>{item.title}:</strong>{' '}
          {item.quantity} * ${item.price} = ${item.quantity * item.price}
        </div>
      ))}
      <p>
        <strong>Cart Total: ${total}</strong>
      </p>
    </div>
  );
};

export default Cart;