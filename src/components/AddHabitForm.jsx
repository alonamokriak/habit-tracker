export default function AddHabitForm({ habitTitle, setHabitTitle, onAddHabit }) {
  return (
    <div className="add-form">
      <input
        className="add-form__input"
        placeholder="Enter your Habit"
        type="text"
        value={habitTitle}
        onChange={(e) => setHabitTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onAddHabit();
          }
        }}
      ></input>
      <button className="add-form__button" onClick={onAddHabit}>
        Add Habit
      </button>
    </div>
  );
}
