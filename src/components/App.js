import React, { useState, useEffect } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"
import { getListing } from "../utils/fetchers"

function App() {
  const [listings, setListings] = useState([])
  const [searched, setSearched] = useState("")
  const [sort, setSort] = useState("asc")

  useEffect(() => {
    getListing().then((data) => setListings(data))
  }, [])

  const removeListing = (id) => {
    setListings(listings.filter((listing) => listing.id !== id))
  }

  const updateSearch = (newSearch) => {
    setSearched(newSearch)
  }

  const sortListing = listings.toSorted((listing, nextListing) => {
    if (sort === "asc") {
      return listing.location < nextListing.location ? -1 : 1
    } else {
      return listing.location > nextListing.location ? -1 : 1
    }
  })

  const filteredListings = sortListing.filter((listing) => {
    if (searched === "") {
      return true
    } else {
      return listing.description.toLowerCase().includes(searched)
    }
  })

  return (
    <div className="app">
      <Header
        searchedInput={searched}
        updateSearch={updateSearch}
        sort={sort}
        setSort={setSort}
      />
      <ListingsContainer
        listings={filteredListings}
        removeListing={removeListing}
      />
    </div>
  )
}

export default App
