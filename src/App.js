import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import { BooksProvider } from './BooksContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';

// The asterisk(*) implies in the path apart from any route provided below, if there's none matching, it'll be routed.

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Books></Books>}></Route>
          <Route path='/books' element={<Navigate to='/' />}></Route>
          <Route path='/books/:bookId' element={<BookDetails></BookDetails>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
