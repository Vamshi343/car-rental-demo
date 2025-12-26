import { useState, useEffect } from 'react';
import axios from 'axios';
import { cars } from './data/cars';
import CarCard from './components/CarCard';
import BookingModal from './components/BookingModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Filters from './components/Filters';
import Footer from './components/Footer';

export default function App() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [filter, setFilter] = useState('all');
  const [pickupDate, setPickupDate] = useState('');
  const [dropDate, setDropDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [days, setDays] = useState(1);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Calculate days automatically when dates change
  useEffect(() => {
    if (pickupDate && dropDate) {
      const start = new Date(pickupDate);
      const end = new Date(dropDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays > 0 ? diffDays : 1);
    }
  }, [pickupDate, dropDate]);

  const filteredCars = cars.filter(car => 
    filter === 'all' ? true : car.type.toLowerCase() === filter
  );

  const handleSearch = () => {
    if (!pickupLocation || !pickupDate || !dropDate) {
      alert('⚠️ Please fill in all search fields (Location, Pickup Date, Drop Date)');
      return;
    }

    const start = new Date(pickupDate);
    const end = new Date(dropDate);
    
    if (end <= start) {
      alert('⚠️ Drop date must be after pickup date');
      return;
    }

    setSearchPerformed(true);
    document.querySelector('.car-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCarSelect = (car) => {
    // If no dates selected, prompt user
    if (!pickupDate || !dropDate) {
      alert('⚠️ Please select pickup and drop dates first using the search form above');
      return;
    }
    setSelectedCar(car);
  };

  const handleProceedToPayment = async (amount) => {
    try {
      const { data: order } = await axios.post(
        'https://car-rental-demo-server.onrender.com/create-order',
        { amount }
      );

      const options = {
        key: 'rzp_test_RvPf6DDPnLFLtK',
        amount: order.amount,
        currency: 'INR',
        name: 'DriveEase',
        description: `${selectedCar.name} booking`,
        order_id: order.id,
        
        handler: function (response) {
          alert(`✅ Payment Successful!\n\nBooking confirmed for ${selectedCar.name}\n\nPickup: ${pickupLocation}\nDates: ${pickupDate} to ${dropDate}\nDuration: ${days} day${days > 1 ? 's' : ''}\n\nPayment ID: ${response.razorpay_payment_id}\n\nYou'll receive confirmation via SMS & Email.`);
          setSelectedCar(null);
        },
        
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        
        theme: {
          color: '#2563eb'
        },
        
        modal: {
          ondismiss: function() {
            alert('Payment cancelled');
          }
        }
      };

      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function (response) {
        alert(`❌ Payment Failed\n\nError: ${response.error.description}`);
      });
      
      rzp.open();
      
    } catch (err) {
      console.error('Payment error:', err);
      alert('❌ Unable to process payment. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      
      <Hero 
        pickupLocation={pickupLocation}
        setPickupLocation={setPickupLocation}
        pickupDate={pickupDate}
        setPickupDate={setPickupDate}
        dropDate={dropDate}
        setDropDate={setDropDate}
        onSearch={handleSearch}
      />
      
      <TrustBadges />
      
      <Filters filter={filter} setFilter={setFilter} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 car-grid">
        {searchPerformed && pickupLocation && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-blue-900 font-medium">
              📍 Showing cars for <span className="font-bold">{pickupLocation}</span> from <span className="font-bold">{pickupDate}</span> to <span className="font-bold">{dropDate}</span> ({days} day{days > 1 ? 's' : ''})
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <CarCard
              key={car.id}
              car={car}
              onSelect={() => handleCarSelect(car)}
            />
          ))}
        </div>
      </div>

      {selectedCar && (
        <BookingModal
          car={selectedCar}
          days={days}
          setDays={setDays}
          pickupDate={pickupDate}
          dropDate={dropDate}
          onClose={() => setSelectedCar(null)}
          onProceed={handleProceedToPayment}
        />
      )}

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}