import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteBook } from './booksSlice';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';

const Books = () => {
  const { books } = useSelector((state: RootState) => state.booksR);
  const dispatch = useDispatch();

  const handleBookDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h2>Book Management App</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button>Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        handleBookDelete(book.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
