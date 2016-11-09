import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      celebrities: null
    }
  }
  componentWillMount () {
    this.fetchUsers()
  }

  fetchUsers () {
    const ROOT_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4567' : 'http://sinatra-oauth-backend.herokuapp.com'
    axios.get(ROOT_URL)
      .then(response => {
        this.setState({celebrities: response.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderCelebs () {
    const { celebrities } = this.state
    if (!celebrities) {
      return <div>Loading...</div>
    }
    return celebrities.map((celeb, i) => <div key={i}>{celeb.full_name}</div>)

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {this.renderCelebs()}
        </div>
      </div>
    );
  }
}

export default App;
