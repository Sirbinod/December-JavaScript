const BudgetTitle = ({ title }) => {
    const styles =
    title === "Income"
      ? {
          order: "order-2 lg:order-1",
          borderColor: "border-blue-600",
          titleColor: "text-blue-600",
          totalColor: "text-green-500",
        }
      : {
          order: "order-3",
          borderColor: "border-red-600",
          titleColor: "text-red-600",
          totalColor: "text-red-500",
        };
  return (
    <div
      className={`flex flex-col items-center justify-center border-t-8 p-3 rounded-md shadow-sm bg-slate-50 shadow-slate-800 lg:h-min ${styles.order} ${styles.borderColor}`}
    >
      <div className={`text-2xl font-semibold ${styles.titleColor}`}>
        {title}
      </div>
      {/* <div className={`text-3xl ${styles.totalColor}`}>${total}</div>
      <Doughnut data={chartData} /> */}
    </div>
  );
};
export default BudgetTitle;
