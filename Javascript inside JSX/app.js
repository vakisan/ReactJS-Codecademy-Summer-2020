import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:

const math = (<h1>2+3 = {2+3}</h1>);

ReactDOM.render(math,document.getElementById("app"));

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

function coinToss() {
    // This function will randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
  }
  
  const pics = {
    kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
    doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
  };
  let img;
  
  // if/else statement begins here:
  
  if(coinToss() === "heads"){
    img = (
      <img src={pics.kitty} />
    );
  }
  else{
    img = (
      <img src={pics.doggy} />
    );
  }
  
  ReactDOM.render(img, document.getElementById("app"));

  const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person => <li>{person}</li>);

ReactDOM.render(
<ul>{peopleLis}</ul>, document.getElementById("app"));