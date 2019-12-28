import React from 'react';

const MinTemp = ({temp, city}) => {
	if(city === ''){
		return(
			<div>

			</div>
		);
	}

	return(
		<div>
			<h3>Min Temperature:</h3>
			<h5>The minimum temperature in {city} is {temp}</h5>
		</div>
	);
}

export default MinTemp;