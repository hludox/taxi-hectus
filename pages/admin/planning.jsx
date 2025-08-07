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
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        {!isAuthenticated ? (
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md w-full">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Connexion Admin</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 font-semibold"
              >
                Se connecter
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl w-full">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Gérer le Planning</h1>
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">Instructions :</h3>
                <ol className="list-decimal list-inside text-sm text-green-700 space-y-1">
                  <li>Connectez-vous à Cal.com pour bloquer des créneaux</li>
                  <li>Ajoutez des réservations manuelles si nécessaire</li>
                  <li>Vérifiez les disponibilités avant validation</li>
                </ol>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://cal.com/sarl-taxi-hectus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
                >
                  📅 Ouvrir Cal.com
                </a>
                <button 
                  onClick={() => setIsAuthenticated(false)}
                  className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 font-semibold"
                >
                  🚪 Déconnexion
                </button>
              </div>
              
              <div className="text-center text-sm text-gray-500">
                <p>Planning mis à jour en temps réel</p>
                <p>Dernière connexion : {new Date().toLocaleString('fr-FR')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}