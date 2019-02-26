import React from 'react';

import Fetch from '../app/fetching';


import styles from './autocomplete.css';
import suggestions from '../app/suggestions';

const Autocomplete = () => (
  <div className={styles.container}>
  
 
  <i className={"fa fa-user"} id ="film"></i>
      <input onChange={suggestions.onTextChanged} className={styles.input} id="filmas" placeholder=" Enter movie name" autoComplete="on"/>
      
      
      <button type="submit" className={styles.button}>
      <i className={"fa fa-search"}></i>

      </button>
 
  
  </div>
);

export default Autocomplete;
