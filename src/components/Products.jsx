import React from 'react'

const bucket = [
  { name: 'Apple', isFruit: true, id: 1 },
  { name: 'Banana', isFruit: true, id: 2 },
  { name: 'Potato', isFruit: false, id: 3 },
  { name: 'Kiwi', isFruit: true, id: 4 },
  { name: 'cabbage', isFruit: false, id: 5 },
  { name: 'garlic', isFruit: false, id: 6 }
]

export default function Products () {
  const listItems = bucket.map(bucket => (
    <li key={ bucket.id } style={{ color: bucket.isFruit ? 'purple' : 'green' }}>
      {bucket.name}
    </li>
  ))

  return <ul>{listItems}</ul>
}
