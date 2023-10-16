import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './components/books/Books';
import Home from './pages/Home';
import AddBook from './components/books/AddBook';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
