import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Temperature = ({city, currentTemperature, maxTemperature, minTemperature, feelsLike}) => {
	if(city === ''){
		return(
			<div className='temperature'>
				<Card>
			      <CardContent>
			        <Typography variant="h5" component="h3">
			          No City is Selected
			        </Typography>
			      </CardContent>
			    </Card>
			</div>
		);
	}

	return(
		<div>
			<div>
		  		<Card>
			      <CardContent>
			        <Typography color="textSecondary" gutterBottom>
			          City: {city}
			        </Typography>
			        <Typography variant="h5" component="h3">
			          Current: {currentTemperature}°C
			        </Typography>
			        <Typography variant="h5" component="h3">
			          Feels Like: {feelsLike}°
			        </Typography>
			        <Typography variant="h5" component="h3">
			          Maximum: {maxTemperature}°
			        </Typography>
			        <Typography variant="h5" component="h3">
			          Minimum: {minTemperature}°
			        </Typography>
			      </CardContent>
			    </Card>
		  	</div>
	  	</div>
	);
}

export default Temperature;