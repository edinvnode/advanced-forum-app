import React, { useState } from 'react';

const MainPage = (props) => {
  const { titles } = props;

  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(title);
    alert(topic);
  };

  return (
    <>
      {titles.map((title) => (
        <>
          <div className="title">
            <a href="#" className="title">
              {title.title}
            </a>
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
            cols={50}
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
