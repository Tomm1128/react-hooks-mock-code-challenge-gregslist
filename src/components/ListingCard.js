import React, { useState } from "react"

function ListingCard({ description, image, location }) {
  const [isFavorite, setFavorite] = useState(false)

  const handleFavorite = () => {
    setFavorite(!isFavorite)
  }

  return (
    <li className="card">
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  )
}

export default ListingCard
