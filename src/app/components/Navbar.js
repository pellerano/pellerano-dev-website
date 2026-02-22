'use client';

import { useState, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import GlassCard from './GlassCard';
import Pellerano from './Pellerano';
import { useIsMobile } from '../hooks/useIsMobile';
import { TAILWIND_BREAKPOINTS } from '../contants/tailwind';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

/* -------------------------------------------------------------------------- */
/* Navigation config                                                           */
/* -------------------------------------------------------------------------- */

const NAV_ITEMS = [
  { label: 'Home', target: 'home', route: '/' },
  { label: 'Experience', target: 'experience', route: '/' },
  { label: 'About', target: 'about', route: '/' },
  { label: 'Contact', route: '/contact' },
];

function useNavigation(onAfterNavigate, defaultActiveLink) {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(defaultActiveLink);

  const navigate = useCallback(
    async (item) => {
      const nextActive = item.target ?? item.label.toLowerCase();
      setActive(nextActive);
      onAfterNavigate?.();

      if (item.route && !item.target) {
        router.push(item.route);
        return;
      }

      if (pathname !== '/') {
        router.push('/');

        setTimeout(() => {
          document
            .getElementById(item.target)
            ?.scrollIntoView({ behavior: 'smooth' });
        }, 100);

        return;
      }

      document
        .getElementById(item.target)
        ?.scrollIntoView({ behavior: 'smooth' });
    },
    [router, pathname, onAfterNavigate],
  );

  return { active, navigate };
}

function NavButton({ label, isActive, onClick, orientation = 'vertical' }) {
  const isVertical = orientation === 'vertical';

  return (
    <button
      onClick={onClick}
      className={`text-white cursor-pointer flex ${
        isVertical ? 'flex-col items-center p-6' : 'items-center gap-4'
      }`}
    >
      {!isVertical && (
        <span
          className={`w-1 h-1 rounded-full bg-white transition-all duration-200 ${
            isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        />
      )}

      <p
        className={`transition-opacity duration-200 ${
          isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
        }`}
      >
        {label}
      </p>

      {isVertical && (
        <span
          className={`w-1 h-1 rounded-full bg-white transition-all duration-200 ${
            isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        />
      )}
    </button>
  );
}

function DesktopNavbar({ activeLink }) {
  const { active, navigate } = useNavigation(() => {}, activeLink);

  return (
    <div className="flex gap-6">
      {NAV_ITEMS.map((item) => (
        <NavButton
          key={item.label}
          label={item.label}
          isActive={active === (item.target ?? item.label.toLowerCase())}
          onClick={() => navigate(item)}
        />
      ))}
    </div>
  );
}

function MobileNavbar({ activeLink }) {
  const [open, setOpen] = useState(false);
  const { active, navigate } = useNavigation(() => setOpen(false), activeLink);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild className="p-6 cursor-pointer">
        <div>
          <Pellerano />
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="flex flex-col gap-6 p-6 pt-0">
        {NAV_ITEMS.map((item) => (
          <NavButton
            key={item.label}
            label={item.label}
            isActive={active === (item.target ?? item.label.toLowerCase())}
            onClick={() => navigate(item)}
            orientation="horizontal"
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function Navbar({ active = 'home' }) {
  const isMobile = useIsMobile(TAILWIND_BREAKPOINTS.md);

  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-4 z-50">
      <GlassCard>
        {isMobile ? (
          <MobileNavbar activeLink={active} />
        ) : (
          <DesktopNavbar activeLink={active} />
        )}
      </GlassCard>
    </div>
  );
}
