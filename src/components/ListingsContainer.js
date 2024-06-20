import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({ listings }) {
  console.log(listings)
  const listingCards = listings.map((listing) => {
    return (
      <ListingCard
        key={listing.id}
        description={listing.description}
        image={listing.image}
        location={listing.location}
      />
    )
  })

  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  )
}

export default ListingsContainer
