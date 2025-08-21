"use client"
import React, { useState } from 'react'
import { Product } from '../products'
import ProductCard from './ProductCard'

type Props = { products: Product[]; onAdd: (id: string, opts?: { giftWrap?: boolean; note?: string }) => void }

export default function ProductGrid({ products, onAdd }: Props) {
  const [query, setQuery] = useState('')

  const shown = products.filter((p) =>
    (p.name + ' ' + p.park + ' ' + p.scent.join(' ')).toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <div className="flex justify-end my-2.5">
        <input aria-label="Search scents or parks" placeholder="Search scents or parks" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full sm:w-80 bg-card border border-line rounded-xl px-3 py-2 text-sm" />
      </div>
      <div className="grid-cards">
        {shown.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </div>
  )
}
