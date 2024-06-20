const url = "http://localhost:6001/listings/"

const getListing = () => {
  return fetch(url).then((resp) => resp.json())
}

const updateListing = (id) => {
  return fetch(url + id, {
    method: "Patch",
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
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((error) => console.error("Error Deleting:", error))
}

export { getListing, updateListing, deleteListing }
