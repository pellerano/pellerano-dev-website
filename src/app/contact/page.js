'use client';

import { PhoneIcon } from 'lucide-react';
import {
  EnvelopeIcon,
  LinkedinLogoIcon,
  PaperPlaneRightIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react';

import { GlassButton, TextMarquee } from '../components';
import Link from 'next/link';
import { CALL_URL, EMAIL_URL, LINKEDIN_URL, WHATSAPP_URL } from '../contants';

const CONTACT_ACTIONS = [
  {
    label: 'Email',
    icon: EnvelopeIcon,
    hover: 'hover:bg-sky-500',
    url: EMAIL_URL,
  },
  {
    label: 'Whatsapp',
    icon: WhatsappLogoIcon,
    hover: 'hover:bg-green-500',
    url: WHATSAPP_URL,
  },
  {
    label: 'Call',
    icon: PhoneIcon,
    hover: 'hover:bg-amber-500',
    url: CALL_URL,
  },
  {
    label: 'LinkedIn',
    icon: LinkedinLogoIcon,
    hover: 'hover:bg-sky-600',
    url: LINKEDIN_URL,
  },
];

function TextInput({ id, placeholder, isTextArea = false }) {
  const className = 'p-4 bg-[#b0b0b0] w-full mb-4';

  if (isTextArea) {
    return (
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        required
        className={className}
      />
    );
  }

  return (
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      required
      className={className}
    />
  );
}

function ActionButton({ label, icon: Icon, hover, url }) {
  return (
    <Link className="w-full" href={url} target="_blank">
      <GlassButton
        className={`group flex items-center justify-center gap-2 ${hover} transition-colors duration-200 ease-in-out`}
      >
        <p className="group-hover:text-[#251d1d]">{label}</p>
        <Icon className="group-hover:text-[#251d1d]" size={20} />
      </GlassButton>
    </Link>
  );
}

export default function Contact() {
  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div className="hidden md:block">
          <div className="w-full h-full py-20 md:py-80 bg-[url('/IMG_9537.jpg')] bg-cover bg-no-repeat bg-[position:50%_20%]" />
        </div>

        <div className="bg-[#d9d9d9] p-9 md:p-20 pt-30 md:pt-20 text-black">
          <p className="font-bold text-center text-lg mb-4">(connect)</p>

          <h1 className="font-bold text-7xl md:text-8xl w-full md:w-1/2 mb-10">
            Hit me up!
          </h1>

          <form>
            <TextInput id="name" placeholder="(name)" />
            <TextInput id="email" placeholder="(email)" />
            <TextInput id="message" placeholder="(message)" isTextArea />

            <GlassButton className="mb-4 group flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors duration-200 ease-in-out">
              <p className="group-hover:text-[#251d1d]">Send</p>
              <PaperPlaneRightIcon
                className="group-hover:text-[#251d1d]"
                size={20}
              />
            </GlassButton>
          </form>

          <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row">
            {CONTACT_ACTIONS.map(({ label, icon, hover, url }) => (
              <ActionButton
                key={label}
                label={label}
                icon={icon}
                hover={hover}
                url={url}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-10 flex flex-col items-center gap-10">
        <h1 className="text-center text-2xl font-bold">(connect)</h1>
        <TextMarquee text="Let's Talk" />
        <p className="text-center">
          Hermes Pellerano &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
