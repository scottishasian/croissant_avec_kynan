import React from 'react';

class CountrySelector extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: undefined
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const selectedIndex = event.target.value;
    this.setState({selectedIndex: selectedIndex});
    const selectedCountry = this.props.countries[selectedIndex];
    this.props.setFocusCountry(selectedCountry);
  }



  render() {

    const countriesNodes = this.props.countries.map(function(country, index) {
      return (
        <option key={index} value={index}> {country.name} </option>
      )
    })

    return (
      <select id="countries"
        value={this.state.selectedIndex}
        onChange={this.handleChange}>
        {countriesNodes}
      </select>
    )
  }
}

export default CountrySelector;
