'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function ExperienceCard({
  position,
  company,
  start,
  end = 'Present',
  bullet = [],
  description,
  img,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="pr-4 text-left w-full">
          <div className="group p-8 rounded cursor-pointer hover:bg-amber-400 transition-colors duration-200 ease-in-out">
            <h1 className="font-bold group-hover:text-[#251d1d]">{position}</h1>

            <p className="text-sm text-[#ababab] group-hover:text-[#251d1d]">
              {company}
            </p>

            <p className="text-sm text-[#ababab] group-hover:text-[#251d1d]">
              {start} – {end}
            </p>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="p-2 pl-0">
          <div className="flex gap-4 items-center">
            <div
              style={{
                background: `url(/${img})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
              }}
              className="p-10 rounded-full"
            ></div>
            <div className="text-left">
              <DialogTitle className="mb-2">{position}</DialogTitle>
              <DialogDescription>
                {company} • {`${start} - ${end}`}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4 flex flex-col gap-2">
          <p className="font-bold">Description</p>
          <p>{description}</p>
          <p className="font-bold">Key Responsabilities</p>
          <ul className="list-disc pl-5 space-y-2">
            {bullet.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ExperienceCard;
