import css from './style.module.css';

export const Statistics = ({ statistics, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css['stat-list']}>
        {statistics.map(({ label, percentage, id }) => {
          return (
            <li key={id} className={css.item}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
