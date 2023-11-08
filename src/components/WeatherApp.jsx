import React, { useEffect, useState } from 'react'

const WeatherApp = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=22.7179&longitude=75.8333&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result.current)
        setLoading(false)
      })
      .catch((error) => {
        console.log('Error', error)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <h2>Weather in Indore</h2>
      {loading && <p>Loading Weather...</p>}
      {!loading && data && (
        <div>
          <p>Temperature: {data.temperature_2m}Degree Celcius</p>
          <p>Wind Speed: {data.wind_speed_10m} m/s</p>
        </div>
      )}
    </>
  )
}

export default WeatherApp
