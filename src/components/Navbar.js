import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// styles
import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {
  const { color, changeColor } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav onClick={() => changeColor('green')}>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}