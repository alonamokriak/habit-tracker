import HabitCard from "./HabitCard";

export default function HabitList({ habits, onDelete, onToggle }) {
  if (habits.length === 0) {
    return (
      <div className="habit-list">
        <p className="habit-list__empty">No habits yet</p>
      </div>
    );
  }
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitCard id={habit.id} key={habit.id} title={habit.title} onDelete={onDelete} completed={habit.completed} onToggle={onToggle} />
      ))}
    </div>
  );
}
