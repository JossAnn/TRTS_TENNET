import React from 'react';

function Button({ text, icon, onClick, textColor, bgColor, size, border }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-${size} ${bgColor} ${textColor} ${border} font-bold py-2 px-4 rounded`}
    >
      {icon && <img src={icon} alt="Icon" className="w-[120.63px] h-[60.5px] mr-2" />}
      {text}
    </button>
  );
}

export default Button;