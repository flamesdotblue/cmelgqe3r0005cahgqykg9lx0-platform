import React from 'react'

type Props = { onCart: () => void; cartCount: number }

export default function Header({ onCart, cartCount }: Props) {
  return (
    <header className="header">
      <div className="container row between center">
        <div className="brand">
          <span className="logo" aria-hidden>🕯️</span>
          <span className="name">Park & Ember</span>
        </div>
        <nav className="nav">
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#gifts" className="nav-link">Gifting</a>
          <button className="cart-btn" onClick={onCart} aria-label="Open cart">
            <span className="cart-icon" aria-hidden>🧺</span>
            <span className="cart-count" aria-live="polite">{cartCount}</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
