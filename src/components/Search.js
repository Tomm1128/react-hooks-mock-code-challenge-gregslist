import React from "react"

function Search({ searchInput, updateSearch }) {
  function handleSubmit(event) {
    event.preventDefault()
    updateSearch(event.target.children[0].value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
      />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Search
