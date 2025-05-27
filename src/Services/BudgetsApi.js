import axios from 'axios';

const api = axios.create({
   baseURL: '/api',
});

// ---------- CRUD helpers ----------
export const fetchBudgets = () => api.get('/budgets').then(r => r.data);

export const addBudget = (payload) =>
  api.post('/budgets', payload).then(r => r.data);

export const updateBudget = (id, payload) =>
  api.patch(`/budgets/${id}`, payload).then(r => r.data);

export const deleteBudget = (id) =>
  api.delete(`/budgets/${id}`).then(r => r.data);
