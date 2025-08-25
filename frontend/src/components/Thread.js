import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Thread = () => {
  const { id } = useParams();
  const { user } = useAuthContext();

  const [topic, setTopic] = useState(null);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch topic and its posts
  const fetchTopic = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/topics/${id}`);
      if (!res.ok) throw new Error('Topic not found');

      const data = await res.json();
      setTopic(data);
      setPosts(data.posts || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      setTopic(null);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchTopic();
  }, [fetchTopic]);

  // Handle new post submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!post.trim()) {
      console.log('Please fill title or topic');
      return;
    }

    //console.log(id);
    //console.log('Submitting post:', { message: post, author: user?.email });

    try {
      const res = await fetch(`/api/topics/${id}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: post,
          author: user?.email || 'Anonymous',
        }),
      });

      if (!res.ok) throw new Error('Failed to submit post');

      await fetchTopic(); // refresh topic with updated posts
      setPost('');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>{topic?.title}</h2>

      <div className="posts-wrapper">
        {posts.map((p) => (
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

      <div className="thread-wrapper">
        <form className="thread-form" onSubmit={handleSubmit}>
          <label>Post</label>
          <textarea
            cols={30}
            rows={20}
            value={post}
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
          <button type="submit">Submit Post</button>
        </form>
      </div>
    </div>
  );
};

export default Thread;
