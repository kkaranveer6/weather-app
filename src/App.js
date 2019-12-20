import React, { useState } from 'react';
import './App.css';

function App(){
	const API_KEY = `0b3b530e772fd76341de3dada4786a6b`;

	// state
	const [query, setQuery] = useState('adelaide');
	const [data, setData] = useState([]);
	

	// runs when search button is clicked
	const getData = () => {
		// fetching data from an API
			fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_KEY}&units=metric`)
				.then(response => response.json())
				.then(jsonResponse => console.log(jsonResponse))
				.then(res => setData(res))
				.catch(err => console.log('Something went wrong'))
		}
	
	const updateSearch = (event) => {
		// setQuery(event.target.value);
		setQuery(event.target.value);
		if(event.key === 'Enter'){
			getData();
		}

		// console.log(event.target.value);
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
