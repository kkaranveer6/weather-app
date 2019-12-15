import React, { useState } from 'react';
import './App.css';

function App(){
	const API_KEY = `91a00bed4607b32dc90c7ff92b4cddbc`;

	// state
	const [query, setQuery] = useState('');
	const [data, setData] = useState('');

	// runs when search button is clicked
	const getData = () => {
		// fetching data from an API
			const response = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query},aus&APPID=${API_KEY}&units=metric`)
								.then(response => response.json())
								// .then(data => console.log(data))
								.catch(err => console.log('Something went wrong'))
			setData(response);
			console.log(data);
		}
	
	const updateSearch = (event) => {
		setQuery(event.target.value);
		console.log(event.target.value);
	}

	return (
		<div className="App">
		  <h1>Weather App</h1>
		  <input 
		  	name = "City Search" 
		  	type = "text" 
		  	placeholder = "Enter City"
		  	onChange = {updateSearch}
 		  />
		  <button 
		  	onClick = {getData}
		  >
		  	Search
		  </button>
		</div>
	);
}



export default App;
