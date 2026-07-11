export default function HabitFilter({ statusFilter, setStatusFilter }) {
  return (
    <div className="habit-filter">
      <button className={statusFilter === "all" ? "habit-filter__button habit-filter__button--active" : "habit-filter__button"} onClick={() => setStatusFilter("all")}>
        All
      </button>
      <button className={statusFilter === "active" ? "habit-filter__button habit-filter__button--active" : "habit-filter__button"} onClick={() => setStatusFilter("active")}>
        Active
      </button>
      <button className={statusFilter === "completed" ? "habit-filter__button habit-filter__button--active" : "habit-filter__button"} onClick={() => setStatusFilter("completed")}>
        Completed
      </button>
    </div>
  );
}
