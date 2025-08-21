import React, { useState } from 'react'
import { Product } from '../data/products'
import ProductCard from './ProductCard'

type Props = { products: Product[]; onAdd: (id: string, opts?: { giftWrap?: boolean; note?: string }) => void }

export default function ProductGrid({ products, onAdd }: Props) {
  const [query, setQuery] = useState('')

  const shown = products.filter((p) =>
    (p.name + ' ' + p.park + ' ' + p.scent.join(' ')).toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <div className="filter-bar">
        <input aria-label="Search scents or parks" placeholder="Search scents or parks" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="grid">
        {shown.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </div>
  )
}
