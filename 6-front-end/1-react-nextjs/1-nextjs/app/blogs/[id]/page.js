import React from 'react'
import delay from 'delay';
const BlogDetailsPage = async({params}) => {
await delay(5000)
    const id  = params.id;
  return (
    <div>BlogDetailsPage, {id}</div>
  )
}

export default BlogDetailsPage