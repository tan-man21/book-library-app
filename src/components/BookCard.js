import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';



function BookCard({book}) {
  const [author, setAuthor] = useState([])

  const handleAuthor = async (e) => {
      e.preventDefault()
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=AIzaSyC_6wmVPX88Nwmbxt2jboTLWQLcEbbUzq0`)
      setAuthor(response.data.items)
      console.log(response.data.items)
  }

    return (
    <Card style={{ width: '13rem', height: '450px', margin: '10px', cursor: 'pointer'}} className='cardBody'>
        <Card.Img variant="top" src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} style={{height: '300px'}} />
        <Card.Body>
          <Card.Title>{book.volumeInfo.title}</Card.Title>
          <Card.Text>
            <Link to={`/author/${book.volumeInfo.authors}`} onClick={handleAuthor}>
              {book.volumeInfo.authors}
            </Link>
          </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default BookCard