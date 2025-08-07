import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Taxi Hectus Guadeloupe | Réservez Votre Taxi 24/7</title>
        <meta name="description" content="Réservez un taxi à Capesterre-Belle-Eau, Les Abymes, Saint-François, et toutes les communes de Guadeloupe. Transferts aéroport, trajets touristiques, locaux. Confirmation immédiate." />
        <meta name="keywords" content="taxi Guadeloupe, réservation taxi Capesterre-Belle-Eau, taxi Saint-François, taxi aéroport Pointe-à-Pitre, chauffeur privé Guadeloupe" />
        <link rel="canonical" href="https://sarl-taxi-hectus.vercel.app" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url(/images/background.webp)" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">Sarl Taxi Hectus Guadeloupe</h1>
        <p className="text-xl text-white text-center mb-8 max-w-2xl">Réservez votre taxi 24/7 dans toutes les communes de Guadeloupe. Confort, ponctualité, trajets aéroport, touristiques, locaux.</p>
        <Link href="/reservation" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">Réserver Maintenant</Link>
        <div className="mt-8 flex space-x-4">
          <a href="tel:+590690523736" title="Appeler"><Image src="/images/phone.svg" alt="Téléphone" width={32} height={32} /></a>
          <a href="sms:+590690523736" title="Envoyer un SMS"><Image src="/images/sms.svg" alt="SMS" width={32} height={32} /></a>
          <a href="https://wa.me/0590690523736" title="WhatsApp"><Image src="/images/whatsapp.svg" alt="WhatsApp" width={32} height={32} /></a>
          <a href="mailto:hludox@gmail.com" title="Envoyer un e-mail"><Image src="/images/email.svg" alt="E-mail" width={32} height={32} /></a>
          <a href="https://www.facebook.com/sarltaxihectus" title="Facebook"><Image src="/images/facebook.svg" alt="Facebook" width={32} height={32} /></a>
          <a href="https://www.instagram.com/sarl_taxi_hectus" title="Instagram"><Image src="/images/instagram.svg" alt="Instagram" width={32} height={32} /></a>
          <a href="https://www.tripadvisor.fr/Attraction_Review-g3411234-d33368528-Reviews-Sarl_Taxi_Hectus-capesterre_belle_eau_Basse_Terre_Island_Guadeloupe.html" title="TripAdvisor"><Image src="/images/tripadvisor.svg" alt="TripAdvisor" width={32} height={32} /></a>
        </div>
      </div>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </script>
    </>
  );
}