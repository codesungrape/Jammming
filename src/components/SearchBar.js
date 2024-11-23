import React, {useState, useEffect} from 'react';


function SearchBar() {

    const [searchBar, setSearchBar] = useState('');


    function handleSearchBar(e) {
        setSearchBar(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Search submitted: ${searchBar}`)
    }   

    return (
        <>
            <h1>Jammmin'</h1>
            <label htmlFor="searchBar"></label>
            <input
                id="searchBar"
                type="text"
                value={searchBar}
                onChange={handleSearchBar}
                placeholder="Please type here..."
                aria-label="Search bar for finding content"
            />
            <button onClick={handleSubmit} >GO!</button>
            <button>Save to Spotify</button>
        </>

    )
}

export default SearchBar;