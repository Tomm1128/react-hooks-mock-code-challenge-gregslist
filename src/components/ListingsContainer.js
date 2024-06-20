import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({ listings, removeListing }) {
  const listingCards = listings.map((listing) => {
    return (
      <ListingCard
        key={listing.id}
        id={listing.id}
        description={listing.description}
        image={listing.image}
        location={listing.location}
        removeListing={removeListing}
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
