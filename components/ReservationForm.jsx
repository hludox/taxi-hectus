export default function ReservationForm({ selectedService }) {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input type="date" className="w-full p-2 border rounded-lg" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Heure</label>
        <input type="time" className="w-full p-2 border rounded-lg" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Lieu de prise en charge</label>
        <select className="w-full p-2 border rounded-lg" required>
          <option value="">Sélectionnez une commune</option>
          <option value="Les Abymes">Les Abymes</option>
          <option value="Capesterre-Belle-Eau">Capesterre-Belle-Eau</option>
          <option value="Saint-François">Saint-François</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Type de trajet</label>
        <input type="text" value={selectedService} readOnly className="w-full p-2 border rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Votre numéro de téléphone (obligatoire pour contact)</label>
        <input type="tel" className="w-full p-2 border rounded-lg" required placeholder="Ex. 0690 52 37 36" />
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg">Confirmer</button>
    </form>
  );
}