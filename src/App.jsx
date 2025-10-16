import axios from "axios"
import { useState, useEffect } from "react"
import Country from "./components/Country"

function App() {
  const [countries, setCountries] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])

  if (!countries) return <p>loading...</p>

  const handleSearchTerm = event => {
    setSearchTerm(event.target.value)
  }

  const countriesToDisplay = (
    countries
      .filter(
        country => (
          country
            .name.common.toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      )
  )

  return (
    <div>

      <div>
        find countries 
        <input 
          type="text" 
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </div>

      <Country 
        countriesToDisplay={countriesToDisplay} 
        searchTerm={searchTerm}
      />

    </div>
  )
}

export default App
