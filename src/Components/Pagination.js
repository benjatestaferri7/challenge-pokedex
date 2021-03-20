import React from 'react';

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
        {/* si la class icon no va aca ponerla en el span */}
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
