"use client"
import React from 'react'

type Props = {
  enabled: boolean
  note: string
  onToggle: (v: boolean) => void
  onNote: (v: string) => void
}

export default function GiftOptions({ enabled, note, onToggle, onNote }: Props) {
  return (
    <div id="gifts" className="border border-dashed border-line rounded-xl p-3">
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={enabled} onChange={(e) => onToggle(e.target.checked)} />
        <span>Add gift packaging (+$6)</span>
      </label>
      {enabled && (
        <div className="mt-2">
          <label className="block">
            <span className="muted text-xs">Gift note (optional)</span>
            <textarea value={note} onChange={(e) => onNote(e.target.value)} rows={2} maxLength={160} placeholder="A little something to make your day brighter." className="mt-1 w-full bg-[#0f1112] text-text border border-line rounded-lg p-2 text-sm" />
          </label>
        </div>
      )}
    </div>
  )}
