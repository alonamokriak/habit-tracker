export default function Stats({ completedCount, totalCount, activeCount, progressPercent }) {
  return (
    <section className="stats">
      <div className="stats__header">
        <div>
          <p className="stats__title">Daily Progress</p>
          <p className="stats__text">
            {completedCount} of {totalCount} habits completed
          </p>
        </div>

        <p className="stats__percent">{progressPercent}%</p>
      </div>

      <div className="stats__progress">
        <div className="stats__progress-fill" style={{ width: `${progressPercent}%` }}></div>
      </div>

      <div className="stats__footer">
        <p className="stats__meta">Active: {activeCount}</p>
        <p className="stats__meta">Completed: {completedCount}</p>
      </div>
    </section>
  );
}
