import React from 'react'
import { Product } from '../data/products'
import type { CartItem } from '../App'

type Props = {
  open: boolean
  onClose: () => void
  items: CartItem[]
  products: Product[]
  onRemove: (index: number) => void
  onQty: (index: number, qty: number) => void
  total: number
}

export default function CartDrawer({ open, onClose, items, products, onRemove, onQty, total }: Props) {
  return (
    <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="drawer-backdrop" onClick={onClose} />
      <div className="drawer-panel" role="dialog" aria-label="Shopping cart">
        <div className="row between center">
          <h3>Cart</h3>
          <button className="icon" onClick={onClose} aria-label="Close cart">✕</button>
        </div>
        <div className="cart-list">
          {items.length === 0 && <p className="muted">Your cart is empty.</p>}
          {items.map((it, i) => {
            const p = products.find((p) => p.id === it.id)!
            const line = p.price * it.qty + (it.giftWrap ? 6 * it.qty : 0)
            return (
              <div key={i} className="cart-line">
                <img className="cart-thumb" src={p.image} alt="" />
                <div className="cart-info">
                  <div className="row between start">
                    <div>
                      <div className="cart-title">{p.name}</div>
                      <div className="muted small">{p.park}</div>
                      {it.giftWrap && <div className="small">🎁 Gift wrap{it.note ? ': ' + it.note : ''}</div>}
                    </div>
                    <div className="price">${line.toFixed(2)}</div>
                  </div>
                  <div className="row between center">
                    <div className="qty">
                      <button className="icon" aria-label="Decrease quantity" onClick={() => onQty(i, it.qty - 1)}>−</button>
                      <input aria-label="Quantity" value={it.qty} onChange={(e) => onQty(i, parseInt(e.target.value || '1', 10))} />
                      <button className="icon" aria-label="Increase quantity" onClick={() => onQty(i, it.qty + 1)}>+</button>
                    </div>
                    <button className="link" onClick={() => onRemove(i)}>Remove</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="cart-summary">
          <div className="row between center">
            <span>Subtotal</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <p className="muted small">Shipping and taxes calculated at checkout.</p>
          <a className="btn btn-primary block" href={`mailto:orders@parkandember.example?subject=Order%20Inquiry&body=${encodeURIComponent(formatOrderEmail(items, products, total))}`}>Checkout via Email</a>
          <p className="muted small center">Demo checkout uses email. Replace with your provider later.</p>
        </div>
      </div>
    </div>
  )
}

function formatOrderEmail(items: CartItem[], products: Product[], total: number) {
  const lines = items.map((it) => {
    const p = products.find((p) => p.id === it.id)!
    const gift = it.giftWrap ? ` | Gift wrap${it.note ? ' — ' + it.note : ''}` : ''
    return `- ${p.name} x${it.qty} — $${p.price.toFixed(2)}${gift}`
  })
  return `Hi Park & Ember,%0D%0A%0D%0AI'd like to purchase:%0D%0A${lines.join('%0D%0A')}%0D%0A%0D%0ASubtotal: $${total.toFixed(2)}%0D%0A%0D%0AShipping Address:%0D%0AName:%0D%0AStreet:%0D%0ACity, State ZIP:%0D%0A%0D%0AThank you!`
}
