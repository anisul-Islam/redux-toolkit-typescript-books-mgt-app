import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addBook } from './booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTilte] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTilte(event.target.value);
  };
  const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newBook = { id: new Date().getTime(), title: title, author: author };

    // dispatch an action -> addBook
    dispatch(addBook(newBook));

    navigate('/books');
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title goes here"
          value={title}
          onChange={handleTitleChange}
        />
        <br /> <br />
        <input
          type="text"
          name="author"
          placeholder="author goes here"
          value={author}
          onChange={handleAuthorChange}
        />
        <br />
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
