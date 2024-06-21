import React, { useState } from "react"
import { deleteListing } from "../utils/fetchers"

function ListingCard({ listing, removeListing }) {
  const [isFavorite, setFavorite] = useState(false)
  const { id, description, image, location } = listing

  const handleFavorite = () => {
    setFavorite(!isFavorite)
  }

  const handleDelete = () => {
    deleteListing(id).then(() => removeListing(id))
  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {
          <button
            className={
              isFavorite
                ? "emoji-button favorite active"
                : "emoji-button favorite"
            }
            onClick={handleFavorite}
          >
            {isFavorite ? "★" : "☆"}
          </button>
        }
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  )
}

export default ListingCard
