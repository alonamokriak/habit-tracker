import HabitCard from "./HabitCard";


export default function HabitList({ habits, onDelete, onToggle }) {
  return (
    <>
      {habits.map((habit) => (
        <HabitCard id={habit.id} key={habit.id} title={habit.title} onDelete={onDelete} completed={habit.completed} onToggle={onToggle} />
      ))}
    </>
  );
}
