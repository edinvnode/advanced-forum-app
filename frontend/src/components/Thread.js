import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';

const Thread = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [error, setError] = useState(null);
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  //user
  const { user } = useAuthContext();

  useEffect(() => {
    fetch(`/api/topics/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Topic not found');
        }
        return res.json();
      })
      .then((data) => {
        setTopic(data.title);
        setPosts(data.posts);
        console.log(data.posts);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setTopic(null);
        setPosts([]);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(post);
    //console.log(user.email);
    console.log({ message: post, author: user?.email });
    if (post !== '') {
      fetch(`/api/topics/${id}/posts`, {
        //fetch(`/${id}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: post, author: user.email }),
      })
        .then((res) => res.json())
        .then((newTopic) => {
          setPosts([...posts, post]); // update UI immediately
          //setTopic('');
        })
        .catch((err) => console.error(err));
    } else {
      console.log('Please fill title or topic');
    }
  };

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!topic) return <p>Loading...</p>;

  return (
    <div>
      <h2>{topic.title}</h2>
      {error ? (
        <div>Error</div>
      ) : (
        <div className="posts-wrapper">
          {posts.map((p, idx) => (
            <div key={p._id} className="post">
              <p>
                <strong>{p.author || 'Anonymous'}</strong> wrote:
              </p>
              <p>{p.message}</p>
              <small>
                {p.createdAt
                  ? new Date(p.createdAt).toLocaleString()
                  : 'Unknown date'}
              </small>
            </div>
          ))}
        </div>
      )}

      {/* Later add replies here */}
      <div className="thread-wrapper">
        <form className="thread-form">
          <label>Post</label>
          <textarea
            cols={30}
            rows={20}
            value={post}
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
          <button onClick={handleSubmit}>Submit Post</button>
        </form>
      </div>
    </div>
  );
};

export default Thread;
