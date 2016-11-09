import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import Celebrity from './Celebrity'
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
    return celebrities.map((celeb, i) =>
      <Celebrity
        key={i}
        {...celeb}
      />
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Celebrity List</h2>
        </div>
        <div className="App-intro">
          <p>This site is using the twitter API to load information for ten celebrities.</p>
          {this.renderCelebs()}
        </div>
      </div>
    );
  }
}

export default App;
