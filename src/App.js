import React, { useState } from 'react';
import './App.css';
import CurrentTemp from './components/CurrentTemp/CurrentTemp.js';
import MaxTemp from './components/MaxTemp/MaxTemp.js';
import MinTemp from './components/MinTemp/MinTemp.js';

function App(){
	const API_KEY = `0b3b530e772fd76341de3dada4786a6b`;

	// state
	const [search, setSearch] = useState('');
	const [cityName, setCityName] = useState('');
	const [currentTemperature, setCurrentTemperature] = useState(0);
	const [maxTemperature, setMaxTemperature] = useState(0);
	const [minTemperature, setMinTemperature] = useState(0);


	// runs when search button is clicked
	const fetchData = () => {
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${API_KEY}&units=metric`)
			.then(response => response.json())
			.then(response => {
				console.log(response);
				setCurrentTemperature(response.main.temp);
				setCityName(response.name);
				setMinTemperature(response.main.temp_min);
				setMaxTemperature(response.main.temp_max);
			})
			.catch(err => console.log(err))
		setSearch('');
	}

	const updateSearch = (event) => {
		setSearch(event.target.value);
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
			  	onClick = {fetchData}
			>
			  	Search
		  	</button>

		  	<CurrentTemp 
		  		temp = {currentTemperature}
		  		city = {cityName}
		  	/>

		  	<MaxTemp
		  		temp = {maxTemperature}
		  		city = {cityName}
		  	/>

		  	<MinTemp
		  		temp = {minTemperature}
		  		cit = {cityName}
		  	/>
		</div>
	);
}



export default App;
