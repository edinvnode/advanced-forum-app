import React from 'react';
import { titles } from './data';

function App() {
  return (
    <div className="App">
      {titles.map((title) => (
        <div className="title">
          <a href="#" className="title">
            {title.title}
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;
