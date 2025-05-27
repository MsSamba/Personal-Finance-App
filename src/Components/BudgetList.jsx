// components/BudgetList.jsx
import { categoryColors } from '../Constants';

const BudgetList = ({ items }) => {
  return (
    <div className="mt-4 space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className={`p-4 rounded shadow flex justify-between items-center ${categoryColors[item.category]}`}>
          <div>
            <h3 className="text-white font-bold">{item.description}</h3>
            <p className="text-white text-sm">{item.category}</p>
          </div>
          <span className="text-white font-semibold">KES {Number(item.amount).toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default BudgetList;
