import React from 'react';
import CountrySelector from './CountrySelector.jsx';

class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    }
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
      this.setState({countries: countries});
      console.log(this.state.countries);
    })
  }

  render() {
    return (
      <div className='info-box'>
        <h1>Countries</h1>
        <CountrySelector />
      </div>
    )
  }


}

export default InfoBox;
