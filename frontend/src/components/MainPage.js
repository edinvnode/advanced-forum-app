import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainPage = (props) => {
  const { titles } = props;

  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [topics, setTopics] = useState([]);

  // Fetch topics from backend
  useEffect(() => {
    fetch('/api/topics')
      .then((res) => res.json())
      .then((data) => setTopics(data))
      .catch((err) => console.error(err));
  }, []);
  // Submit a new topic
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/topics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, message: topic }),
    })
      .then((res) => res.json())
      .then((newTopic) => {
        setTopics([...topics, newTopic]); // update UI immediately
        setTitle('');
        setTopic('');
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {topics.map((title) => (
        <>
          <div className="title">
            <Link to="#" className="title">
              {title.title}
            </Link>
          </div>
        </>
      ))}
      <div class="title-form">
        <form>
          <label>Topic title</label>
          <input
            type="text"
            className="topic-name"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label>Post message</label>
          <textarea
            cols={40}
            rows={20}
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          ></textarea>
          <button onClick={handleSubmit}>Submit post</button>
        </form>
      </div>
    </>
  );
};

export default MainPage;
