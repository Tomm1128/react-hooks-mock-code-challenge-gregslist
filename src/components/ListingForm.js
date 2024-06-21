import React, { useState } from "react"
import { createListing } from "../utils/fetchers"

function ListingForm({ updateListings }) {
  const [isHidden, setHidden] = useState(true)
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: "",
  })

  function handleSubmit(event) {
    event.preventDefault()
    createListing(formData).then((newListing) => updateListings(newListing))
  }

  const updateFormData = (event) => {
    const newData = {
      ...formData,
      [event.target.id]: event.target.value,
    }
    setFormData(newData)
  }

  return (
    <div id="form-container">
      <button onClick={() => setHidden(!isHidden)}>Add Item</button>
      <form
        className="add-new-listing"
        onSubmit={handleSubmit}
        hidden={isHidden}
      >
        <label htmlFor="description">
          Description:
          <input
            id="description"
            value={formData.description}
            onChange={updateFormData}
          ></input>
        </label>
        <label htmlFor="image">
          Image Url:
          <input
            id="image"
            value={formData.image}
            onChange={updateFormData}
          ></input>
        </label>
        <label htmlFor="location">
          Location:
          <input
            id="location"
            value={formData.location}
            onChange={updateFormData}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ListingForm
