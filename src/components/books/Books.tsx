import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteBook } from './booksSlice';
import { RootState } from '../../store';

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
              return (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <button>Edit</button>
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
