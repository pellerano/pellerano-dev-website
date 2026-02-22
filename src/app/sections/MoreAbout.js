import { MeshGradient } from '@mesh-gradient/react';
import React from 'react';
import GlassCard from '../components/GlassCard';

function MoreAbout() {
  return (
    <div id="about" className="relative overflow-hidden my-2 scroll-mt-32">
      <MeshGradient
        className="absolute inset-0 w-full h-full z-0 opacity-70 blur-2xl"
        options={{
          transition: true,
          transitionDuration: 600,
          colors: ['#ff8800', '#cc7817', '#251d1d', '#0f0c0a'],
          animationSpeed: 3,
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <GlassCard className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Me
          </h1>

          <div className="flex flex-col gap-6 text-base leading-relaxed text-zinc-200">
            <p>
              I’m a full-stack software engineer with <strong>5+ years</strong>{' '}
              of experience building web applications. I’m passionate about{' '}
              <strong>creating clean, maintainable systems</strong> that solve
              real business problems and scale reliably.
            </p>

            <p>
              Currently working as a{' '}
              <strong>Software Engineer / Web Developer</strong>, where I build
              and maintain frontend applications, integrate payment platforms,
              and develop backend services using JavaScript and React. I’ve
              worked extensively with local payment gateways, subscription
              models, and production systems used by real customers.
            </p>

            <h3 className="text-lg font-semibold mt-4">Key Highlights</h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Built and maintained production web applications using React
              </li>
              <li>
                Developed reusable libraries and internal tooling to improve
                developer efficiency
              </li>
              <li>
                Refactored legacy codebases into cleaner, more maintainable
                architectures
              </li>
              <li>
                Worked effectively across multiple teams while managing parallel
                responsibilities
              </li>
              <li>
                Fluent in Spanish and English with strong professional
                communication skills
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">Education</h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Bachelor’s Degree in Computer Engineering • Universidad Nacional
                Pedro Henríquez Ureña (2017 – 2023)
              </li>
              <li>
                Master’s Degree in Agile Software Development for the Web •
                Universidad de Alcalá (2024 – 2025)
              </li>
            </ul>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export default MoreAbout;
