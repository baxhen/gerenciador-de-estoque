import React from 'react';

export default ({ id, text, onDeleteClick }) => {
  return (
    <>
      <div className="card-content">
        <div className="title">{text}</div>
        <button id={id} onClick={() => onDeleteClick(id)} className="btn">
          Delete
        </button>
      </div>
    </>
  );
};
