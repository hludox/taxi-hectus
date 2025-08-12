export default function handler(req, res) {
  if (req.method === 'POST') {
    const { date, time, pickup, destination, nom, prenom, service, phone } = req.body;

    // Récupère la clé API depuis les variables d'environnement (pas en dur !)
    const apiKey = process.env.CALCOM_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: 'Clé API non configurée' });
    }

    const url = 'https://api.cal.com/v1/bookings';

    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventTypeId: 1, // Remplace par l'ID de ton événement "taxi-guadeloupe" dans Cal.com
        start: `${date}T${time}:00Z`, // Format ISO
        end: `${date}T${time}:30Z`, // Ajuste la durée (30 min ici)
        title: `${nom} ${prenom} - ${service}`,
        description: `Pickup: ${pickup}, Destination: ${destination}, Phone: ${phone}`,
        customInputs: { nom, prenom, pickup, destination, phone },
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        res.status(200).json({ message: 'Réservation envoyée à Cal.com avec succès !' });
      })
      .catch(error => {
        res.status(500).json({ message: `Erreur : ${error.message}` });
      });
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
