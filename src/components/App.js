import React, { useState, useEffect } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"
import { getListing } from "../utils/fetchers"

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    getListing().then((data) => setListings(data))
  }, [])

  const removeListing = (id) => {
    setListings(listings.filter((listing) => listing.id !== id))
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} removeListing={removeListing} />
    </div>
  )
}

export default App
