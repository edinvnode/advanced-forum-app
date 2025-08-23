import React, { useEffect, useState } from 'react';

import { useAuthContext } from '../hooks/useAuthContext';

const Profile = () => {
  const { user } = useAuthContext();
  const [posts, setPosts] = useState([]);

  console.log(user.email);
  // Fetch topics from backend
  useEffect(() => {
    fetch(`/api/topics/${user.email}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="profile-card">
      <h3>Profile</h3>
      <span>Login email: {user.email}</span>
      {posts?.map((post, index) => (
        <div>{post}</div>
      ))}
    </div>
  );
};

export default Profile;
