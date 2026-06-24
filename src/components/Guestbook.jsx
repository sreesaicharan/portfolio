import { useState, useEffect } from "react"
import "./Guestbook.css"

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const headers = {
  "Content-Type": "application/json",
  "apikey": SUPABASE_KEY,
  "Authorization": `Bearer ${SUPABASE_KEY}`
}

export function Guestbook() {
  const [entries, setEntries] = useState([])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    fetchEntries()
  }, [])

  function fetchEntries() {
    fetch(`${SUPABASE_URL}/rest/v1/guestbook?order=created_at.desc`, { headers })
      .then(res => res.json())
      .then(setEntries)
  }

  function handleSubmit() {
    if (!name.trim() || !message.trim()) return
    setLoading(true)

    fetch(`${SUPABASE_URL}/rest/v1/guestbook`, {
      method: "POST",
      headers,
      body: JSON.stringify({ name, message })
    })
    .then(() => {
      setName("")
      setMessage("")
      setSubmitted(true)
      fetchEntries()
      setTimeout(() => setSubmitted(false), 3000)
    })
    .finally(() => setLoading(false))
  }

  return (
    <section className="guestbook" id="contact">
      <span className="guestbook-label">guestbook</span>
      <p className="guestbook-text">Write your feedback or tell something.</p>
      <div className="guestbook-inner">

        <div className="guestbook-form">
          <input
            className="gb-input"
            placeholder="your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className="gb-input"
            placeholder="leave a message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button
            className="gb-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "signing..." : submitted ? "signed ✓" : "sign the book →"}
          </button>
        </div>

        <div className="guestbook-entries">
          {entries.length === 0 && (
            <p className="gb-empty">No entries yet — be the first :)</p>
          )}
          {entries.map(entry => (
            <div key={entry.id} className="gb-entry">
              <span className="gb-name">{entry.name}</span><br />
             <span className="gb-message">{entry.message}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}