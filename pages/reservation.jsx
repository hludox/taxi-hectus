export const dynamic = 'force-static';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Reservation() {
  const [selectedService, setSelectedService] = useState('course');

  const services = [
    { id: 'course', name: 'Course Simple', description: 'Trajet unique d\'un point A vers un point B', icon: '🚗' },
    { id: 'aeroport', name: 'Transfert Aéroport', description: 'Navette depuis/vers l\'aéroport Pôle Caraïbes', icon: '✈️' },
    { id: 'excursion', name: 'Excursion/Attente', description: 'Service avec attente sur site (plage, visite, etc.)', icon: '🏖️' },
  ];

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
            <form className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
              <div className="md:flex md:space-x-4 md:col-span-2">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input type="date" className="w-full p-2 border rounded-lg" required />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Heure</label>
                  <input type="time" className="w-full p-2 border rounded-lg" required />
                </div>
              </div>
              <div className="md:flex md:space-x-4 md:col-span-2">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Lieu de prise en charge</label>
                  <select className="w-full p-2 border rounded-lg" required>
                    <option value="">Sélectionnez une commune</option>
                    <option value="Les Abymes">Les Abymes</option>
                    <option value="Capesterre-Belle-Eau">Capesterre-Belle-Eau</option>
                    <option value="Saint-François">Saint-François</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">Destination</label>
                  <select className="w-full p-2 border rounded-lg" required>
                    <option value="">Sélectionnez une commune</option>
                    <option value="Les Abymes">Les Abymes</option>
                    <option value="Capesterre-Belle-Eau">Capesterre-Belle-Eau</option>
                    <option value="Saint-François">Saint-François</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Type de trajet</label>
                <input type="text" value={selectedService} readOnly className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                <input type="tel" className="w-full p-2 border rounded-lg" required />
              </div>
              <div className="col-span-2">
                <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">Réserver</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}