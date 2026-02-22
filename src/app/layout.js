import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from './components';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: {
    default: 'Hermes Pellerano — Senior Full-Stack Software Engineer',
    template: '%s | Hermes Pellerano',
  },
  description:
    'Senior full-stack software engineer specializing in scalable web platforms and apps. Experienced with React, Next.js, and Node.js.',
  keywords: [
    'Hermes Pellerano',
    'Senior Software Engineer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'Microservices',
    'API Development',
    'SaaS Development',
  ],
  authors: [{ name: 'Hermes Pellerano' }],
  creator: 'Hermes Pellerano',
  publisher: 'Hermes Pellerano',
  metadataBase: new URL('https://pellerano.dev'),
  alternates: {
    canonical: 'https://pellerano.dev',
  },
  openGraph: {
    title: 'Hermes Pellerano — Senior Full-Stack Software Engineer',
    description: 'Building reliable and high-performance web applications.',
    url: 'https://pellerano.dev',
    siteName: 'Hermes Pellerano',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark ${poppins.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
