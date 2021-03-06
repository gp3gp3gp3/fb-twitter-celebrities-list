import React, { Component } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import Celebrity from './Celebrity'
import './App.css'

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
    const ROOT_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4567'
    : 'https://sinatra-oauth-backend.herokuapp.com'

    axios.get(ROOT_URL)
    .then(response => {
      this.setState({celebrities: response.data})
    })
    .catch(err => {
      console.error(err)
    })
  }

  renderCelebs () {
    const { celebrities } = this.state
    if (!celebrities) {
      return <h2>Loading...</h2>
    }
    return celebrities.map((celeb, i) =>
      <Celebrity
        key={i}
        {...celeb}
      />
    )
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Celebrity List</h2>
        </div>
        <div className='App-intro'>
          <h2>This site is using the <a href='https://dev.twitter.com/docs'>Twitter</a> and <a href='https://developers.facebook.com/docs/graph-api'>Facebook</a> APIs to load information for ten celebrities.</h2>
          <h2>Source code for the front end is located <a href='https://github.com/gp3gp3gp3/fb-twitter-celebrities-list'>here</a></h2>
          <h2>Source code for the back end is located <a href='https://github.com/gp3gp3gp3/Sinatra-Oauth-backend'>here</a></h2>
          {this.renderCelebs()}
        </div>
      </div>
    )
  }
}

export default App
