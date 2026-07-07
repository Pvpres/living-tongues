import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import PhonemeGrid from './components/PhonemeGrid'
import WordDetail from './components/WordDetail'
import PhonemeDetail from './components/PhonemeDetail'

function NavBar() {
  return (
    <nav className="flex items-center gap-6 border-b border-accent/30 bg-background px-6 py-4">
      <Link to="/" className="text-xl font-semibold text-accent">
        Living Tongues
      </Link>
      <div className="flex gap-4 text-sm">
        <Link to="/" className="text-foreground hover:text-accent">
          Browse Sounds
        </Link>
        <Link to="/about" className="text-foreground hover:text-accent">
          About
        </Link>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <NavBar />
        <main className="px-6 py-8">
          <Routes>
            <Route path="/" element={<PhonemeGrid />} />
            <Route path="/word/:id" element={<WordDetail />} />
            <Route path="/phoneme/:ipa" element={<PhonemeDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
