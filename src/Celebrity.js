import React, { Component } from 'react'

class Celebrity extends Component {
  render () {
    const {
      user_name,
      full_name,
      followers_count,
      friends_count,
      profile_image_url
    } = this.props

    return (
      <div>
        <img alt={full_name} src={profile_image_url} />
        <p>Twitter Name: {user_name}</p>
        <p>Full Name: {full_name}</p>
        <p>Twitter Follower: {followers_count}</p>
        <p>Twitter Friends: {friends_count}</p>
      </div>
    )
  }
}

export default Celebrity