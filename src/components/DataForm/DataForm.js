import React, { useState } from 'react';
import classes from '../DataForm/DataForm.module.css';

const DataForm = (props) => {
  const DefaultFormData = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
  };
  const [formData, setFormData] = useState(DefaultFormData);

  const submitHandler = (event) => {
    event.preventDefault();
    props.submitAction(formData);
  };

  const resetHandler = () => {
    setFormData(DefaultFormData);
  };

  const inputChangeHandler = (id, value) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [id]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            defaultValue={formData['current-savings']}
            onClick={(event) => {
              inputChangeHandler('current-savings', event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            defaultValue={formData['yearly-contribution']}
            onClick={(event) => {
              inputChangeHandler('yearly-contribution', event.target.value);
            }}
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            defaultValue={formData['expected-return']}
            onClick={(event) => {
              inputChangeHandler('expected-return', event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            defaultValue={formData['duration']}
            onClick={(event) => {
              inputChangeHandler('duration', event.target.value);
            }}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type='reset'
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type='submit' className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default DataForm;
