import React from 'react';
// we import ReactDOM which is part of react-dom inside the dependancies of the package.json
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* on this ReactDOM imported we apply a methode render that include an HTML line, this is JSX code (HTML in JS code), 
this code will not be understood by the browser, it is react that will make understandable
In that way we create an element
We use the elemet 'App' that is importet from the App.js file
The second argument from render, tell where to perform the render, the ID root is inside the public folder

*/
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

