import React from 'react';

const Tab = (props) => {
  return (
    <div
      className={`tab ${props.isActive ? 'active' : ''}`}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
}

export default Tab;