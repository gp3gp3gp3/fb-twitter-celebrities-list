import React from 'react'
import './Celebrity.css'

export default (props) => {
  const {
    user_name,
    full_name,
    followers_count,
    friends_count,
    fb_likes,
    profile_image_url
  } = props

  return (
    <div className='celebrity'>
      <img className='celebrityImg' alt={full_name} src={profile_image_url} />
      <h1>{full_name}</h1>
      <h3>@{user_name}</h3>
      <p>Twitter Follower: {followers_count}</p>
      <p>Twitter Friends: {friends_count}</p>
      <p>Facebook Likes: {fb_likes}</p>
    </div>
  )
}
