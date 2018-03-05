import React from 'react';


// We'll need to import all those action creators.
import {
  updateCityInput,
  addHistory,

} from './CityActions';

export default class CityEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      CityInput: '', 
    };

    this.handleCity = this.handleCity.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

handleCity(event) {
  const { dispatch } = this.props;
  const { value } = event.target;
  if (event.target.name === 'city') {
    this.setState({CityInput: value})
    dispatch(addHistory(value))
    dispatch(updateCityInput(value))
    
    return
  };
  dispatch(updateCityInput(this.state.CityInput))
  dispatch(addHistory(this.state.CityInput))
}
  

handleInputChange (event) {
  const { value } = event.target;

    this.setState({CityInput: value}) 

}
  render() {
    return (
      <div className="navBar">
      
      <div className="cityButtons">
    <button type="button" className="btn btn-primary" value="San Diego" name="city"  onClick={this.handleCity}>San Diego</button>
    <button type="button" className="btn btn-primary" value="New York" name="city" onClick={this.handleCity}>New York</button>
    <button type="button" className="btn btn-primary" value="District Of Columbia" name="city" onClick={this.handleCity}>Washington</button>
    <button type="button" className="btn btn-primary" value="London"  name="city" onClick={this.handleCity}>London</button>
    <button type="button" className="btn btn-primary" value="Tokyo" name="city" onClick={this.handleCity}>Tokyo</button>
    </div>
    
    
    <div className="input-group mb-3">
      <input 
      type="text" 
      className="form-control" 
      id="search-city" 
      placeholder="Type in the city here" 
      value={ this.state.CityInput }
      onChange={ this.handleInputChange }
       />
    
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" onClick={this.handleCity} >Search</button>
      </div>
    </div>
    
    </div>
    );
  }
}

