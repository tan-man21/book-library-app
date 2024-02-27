import './App.css';
import SearchColumn from './components/SearchColumn';
import BookColumn from './components/BookColumn';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <div className="App">
      <Container>
        <Row>
          <Col><SearchColumn /></Col>
          <Col><BookColumn /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
