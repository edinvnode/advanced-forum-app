import React from 'react';

const MainPage = (props) => {
  const { titles } = props;

  return (
    <>
      {titles.map((title) => (
        <div className="title">
          <a href="#" className="title">
            {title.title}
          </a>
        </div>
      ))}
    </>
  );
};

export default MainPage;
