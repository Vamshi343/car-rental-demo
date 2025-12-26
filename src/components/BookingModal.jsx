export default function BookingModal({ car, days, setDays, pickupDate, dropDate, onClose, onProceed }) {
  const total = car.price * days;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl transform animate-slideUp overflow-hidden max-h-[90vh] flex flex-col">
        {/* Compact Header with Image - FIXED HEIGHT */}
        <div className="relative h-48 flex-shrink-0">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover object-center"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
          >
            <span className="text-lg">✕</span>
          </button>
          <div className="absolute bottom-3 left-4 bg-white px-3 py-1 rounded-lg shadow-lg">
            <div className="flex items-center gap-1 text-sm">
              <span className="text-yellow-500">⭐</span>
              <span className="font-bold">{car.rating}</span>
              <span className="text-gray-400">({car.trips} trips)</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{car.name}</h2>
          <p className="text-gray-500 text-sm mb-4">{car.type} • {car.fuel} • {car.seats} Seats</p>

          {/* Show selected dates */}
          {pickupDate && dropDate && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                📅 <span className="font-semibold">{pickupDate}</span> to <span className="font-semibold">{dropDate}</span>
              </p>
            </div>
          )}

          {/* Pricing Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <p className="text-xs text-gray-600 mb-1">Price per day</p>
              <p className="text-xl font-bold text-gray-900">₹{car.price}</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
              <p className="text-xs text-gray-600 mb-1">Duration</p>
              <div className="text-xl font-bold text-gray-900">{days} day{days > 1 ? 's' : ''}</div>
            </div>
          </div>

          {/* Total Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-4 border border-green-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-600 mb-1">Total Amount</p>
                <p className="text-3xl font-bold text-gray-900">₹{total}</p>
              </div>
              <div className="text-right text-xs">
                <p className="text-green-700 font-medium">✓ Insurance</p>
                <p className="text-green-700 font-medium">✓ Unlimited KM</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => onProceed(total)}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all"
            >
              Proceed to Payment
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-3">
            🔒 Secure payment powered by Razorpay
          </p>
        </div>
      </div>
    </div>
  );
}