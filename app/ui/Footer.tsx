import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="grayscale" aria-hidden>🕯️</span>
            <span>Park & Ember</span>
          </div>
          <p className="muted small mt-1">Hand-poured in small batches. Inspired by America’s National Parks.</p>
        </div>
        <div className="small text-right">
          <a href="#shop" className="link">Shop</a>
          <span className="mx-1">·</span>
          <a href="#gifts" className="link">Gifting</a>
          <span className="mx-1">·</span>
          <a className="link" href="mailto:hello@parkandember.example">Contact</a>
          <p className="muted mt-1">© {new Date().getFullYear()} Park & Ember</p>
        </div>
      </div>
    </footer>
  )
}
