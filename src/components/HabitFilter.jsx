export default function HabitFilter({ statusFilter, setStatusFilter }) {
  return (
    <>
      <button onClick={() => setStatusFilter("all")}>All</button>
      <button onClick={() => setStatusFilter("active")}>Active</button>
      <button onClick={() => setStatusFilter("completed")}>Completed</button>
    </>
  );
}
