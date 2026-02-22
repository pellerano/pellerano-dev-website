import { EnvelopeIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { GlassIconButton } from '../components';
import { EMAIL_URL, LINKEDIN_URL } from '../contants';
import Link from 'next/link';

export default function About() {
  return (
    <div className="p-10 grid grid-cols-[2fr_1fr] gap-4 divide-x divide-gray-300 text-lg">
      <div className="md:text-4xl font-bold p-2">
        Software Development Engineer specializing in JavaScript and modern web
        technologies.
      </div>
      <div>
        <p className="font-bold">(about me)</p>
        <div className="flex gap-3 mt-20">
          <Link href={LINKEDIN_URL} target="_blank">
            <GlassIconButton icon={<LinkedinLogoIcon size={32} />} />
          </Link>
          <Link href={EMAIL_URL}>
            <GlassIconButton icon={<EnvelopeIcon size={32} />} />
          </Link>
        </div>
      </div>
    </div>
  );
}
