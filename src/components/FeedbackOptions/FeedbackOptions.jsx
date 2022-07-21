import css from './FeedbackOptions.module.css';
export default function FeedbackOptions({ options, onBtnClick }) {
  return (
    <ul className={css.option__list}>
      {options.map(option => (
        <li className={css.option__item} key={option}>
          <button
            className={css.option__btn}
            name={option}
            onClick={onBtnClick}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
