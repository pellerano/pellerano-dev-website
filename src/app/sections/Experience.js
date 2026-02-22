import React, { useEffect, useMemo, useState } from 'react';
import { ExperienceCard, GlassButton, TextMarquee } from '../components';
import { useIsMobile } from '../hooks/useIsMobile';
import { TAILWIND_BREAKPOINTS } from '../contants';
import { ArrowRightIcon } from 'lucide-react';
import { supabase } from '@/lib/supabase/client'
import { Skeleton } from '@/components/ui/skeleton';

function to2DArr(arr, columns = 2) {
  const result = [];

  for (let i = 0; i < arr.length; i += columns) {
    result.push(arr.slice(i, i + columns));
  }

  return result;
}

const formatDate = (date) => {
  if (!date) return null

  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

const mapExperiences = (data) =>
  data.map((exp) => ({
    position: exp.position,
    company: exp.companies.name,
    start: formatDate(exp.start_date),
    ...(exp.end_date && { end: formatDate(exp.end_date) }),
    bullet: exp.experience_bullets.map((b) => b.bullet),
    description: exp.companies.description,
    img: exp.companies.img,
  }))

function Experience() {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)

  const isMobile = useIsMobile(TAILWIND_BREAKPOINTS.md);
  const EXPERIENCES_2D_ARR = useMemo(() => to2DArr(experiences), [experiences])

  const SKELETON_ROWS = useMemo(() => to2DArr(new Array(4).fill(null)), [])

  const getExperiences = async () => {
    setLoading(true)

    const { data } = await supabase
      .from('experiences')
      .select(`
        id,
        position,
        start_date,
        end_date,
        companies (
          name,
          description,
          img
        ),
        experience_bullets (
          bullet
        )
      `)
      .eq('enabled', true)
      .order('end_date', { ascending: false })

    setExperiences(mapExperiences(data))
    setLoading(false)
  }

  useEffect(() => { getExperiences() }, [])

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

          {(loading ? SKELETON_ROWS : EXPERIENCES_2D_ARR).map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div className="grid md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">

                {row.map((exp, colIndex) => (
                  loading ? (
                    <div key={colIndex} className="p-8 space-y-4">
                      <Skeleton className="h-6 w-2/3" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-1/3" />
                    </div>
                  ) : (
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
                  )
                ))}

              </div>

              {!isMobile && rowIndex < (loading ? SKELETON_ROWS.length : EXPERIENCES_2D_ARR.length) - 1 && (
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