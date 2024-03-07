import React from 'react';
import BookCard from './BookCard';

function BookColumn({books}) {


    return (
        <div className='book-column' style={{overflow: 'auto', }}>
            <h2>Book Data</h2>
            <ul style={{margin: '0 auto', textAlign: 'center'}}>
                {books.map((book) => {
                    return (
                        <li key={book.id} style={{listStyle: 'none', display: 'inline-block'}}>
                        <BookCard book={book} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BookColumn