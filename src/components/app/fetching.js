import React from 'react';
import Card from './card';


export default class Fetch extends React.Component{
    state ={
        loading: false,
        movies: []
    };

componentDidMount(){
    console.log(";;;")
    const url ='https://api.themoviedb.org/3/search/movie?api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query=movie&page=1&include_adult=false'
    fetch(url).then(resp => resp.json())
    .then(resp =>{
        console.log(resp)
       
        this.setState({
            loading: true,
            movies: resp.results
        })
  
    } )
   
}


render(){
    var {isLoaded, movies} = this.state;
    return (
        <li>
        
          {  movies.map(item => <Card key={item.title} item={item} /> )}
    
         </li>
    );
}


}

