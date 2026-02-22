'use client';
import { MeshGradient } from '@mesh-gradient/react';
import { GlassButton } from './components';
import { useRouter } from 'next/navigation';

function NotFound() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden h-[100vh]">
      <MeshGradient
        className="absolute inset-0 w-full h-full z-0 opacity-60 blur-2xl"
        options={{
          transition: true,
          transitionDuration: 600,
          colors: ['#ff8800', '#cc7817', '#251d1d', '#0f0c0a'],
          animationSpeed: 3,
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex items-center justify-center h-full flex-col gap-4">
        <h1 className="font-bold text-9xl">404</h1>
        <p>Looks like this page wandered off.</p>
        <GlassButton onClick={() => router.push('/')}>Go back home</GlassButton>
      </div>
    </div>
  );
}

export default NotFound;
