// import React from 'react';
// import Form from 'react-bootstrap/Form';


// function SearchColumn() {
//     return (
//         <div className='search-column'>
//             <h2>Search</h2>
//             <Form>
//                 <Form.Control type='text' placeholder='Search by Author or Book Title' />
//                 <h2>Filter</h2>
//                 <h5>Genre</h5>
//                 <Form.Group>
//                     <Form.Check inline type='switch' id='Horror' label='Horror' className={`mb-3 ${checkedGenres.includes(genre) ? 'checked' : ''}`} />
//                     <Form.Check inline type='switch' id='Mystery' label='Mystery' className='mb-3' />
//                     <Form.Check inline type='switch' id='Romance' label='Romance' className='mb-3' />
//                     <Form.Check inline type='switch' id='Sci-Fi' label='Sci-Fi' className='mb-3' />
//                     <Form.Check inline type='switch' id='Young Adult' label='Young Adult' className='mb-3' />
//                     <Form.Check inline type='switch' id='Fantasy' label='Fantasy' className='mb-3' />
//                     <Form.Check type='switch' id='Non-Fiction' label='Non-Fiction' className='mb-3' />
//                 </Form.Group>
//             </Form>
//         </div>
//     )
// }

// export default SearchColumn

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function SearchColumn() {
    const [checkedGenres, setCheckedGenres] = useState([]);

    const handleGenreChange = (genre) => {
        if (checkedGenres.includes(genre)) {
            setCheckedGenres(checkedGenres.filter(item => item !== genre));
        } else {
            setCheckedGenres([...checkedGenres, genre]);
        }
    };

    const [searchTerm, setSearchTerm] = useState('')

    const API_URL = ''

    const handleSearch = (e, term) => {
        e.preventDefault()
        const fetchData = async () => {
        const response = await fetch(API_URL + term)
        const resData = await response.json()
        console.log(resData)
        }
        fetchData()
    }

    return (
        <div className='search-column'>
            <h2>Search</h2>
            <Form onSubmit={handleSearch}>
                <Form.Control type='text' placeholder='Search by Author or Book Title' className='mb-4' />
                <h2 className='mb-4'>Filter</h2>
                <h5 className='mb-3'>Genre</h5>
                <Form.Group>
                    {['Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Young Adult', 'Fantasy', 'Non-Fiction'].map(genre => (
                        <Form.Check
                            key={genre}
                            inline
                            type='switch'
                            id={genre}
                            label={genre}
                            className={`mb-3 genre-checkbox ${checkedGenres.includes(genre) ? 'checked' : ''}`}
                            onChange={() => handleGenreChange(genre)}
                        />
                    ))}
                </Form.Group>
                <div className='d-grid gap-1'>
                    <Button type='submit' className='searchButton mt-4'>Find Your Next Adventure!</Button>
                </div>
            </Form>
        </div>
    )
}

export default SearchColumn;
