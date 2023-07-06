import axios from 'axios';
import { useState, useEffect } from 'react'
import parse from 'html-react-parser'; // To parse the HTML from the API

function App() {
  const [posts, setPost] = useState([])

  const fetchPosts = () => {
    // Using axios to fetch the posts
    axios
      .get("http://localhost/wp-json/wp/v2/posts")
      .then((response) => {
        // Saving the data to state
        setPost(response.data);
      });
  }

  // Calling the function on page load
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <div>
        <h2>Posts</h2>
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className='post'>
              <h3>{post.title.rendered}</h3>
              {parse(post.content.rendered)}
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default App
