async function fetchSearch({queryKey}) {
  const {animal, location, breed} = queryKey[1]

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  )
  // if the return from the API is not ok (400 or 500 error), throw the below, more useful error
  if (!res.ok) {
    throw new Error(`pet search not okay ${animal}, ${location}, ${breed}`)
  }

  return res.json()
}

export default fetchSearch
