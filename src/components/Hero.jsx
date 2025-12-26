export default function Hero({ pickupLocation, setPickupLocation, pickupDate, setPickupDate, dropDate, setDropDate, onSearch }) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
            Self Drive Cars in Hyderabad
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100">
            Premium cars at unbeatable prices. No hidden charges.
          </p>
        </div>

        {/* Search Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Location Input */}
            <div className="sm:col-span-2 lg:col-span-1">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                📍 Pickup Location
              </label>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder="Kukatpally, Hyderabad"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Pickup Date */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                📅 Pickup Date
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900"
              />
            </div>

            {/* Drop Date */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                📅 Drop Date
              </label>
              <input
                type="date"
                value={dropDate}
                onChange={(e) => setDropDate(e.target.value)}
                min={pickupDate || new Date().toISOString().split('T')[0]}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end sm:col-span-2 lg:col-span-1">
              <button 
                onClick={onSearch}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Search Cars
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}