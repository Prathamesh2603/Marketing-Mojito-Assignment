import { useState } from "react";

export const ExpenseForm = ({ setExpenses }) => {
  const [userExpense, setUserExpense] = useState({
    expenseName: "",
    expenseAmt: "",
    expenseCat: ""
  });

  const expCategoryList = [
    {value: "Housing", label: "Housing"},
    {value: "Utilities", label: "Utilities"},
    {value: "Food", label: "Food"},
    {value: "Travel", label: "Travel"},
    {value: "Bank", label: "Bank"},
    {value: "Other", label: "Other"},
  ];

  // localStorage.clear();
  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      expenseName: userExpense.expenseName.trim(),
      expenseAmt: Number(userExpense.expenseAmt),
      expenseCat: userExpense.expenseCat
    };

    setExpenses(prev => [...prev, newExpense]);

    setUserExpense({
      expenseName: "",
      expenseAmt: "",
      expenseCat: ""
    });
  }

  return (
    <div className="border rounded-lg px-4 py-6 bg-blue-50">

      {/* Heading */}
      <h2 className="text-xl text-center font-medium mb-5 tracking-wide">
        Add Expense
      </h2>

      <form onSubmit={handleSubmit}>

        {/* Input User Expenses */}
        <div className="space-y-3.5 sm:grid sm:grid-cols-2 sm:gap-4">
          <div className="space-y-1">
            <p className="text-sm">EXPENSE NAME</p>
            <input 
              type="text" 
              placeholder="eg. Team Lunch"
              required
              value={userExpense.expenseName}
              onChange={(e) => setUserExpense({ ...userExpense, expenseName: e.target.value})}
              className="border py-2 px-3 rounded-lg w-full outline-none"
            />
          </div>
          <div className="space-y-1">
            <p className="text-sm">AMOUNT (INR)</p>
            <input 
              type="number" 
              placeholder="0"
              required
              value={userExpense.expenseAmt}
              onChange={(e) => setUserExpense({ ...userExpense, expenseAmt: e.target.value})}
              className="border py-2 px-3 rounded-lg w-full outline-none"
            />
          </div>
        </div>

        {/* Expense Category */}
        <div className="space-y-1 my-4">
          <p className="text-sm">CATEGORY: </p>
          <select 
            className="w-full py-2 outline-none"
            value={userExpense.expenseCat}
            required
            onChange={(e) => setUserExpense({
              ...userExpense, expenseCat: e.target.value
            })}
          >
            <option value="">Select Category</option>
            {expCategoryList.map((list,id) => (
              <option key={id} value={list.value}>{list.label}</option>
            ))}
          </select>
        </div>

        {/* Add Expense Button */}
        <button className="bg-blue-700 w-full rounded-lg py-3 text-white font-medium border-none outline-none active:bg-blue-500 cursor-pointer">
          Add Expense
        </button>
        
      </form>

    </div>
  )
}
