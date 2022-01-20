import React, { useCallback, useRef } from 'react';
import styles from './input.module.scss';
import _ from 'lodash';

const Input = ({ onChange, label, style }) => {
  const delayedQuery = useRef(_.debounce(q => onChange(q), 500)).current;
  // const onChangeDebounce = (event) => _.debounce(() => console.log(event), 500);

  const handleChange = (event) => {
    delayedQuery(event);
  }

  return (
    <div className={styles["fea-input-wrapper"]} style={style}>
      <input
        className={styles["fea-input"]}
        name="bookSearch"
        placeholder={ label }
        id="bookSearch"
        onChange={handleChange}
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