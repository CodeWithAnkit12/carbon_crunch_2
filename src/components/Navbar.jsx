import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <h1>CarbonCrunch</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
    </nav>
  )
}
