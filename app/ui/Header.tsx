"use client"
import React from 'react'

type Props = { onCart: () => void; cartCount: number }

export default function Header({ onCart, cartCount }: Props) {
  return (
    <header className="header">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-2 font-semibold">
          <span className="grayscale brightness-110" aria-hidden>🕯️</span>
          <span>Park & Ember</span>
        </div>
        <nav className="flex items-center gap-2">
          <a href="#shop" className="px-2.5 py-2 rounded-lg hover:bg-card text-sm">Shop</a>
          <a href="#gifts" className="px-2.5 py-2 rounded-lg hover:bg-card text-sm">Gifting</a>
          <button className="flex items-center gap-2 bg-btn text-text border border-line rounded-full px-3 py-2 text-sm hover:border-accent" onClick={onCart} aria-label="Open cart">
            <span className="grayscale" aria-hidden>🧺</span>
            <span aria-live="polite" className="tabular-nums">{cartCount}</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
