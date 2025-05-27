import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, List, PieChart, PiggyBank, Repeat } from "lucide-react";
import Overview from "./Pages/Overview";
import Transactions from "./Pages/Transactions";
import Budgets from "./Pages/Budgets";
import Pots from "./Pages/Pots";
import RecurringBills from "./Pages/RecurringBills";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { path: "/", label: "Overview", icon: <LayoutDashboard size={20} /> },
    { path: "/transactions", label: "Transactions", icon: <List size={20} /> },
    { path: "/budgets", label: "Budgets", icon: <PieChart size={20} /> },
    { path: "/pots", label: "Pots", icon: <PiggyBank size={20} /> },
    { path: "/recurring-bills", label: "Recurring Bills", icon: <Repeat size={20} /> },
  ];

  return (
    <Router>
      <div className="min-h-screen flex bg-blue-100">
        <div className={`bg-white shadow h-screen p-4 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
          <button onClick={() => setCollapsed(!collapsed)} className="mb-4 text-blue-600">
            {collapsed ? '▶' : '◀'}
          </button>
          <nav className="space-y-4">
            {navItems.map(({ path, label, icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-200 text-blue-800 rounded p-2"
                      : "text-blue-600 hover:bg-blue-100 rounded p-2"
                  }`
                }
                end

                 title={collapsed ? label : undefined} // show tooltip only when collapsed
              >
                {icon}
                {!collapsed && <span>{label}</span>}
              </NavLink>
            ))}
          </nav>
        </div>
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/pots" element={<Pots />} />
            <Route path="/recurring-bills" element={<RecurringBills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;