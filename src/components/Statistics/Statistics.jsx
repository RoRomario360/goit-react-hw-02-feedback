import css from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, perCentage }) {
  return (
    <ul className={css.list}>
      <li className={css.list__item}>
        <p className={css.text}>
          Good:
          <span className={css.text__result}>{good}</span>
        </p>
      </li>
      <li className={css.list__item}>
        <p className={css.text}>
          Neutral:
          <span className={css.text__result}>{neutral}</span>
        </p>
      </li>
      <li className={css.list__item}>
        <p className={css.text}>
          Bad:
          <span className={css.text__result}>{bad}</span>
        </p>
      </li>
      <li className={css.list__item}>
        <p className={css.text}>
          Total:
          <span className={css.text__result}>{total}</span>
        </p>
      </li>
      <li className={css.list__item}>
        <p className={css.text}>
          Positive feedback:
          <span className={css.text__result}>{perCentage}%</span>
        </p>
      </li>
    </ul>
  );
}
