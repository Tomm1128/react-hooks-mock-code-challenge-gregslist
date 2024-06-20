import React, { useState, useEffect } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"
import { getListing } from "../utils/fetchers"

function App() {
  const [listings, setListings] = useState([])
  const [searched, setSearched] = useState("")

  useEffect(() => {
    getListing().then((data) => setListings(data))
  }, [])

  const removeListing = (id) => {
    setListings(listings.filter((listing) => listing.id !== id))
  }

  const updateSearch = (newSearch) => {
    setSearched(newSearch)
  }

  const filteredListings = listings.filter((listing) => {
    if (searched === "") {
      return true
    } else {
      return listing.description.toLowerCase().includes(searched)
    }
  })

  return (
    <div className="app">
      <Header searchedInput={searched} updateSearch={updateSearch} />
      <ListingsContainer
        listings={filteredListings}
        removeListing={removeListing}
      />
    </div>
  )
}

export default App
