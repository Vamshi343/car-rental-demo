export default function CarCard({ car, onSelect }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="relative overflow-hidden h-56">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-sm">⭐</span>
            <span className="font-bold text-sm">{car.rating}</span>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {car.trips} trips
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{car.type} • {car.fuel} • {car.seats} Seats</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-xs font-medium border border-green-200">
            ✓ Unlimited KM
          </span>
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium border border-blue-200">
            ✓ Free Cancellation
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-3xl font-bold text-gray-900">₹{car.price}</p>
            <p className="text-sm text-gray-500">per day</p>
          </div>
          <button
            onClick={onSelect}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}