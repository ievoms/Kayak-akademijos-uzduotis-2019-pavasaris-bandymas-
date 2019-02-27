import React from 'react';

//import Fetch from '../app/fetching';

import styles from './autocomplete.css';
//import suggestions from '../app/suggestions';
//import Card from './../app/card';
//import Suggestions from './../app/suggestions';



export default class Autocomplete extends React.Component {
  constructor() {
    super();
    this.items = [
      this.fetching()
    ]
    this.state = {
      //loading: false,
      // movies: [],
      // text: '',
      suggestions: []
    };
  }

  componentDidMount() {
    console.log(";;;")
  }
  fetching() {

    const url = 'https://api.themoviedb.org/3/search/movie?api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query=movie&page=1&include_adult=false'
    fetch(url).then(resp => resp.json())
      .then(data => {
        let title = data.resp.map((item) => {
          return (
            <li key={item.title}>{item.title}</li>
          )
        })
        this.setState({ suggestions: title })
        console.log("state", this.state.suggestions)
      })
  }


  onTextChanged = (e) => {
    console.log("kkkkkk");
    const value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
      const regex = new RegExp('^${value}', 'i');
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions }));
  }


  
    renderSuggestions() {
      const { suggestions } = this.state;
      if (suggestions.length === 0) {
        return null;
      }
      return (
        <ul>
         {this.suggestions.map((item )=> <li key={item.title}>{item.title}</li>)}
        </ul>
      );
  
    }
  
  render() {
    // const { text } = this.state;
    return (

      <div className={styles.container}>

        <i className={"fa fa-user"} id="film"></i>
        <input onChange={this.onTextChanged} className={styles.input} id="filmas" placeholder=" Enter movie name" autoComplete="on" />

        <button type="sFbmit" className={styles.button}>
          <i className={"fa fa-search"}></i>
        </button>
        {//this.items.map((item) => <li key={item.title}>{item}</li>)
          this.renderSuggestions()}
        }
      </div>

    )
  }

}
