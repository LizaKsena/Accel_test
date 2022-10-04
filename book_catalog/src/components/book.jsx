/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './pagination';

function Book({ book }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage] = useState(10);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastIndex = currentPage * rowPerPage;
  const firtsIndex = lastIndex - rowPerPage;
  const current = book.slice(firtsIndex, lastIndex);

  return (
    <div className="d-flex flex-column align-items-center">
      <Pagination
        rowPerPage={rowPerPage}
        totalRows={book.length}
        paginate={paginate}
      />
      <div className="d-flex flex-wrap  justify-content-center">
        {current.map((el) => (

          <div className="card m-2" style={{ width: '15rem' }}>

            <div className="card-body">
              <h5 className="card-title">{el.volumeInfo.title}</h5>
              <p className="card-text">{el.volumeInfo.authors}</p>
            </div>
            <ul className="list-group list-group-flush fst-italic fw-lighter">
              {el.volumeInfo.publishedDate
                ? <li className="list-group-item ">{el.volumeInfo.publishedDate}</li>
                : null}
              {el.volumeInfo.categories
                ? <li className="list-group-item">{el.volumeInfo.categories}</li>
                : null}
            </ul>
            <div className="card-body">
              <Link to={`/${el.id}`} className="card-link link-success fst-italic">Подробнее</Link>
            </div>
          </div>
        ))}
      </div>

    </div>

  );
}

export default Book;
