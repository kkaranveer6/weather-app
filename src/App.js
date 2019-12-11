import React from 'react';
import './App.css';

function App() {

	const API_KEY = `91a00bed4607b32dc90c7ff92b4cddbc`;

	const onButtonSubmit = () => {
		
		const fetchData = fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=91a00bed4607b32dc90c7ff92b4cddbc')
							.then(res => res.json())
							.then(data => console.log(data))
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
