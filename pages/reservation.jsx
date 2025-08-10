import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import ReservationForm from '../components/ReservationForm';

export default function Reservation() {
  const [selectedService, setSelectedService] = useState('course');
  const services = [
    { id: 'course', name: 'Course Simple', description: 'Trajet de point A vers B', icon: '🚗' },
    { id: 'aeroport', name: 'Transfert Aéroport', description: 'Navette aéroport Pole Caraibes', icon: '✈️' },
    { id: 'excursion', name: 'Excursion/Attente', description: 'Service avec attente (plage, visite)', icon: '🏖️' },
  ];

  return (
    <>
      <Head>
        <title>Réserver Taxi Hectus | Guadeloupe 24/7</title>
        <meta name="description" content="Réservez votre taxi en Guadeloupe (Capesterre-Belle-Eau, Saint-François, Les Abymes, etc.). Trajets aéroport, touristiques, locaux. Confirmation par e-mail/SMS." />
        <meta name="keywords" content="taxi Guadeloupe, réserver taxi Capesterre-Belle-Eau, taxi Saint-François, taxi aéroport Pointe-à-Pitre, chauffeur privé Guadeloupe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://sarl-taxi-hectus.vercel.app/reservation" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-green-700">Taxi Hectus 971</Link>
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-600 hover:text-green-600 px-3 py-2">Accueil</Link>
                <span className="text-green-700 px-3 py-2">Réserver</span>
                <a href="tel:+590690523736" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">0690 52 37 36</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Réserver Votre Taxi</h1>
          <p className="text-lg text-gray-600 mb-8">Réservez en quelques clics, confirmation immédiate.</p>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Choisissez votre service</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedService === service.id ? 'border-green-600 bg-green-50' : 'border-gray-200 bg-white hover:border-green-300'}`}
                >
                  <div className="text-2xl mb-2">{service.icon}</div>
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Détails de la réservation</h2>
            <ReservationForm selectedService={selectedService} />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Choisir une date et heure</h2>
            <iframe
              src="https://cal.com/ludovic-hectus-jmw8zo/taxi-guadeloupe?embed=true"
              width="100%"
              height="600"
              frameBorder="0"
              title="Réservation Taxi Hectus"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
