import database from '../../../../db.json'

export function GET() {
  const experiences = database.experiences
    .filter((experience) => experience.enabled)
    .sort((a, b) => {
      if (!a.end_date && !b.end_date) return 0
      if (!a.end_date) return -1
      if (!b.end_date) return 1

      return b.end_date.localeCompare(a.end_date)
    })
    .map((experience) => ({
      ...experience,
      company: database.companies.find(
        (company) => String(company.id) === String(experience.company_id),
      ),
      bullets: database.experience_bullets
        .filter(
          (bullet) =>
            String(bullet.experience_id) === String(experience.id),
        )
        .map((bullet) => bullet.bullet),
    }))

  return Response.json(experiences)
}
