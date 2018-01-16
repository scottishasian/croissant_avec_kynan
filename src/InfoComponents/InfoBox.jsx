import React from 'react';
import CountrySelector from './CountrySelector.jsx';
import CountryDetails from './CountryDetails.jsx';
import WeatherBox from '../WeatherComponents/WeatherBox.jsx';

class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      focusCountry: null
    }

    this.setFocusCountry = this.setFocusCountry.bind(this);
  }

  setFocusCountry(country) {
    this.setState({
      focusCountry: country
    })
  }

  componentDidMount() {
    console.log('mounted');
    const url = 'https://restcountries.eu/rest/v2/all'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const countries = JSON.parse(jsonString);
      this.setState({countries: countries, focusCountry: countries[0]});
      console.log(this.state.countries);
    })
  }

  render() {
    return (
      <div className='info-box'>
        <h1>Countries</h1>
        <CountrySelector
          countries={this.state.countries}
          setFocusCountry={this.setFocusCountry}/>
        <CountryDetails country={this.state.focusCountry}/>
        <WeatherBox country={this.state.focusCountry} />
      </div>
    )
  }


}

export default InfoBox;
