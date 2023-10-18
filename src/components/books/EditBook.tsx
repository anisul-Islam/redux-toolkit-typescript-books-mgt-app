import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './booksSlice';

const EditBook = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(state.title);
  const [author, setAuthor] = useState(state.author);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const updatedBook = {
      id: state.id,
      title: title,
      author: author,
    };

    // dispatch an action -> updateBook
    dispatch(updateBook(updatedBook));
    navigate('/books');
  };

  return (
    <div>
      <h2>Edit Book</h2>
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
        <button type="submit">Edit Book</button>
      </form>
    </div>
  );
};

export default EditBook;
