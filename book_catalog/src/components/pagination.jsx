/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Pagination({ rowPerPage, totalRows, paginate }) {
  const pageNumbers = [1];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < Math.ceil(totalRows / rowPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (

    <ul className="pagination ">
      {pageNumbers.length === 1
        ? null
        : pageNumbers.map((elem) => (
          <li
            key={elem}
            className="page-item"
          >
            <div className="page-link" onClick={() => paginate(elem)}>
              {elem}
            </div>

          </li>
        ))}
    </ul>

  );
}
