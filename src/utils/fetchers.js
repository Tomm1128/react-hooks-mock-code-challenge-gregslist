const url = "http://localhost:6001/listings/"

const getListing = () => {
  return fetch(url).then((resp) => resp.json())
}

const createListing = (newListing) => {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newListing),
  }).then((resp) => resp.json())
}

const updateListing = (id) => {
  return fetch(url + id, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((resp) => resp.json())
    .then(console.log)
}

const deleteListing = (id) => {
  return fetch(url + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((error) => console.error("Error Deleting:", error))
}

export { getListing, createListing, updateListing, deleteListing }
