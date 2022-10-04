import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import Book from './book';

function Input() {
  const [value, setValue] = useState('');
  const [book, setBook] = useState([]);

  function search(query) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`)
      .then((response) => response.json())
      .then((json) => {
        setBook(json.items);
      });
  }

  const deboucedCallback = useDebounce(search, 500);

  const onChange = (e) => {
    setValue(e.target.value);
    deboucedCallback(e.target.value);
  };

  return (
    <div className="d-flex flex-column align-items-center m-4">
      <input
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        className="form-control w-25 mb-3 text-center fst-italic"
        placeholder="Введите название"
      />

      {book ? <Book book={book} /> : null}

    </div>
  );
}

export default Input;
