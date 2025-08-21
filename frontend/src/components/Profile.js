import React from 'react';

import { useAuthContext } from '../hooks/useAuthContext';

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h3>Profile</h3>
      <span>Login email: {user.email}</span>
    </div>
  );
};

export default Profile;
