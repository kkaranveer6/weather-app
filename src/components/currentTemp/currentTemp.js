import React from 'react';

const CurrentTemp = ({temp, city}) => {

	if(city === ''){
		return(
			<div>
				<h1>No City is selected</h1>
			</div>
		);
	}

	return (
		<div>
			<h3>
				Current Temp:
			</h3>
			<h5>
				The current temperature in {city} is {temp}.
			</h5>
		</div>
	);
}

export default CurrentTemp;