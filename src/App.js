import React from 'react';
import './App.css';

function App(){

	const API_KEY = `91a00bed4607b32dc90c7ff92b4cddbc`;

	const onButtonSubmit = () => {
	// fetching data from an API
		const fetchData = fetch(`http://api.openweathermap.org/data/2.5/weather?q=Adelaide,aus&APPID=${API_KEY}&units=metric`)
							.then(response => response.json())
							.then(data => console.log(data))
							.catch(err => console.log('Something went wrong'))
	}

	return (
	<div className="App">
	  <h1>Weather App</h1>
	  <input name="City Search" type="text" placeholder="Enter City"/>
	  <button 
	  	onClick = {() => onButtonSubmit()}>
	  	Search
	  </button>
	</div>
	);
}

export default App;
