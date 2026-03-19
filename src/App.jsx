import { useEffect, useState } from "react"
import { ExpenseForm } from "./components/ExpenseForm"
import { ExpenseList } from "./components/ExpenseList"
import { ExpenseSummary } from "./components/ExpenseSummary";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenseList")) || [];
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenseList", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="px-4 py-2 space-y-6.5">
      
      {/* Header */}
      <div className="border-b space-y-1 text-center py-5">
        <h1 className="text-4xl font-poppins tracking-wide">
          Expense 
          <span className="text-blue-500 font-medium"> Tracker</span>
        </h1>
        <p className="font-roboto tracking-wide">
          Personal Finance
        </p>
      </div>

      {/* Add User Expenses */}
      <ExpenseForm setExpenses={setExpenses} />

      {/* Expense List */}
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />

      {/* Expense Summary Panel */}
      <ExpenseSummary expenses={expenses} />

    </div>
  )
}

export default App