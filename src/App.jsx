import { useState, useEffect } from "react";
import "./App.css";
import { Trash2 } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HabitList from "./components/HabitList";
import AddHabitForm from "./components/AddHabitForm";
import Stats from "./components/Stats";
import HabitSearch from "./components/HabitSearch";
import HabitFilter from "./components/HabitFilter";

export default function App() {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem("habits");
    if (savedHabits) {
      return JSON.parse(savedHabits);
    }
    return [];
  });
  const [habitTitle, setHabitTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const visibleHabits = habits
    .filter((habit) => habit.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((habit) => {
      if (statusFilter === "all") {
        return true;
      }
      if (statusFilter === "active") {
        return habit.completed === false;
      }
      if (statusFilter === "completed") {
        return habit.completed === true;
      }
      return true;
    });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);
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
  const totalCount = habits.length;
  const activeCount = totalCount - completedCount;
  const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
  return (
    <div className="app">
      <div className="app__container">
        <Header title="Habit Tracker" text="Track Your Habits" />
        <main className="app__main">
          <div className="toolbar">
            <HabitSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <HabitFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
          </div>

          <AddHabitForm habitTitle={habitTitle} setHabitTitle={setHabitTitle} onAddHabit={addHabit} />
          <HabitList habits={visibleHabits} onDelete={deleteHabit} onToggle={toggleHabit} />
          <Stats completedCount={completedCount} totalCount={totalCount} activeCount={activeCount} progressPercent={progressPercent} />
        </main>

        <Footer />
      </div>
    </div>
  );
}
