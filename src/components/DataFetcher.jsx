import React, { useState, useEffect } from 'react'

const DataFetcher = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((result) => {
        setData(result.message)
      })
      .catch((error) => {
        console.log('Error fetching data:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <h2>Data from Public API that conclude all the dogs breeds</h2>
      {loading && <p>Loading Data ...</p>}
      {!loading && (
        <ul>
          {Object.keys(data).map((breed, index) => (
            <li key={index}>{breed}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default DataFetcher
