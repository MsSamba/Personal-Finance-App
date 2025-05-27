// components/BudgetList.jsx
import { categoryColors } from '../Constants';

const BudgetList = ({ items, onEdit, onDelete }) => {
  return (
    <div className="mt-4 space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className={`p-4 rounded shadow flex justify-between items-center ${categoryColors[item.category]}`}
        >
          <div>
            <h3 className="text-white font-bold">{item.description}</h3>
            <p className="text-white text-sm">{item.category}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-white font-semibold">KES {Number(item.amount).toFixed(2)}</span>
            <button onClick={() => onEdit(item)} className="text-white underline">Edit</button>
            <button onClick={() => onDelete(item.id)} className="text-white underline">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BudgetList;
