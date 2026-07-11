import { Trash2 } from "lucide-react";
export default function HabitCard({ id, title, completed, onDelete, onToggle }) {
  return (
    <div className={completed ? "habit-card habit-card--completed" : "habit-card"}>
      <input className="habit-card__checkbox" type="checkbox" checked={completed} onChange={() => onToggle(id)}></input>
      <h2 className="habit-card__title">{title}</h2>
      <button className="habit-card__button" onClick={() => onDelete(id)} aria-label="Delete Habit">
        <Trash2 size={18} />
      </button>
    </div>
  );
}
