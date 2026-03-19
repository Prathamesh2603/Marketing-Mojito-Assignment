export const ExpenseSummary = ({ expenses }) => {

  // Total Amount
  const totalAmount = expenses.reduce((sum, exp) => {
    return sum + exp.expenseAmt;
  }, 0);

  // Total Entries
  const totalEntries = expenses.length;

  // Top Category
  const categoryMap = {};

  expenses.forEach(exp => {
    categoryMap[exp.expenseCat] = 
      (categoryMap[exp.expenseCat] || 0) + exp.expenseAmt;
  });

  const topCategory = Object.keys(categoryMap).length
    ? Object.keys(categoryMap).reduce((a, b) =>
        categoryMap[a] > categoryMap[b] ? a : b
      )
    : "N/A";

  return (
    <div className="border rounded-lg px-4 py-6 space-y-4">

      <h2 className="text-xl font-medium tracking-wide text-center">
        Summary
      </h2>

      <div className="grid grid-cols-3 gap-4 text-center">

        {/* Total Amount */}
        <div className="border rounded-lg py-4">
          <p className="text-sm">Total</p>
          <p className="text-lg font-bold">₹{totalAmount}</p>
        </div>

        {/* Entries */}
        <div className="border rounded-lg py-4">
          <p className="text-sm">Entries</p>
          <p className="text-lg font-bold">{totalEntries}</p>
        </div>

        {/* Top Category */}
        <div className="border rounded-lg py-4">
          <p className="text-sm">Top Category</p>
          <p className="text-lg font-bold">{topCategory}</p>
        </div>

      </div>

    </div>
  );
};