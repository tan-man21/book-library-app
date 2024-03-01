import './App.css';
import NavBar from './components/NavBar';
import BookColumn from './components/BookColumn';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async () => {
    if(!searchTerm){
      return;
    }

    try{
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyC_6wmVPX88Nwmbxt2jboTLWQLcEbbUzq0`)
      setBooks(response.data.items)
      console.log(response.data.items)
    } catch(error){
      console.error(error);
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col><BookColumn books={books} /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
