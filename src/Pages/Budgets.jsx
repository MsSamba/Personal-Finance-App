import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchBudgets,
  addBudget,
  updateBudget,
  deleteBudget,
} from '../Services/BudgetsApi';

import BudgetForm from '../Components/BudgetForm';
import BudgetList from '../Components/BudgetList';

export default function Budgets() {
  const qc = useQueryClient();
  const [editingItem, setEditingItem] = useState(null);

  const { data: budgets = [], isLoading } = useQuery({
    queryKey: ['budgets'],
    queryFn: fetchBudgets,
  });

  const addBudgetMutation = useMutation({
    mutationFn: addBudget,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['budgets'] }),
  });

  const updateBudgetMutation = useMutation({
    mutationFn: ({ id, updates }) => updateBudget(id, updates),
    onSuccess: () => {
      setEditingItem(null);
      qc.invalidateQueries({ queryKey: ['budgets'] });
    },
  });

  const deleteBudgetMutation = useMutation({
    mutationFn: deleteBudget,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['budgets'] }),
  });

  const handleAddOrEdit = ({ category, description, amount }) => {
    if (editingItem) {
      updateBudgetMutation.mutate({
        id: editingItem.id,
        updates: { category, description, amount },
      });
    } else {
      addBudgetMutation.mutate({ category, description, amount });
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this budget item?')) {
      deleteBudgetMutation.mutate(id);
    }
  };

  if (isLoading) return <p>Loading budgets…</p>;

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">Budgets</h1>
      <BudgetForm
        onAdd={handleAddOrEdit}
        pending={addBudgetMutation.isPending || updateBudgetMutation.isPending}
        initialValues={editingItem}
      />
      <BudgetList items={budgets} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
