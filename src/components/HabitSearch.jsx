import { Search } from "lucide-react";

export default function HabitSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className="habit-search">
      <Search className="habit-search__icon" size={18} />
      <input className="habit-search__input" type="text" placeholder="Search habits..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  );
}
