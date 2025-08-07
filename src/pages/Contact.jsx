export default function Contact() {
  return (
    <form className="max-w-md mx-auto space-y-4">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input type="text" className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input type="email" className="w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea className="w-full border px-3 py-2 rounded" rows={4} />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  )
}
