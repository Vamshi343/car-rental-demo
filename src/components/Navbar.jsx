export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl font-bold">🚗</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                DriveEase
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Premium Car Rentals</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">Browse Cars</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">How It Works</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all text-sm">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-sm">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
}