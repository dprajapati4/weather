import React from 'react';
import {Card} from 'semantic-ui-react'
import moment from 'moment';

const Weather  = ({weatherData, timezone}) => {

  let dateString = moment.unix(weatherData.dt).format("dddd MMMM DD");


  return (
    <Card>
      <Card.Content>
        <Card.Header className="header">{dateString}</Card.Header>
        <p>Temprature: {weatherData.temp.day}</p>
        <p>Sunrise: {weatherData.sunrise}</p>
        <p>Sunset: {weatherData.sunset}</p>
        <p>Description: {weatherData.weather[0].description}</p>
      </Card.Content>
    </Card>
  )
}

export default Weather;