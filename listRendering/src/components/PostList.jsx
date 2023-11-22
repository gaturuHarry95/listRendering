import React from 'react'

const PostList = ({post}) => {
  return (
    <div style={{background:'grey', padding:'8px', color:'White', width:'400px', marginBottom:'5px'}}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostList
