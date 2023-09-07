import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getposts } from '../../redux/slices/posts/postSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profil = () => {
  const { user } = useSelector(state => state.auth.user);
  const navigate = useNavigate()
  const [post, setPost] = useState({
    posterId: user._id
  })
  const allPosts = useSelector(state => state.pos.posts.data)
  const dispatch = useDispatch()
  const handleInput = (e) => {
    const { name, value } = e.target; // Destructuration de e.target

    // Copie de l'objet post
    const newPostCopy = { ...post };

    // Mise à jour de la propriété correspondant à 'name' avec la valeur 'value'
    // if (name === 'file') {
    //   newPostCopy[name] = files[0]
    // } else {

    newPostCopy[name] = value;
    // }

    // Mise à jour de l'état avec la nouvelle copie de post
    setPost(newPostCopy);

  }
  useEffect(() => {
    dispatch(getposts())
  }, [])

  // console.log(user)
  console.log(post)
  const handleSubmit = async (e) => {
    // setPost((prev)=>({...prev,}))
    e.preventDefault()
    console.log(post)
    const response = await axios.post("http://localhost:5001/api/post/", post)
      navigate('/profil')
    console.log("response", response)

  }

  return (
    <div>
      <h1>bienvenue {user.firstname} - {user.lastname} </h1>
      {allPosts && allPosts.map(post => <div key={post._id}>
        <p>{post.message}</p>
        <>{post.video && post.video.includes('youtube') ?
          <iframe
            width="560"
            height="315"
            src={post.video}
            title={post.message}
            allowFullScreen
          >
          </iframe> :
          ""}
        </>
      </div>)}
      <h2>publier un post</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='message' onChange={handleInput} />
        <input type='text' name='video' onChange={handleInput} />
        <button>envoyer</button>
      </form>
    </div>
  )
}

export default Profil