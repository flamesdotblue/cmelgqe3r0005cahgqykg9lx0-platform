import React from 'react'

type Props = {
  enabled: boolean
  note: string
  onToggle: (v: boolean) => void
  onNote: (v: string) => void
}

export default function GiftOptions({ enabled, note, onToggle, onNote }: Props) {
  return (
    <div id="gifts" className="gift">
      <label className="checkbox">
        <input type="checkbox" checked={enabled} onChange={(e) => onToggle(e.target.checked)} />
        <span>Add gift packaging (+$6)</span>
      </label>
      {enabled && (
        <div className="gift-note">
          <label>
            <span className="muted">Gift note (optional)</span>
            <textarea value={note} onChange={(e) => onNote(e.target.value)} rows={2} maxLength={160} placeholder="A little something to make your day brighter." />
          </label>
        </div>
      )}
    </div>
  )
}
