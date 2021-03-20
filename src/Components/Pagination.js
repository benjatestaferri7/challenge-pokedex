import React from 'react';

const Pagination = ({ onLeftClick, onRightClick, page, totalPages }) => {
  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
        <div>
          <span role="img" aria-label="left">
            👈
          </span>
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}>
        <div>
          <span role="img" aria-label="right">
            👉
          </span>
        </div>
      </button>
    </div>
  );
};

export default Pagination;
