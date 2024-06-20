const url = "http://localhost:6001/listings"

const getListing = () => {
  return fetch(url).then((resp) => resp.json())
}

export { getListing }
