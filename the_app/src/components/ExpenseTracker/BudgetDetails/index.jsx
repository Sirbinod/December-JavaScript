import Budget from "./Budget";
import BudgetForm from "./Form";
import ExpenseList from "./List";

const BudgetDetails = () => {
    return (
        <div className="order-1 pt-2 rounded-md sm:col-span-2 bg-gradient-to-r from-blue-600 to-red-600 lg:order-2">
      <div className="flex flex-col items-center justify-center p-3 shadow-sm rounded-b-md bg-slate-50 shadow-slate-800">
        <Budget />
        <ExpenseList />
        <BudgetForm />
      </div>
    </div>
    )
}
export default BudgetDetails;