import React from 'react';
import styles from './input.module.scss';

const Input = ({ onChange, label, style }) => {
  return (
    <div className={styles["fea-input-wrapper"]} style={style}>
      <input
        className={styles["fea-input"]}
        name="bookSearch"
        placeholder={ label }
        id="bookSearch"
        onChange={onChange}
        type="text"
        tabIndex="0"
      />
      <label htmlFor="bookSearch" className={styles["fea-input-label"]}>
        { label }
      </label>
    </div>
  );
}

export default Input;