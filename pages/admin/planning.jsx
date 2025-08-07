// Cette page permet à l'admin de gérer le planning Cal.com
import { useState } from 'react';
import Head from 'next/head';

export default function Planning() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'taxi971') {
      setIsAuthenticated(true);
    } else {
      alert('Mot de passe incorrect');
    }
  };

  return (
    <>
      <Head>
        <title>Admin - Taxi Hectus</title>
        <meta name="description" content="Page admin pour gérer le planning des réservations." />
      </Head>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        {!isAuthenticated ? (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Connexion Admin</h1>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                className="w-full p-2 border rounded-lg mb-4"
              />
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg">Connexion</button>
            </form>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Gérer le Planning</h1>
            <p className="text-gray-600 mb-4">Connectez-vous à Cal.com pour bloquer des créneaux ou ajouter des réservations.</p>
            <a href="https://cal.com/sarl-taxi-hectus" className="bg-green-600 text-white px-4 py-2 rounded-lg">Aller sur Cal.com</a>
          </div>
        )}
      </div>
    </>
  );
}
