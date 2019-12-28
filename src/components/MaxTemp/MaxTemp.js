import React from 'react';

const MaxTemp = ({temp, city}) => {
	if(city === ''){
		return(
			<div>

			</div>
		);
	}

	return(
		<div>
			<h3>Max Temperature:</h3>
			<h5>The maximum temperature in {city} is {temp}</h5>
		</div>
	);
}

export default MaxTemp;
