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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://sarl-taxi-hectus.vercel.app" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url(/images/background.webp)" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 drop-shadow-lg">
            Sarl Taxi Hectus Guadeloupe
          </h1>
          <p className="text-xl text-white text-center mb-8 max-w-2xl drop-shadow-md">
            Réservez votre taxi 24/7 dans toutes les communes de Guadeloupe. Confort, ponctualité, trajets aéroport, touristiques, locaux.
          </p>
          <Link 
            href="/reservation" 
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            Réserver Maintenant
          </Link>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:+590690523736" title="Appeler" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
              <Image src="/images/phone.svg" alt="Téléphone" width={32} height={32} />
            </a>
            <a href="sms:+590690523736" title="Envoyer un SMS" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
              <Image src="/images/sms.svg" alt="SMS" width={32} height={32} />
            </a>
            <a href="https://wa.me/590690523736" title="WhatsApp" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
              <Image src="/images/whatsapp.svg" alt="WhatsApp" width={32} height={32} />
            </a>
            <a href="mailto:hludox@gmail.com" title="Envoyer un e-mail" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
              <Image src="/images/email.svg" alt="E-mail" width={32} height={32} />
            </a>
            <a href="https://www.facebook.com/sarltaxihectus" title="Facebook" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
              <Image src="/images/facebook.svg" alt="Facebook" width={32} height={32} />
            </a>
            <a href="https://www.instagram.com/sarl_taxi_hectus" title="Instagram" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
              <Image src="/images/instagram.svg" alt="Instagram" width={32} height={32} />
            </a>
            <a href="https://www.tripadvisor.fr/Attraction_Review-g3411234-d33368528-Reviews-Sarl_Taxi_Hectus-capesterre_belle_eau_Basse_Terre_Island_Guadeloupe.html" title="TripAdvisor" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
              <Image src="/images/tripadvisor.svg" alt="TripAdvisor" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
      
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }}
      />
    </>
  );
}
// Force static generation for best performance
export async function getStaticProps() {
  return { props: {} };
}
