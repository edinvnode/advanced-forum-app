// src/components/Thread.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Thread = () => {
  const { id } = useParams(); // get topic id from URL
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    fetch(`/api/topics/${id}`)
      .then((res) => res.json())
      .then((data) => setTopic(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!topic) return <p>Loading...</p>;

  return (
    <div className="topic-wrapper">
      <h2>{topic.title}</h2>
      <p>{topic.message}</p>
      {/* Later you can map replies here */}
    </div>
  );
};

export default Thread;
