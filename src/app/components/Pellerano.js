import { Syne } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne-800',
  weight: '800',
});

function Pellerano() {
  return (
    <h1 className={`${syne.variable} hero-word-logo text-xl`}>Pellerano</h1>
  );
}

export default Pellerano;
