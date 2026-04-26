'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import type { Project } from '@/data/portfolio'

const CATEGORY_BADGE: Record<string, string> = {
  travel: 'text-sky-400 bg-sky-400/10 border-sky-400/30',
  medical: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  'real-estate': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
  gaming: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/30',
  security: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
}

const CATEGORY_LABEL: Record<string, string> = {
  travel: 'Travel',
  medical: 'Medical',
  'real-estate': 'Real Estate',
  gaming: 'Gaming',
  security: 'Security & Auth',
}

function gridColsClass(count: number) {
  if (count === 1) return 'grid-cols-1 max-w-sm mx-auto'
  return 'grid-cols-1 md:grid-cols-2'
}

/* ─── Project visual thumbnail ───────────────────────────── */
function ProjectVisual({ project, tall = false }: { project: Project; tall?: boolean }) {
  const hasImages = Array.isArray(project.images) && project.images.length > 0
  const isMulti = hasImages && project.images!.length > 1

  const [activeIndex, setActiveIndex] = useState(0)

  const advance = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % project.images!.length)
  }, [project.images])

  useEffect(() => {
    if (!isMulti) return
    const id = setInterval(advance, 3500)
    return () => clearInterval(id)
  }, [isMulti, advance])

  const heightClass = tall
    ? 'min-h-[200px] sm:min-h-[260px] md:min-h-[340px]'
    : 'aspect-[2/1] min-h-[220px] sm:min-h-[280px]'

  return (
    <div
      className={`relative overflow-hidden flex-shrink-0 ${heightClass}`}
      style={{
        background: `linear-gradient(135deg, ${project.accentFrom}18 0%, ${project.accentTo}28 100%)`,
      }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(${project.accentFrom} 0.5px, transparent 0.5px),
            linear-gradient(90deg, ${project.accentFrom} 0.5px, transparent 0.5px)
          `,
          backgroundSize: '44px 44px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(circle at 50% 100%, ${project.accentFrom}, transparent 65%)`,
        }}
      />

      {hasImages ? (
        <>
          <AnimatePresence mode="sync">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={project.images![activeIndex]}
                alt={`${project.title} screenshot ${activeIndex + 1}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Bottom vignette keeps dots readable over images */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </>
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center text-7xl select-none"
          style={{ filter: 'drop-shadow(0 0 24px rgba(255,255,255,0.08))' }}
        >
          {project.icon}
        </div>
      )}

      {/* Project number */}
      <span
        className="absolute top-4 left-4 font-mono text-xs font-black tracking-widest opacity-25 z-10"
        style={{ color: project.accentFrom }}
      >
        {project.projectNumber}
      </span>

      {/* Dot navigation — only for multi-image carousels */}
      {isMulti && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {project.images!.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View screenshot ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-4 h-1.5 bg-white'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentFrom}80, transparent)`,
        }}
      />
    </div>
  )
}

/* ─── Project detail modal ───────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const hasImages = Array.isArray(project.images) && project.images.length > 0
  const isMulti = hasImages && project.images!.length > 1
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background border border-divider/60 rounded-2xl shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-divider/60 text-secondary hover:text-primary hover:bg-divider transition-colors text-sm"
        >
          ✕
        </button>

        {/* Screenshot area */}
        {hasImages && (
          <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl flex-shrink-0"
               style={{ background: `linear-gradient(135deg, ${project.accentFrom}18 0%, ${project.accentTo}28 100%)` }}>
            <AnimatePresence mode="sync">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images![activeIndex]}
                  alt={`${project.title} screenshot ${activeIndex + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="672px"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            {isMulti && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {project.images!.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`View screenshot ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          <span className={`inline-flex items-center text-xs font-bold px-3 py-1 rounded-full border mb-4 ${CATEGORY_BADGE[project.category]}`}>
            {CATEGORY_LABEL[project.category]}
          </span>

          <h3 className="text-2xl sm:text-3xl font-bold mb-1">{project.title}</h3>
          <p className="text-sm font-semibold mb-5" style={{ color: project.accentFrom }}>
            {project.tagline}
          </p>
          <p className="text-secondary leading-relaxed mb-6">{project.description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map(m => (
              <div key={m.label} className="bg-divider/30 border border-divider/60 rounded-xl p-3 text-center">
                <p className="text-xl font-black mb-1" style={{ color: project.accentFrom }}>{m.value}</p>
                <p className="text-secondary text-xs leading-tight">{m.label}</p>
              </div>
            ))}
          </div>

          {/* All tags */}
          <div className="flex flex-wrap gap-1.5 mb-7">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs text-secondary bg-divider/40 border border-divider/60 px-3 py-1 rounded-lg">
                {tag}
              </span>
            ))}
          </div>

          <a
            href="/book"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/cta"
            style={{ color: project.accentFrom }}
          >
            Start a Similar Project
            <span className="transition-transform duration-200 group-hover/cta:translate-x-1">→</span>
          </a>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

/* ─── Featured card (full-width horizontal) ──────────────── */
function FeaturedCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative mb-6"
    >
      {/* Gradient glow border */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-sm pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})` }}
      />

      <div className="relative grid md:grid-cols-2 bg-divider/20 backdrop-blur-sm border border-divider/60 group-hover:border-transparent rounded-2xl overflow-hidden transition-all duration-500">
        {/* Visual */}
        <div className="relative">
          <ProjectVisual project={project} tall />
          <span className="absolute top-4 right-4 bg-gradient-to-r from-accent to-accent-teal text-background text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
            Featured
          </span>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 md:p-10 flex flex-col justify-between">
          <div>
            <span
              className={`inline-flex items-center text-xs font-bold px-3 py-1 rounded-full border mb-4 sm:mb-5 ${CATEGORY_BADGE[project.category]}`}
            >
              {CATEGORY_LABEL[project.category]}
            </span>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent-teal transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm font-semibold mb-3 sm:mb-5" style={{ color: project.accentFrom }}>
              {project.tagline}
            </p>
            <p className="text-secondary text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">{project.description}</p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-7">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-divider/30 border border-transparent group-hover:border-accent/15 rounded-xl p-2 sm:p-3 text-center transition-all duration-300"
                >
                  <p className="text-lg sm:text-xl font-black mb-1" style={{ color: project.accentFrom }}>
                    {m.value}
                  </p>
                  <p className="text-secondary text-xs leading-tight">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-secondary bg-divider/40 border border-divider/60 px-3 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/book"
              className="inline-flex items-center gap-2 text-sm font-semibold group/cta transition-all duration-200"
              style={{ color: project.accentFrom }}
            >
              Start a Similar Project
              <span className="transition-transform duration-200 group-hover/cta:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Regular project card ───────────────────────────────── */
function ProjectCard({ project, index, baseDelay }: { project: Project; index: number; baseDelay: number }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: baseDelay + index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative flex flex-col h-full"
    >
      {/* Glow border */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-sm pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})` }}
      />

      <div className="relative flex flex-col h-full bg-divider/20 backdrop-blur-sm border border-divider/60 group-hover:border-transparent rounded-2xl overflow-hidden transition-all duration-500">
        <ProjectVisual project={project} />

        <div className="flex flex-col flex-1 p-6">
          {/* Category */}
          <span
            className={`inline-flex items-center self-start text-xs font-bold px-3 py-1 rounded-full border mb-4 ${CATEGORY_BADGE[project.category]}`}
          >
            {CATEGORY_LABEL[project.category]}
          </span>

          <h3 className="text-xl font-bold mb-1 group-hover:text-accent-teal transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm font-semibold mb-4" style={{ color: project.accentFrom }}>
            {project.tagline}
          </p>
          <p className="text-secondary text-sm leading-relaxed mb-2 line-clamp-3">
            {project.description}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="text-xs font-medium mb-5 transition-colors duration-200"
            style={{ color: project.accentFrom }}
          >
            Read more →
          </button>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-divider/30 border border-transparent group-hover:border-accent/10 rounded-lg p-2.5 text-center transition-all duration-300"
              >
                <p className="text-base font-black mb-0.5" style={{ color: project.accentFrom }}>
                  {m.value}
                </p>
                <p className="text-secondary text-xs leading-tight">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-secondary bg-divider/40 border border-divider/60 px-2.5 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-secondary bg-divider/40 border border-divider/60 px-2.5 py-1 rounded-lg">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="mt-auto pt-4 border-t border-divider/40">
            <a
              href="/book"
              className="inline-flex items-center gap-1.5 text-sm font-semibold group/cta transition-all duration-200"
              style={{ color: project.accentFrom }}
            >
              Start a Similar Project
              <span className="transition-transform duration-200 group-hover/cta:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>

    <AnimatePresence>
      {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
    </AnimatePresence>
    </>
  )
}

/* ─── Grid orchestrator ──────────────────────────────────── */
interface Props {
  projects: Project[]
  filterKey: string
}

export default function ProjectsGrid({ projects, filterKey }: Props) {
  const [featured, ...rest] = projects

  return (
    <section className="section-padding bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />

      <div className="container-custom">
        {projects.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-secondary text-xl">No projects in this category yet.</p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={filterKey}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {featured && <FeaturedCard project={featured} delay={0.05} />}

              {rest.length > 0 && (
                <div className={`grid gap-6 mt-6 ${gridColsClass(rest.length)}`}>
                  {rest.map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={i}
                      baseDelay={0.15}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
    </section>
  )
}
