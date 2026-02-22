import Pellerano from '../components/Pellerano';
import { TAILWIND_BREAKPOINTS } from '../contants/tailwind';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Hero() {
  const isMobile = useIsMobile(TAILWIND_BREAKPOINTS.md);

  return (
    <>
      <div id="home" className="w-full md:py-10 sm:py-15 px-16">
        {!isMobile && <Pellerano />}
      </div>
      <div className="w-full py-60 bg-[url('/IMG_9549.jpg')] bg-cover bg-no-repeat bg-[position:50%_35%]" />
    </>
  );
}
