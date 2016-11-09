import React from 'react'

 export default (props) => {
  const {
    user_name,
    full_name,
    followers_count,
    friends_count,
    profile_image_url
  } = props

  return (
    <div>
      <img alt={full_name} src={profile_image_url} />
      <h1>{full_name}</h1>
      <h3>@{user_name}</h3>
      <p>Twitter Follower: {followers_count}</p>
      <p>Twitter Friends: {friends_count}</p>
    </div>
  )
}
