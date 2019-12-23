import React, { useState } from 'react';
import './App.css';
import CurrentTemp from './components/currentTemp/currentTemp.js';

function App(){
	const API_KEY = `0b3b530e772fd76341de3dada4786a6b`;

	// state
	const [search, setSearch] = useState('adelaide');
	const [city, setCity] = useState('');
	const [currentTemperature, setCurrentTemperature] = useState(0);


	// runs when search button is clicked
	const getData = () => {
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${API_KEY}&units=metric`)
			.then(response1 => response1.json())
			// .then(response3 => console.log(response3))
			.then(response2 => setCurrentTemperature(response2.main.temp))
			.catch(err => console.log(err))
		}
	
	const updateSearch = (event) => {
		setSearch(event.target.value);
		if(event.keyCode === 13){
			getData();
		}
	}

	return (
		<div className = "App">
			<h1>Weather App</h1>
		 	<input 
			  	name = "City Search" 
			  	type = "text" 
			  	placeholder = "Enter City"
			  	onChange = {updateSearch}
			  	value = {search}
 			/>
			<button 
				// type = 'submit'
			  	onClick = {getData}
			>
			  	Search
		  	</button>

		  	<CurrentTemp 
		  		temp = {currentTemperature}
		  		city = {search}
		  	/>
		</div>
	);
}



export default App;
