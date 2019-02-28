import React from 'react';
import styles from './autocomplete.css';

export default class Autocomplete extends React.Component {
  constructor() {
    super();

    this.state = {
      suggestions: [],
      pasiulymai: []
    };
  }

  componentDidMount() {

    const url = 'https://api.themoviedb.org/3/search/movie?api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query=movie&page=1&include_adult=false'
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ suggestions: data.results })
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
    this.setState({ pasiulymai: pasiulymai });
  }

  renderSuggestions() {
    const { pasiulymai } = this.state;
    if (pasiulymai.length === 0) {
      return null;
    }
    return (
      <div className={styles.list}>
        {pasiulymai.map((item) => <p key={item.title}>{item.title}</p>)}
      </div>
    );

  }

  render() {
    return (

      <div className={styles.container}>

        <div className={styles.InputWithIcon}>
          <input onChange={this.onTextChanged} className={styles.input} id="filmas" placeholder=" Enter movie name" autoComplete="on" />
          <i className={"fa fa-film"} ></i>
        </div>
        <button type="sFbmit" className={styles.button}>
          <i className={"fa fa-search"}></i>
        </button>
        {this.renderSuggestions()}

      </div>

    )
  }
}
