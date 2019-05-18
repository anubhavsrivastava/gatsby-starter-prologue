import React from 'react';

export default function Footer({ title, heading, avatar }) {
  return (
    <div id="logo">
      <span className="image avatar48">
        <img height="128px" src={avatar} alt="" />
      </span>
      <a href="/#">
        <h1 id="title">{title}</h1>
      </a>
      <p>{heading}</p>
    </div>
  );
}
