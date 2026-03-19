export const ExpenseList = ({ expenses, setExpenses }) => {

  const handleDelete = (id) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };
  return (
    <div className="border rounded-lg px-4 py-6">

      <div className="flex justify-between items-start">
        <h2 className="text-xl font-medium mb-5 tracking-wide">
          Expenses
        </h2>
        <p>{expenses.length} entries</p>
      </div>

      {expenses.length === 0 ? (
        <div className="text-center text-sm py-3">
          No expenses yet. Add your first one above.
        </div>
      ) : (
        <div className="space-y-3">
          {expenses.map((exp) => (
            <div key={exp.id} className="border rounded-lg flex justify-between items-center py-3 px-5">
              
              <div>
                <p className="font-medium">{exp.expenseName}</p>
                <p className="text-sm">{exp.expenseCat}</p>
              </div>

              <div className="space-x-2">
                <span className="text-lg font-bold">
                  ₹{exp.expenseAmt}
                </span>
                <button 
                  onClick={() => handleDelete(exp.id)}
                  className="cursor-pointer px-3 py-1 rounded-lg hover:border-red-500 hover:border hover:text-red-500 font-semibold">
                  ✕
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};