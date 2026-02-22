'use client';
import { useRouter } from 'next/navigation';
import { GlassButton, TextMarquee } from '../components';

export default function Contact() {
  const router = useRouter();

  return (
    <div
      id="contact"
      className="scroll-mt-32 w-full py-10 flex flex-col items-center gap-10"
    >
      <h1 className="text-center text-2xl font-bold">(connect)</h1>
      <TextMarquee text="Let's Talk" />
      <GlassButton
        onClick={() => router.push('/contact')}
        className="group flex items-center gap-2 hover:bg-amber-400 transition-colors duration-200 ease-in-out font-bold"
      >
        <p className="group-hover:text-[#251d1d]">Contact</p>
      </GlassButton>
      <p className="text-center">
        Hermes Pellerano &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
}
