import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">My App</h1>

        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/favorites" className="text-white hover:text-gray-300 transition">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}
