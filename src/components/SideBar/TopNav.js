import React from 'react';

export default function TopNav({ title, onMenuClick = () => {} }) {
  return (
    <div id="headerToggle">
      <a
        href="/#"
        className="toggle"
        onClick={e => {
          e.preventDefault();
          onMenuClick();
        }}
      >
        {' '}
      </a>
    </div>
  );
}
