export default function AddHabitForm({ habitTitle, setHabitTitle, onAddHabit }) {
  return (
    <>
      <input
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
      <button onClick={onAddHabit}>Add Habit</button>
    </>
  );
}
