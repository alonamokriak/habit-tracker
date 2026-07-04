export default function Stats({ completedCount, totalCount }) {
  return (
    <p>
      Completed: {completedCount} / {totalCount}
    </p>
  );
}
