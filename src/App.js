import React, { useState } from 'react';
import Temperature from './components/Temperature/Temperature';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from './components/Logo/Logo.png';
import './App.css';

function App(){
	const API_KEY = `0b3b530e772fd76341de3dada4786a6b`;

	// state
	const [search, setSearch] = useState('');
	const [cityName, setCityName] = useState('');

	const [currentTemperature, setCurrentTemperature] = useState(0);
	const [maxTemperature, setMaxTemperature] = useState(0);
	const [minTemperature, setMinTemperature] = useState(0);
	const [feelsLike, setFeelsLike] = useState(0);


	// runs when search button is clicked
	const fetchData = () => {
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${API_KEY}&units=metric`)
			.then(response => response.json())
			.then(response => {
				setCurrentTemperature(response.main.temp);
				setCityName(response.name);
				setMinTemperature(response.main.temp_min);
				setMaxTemperature(response.main.temp_max);
				setFeelsLike(response.main.feels_like);
			})
			.catch(err => {
				// console.log(err);
				alert('Something went wrong! Try again later');
			});
		setSearch('');
	}

	const updateSearch = (event) => {
		setSearch(event.target.value);
	}

	const onFormSubmit = (event) => {
		event.preventDefault();
		fetchData();
	}

	return (
		<div className = "App">
			<img 
				src={Logo}
				alt='Logo'
			/>
			<br/>
			<br/>
			<br/>
		 	<div className="searchBar">

		 	<form onSubmit={onFormSubmit}>
			 	<TextField
			 		id="outlined-size-small"
			 		size="small" 
			 		label="City" 
			 		variant="outlined"
				  	name = "City Search" 
				  	type = "text" 
				  	onChange = {updateSearch}
				  	value = {search}
	 			/>

	 			<Button 
	 				variant="outlined"
	 				size="normal"
	 				color="primary"
	 				onClick = {fetchData}
	 			>
	 					Search
	 			</Button>
	 		</form>
	 		</div>
	 		<br/>
	 		<br/>
	 		<div className='container'>
		 		<Temperature
		 			city = {cityName}
		 			currentTemperature = {currentTemperature}
		 			maxTemperature = {maxTemperature}
		 			minTemperature = {minTemperature}
		 			feelsLike = {feelsLike}
		 		/>
	 		</div>
		</div>
	);
}



export default App;
