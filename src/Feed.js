import React from 'react';
import './Feed.css';
import  BeanBox from "./BeanBox";
import Post from "./Post"

function Feed() {
  return (
    <div className="feed">
      {/*Header*/}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      
      {/*BeanBox*/}
      <BeanBox />
      {/*Post*/}
      <Post />
      {/*Post*/}
    </div>
  )
}

export default Feed


