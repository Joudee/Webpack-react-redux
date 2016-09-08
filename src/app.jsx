import React from 'react';
import ReactDOM from 'react-dom';



import styles from './app.scss'
var Immutable = require('immutable')
import { createStore } from 'redux'


function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

function appendCurrent (previousValue, currentValue,currentIndex,arr) {
	console.log("currentIndex=="+currentIndex)
	console.log("arr=="+arr)
    return previousValue + "::" + currentValue;
    }

const EditorWithFancyBlockquotes = React.createClass({

	getInitialState: function(){
		var alpha = Immutable.Map({a:1, b:2, c:3, d:4});
		alpha.map((v, k) => k.toUpperCase()).join()
		return {
			a:alpha.map((v, k) => k).join()
		}
	},

  	render:function(){
  		var elements = ["abc", "def", 123, 456];

// Call the reduce method, which calls the callback function
// for each array element.
var result = elements.reduce(appendCurrent);

  		return(
	  		<span>{this.state.a}</span>
  		)

	}
  
})

ReactDOM.render(
  <EditorWithFancyBlockquotes />,
  document.getElementById('container')
);