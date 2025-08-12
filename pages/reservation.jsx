export const dynamic = 'force-static';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Reservation() {
  const [selectedService, setSelectedService] = useState('course');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showRecap, setShowRecap] = useState(false);
  const [formData, setFormData] = useState({});

  const services = [
    { id: 'course', name: 'Course Simple', description: 'Trajet unique d\'un point A vers un point B', icon: '🚗' },
    { id: 'aeroport', name: 'Transfert Aéroport', description: 'Navette depuis/vers l\'aéroport Pôle Caraïbes', icon: '✈️' },
    { id: 'excursion', name: 'Excursion/Attente', description: 'Service avec attente sur site (plage, visite, etc.)', icon: '🏖️' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setFormData({
      date: data.get('date'),
      time: data.get('time'),
      pickup: data.get('pickup'),
      destination: data.get('destination'),
      nom: data.get('nom'),
      prenom: data.get('prenom'),
      service: selectedService,
      phone: data.get('phone'),
    });
    setShowRecap(true);
  };

  const confirmReservation = () => {
    // Envoi manuel (pas auto pour éviter les bots)
    alert('Réservation confirmée ! Validation définitive. Vous recevrez un appel de ma part.');
    setShowRecap(false);
  };

  return (
    <>
      <Head>
        <title>Réserver un Taxi en Guadeloupe | Taxi 971 - Réservation Immédiate</title>
        <meta name="description" content="Réservez votre taxi en Guadeloupe en quelques clics. Service disponible dans toutes les communes : Les Abymes, Gosier, Saint-François, Pointe-à-Pitre. Confirmation immédiate." />
        <meta name="keywords" content="réserver taxi Guadeloupe, réservation taxi 971, booking taxi Antilles, taxi Les Abymes réservation, taxi Gosier booking, réserver transport Guadeloupe" />
        <link rel="canonical" href="https://votre-site.vercel.app/reservation" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold text-green-700">Taxi Guadeloupe 971</Link>
              </div>
              <div className="hidden md:flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium">Accueil</Link>
                <span className="text-green-700 px-3 py-2 text-sm font-medium">Réserver</span>
                <Link href="/blog" className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium">Blog</Link>
                <a href="tel:+590690123456" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">0690 12 34 56</a>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Réserver Votre Taxi en Guadeloupe</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Sélectionnez votre service et réservez votre course en quelques minutes. Confirmation immédiate et tarifs transparents.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Choisissez votre service</h2>
            <select className="sm:hidden w-full p-3 border rounded-lg bg-white" value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
              {services.map((service) => (
                <option key={service.id} value={service.id}>{service.name} - {service.description}</option>
              ))}
            </select>
            <div className="hidden sm:grid md:grid-cols-3 gap-4">
              {services.map((service) => (
                <div key={service.id} onClick={() => setSelectedService(service.id)} className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${selectedService === service.id ? 'border-green-600 bg-green-50' : 'border-gray-200 bg-white hover:border-green-300'}`}>
                  <div className="text-center">
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Détails de votre réservation</h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
              <div className="md:flex md:space-x-4 md:col-span-2">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <input type="text" name="nom" className="w-full p-2 border rounded-lg" required />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <input type="text" name="prenom" className="w-full p-2 border rounded-lg" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                <input type="tel" name="phone" className="w-full p-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Type de trajet</label>
                <input type="text" value={selectedService} readOnly name="service" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="md:flex md:space-x-4 md:col-span-2">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input type="date" name="date" className="w-full p-2 border rounded-lg" required />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Heure</label>
                  <input type="time" name="time" className="w-full p-2 border rounded-lg" required />
                </div>
              </div>
              <div className="md:flex md:space-x-4 md:col-span-2">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Lieu de prise en charge</label>
                  <select name="pickup" className="w-full p-2 border rounded-lg" required>
                    <option value="">Sélectionnez une commune</option>
                    <option value="Les Abymes">Les Abymes</option>
                    <option value="Capesterre-Belle-Eau">Capesterre-Belle-Eau</option>
                    <option value="Saint-François">Saint-François</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Destination</label>
                  <select name="destination" className="w-full p-2 border rounded-lg" required>
                    <option value="">Sélectionnez une commune</option>
                    <option value="Les Abymes">Les Abymes</option>
                    <option value="Capesterre-Belle-Eau">Capesterre-Belle-Eau</option>
                    <option value="Saint-François">Saint-François</option>
                  </select>
                </div>
              </div>
              <div className="col-span-2">
                <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">Réserver</button>
              </div>
            </form>
          </div>

          {/* Bouton pour le calendrier */}
          <button onClick={() => setShowCalendar(!showCalendar)} className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 mb-4">Planning des rendez-vous</button>
          {showCalendar && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Aperçu des disponibilités</h2>
              <iframe
                src="https://www.cal.com/ludovic-hectus-jmw8zo/taxi-guadeloupe?embed=true"
                width="100%"
                height="600"
                frameBorder="0"
                title="Aperçu des disponibilités Taxi Hectus"
                className="w-full"
              ></iframe>
            </div>
          )}

          {/* Modal de récapitulatif */}
          {showRecap && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Confirmer votre réservation</h3>
                <p className="mb-2"><strong>Nom :</strong> {formData.nom}</p>
                <p className="mb-2"><strong>Prénom :</strong> {formData.prenom}</p>
                <p className="mb-2"><strong>Téléphone :</strong> {formData.phone}</p>
                <p className="mb-2"><strong>Type de trajet :</strong> {formData.service}</p>
                <p className="mb-2"><strong>Date :</strong> {formData.date}</p>
                <p className="mb-2"><strong>Heure :</strong> {formData.time}</p>
                <p className="mb-2"><strong>Lieu de prise en charge :</strong> {formData.pickup}</p>
                <p className="mb-2"><strong>Destination :</strong> {formData.destination}</p>
                <p className="text-red-600 mb-4">Attention : Validation définitive, seul moi (le propriétaire) peux modifier.</p>
                <div className="flex justify-end space-x-4">
                  <button onClick={() => setShowRecap(false)} className="bg-gray-500 text-white p-2 rounded-lg">Annuler</button>
                  <button onClick={confirmReservation} className="bg-green-600 text-white p-2 rounded-lg">Confirmer</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}