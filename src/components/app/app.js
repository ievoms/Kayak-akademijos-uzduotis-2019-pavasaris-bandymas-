import { hot } from 'react-hot-loader/root';

import React from 'react';

import Autocomplete from '../autocomplete';
import Fetch from './fetching';
import Suggestions from '../app/suggestions';

import styles from './app.css';


const App = () => (
  
    <div className={styles.container}>
    
    <Autocomplete />
    
    <Fetch/>
        </div>
   
);



export default hot(App);
