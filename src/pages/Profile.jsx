import { useState } from 'react'

export default function Profile() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      {/* Profile Info */}
      <div className="flex flex-col items-center bg-card p-6 rounded-xl shadow">
        <img
          src="https://gysohn.com/assets/logo-DUPwCHqT.png"
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-cta"
        />
        <h2 className="mt-4 text-2xl font-semibold text-primary">Jane Doe</h2>
        <p className="text-secondary">Frontend Developer from Sydney</p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 bg-cta hover:bg-cta-hover text-white px-4 py-2 rounded-lg transition"
        >
          Update Info
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-default bg-opacity-50 z-50">
          <div className="bg-card rounded-lg shadow-xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-lg font-medium text-primary">Confirm Update</h3>
            <p className="text-secondary">Are you sure you want to update your profile info?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-border-muted rounded-lg hover:bg-placeholder text-primary"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowModal(false)
                  alert('Profile updated!')
                }}
                className="px-4 py-2 bg-success text-white rounded-lg hover:brightness-110"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}