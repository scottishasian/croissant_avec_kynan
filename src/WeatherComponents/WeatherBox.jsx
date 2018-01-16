import React from 'react';

class WeatherBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      focusWeather: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("test", prevProps.country.name);
    // console.log(prevState);
    if(prevProps.country && this.props.country.capital) {
      if(prevProps.country.capital !== this.props.country.capital) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.props.country.capital}&units=metric&APPID=4d395766733b9a8d94c94baa063152f1`;
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();
        console.log(this.props.country.capital);


        request.addEventListener('load', () => {
          console.log(request.status);
          if(request.status !== 200) return;
          const jsonString = request.responseText;
          const weather = JSON.parse(jsonString);
          this.setState({weather: weather});
          console.log('hello', this.state.weather.main.temp);
        });
      }
    }
  }

  render() {

    if(!this.state.weather) {
      return (
        <div>
          Could not find the weather.
        </div>
      )
    }

    return (
      <div className="temperature">
        <p>Temperature: {this.state.weather.main.temp}°C</p>
      </div>
    );
  }
}

export default WeatherBox;
