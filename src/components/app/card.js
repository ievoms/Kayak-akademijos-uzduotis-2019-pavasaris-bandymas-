import React from 'react';

const Card = (props) => { 
    const {item} = props;
        return (
                 
           <li>{ item.title}</li>
          
            )
}

export default Card;