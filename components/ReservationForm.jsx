import { useState } from 'react';

export default function ReservationForm({ selectedService }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    pickup: '',
    destination: '',
    passengers: '1',
    phone: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const communes = [
    'Les Abymes', 'Baie-Mahault', 'Le Gosier', 'Pointe-à-Pitre',
    'Sainte-Anne', 'Saint-François', 'Le Moule', 'Morne-à-l\'Eau',
    'Petit-Canal', 'Port-Louis', 'Anse-Bertrand', 'Lamentin',
    'Capesterre-Belle-Eau', 'Gourbeyre', 'Trois-Rivières',
    'Baillif', 'Basse-Terre', 'Saint-Claude', 'Goyave',
    'Petit-Bourg', 'Sainte-Rose', 'Deshaies', 'Pointe-Noire',
    'Bouillante', 'Vieux-Habitants', 'Terre-de-Haut', 'Terre-de-Bas'
  ];

  const serviceNames = {
    course: 'Course Simple',
    aeroport: 'Transfert Aéroport',
    excursion: 'Excursion/Attente'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation envoi rapide
    setTimeout(() => {
      alert(`Demande envoyée !\nService: ${serviceNames[selectedService]}\nDépart: ${formData.pickup}\nArrivée: ${formData.destination}\nTél: ${formData.phone}\n\nVous recevrez une confirmation par SMS.`);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Service sélectionné</label>
        <div className="w-full p-2 bg-green-50 border border-green-200 rounded-lg text-green-800 font-medium">
          {serviceNames[selectedService]}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date *</label>
          <input 
            type="date" 
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Heure *</label>
          <input 
            type="time" 
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500" 
            required 
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Lieu de prise en charge *</label>
        <select 
          name="pickup"
          value={formData.pickup}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500" 
          required
        >
          <option value="">Sélectionnez une commune</option>
          <option value="Aéroport Pointe-à-Pitre">Aéroport Pointe-à-Pitre</option>
          {communes.map(commune => (
            <option key={commune} value={commune}>{commune}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Destination *</label>
        <select 
          name="destination"
          value={formData.destination}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500" 
          required
        >
          <option value="">Sélectionnez une destination</option>
          <option value="Aéroport Pointe-à-Pitre">Aéroport Pointe-à-Pitre</option>
          {communes.map(commune => (
            <option key={commune} value={commune}>{commune}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Téléphone *</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="0690 XX XX XX"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Passagers</label>
          <select 
            name="passengers"
            value={formData.passengers}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="1">1 passager</option>
            <option value="2">2 passagers</option>
            <option value="3">3 passagers</option>
            <option value="4">4 passagers</option>
            <option value="5+">5+ passagers</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Informations complémentaires</label>
        <textarea 
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows="3"
          placeholder="Précisions sur l'adresse, bagages..."
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-green-600 hover:bg-green-700 text-white'
        }`}
      >
        {isSubmitting ? 'Envoi...' : 'Confirmer la demande'}
      </button>
    </form>
  );
}