export default function Overview() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 rounded shadow">Total Income: KES 0</div>
        <div className="bg-red-100 p-4 rounded shadow">Total Expenses: KES 0</div>
        <div className="bg-blue-100 p-4 rounded shadow">Balance: KES 0</div>
      </div>
    </div>
  );
}
