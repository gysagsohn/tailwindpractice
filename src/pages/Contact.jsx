// File: src/pages/Contact.jsx
import { useState } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleNotAvailable = () => {
    alert('This form isn’t functional yet.\nIf you’d like to contact me, please reach out on LinkedIn or Instagram below!')
  }

  return (
    <form
      className="max-w-md mx-auto space-y-4 bg-card p-6 rounded-xl shadow text-center"
      onSubmit={(e) => {
        e.preventDefault()
        handleNotAvailable()
      }}
    >
      <div>
        <label className="block mb-1 font-medium text-left">Name</label>
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-border-muted px-3 py-2 rounded-md placeholder-placeholder"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium text-left">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-border-muted px-3 py-2 rounded-md placeholder-placeholder"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium text-left">Message</label>
        <textarea
          rows={4}
          placeholder="Type your message..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-border-muted px-3 py-2 rounded-md placeholder-placeholder"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 pt-2">
        <button
          type="submit"
          className="bg-cta hover:bg-cta-hover text-white px-6 py-2 rounded-md"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleNotAvailable}
          className="bg-warning hover:brightness-110 text-white px-6 py-2 rounded-md"
        >
          Clear
        </button>
      </div>

      {/* Social Icons */}
      <div className="pt-6 border-t border-border-muted flex justify-center gap-6 text-[32px]">
        <a
          href="https://www.linkedin.com/in/gysohn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:opacity-80 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/gysagsohn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E1306C] hover:opacity-80 transition"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </form>
  )
}
