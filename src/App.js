import './App.css';
import NavBar from './components/NavBar';
import BookColumn from './components/BookColumn';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col><BookColumn /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
