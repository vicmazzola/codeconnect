import './styles.css'
import searchIcon from './assets/search.svg';

export default function SearchBar () {
    return (
        <input type='search' placeholder="Type what you are searching" className='search-bar' style={{
            background: `var(--dark-grey) url(${searchIcon}) no-repeat 1em center`,
        }}/>
    )
}


