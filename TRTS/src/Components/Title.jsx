import React from 'react';

function Title({ text, className }) {
  return <h1 className={`text-6xl ${className}`}>{text}</h1>;
}

export default Title;