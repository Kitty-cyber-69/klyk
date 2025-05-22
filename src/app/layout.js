import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata = {
  metadataBase: new URL('https://klyk.com'),
  title: {
    default: 'KLYK - EV Technology Training',
    template: '%s | KLYK'
  },
  description: 'Empowering professionals with cutting-edge EV technology training through live, interactive sessions. Expert-led courses in electric vehicle technology.',
  keywords: ['EV training', 'electric vehicle technology', 'professional training', 'automotive education', 'EV certification'],
  authors: [{ name: 'KLYK Team' }],
  creator: 'KLYK',
  publisher: 'KLYK',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'KLYK - EV Technology Training',
    description: 'Empowering professionals with cutting-edge EV technology training through live, interactive sessions.',
    url: 'https://klyk.com',
    siteName: 'KLYK',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KLYK EV Technology Training',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KLYK - EV Technology Training',
    description: 'Empowering professionals with cutting-edge EV technology training through live, interactive sessions.',
    images: ['/images/twitter-image.jpg'],
    creator: '@klyk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    bing: 'your-bing-verification',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link rel="canonical" href="https://klyk.com" />
        <meta name="theme-color" content="#0984e3" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
