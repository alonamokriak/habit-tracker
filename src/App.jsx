import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HabitList from "./components/HabitList";
import AddHabitForm from "./components/AddHabitForm";
import Stats from "./components/Stats";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [habitTitle, setHabitTitle] = useState("");

  function addHabit() {
    if (!habitTitle.trim()) {
      return;
    }
    const newHabit = {
      id: Date.now(),
      title: habitTitle.trim(),
      completed: false
    };
    setHabits([...habits, newHabit]);
    setHabitTitle("");
  }

  function deleteHabit(id) {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
  }

  function toggleHabit(id) {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          completed: !habit.completed
        };
      }
      return habit;
    });
    setHabits(updatedHabits);
  }

  const completedCount = habits.filter((habit) => habit.completed === true).length;

  return (
    <>
      <Header text="Habit Tracker" title="Track Your Habits" />
      <AddHabitForm habitTitle={habitTitle} setHabitTitle={setHabitTitle} onAddHabit={addHabit} />
      <HabitList habits={habits} onDelete={deleteHabit} onToggle={toggleHabit} />
      <Stats completedCount={completedCount} totalCount={habits.length} />
      <Footer />
    </>
  );
}
