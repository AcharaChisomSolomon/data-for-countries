import { useState } from "react"

const CountryDisplay = ({ country }) => {
  const [showAll, setShowAll] = useState(false)

  return (
    <div>
      <p>
        {country.name.common} 
        <button onClick={() => setShowAll(!showAll)}>{showAll ? 'hide': 'show'}</button></p>
      {showAll && <CountryDetail country={country} />}
    </div>
  )
}

const CountryDetail = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital[0]}</p>
      <p>Area {country.area}</p>

      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map(l => <li key={l}>{l}</li>)}
      </ul>
      <img width={400} src={country.flags.svg} alt={country.flags.alt} />
    </div>
  )
}

const Country = ({ countriesToDisplay, searchTerm }) => {

  if (countriesToDisplay.length === 0) {
    return <p>No country with '{searchTerm}'</p>
  }

  if (countriesToDisplay.length === 1) {
    return (
      <div>
        <CountryDetail country={countriesToDisplay[0]} />
      </div>
    )
  }

  if (countriesToDisplay.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  return (
    <div>
      {countriesToDisplay.map((c, id) => <CountryDisplay key={id} country={c} />)}
    </div>
  )
}

export default Country