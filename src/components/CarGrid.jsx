import CarCard from "./CarCard";

export default function CarGrid({ cars, onSelect }) {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onSelect={() => onSelect(car)} />
      ))}
    </div>
  );
}
