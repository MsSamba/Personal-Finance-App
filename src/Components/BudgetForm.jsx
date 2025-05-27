import { useState } from 'react';
import { categoryColors } from '../Constants';

const categories = ['Bills', 'Personal Care', 'Entertainment', 'Dining Out'];

const BudgetForm = ({ onAdd, pending = false }) => {
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ category, description, amount: parseFloat(amount) });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded space-y-4">
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded">
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
  type="submit"
  disabled={pending}
  className={`px-4 py-2 rounded text-white ${pending ? 'bg-gray-400' : 'bg-black'}`}
>
  {pending ? 'Saving…' : 'Add Budget'}
</button>
    </form>
  );
};

export default BudgetForm;
