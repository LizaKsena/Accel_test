/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function oneBook() {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setInfo(json.volumeInfo);
      });
  }, []);

  return (

    <div className="card mb-3 mt-5">
      <div className="card-body">
        <h5 className="card-title fw-bold">
          {info.title}
        </h5>
        <p className="card-text">{info.authors}</p>
        <p className="card-text">{info.subtitle}</p>
        <a href={info.previewLink} className="card-link">Ссылка на книгу</a>
        <p className="card-text mt-4">
          <small className="text-muted">
            Жанр:
            {' '}
            {info.categories}
          </small>
        </p>
        {info.description
          ? (
            <p className="card-text text-start font-monospace">
              Описание:
              <small className=" fst-italic ">
                {info.description}
              </small>
            </p>
          )
          : null}
        <a href="/" className="card-link link-success">Назад</a>
      </div>
    </div>

  );
}

export default oneBook;
