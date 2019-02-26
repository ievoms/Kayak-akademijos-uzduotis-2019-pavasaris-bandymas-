import React from 'react';

import Fetch from '../app/fetching';


 export default class Suggestions extends React.Component{
    state ={
        text: '',
        suggestions: []
    };


 onTextChanged =(e)=>{
    console.log("kkkkkk");
    const value = e.target.value;
    let suggestions =[];
    Fetch.sufetchino();
    
    if(value.length > 0){
      const regex = new RegExp('${value}','i');
      suggestions = this.items.sort().filter(v=> regex.test(v));
        this.setState(()=>({suggestions}));
        console.log(this.suggestions.item);
    }    
}
renderSuggestions(){
    const{suggestions} = this.state;
    if(suggestions.length ===0){
        return null;
    }
    return (

        <ul>
        {
            map((item) => <li>{item}</li> )
        }
          </ul>
       
    );

}


render(){
    const{text}=this.state;
    return (
        <div>
            { this.renderSuggestions()}
         </div>
    )
}


}

