import React from 'react';

const MainPage = (props) => {
  const { titles } = props;

  return (
    <>
      {titles.map((title) => (
        <>
          <div className="title">
            <a href="#" className="title">
              {title.title}
            </a>
          </div>
        </>
      ))}
      <div class="title-form">
        <form>
          <label>Topic title</label>
          <input type="text" className="topic-name" />
          <label>Post message</label>
          <textarea cols={50}></textarea>
          <button>Submit post</button>
        </form>
      </div>
    </>
  );
};

export default MainPage;
