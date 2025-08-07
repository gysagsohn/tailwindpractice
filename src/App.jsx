// File: src/App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen font-sans bg-[--bg-default] text-[--text-primary]">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 pt-20 md:pt-24 lg:ml-[1%] lg:pl-[13%] lg:pt-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
