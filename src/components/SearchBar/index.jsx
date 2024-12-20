import { useState } from 'react'
import './styles.css'


export default function SearchBar () {
    const [searchTerm, setSearchTerm] = useState('');
    console.log(searchTerm)
    return (
        <input type='search'
        placeholder="Type what you are searching"
        className='search-bar'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)} />
    )
}


