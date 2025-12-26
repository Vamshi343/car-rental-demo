export default function Filters({ filter, setFilter }) {
  const filters = [
    { key: 'all', label: 'All Cars', icon: '🚗' },
    { key: 'hatchback', label: 'Hatchback', icon: '🚙' },
    { key: 'sedan', label: 'Sedan', icon: '🚘' },
    { key: 'suv', label: 'SUV', icon: '🚐' },
    { key: 'muv', label: 'MUV', icon: '🚌' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
              filter === f.key
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            <span className="mr-2">{f.icon}</span>
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}