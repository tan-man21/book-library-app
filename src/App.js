import './App.css';
import NavBar from './components/NavBar';
import BookColumn from './components/BookColumn';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useState, useRef} from 'react';
import axios from 'axios';
import { SearchContext } from './context/SearchContext';

function App() {
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  let searchInput = useRef('')

  const handleSearch = async (e, term) => {
      e.preventDefault()
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyC_6wmVPX88Nwmbxt2jboTLWQLcEbbUzq0`)
      setBooks(response.data.items)
      console.log(response.data.items)
  }

  return (
    <div className="App">
      <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
        <NavBar />
        <Container>
          <Row>
            <Col><BookColumn books={books} /></Col>
          </Row>
        </Container>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
