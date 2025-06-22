import { PostContext } from '../context/PostContext';
import { useContext } from 'react';

export const usePostContext = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw Error('useContextHook must be used withing context provider');
  }

  return context;
};
