import React from 'react';

class CountryDetails extends React.Component {
  render() {
    if(!this.props.country) return null;

    return (
      <div className="country-info">
          <h1>{this.props.country.name}</h1>
          <img src={this.props.country.flag}/>
          <h4>{this.props.country.capital}</h4>
      </div>
    )
  }

}

export default CountryDetails;
