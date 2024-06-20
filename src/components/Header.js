import React from "react"
import Search from "./Search"

function Header({ searchedInput, updateSearch, sort, setSort }) {
  const updateSort = () => (sort === "asc" ? setSort("desc") : setSort("asc"))

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        kraigslist
      </h1>
      <Search searchedInput={searchedInput} updateSearch={updateSearch} />
      <label htmlFor="sort-dropdown">Sort: </label>
      <select id="sort-dropdown" value={sort} onChange={updateSort}>
        <option value="asc">Location ASC</option>
        <option value="desc">Location DESC</option>
      </select>
    </header>
  )
}

export default Header
