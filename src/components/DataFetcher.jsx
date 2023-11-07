import React, { useState, useEffect } from 'react'

const DataFetcher = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const result = await response.json()
        if (result.status === 'success') {
          setData(result.message)
        } else {
          console.log('Error fetching data:', result.message)
        }
      } catch (error) {
        console.log('Error fetching data:', error)
      }
      setLoading(false)
    }

    fetchData()
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
