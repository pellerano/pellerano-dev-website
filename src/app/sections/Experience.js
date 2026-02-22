import React from 'react';
import { ExperienceCard, GlassButton, TextMarquee } from '../components';
import { useIsMobile } from '../hooks/useIsMobile';
import { TAILWIND_BREAKPOINTS } from '../contants/tailwind';
import { ArrowRightIcon } from 'lucide-react';

const EXPERIENCES = [
  {
    position: 'Software Development Engineer',
    company: 'Newtech SRL',
    start: 'Sep 2021',
    bullet: [
      'Create and sustain features focused on user needs.',
      'Partner with designers and backend developers to apply responsive design principles and deliver a smooth user experience.',
      'Leverage technologies such as React to develop effective and reusable components.',
      'Produce code that is clear, easy to maintain, and high-performing.',
    ],
    description:
      'Newtech is a leading business process outsourcing (BPO) company in the Dominican Republic, recognized for their reputation and excellence. They offer customized solutions that integrate innovative technologies with a team of service experts, helping their clients optimize their operations and achieve their strategic objectives.',
    img: 'nt_logo.jpg',
  },
  {
    position: 'Web Developer',
    company: 'Thryv',
    start: 'Oct 2023',
    bullet: [
      'Create and maintain user-centered features.',
      'Collaborate with designers and backend developers to implement responsive design and ensure an optimal user experience.',
      'Utilize technologies such as React to develop effective and reusable components.',
      ' Produce clean, maintainable, and efficient code.',
    ],
    description:
      'Thryv is a technology company that offers a comprehensive platform designed to help small and medium-sized businesses manage and grow their operations. Its solutions combine digital marketing tools, customer relationship management (CRM), payments, appointment scheduling, invoicing, and online presence—all within a single ecosystem. Thryv empowers businesses to streamline their daily operations, enhance customer relationships, and increase visibility and efficiency through simple and scalable technology.',
    img: 'thryv_logo.png',
  },
  {
    position: 'Back End Developer',
    company: 'Capa',
    start: 'Apr 2022',
    end: 'Apr 2024',
    bullet: [
      'Develop and maintain server-side logic using NestJS and TypeScript.',
      'Design and implement RESTful APIs to connect the application with data storage.',
      'Utilize NestJS middleware and guards to manage authentication and authorization.',
      '• Collaborate with front-end developers to ensure seamless integration between the backend and the front-end.',
    ],
    description:
      'Capa is a fintech company focused on providing modern, secure, and scalable digital financial solutions. Its platform is designed to simplify financial management through efficient technology, automation, and an intuitive user experience, helping businesses and individuals make better decisions and optimize their financial operations with confidence.',
    img: 'capafi_logo.jpg',
  },
  {
    position: 'Front End Developer',
    company: 'Media Revolution SRL',
    start: 'Mar 2021',
    end: 'Sep 2021',
    bullet: [
      'Develop and maintain user-facing features using HTML, CSS, and JavaScript.',
      'Utilize frameworks such as React to build efficient and reusable components.',
      'Write clean, maintainable, and efficient code.',
      'Troubleshoot and debug issues across multiple browsers and platforms.',
    ],
    description:
      "Media Revolution is a software development and enterprise solutions company based in Santo Domingo, Dominican Republic, founded in 2014. Its mission is to create high-impact enterprise software that enables organizations to automate, scale, and optimize their operations with robust and secure technology tools. The company combines advanced digital platforms, software engineering, and a customer-centric approach to deliver reliable and effective products that help improve its clients' productivity, user experience, and business results.",
    img: 'media_revolution_srl_logo.jpg',
  },
];

function to2DArr(arr, columns = 2) {
  const result = [];

  for (let i = 0; i < arr.length; i += columns) {
    result.push(arr.slice(i, i + columns));
  }

  return result;
}

const EXPERIENCES_2D_ARR = to2DArr(EXPERIENCES);

function Experience() {
  const isMobile = useIsMobile(TAILWIND_BREAKPOINTS.md);

  return (
    <>
      <TextMarquee text="Work" className="my-10" />

      <div
        id="experience"
        className="scroll-mt-32 p-10 grid md:grid-cols-[1fr_3fr] gap-4 md:divide-x divide-gray-300 text-lg"
      >
        <div className="text-center md:text-left font-bold">
          <p>(experience)</p>
        </div>
        <div className="grid grid-cols-1 gap-4 text-lg divide-y md:divide-y-0 divide-gray-300">
          {EXPERIENCES_2D_ARR.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div className="grid md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                {row.map((exp, colIndex) => (
                  <ExperienceCard
                    key={colIndex}
                    position={exp.position}
                    company={exp.company}
                    start={exp.start}
                    end={exp.end ?? 'Present'}
                    bullet={exp.bullet}
                    description={exp.description}
                    img={exp.img}
                  />
                ))}
              </div>
              {!isMobile && rowIndex < EXPERIENCES_2D_ARR.length - 1 && (
                <div className="flex justify-center">
                  <div className="w-full h-px bg-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-end px-10 pb-10 ">
        <GlassButton className="group flex items-center gap-2 hover:bg-amber-400 transition-colors duration-200 ease-in-out">
          <p className="group-hover:text-[#251d1d]">Resume</p>
          <ArrowRightIcon className="group-hover:text-[#251d1d]" size={32} />
        </GlassButton>
      </div>
    </>
  );
}

export default Experience;
