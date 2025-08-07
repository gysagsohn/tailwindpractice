
import { useState } from 'react'

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  const handleCardClick = (title, imageUrl) => {
    setModalTitle(title)
    setModalImage(imageUrl)
    setShowModal(true)
  }

  return (
    <div className="space-y-10">
      {/* Top card */}
      <div className="bg-default p-8 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 min-h-[50vh]">
        <div className="space-y-2 sm:order-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
            Learning Tailwind with React & Vite
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-center sm:text-left text-secondary">
            This is my first responsive frontend project using Tailwind CSS with React and Vite.
            I'm using this build to explore utility-first styling, responsive layouts, and clean component structure.
          </p>
        </div>

        <img
          src="https://gysohn.com/assets/portfolio-v2-snippet-DFQVM897.png"
          alt="Card visual"
          className="w-full sm:w-48 h-48 rounded-lg object-cover"
        />
      </div>

      {/* 3 flex cards */}
      <div className="flex flex-col md:flex-row gap-6">
        {['Card 1', 'Card 2', 'Card 3'].map((title, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(title, `https://gysohn.com/assets/coderAcademy-C_czpH6q.png`)}
            className="flex-1 bg-default p-6 rounded-xl shadow text-center cursor-pointer transform transition hover:scale-105 hover:shadow-lg space-y-4"
          >
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="flex flex-col gap-2 items-center">
              <button className="bg-cta hover:bg-[--btn-cta-hover] text-primary px-4 py-2 rounded-lg">
                Primary CTA
              </button>
              <button className="bg-success hover:brightness-110 text-primary px-4 py-2 rounded-lg">
                Success
              </button>
              <button className="bg-warning hover:brightness-110 text-primary px-4 py-2 rounded-lg">
                Warning
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-default bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-xl shadow-xl max-w-md w-full text-center space-y-4">
            <img src={modalImage} alt="Modal visual" className="rounded-lg w-full object-cover h-48" />
            <h3 className="text-xl font-semibold">{modalTitle}</h3>
            <p className="text-secondary">
              I’m using this project to practice building interactive UI with React and Tailwind CSS.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-cta hover:bg-cta-hover text-primary px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
