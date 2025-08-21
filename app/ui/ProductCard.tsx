"use client"
import React, { useState } from 'react'
import { Product } from '../products'
import ScentBadge from './ScentBadge'
import GiftOptions from './GiftOptions'

type Props = { product: Product; onAdd: (id: string, opts?: { giftWrap?: boolean; note?: string }) => void }

export default function ProductCard({ product, onAdd }: Props) {
  const [giftWrap, setGiftWrap] = useState(false)
  const [note, setNote] = useState('')

  return (
    <article className="card">
      <div className="bg-[#0f1011] aspect-[4/3]">
        {/* Using native img for simplicity */}
        <img src={product.image} alt={product.name + ' candle set on nature scene'} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="card-body">
        <div className="flex items-start justify-between">
          <h3 className="m-0 text-base font-semibold">{product.name}</h3>
          <span className="font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <p className="muted text-sm">{product.park}</p>
        <div className="flex flex-wrap gap-1.5">
          {product.scent.map((n) => (
            <ScentBadge key={n} label={n} />
          ))}
        </div>
        <p className="text-[#d7d7d2] text-sm">{product.description}</p>
        <GiftOptions enabled={giftWrap} note={note} onToggle={setGiftWrap} onNote={setNote} />
        <div className="flex gap-2">
          <button className="btn btn-primary" onClick={() => onAdd(product.id, { giftWrap, note: giftWrap ? note : undefined })}>Add to cart</button>
          <a className="btn" href={product.photoCredit} target="_blank" rel="noreferrer">Photo credit</a>
        </div>
      </div>
    </article>
  )
}
