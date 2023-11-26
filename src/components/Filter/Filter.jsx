import React from 'react';
import styles from './Filter.module.css';
import { setFilter } from 'redux/filter/filter.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  return (
    <>
      <h3 className={styles.title_filter}>Find contacts by name</h3>
      <input
        type="text"
        name="number"
        onChange={e => dispatch(setFilter(e.target.value))}
        className={styles.input_filter}
        required
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
      />
    </>
  );
};

export default Filter;
