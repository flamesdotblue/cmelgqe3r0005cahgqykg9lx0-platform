import React, { useMemo, useState } from 'react'
import { products as catalog } from './data/products'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'

export type CartItem = { id: string; qty: number; giftWrap: boolean; note?: string }

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const products = useMemo(() => catalog, [])

  const addToCart = (id: string, opts?: { giftWrap?: boolean; note?: string }) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.id === id && (i.note || '') === (opts?.note || '') && !!i.giftWrap === !!opts?.giftWrap)
      if (idx > -1) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 }
        return copy
      }
      return [...prev, { id, qty: 1, giftWrap: !!opts?.giftWrap, note: opts?.note }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (index: number) => setCart((prev) => prev.filter((_, i) => i !== index))
  const updateQty = (index: number, qty: number) => setCart((prev) => prev.map((it, i) => (i === index ? { ...it, qty: Math.max(1, qty) } : it)))

  const total = cart.reduce((sum, item) => {
    const p = products.find((p) => p.id === item.id)!
    const line = p.price * item.qty + (item.giftWrap ? 6 * item.qty : 0)
    return sum + line
  }, 0)

  return (
    <div className="app">
      <Header onCart={() => setCartOpen(true)} cartCount={cart.reduce((n, i) => n + i.qty, 0)} />
      <main>
        <Hero onShop={() => {
          const el = document.getElementById('shop')
          el?.scrollIntoView({ behavior: 'smooth' })
        }} />
        <section id="shop" className="section">
          <div className="container">
            <h2 className="section-title">Inspired by the wild</h2>
            <p className="section-sub">Hand-poured soy candles with layered scent notes that evoke your favorite National Parks.</p>
            <ProductGrid products={products} onAdd={addToCart} />
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} products={products} onRemove={removeFromCart} onQty={updateQty} total={total} />
    </div>
  )
}
