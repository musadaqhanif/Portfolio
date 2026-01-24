import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import { SiFiverr } from 'react-icons/si'
import { RiStarFill } from 'react-icons/ri'
import { fiverrProfileLink } from '@/constants/data/socials'

const FiverrBadge = () => {
  // This component highlights Fiverr seller credentials on the homepage.
  const t = useTranslations('Home')
  const router = useRouter()

  const ratingStars = 5
  const successRatePercent = 99
  const completedProjects = 19

  // This ensures we never render translation keys in the UI.
  const completedProjectsLabel = t('fiverrBadge.completedProjects')
  const completedProjectsFallback = router?.locale === 'id' ? 'proyek sukses' : 'successful projects'
  const safeCompletedProjectsLabel =
    completedProjectsLabel === 'fiverrBadge.completedProjects' ||
    completedProjectsLabel === `Home.fiverrBadge.completedProjects`
      ? completedProjectsFallback
      : completedProjectsLabel

  const visitProfileLabel = t('fiverrBadge.visitProfile')
  const visitProfileFallback = router?.locale === 'id' ? 'Kunjungi profil Fiverr' : 'Visit Fiverr Profile'
  const safeVisitProfileLabel =
    visitProfileLabel === 'fiverrBadge.visitProfile' || visitProfileLabel === `Home.fiverrBadge.visitProfile`
      ? visitProfileFallback
      : visitProfileLabel

  return (
    <div className="mt-4">
      <div className="relative overflow-hidden rounded-xl border border-[#1dbf7340] bg-container p-4">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1dbf731a] via-transparent to-[#ff784f1a]" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1dbf73] text-white shadow-sm">
              <SiFiverr size={22} />
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold text-title">{t('fiverrBadge.title')}</p>
                <span className="inline-flex items-center rounded-full border border-[#1dbf7340] bg-[#1dbf7314] px-2 py-1 text-xs font-medium text-[#1dbf73]">
                  {t('fiverrBadge.level')}
                </span>
              </div>
              <p className="text-xs text-subtext">{t('fiverrBadge.subtitle')}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="badge !gap-3 !py-2">
              <div className="flex items-center gap-1 text-[#f59e0b]">
                {Array.from({ length: ratingStars }).map((_, index) => (
                  <RiStarFill key={index} size={16} />
                ))}
              </div>
              <span className="text-sm text-text">{t('fiverrBadge.rating')}</span>
            </div>

            <div className="badge !gap-2 !py-2">
              <span className="text-sm font-semibold text-title">{successRatePercent}%</span>
              <span className="text-sm text-text">{t('fiverrBadge.successRate')}</span>
            </div>

            <div className="badge !gap-2 !py-2">
              <span className="text-sm font-semibold text-title">{completedProjects}</span>
              <span className="text-sm text-text">{safeCompletedProjectsLabel}</span>
            </div>

            <a
              href={fiverrProfileLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Fiverr profile"
              data-umami-event="Visit Fiverr Profile Button"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1dbf7340] bg-[#1dbf7314] px-4 py-2 text-sm font-medium text-[#1dbf73] transition hover:border-[#1dbf7370] hover:bg-[#1dbf7324]"
            >
              <SiFiverr size={16} />
              {safeVisitProfileLabel}
              <i className="fa-sm fad fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiverrBadge

