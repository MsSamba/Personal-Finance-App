import { useState, useEffect } from 'react';
import { categoryColors } from '../Constants';

const categories = ['Bills', 'Personal Care', 'Entertainment', 'Dining Out'];

const BudgetForm = ({ onAdd, pending = false, initialValues }) => {
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (initialValues) {
      setCategory(initialValues.category);
      setDescription(initialValues.description);
      setAmount(initialValues.amount);
    } else {
      setCategory(categories[0]);
      setDescription('');
      setAmount('');
    }
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ category, description, amount: parseFloat(amount) });
    if (!initialValues) {
      setDescription('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded space-y-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded"
      >
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
        className={`w-full py-2 rounded text-white ${pending ? 'bg-gray-400' : 'bg-black'}`}
      >
        {initialValues ? 'Update Budget' : 'Add Budget'}
      </button>
    </form>
  );
};

export default BudgetForm;
