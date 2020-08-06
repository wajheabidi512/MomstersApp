import React, { Component } from 'react';
import { CartList }  from './components/CartList/CartList';
import  { SearchBar } from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      locations: [],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users=> this.setState({locations: users}));
  }
  handleChange = e => {
   this.setState({searchField: e.target.value})
  }
  render(){
    const { locations , searchField }= this.state;
    const filterLocations = locations.filter(location =>
        location.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h2>Locations</h2>
        <SearchBar 
        placeholder="Search Location" 
        handleChange={this.handleChange} />
        <CartList locations={filterLocations} />
      </div>
    )
    };
}

export default App;
