export default function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <h3 className="font-bold">{item.name}</h3>
        <p>${item.price}</p>
      </div>
      <div className="flex items-center">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 border">-</button>
        <span className="px-4">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border">+</button>
        <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500">Remove</button>
      </div>
    </div>
  );
}
