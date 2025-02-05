function Search({setSearchBar}) {
    return (
        <>
            <div className="search">
                <input className="search-bar" placeholder="Search mail" 
                onChange={e => setSearchBar(e.target.value)} />
            </div>
        </>
    )
}

export default Search;