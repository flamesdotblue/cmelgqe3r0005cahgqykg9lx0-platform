import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container row between start">
        <div>
          <div className="brand">
            <span className="logo" aria-hidden>🕯️</span>
            <span className="name">Park & Ember</span>
          </div>
          <p className="muted small">Hand-poured in small batches. Inspired by America’s National Parks.</p>
        </div>
        <div className="small">
          <a href="#shop" className="link">Shop</a> · <a href="#gifts" className="link">Gifting</a> · <a className="link" href="mailto:hello@parkandember.example">Contact</a>
          <p className="muted">© {new Date().getFullYear()} Park & Ember</p>
        </div>
      </div>
    </footer>
  )
}
