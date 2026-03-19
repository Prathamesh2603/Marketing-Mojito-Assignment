import { ExpenseForm } from "./components/ExpenseForm"
import { ExpenseList } from "./components/ExpenseList"

const App = () => {
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
      <ExpenseForm />

      {/* Expense List */}
      <ExpenseList />

    </div>
  )
}

export default App