import React from 'react'
import { posts } from './data'
import PostList from './PostList';

const Post = () => {
    console.log(posts);
    const gridStyle= {
        display:'grid',
        gridTemplateColumns:'33.3% 33.3% 33.3%',
        gap:'1rem'
        
    }
  return (
    <div style={gridStyle}>
      {
        posts.map((post)=>(<PostList key={post.id} post={post}/>))
      }
    </div>
  )
}

export default Post
