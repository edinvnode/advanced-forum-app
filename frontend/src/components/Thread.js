import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Thread = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [error, setError] = useState(null);

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

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!topic) return <p>Loading...</p>;

  return (
    <div>
      <h2>{topic.title}</h2>
      <p>{topic.message}</p>
      {/* Later add replies here */}
    </div>
  );
};

export default Thread;
