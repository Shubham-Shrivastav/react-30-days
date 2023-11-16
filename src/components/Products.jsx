import React from 'react'
import { bucket } from './ListData'

export default function Products() {
  const listItems = bucket.map(bucket => (
    <li key={bucket.id} style={{ color: bucket.isFruit ? 'purple' : 'green' }}>
      {bucket.name}
    </li>
  ))

  return <ul>{listItems}</ul>
}
