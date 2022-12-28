import BudgetDetails from "../../components/ExpenseTracker/BudgetDetails";
import BudgetTitle from "../../components/ExpenseTracker/BudgetTitle";

const ExpenseTracker = () => {
    return (
           <div className="grid grid-cols-1 gap-2 px-4 py-3 mx-auto my-0 sm:my-3 sm:w-4/5 sm:max-w-4xl sm:grid-cols-2 lg:grid-cols-4">
            <BudgetTitle title="Income" />
            <BudgetDetails/>
      <BudgetTitle title="Expense" />
    </div>
    )
}
export default ExpenseTracker;