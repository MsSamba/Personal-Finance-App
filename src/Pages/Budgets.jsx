// pages/Budgets.jsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchBudgets, addBudget } from '../Services/BudgetsApi';
import BudgetForm from '../Components/BudgetForm';
import BudgetList from '../Components/BudgetList';

export default function Budgets() {
  const qc = useQueryClient();

  // 1. Load budgets from API
  const { data: budgets = [], isLoading } = useQuery({
    queryKey: ['budgets'],
    queryFn: fetchBudgets,
  });

  // 2. Create mutation for adding a budget
  const addBudgetMutation = useMutation({
  mutationFn: addBudget,
  onSuccess: () => {
    qc.invalidateQueries({ queryKey: ['budgets'] })
  },
});

  // 3. Pass handler to form
  const handleAdd = ({ category, description, amount }) => {
    addBudgetMutation.mutate({ category, description, amount });
  };

  if (isLoading) return <p>Loading budgets…</p>;

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">Budgets</h1>
      <BudgetForm onAdd={handleAdd} pending={addBudgetMutation.isLoading} />
      <BudgetList items={budgets} />
    </div>
  );
}
