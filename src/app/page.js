'use client';
import { HorizontalDivider } from './components';
import { Hero, About, Experience, MoreAbout, Contact } from './sections';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <HorizontalDivider margin="my-5 mx-10" />
      <Experience />
      <MoreAbout />
      <Contact />
    </div>
  );
}
