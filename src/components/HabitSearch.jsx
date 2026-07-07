export default function HabitSearch({ searchQuery, setSearchQuery }) {
  return;
  <>
    <input type="text" placeholder="Search habits..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />;
  </>;
}
