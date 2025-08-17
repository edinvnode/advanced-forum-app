import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';

const Thread = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [error, setError] = useState(null);
  const [post, setPost] = useState('');

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
        setTopic(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setTopic(null);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    console.log(user.email);
    if (post !== '') {
      fetch(`/api/topics/${id}/posts`, {
        //fetch(`/${id}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: post, author: user.email }),
      })
        .then((res) => res.json())
        .then((newTopic) => {
          setTopic([...topic, post]); // update UI immediately
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
      <p>{topic.message}</p>
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
