

function BookCard({book}) {
    return (
        <div>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.author}</p>
            <img src={book.volumeInfo.imageLinks} alt={book.volumeInfo.title} />
        </div>
    )
}

export default BookCard