import React, {Component} from 'react';
import './Card.css'

let cards = [
    {
        image: "./images/icon1.png",
        title: "Declarative",
        description: "React makes it painless to create interactive UIs."
    },
    {
        image: "./images/icon2.png",
        title: "Components",
        description: "Build encapsulated components that manage their state."
    },
    {
        image: "./images/icon3.png",
        title: "Single-Way",
        description: "A set of immutable values are passed to the component's"
    },
    {
        image: "./images/icon4.png",
        title: "JSX",
        description: "Statically-typed, designed to run on modern browsers."
    }
]

class Card extends Component {
    
    state = {
        data: cards
    }

    
    
    render() { 
   
        const dataItems = this.state.data.map((aCard, id) => (
            <div key={id}>
              <img src={aCard.image} alt="feature" />
                <h3>{aCard.title}</h3>
                <p>{aCard.description}</p>
             
            </div>
          ));
        return ( 
            <div className="Card">
                {dataItems}
            </div>
         );
    }
}

export default Card;






// import React from 'react';
// ​

// function Card (props) {
//   return (
//      <div>
//       <img src={props.image} alt="feature" />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//      </div>
//   )
// }
// ​
//   export default Card;