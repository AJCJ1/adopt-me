import { useState, useEffect } from 'react'
import Pet from "./Pet"
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]


const SearchParams = () => {
  const [pets, setPets] = useState([])
  const [location, setLocation] = useState("")
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const breeds = []


  useEffect(() => {
    requestPets()
  }, [])

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    const json = await res.json()

    setPets(json.pets)
  }
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input onChange={(e) => setLocation(e.target.value)}
          id="location"
          value={location}
          placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select onChange={(e) => {
                    setAnimal(e.target.value)
                    setBreed("")
                  }}
            id="animal"
            value={animal}
            placeholder="Animal">
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal}>{animal}</option>
              ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select onChange={(e) => setBreed(e.target.value)}
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            placeholder="breed">
              <option />
              {breeds.map((breed) => (
                <option key={breed}>{breed}</option>
              ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {
        pets.map((pet) => (
          <Pet name={pet.name}
               animal={pet.animal}
               breed={pet.breed}
               key={pet.id}
          />
        ))
      }
    </div>
  )
}

export default SearchParams