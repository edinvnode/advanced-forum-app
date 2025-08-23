import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const Profile = () => {
  const { user } = useAuthContext();
  const [posts, setPosts] = useState([]);

  const email = user.email;

  // Fetch posts by email
  useEffect(() => {
    fetch(`/api/topics/by-email/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [email]);

  return (
    <div className="profile-card">
      <h3>Profile</h3>
      <span>Login email: {user.email}</span>

      <h4>My Posts</h4>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="post">
            <h5>{post.topicTitle}</h5>
            <p>{post.content}</p>
            <small>by {post.author}</small>
          </div>
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
};

export default Profile;
