import React from 'react';

//import Fetch from '../app/fetching';

import styles from './autocomplete.css';
//import suggestions from '../app/suggestions';
//import Card from './../app/card';
//import Suggestions from './../app/suggestions';



export default class Autocomplete extends React.Component {
  constructor() {
    super();
   
    this.state = {
      //loading: false,
      // movies: [],
      // text: '',
      suggestions: [],
      pasiulymai: []
    };
  }

  componentDidMount() {

    const url = 'https://api.themoviedb.org/3/search/movie?api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query=movie&page=1&include_adult=false'
    fetch(url)
    .then(resp => resp.json())
      .then(data => {
        console.log(data.results)
        // let title = data.map(item => {
        //   return (
        //     <div key={item.title}>
        //       {item.title}
        //     </div>
        //   )
        // })
        this.setState({ suggestions: data.results })
        // console.log("state", this.state.suggestions)
      })
  }


  onTextChanged = (e) => {
    const { suggestions } = this.state;
    const value = e.target.value;
    let pasiulymai = [];

    if (value.length >= 3) {
      const regex = new RegExp(event.target.value, 'i');
      pasiulymai = suggestions.filter(v => regex.test(v.title));
    }
    this.setState({pasiulymai: pasiulymai });
    console.log(suggestions);
    console.log(pasiulymai);
  }


  
    renderSuggestions() {
      const { pasiulymai } = this.state;
      if (pasiulymai.length === 0) {
        return null;
      }
      return (
        <ul>
         {pasiulymai.map((item )=> <li key={item.title}>{item.title}</li>)}
        </ul>
      );
  
    }
  
  render() {
    // const { text } = this.state;
    return (

      <div className={styles.container}>

        <div className ={styles.InputWithIcon}>
        <label className ={styles.label} htmlFor="filmas" >
      
        </label>
          <input onChange={this.onTextChanged} className={styles.input} id="filmas" placeholder=" Enter movie name" autoComplete="on" />
          <i className={"fa fa-film"} ></i>
        </div>
        <button type="sFbmit" className={styles.button}>
          <i className={"fa fa-search"}></i>
        </button>
        {//this.items.map((item) => <li key={item.title}>{item}</li>)
         this.renderSuggestions()
        // this.state.suggestions
        }

        {//<p>{ this.state.suggestions }</p>
      }
      </div>

    )
  }

}
