"use client"
import React from 'react'

type Props = { onShop: () => void }

export default function Hero({ onShop }: Props) {
  return (
    <section className="hero">
      <div className="hero-bg" role="img" aria-label="Sunset over a mountain valley with pine trees" />
      <div className="container hero-content">
        <h1 className="hero-title">Bring the Parks Home</h1>
        <p className="hero-sub">A line of small-batch candles inspired by the trails, forests, and starry skies of America\'s National Parks.</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onShop}>Shop Candles</button>
          <a className="btn" href="#gifts">Gift Options</a>
        </div>
      </div>
    </section>
  )
}
