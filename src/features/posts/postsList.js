import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <article key={post.id} className="post-excerpt">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`} className="button muted-button">
              View Post
            </Link>
          </article>
        )
      })}
    </section>
  )
}
