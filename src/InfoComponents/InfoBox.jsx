import React from 'react';
import RecipeSelector from './RecipeSelector.jsx';

class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipies: []
    }
  }

  componentDidMount() {
    console.log('mounted');
    const url = 'https://api.edamam.com/search'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const recipes = JSON.parse(jsonString);
      this.setState({recipies: recipes});
      console.log(this.state.recipes);
    })
  }

  render() {
    return (
      <div className='info-box'>
        <h1>Recipes</h1>
        <RecipeSelector />
      </div>
    )
  }


}

export default InfoBox;
