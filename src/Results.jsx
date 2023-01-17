import Pet from './Pet'

// here i'm destructuring, i'm expecting that one of the props will be 'pets'
// So i'm taking just that one out, because this component lists the pets
// then i map the pets, if there are any, and create the mapped html.

const Results = ({ pets }) => {
  return(
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(pet => (
          <Pet
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
            key={pet.id}/>
        ))
      )
    }
    </div>
  )
}

export default Results
