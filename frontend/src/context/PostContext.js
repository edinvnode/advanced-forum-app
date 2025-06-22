import { createContext, useReducer } from 'react';

export const PostContext = createContext();

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POST':
      return {
        workouts: action.payload,
      };
    case 'CREATE_POST':
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case 'DELETE_POST':
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    posts: null,
  });

  return (
    <PostContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
