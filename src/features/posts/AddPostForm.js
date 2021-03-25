import React, { useState } from 'react'
import { postAdded } from './postsSlice'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setcontent] = useState('')

  const dispatch = useDispatch()

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e) => {
    setcontent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      )
      setTitle('')
      setcontent('')
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <button onClick={handleSubmit}>Save Post</button>
      </form>
    </section>
  )
}
