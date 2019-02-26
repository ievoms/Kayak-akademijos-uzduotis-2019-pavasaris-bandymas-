import React from 'react';

import styles from './autocomplete.css';

const Autocomplete = () => (
  <div className={styles.container}>
  
 
  <i className={"fa fa-user"} id ="film"></i>
      <input className={styles.input} id="filmas" placeholder=" Enter movie name" autoComplete="on"/>
      
      
      <button type="submit" className={styles.button}>
      <i className={"fa fa-search"}></i>
      
     {//<img className={styles.icon} src="https://www.freeiconspng.com/uploads/search-icon-png-1.png"  alt="Download Search Icon" />
      
     }
      </button>
 
  
  </div>
);

export default Autocomplete;
