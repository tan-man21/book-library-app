import React from 'react';
import BookCard from './BookCard'

function BookColumn({books}) {

    return (
        <div className='book-column'>
            <h2>Book Data</h2>
            <ul>
                {books.map((book) => {
                    return (
                        <li key={book.id}>
                        <BookCard book={book} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BookColumn