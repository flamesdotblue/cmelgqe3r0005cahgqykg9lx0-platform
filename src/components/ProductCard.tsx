import React, { useState } from 'react'
import { Product } from '../data/products'
import ScentBadge from './ScentBadge'
import GiftOptions from './GiftOptions'

type Props = { product: Product; onAdd: (id: string, opts?: { giftWrap?: boolean; note?: string }) => void }

export default function ProductCard({ product, onAdd }: Props) {
  const [giftWrap, setGiftWrap] = useState(false)
  const [note, setNote] = useState('')

  return (
    <article className="card">
      <div className="media">
        <img src={product.image} alt={product.name + ' candle set on nature scene'} loading="lazy" />
      </div>
      <div className="card-body">
        <div className="row between start">
          <h3 className="card-title">{product.name}</h3>
          <span className="price">${product.price.toFixed(2)}</span>
        </div>
        <p className="muted">{product.park}</p>
        <div className="scent-row">
          {product.scent.map((n) => (
            <ScentBadge key={n} label={n} />
          ))}
        </div>
        <p className="desc">{product.description}</p>
        <GiftOptions enabled={giftWrap} note={note} onToggle={setGiftWrap} onNote={setNote} />
        <div className="row gap">
          <button className="btn btn-primary" onClick={() => onAdd(product.id, { giftWrap, note: giftWrap ? note : undefined })}>Add to cart</button>
          <a className="btn" href={product.photoCredit} target="_blank" rel="noreferrer">Photo credit</a>
        </div>
      </div>
    </article>
  )
}
