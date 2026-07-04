export default function HabitCard({ id, title, completed, onDelete, onToggle }) {
  return (
    <div>
      <h2 style={{ textDecoration: completed ? "line-through" : "none" }}>{title}</h2>
      <button onClick={() => onDelete(id)}>Delete</button>
      <input type="checkbox" checked={completed} onChange={() => onToggle(id)}></input>
    </div>
  );
}
