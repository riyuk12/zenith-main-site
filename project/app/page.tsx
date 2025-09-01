'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function HomePage() {
  useEffect(() => {
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const openIcon = document.getElementById('menu-open-icon')
    const closeIcon = document.getElementById('menu-close-icon')

    function toggleMenu(force?: boolean) {
      if (!mobileMenu || !mobileMenuButton || !openIcon || !closeIcon) return
      const shouldOpen =
        force !== undefined ? force : mobileMenu.classList.contains('hidden')
      mobileMenu.classList.toggle('hidden', !shouldOpen)
      openIcon.classList.toggle('hidden', shouldOpen)
      closeIcon.classList.toggle('hidden', !shouldOpen)
      mobileMenuButton.setAttribute('aria-expanded', String(shouldOpen))
    }

    const onMenuClick = () => toggleMenu()
    mobileMenuButton?.addEventListener('click', onMenuClick)
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggleMenu(false)
    }
    document.addEventListener('keydown', onEsc)

    document.querySelectorAll('#mobile-menu a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false))
    })

    // --- Typing Animation ---
    const heroTitle = document.getElementById('hero-title')
    const words = ['Zenith', 'Organize', 'Create', 'Execute']
    let wordIndex = 0,
      charIndex = 0,
      isDeleting = false,
      typingTimeout: number | undefined

    function type() {
      if (!heroTitle) return
      const currentWord = words[wordIndex]
      const currentChar = currentWord.substring(0, charIndex)
      heroTitle.innerHTML = `<span class="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">${currentChar}</span>`

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++
        typingTimeout = window.setTimeout(type, 120)
      } else if (!isDeleting && charIndex === currentWord.length) {
        typingTimeout = window.setTimeout(() => {
          isDeleting = true
          type()
        }, 1200)
      } else if (isDeleting && charIndex > 0) {
        charIndex--
        typingTimeout = window.setTimeout(type, 70)
      } else {
        isDeleting = false
        wordIndex = (wordIndex + 1) % words.length
        typingTimeout = window.setTimeout(type, 220)
      }
    }
    const startTyping = window.setTimeout(type, 400)

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    revealElements.forEach((el) => revealObserver.observe(el))

    // --- Scroll progress bar & back-to-top button ---
    const scrollbar = document.getElementById('scrollbar')
    const toTopButton = document.getElementById('to-top')
    const showAtPixels = 320

    function onScroll() {
      const docEl = document.documentElement
      const maxScroll = docEl.scrollHeight - docEl.clientHeight
      const scrollPercent = (docEl.scrollTop / maxScroll) * 100
      if (scrollbar) scrollbar.style.width = scrollPercent + '%'

      if (toTopButton) {
        if (docEl.scrollTop > showAtPixels) {
          toTopButton.classList.remove('hidden')
        } else {
          toTopButton.classList.add('hidden')
        }
      }
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    toTopButton?.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    )

    // --- Scroll spy (active nav link highlighting) ---
    const sectionIds = ['about', 'domains', 'events', 'cta']
    const navlinks = document.querySelectorAll('.navlink')
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id
          const link = document.querySelector(
            `.navlink[data-target="${id}"]`
          ) as HTMLElement | null
          if (!link) return
          if (entry.isIntersecting) {
            navlinks.forEach((a) => a.classList.remove('text-accent'))
            link.classList.add('text-accent')
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.02 }
    )
    sections.forEach((sec) => spyObserver.observe(sec))

    // --- Initialize tsParticles when available ---
    const tryInitParticles = () => {
      const anyWin = window as any
      const ts = anyWin.tsParticles
      if (!ts) return false

      // background layer
      ts.load('particles-container', {
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#00ff9d' },
          shape: { type: 'circle' },
          opacity: { value: 0.2, random: true },
          size: { value: 2, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff9d',
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
        },
        retina_detect: true,
      })

      // interactive layer
      ts.load('interactive-particles-container', {
        fpsLimit: 60,
        particles: {
          number: { value: 150, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.4, random: true },
          size: { value: 1.5, random: true },
          line_linked: { enable: false },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } },
        },
        retina_detect: true,
      })
      return true
    }

    let tries = 0
    const particleInterval = window.setInterval(() => {
      if (tryInitParticles() || tries++ > 50) {
        window.clearInterval(particleInterval)
      }
    }, 120)

    // Cleanup
    return () => {
      mobileMenuButton?.removeEventListener('click', onMenuClick)
      document.removeEventListener('keydown', onEsc)
      document.removeEventListener('scroll', onScroll)
      window.clearTimeout(startTyping)
      if (typingTimeout) window.clearTimeout(typingTimeout)
      revealObserver.disconnect()
      spyObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* Particle background containers */}
      <div id="particles-container" className="particles-canvas" />
      <div id="interactive-particles-container" className="particles-canvas" />

      {/* Scroll progress bar */}
      <div id="scrollbar" className="fixed left-0 top-0 h-1 w-0 bg-accent z-[60]" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-neutral-800/70">
        <div className="container px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold group inline-flex items-center gap-2" aria-label="Zenith Home">
            <span className="text-gray-300">&lt;</span>
            <span className="relative text-white">
              <span className="text-accent">Z</span>enith
              <span className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-transparent blur-sm rounded" />
            </span>
            <span className="text-gray-300">/&gt;</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            <a href="#about" data-target="about" className="px-3 py-2 rounded-md hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 transition-colors navlink text-accent">./about</a>
            <a href="#domains" data-target="domains" className="px-3 py-2 rounded-md hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 transition-colors navlink">./focus</a>
            <a href="#events" data-target="events" className="px-3 py-2 rounded-md hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 transition-colors navlink">./events</a>
            <a href="#cta" data-target="cta" className="px-3 py-2 rounded-md hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 transition-colors navlink">./join</a>
          </nav>
          <button id="mobile-menu-button" className="md:hidden text-2xl z-50 rounded-md p-1 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60" aria-expanded={false} aria-controls="mobile-menu" aria-label="Open menu">
            <svg id="menu-open-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            <svg id="menu-close-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-b border-neutral-800">
          <nav className="flex flex-col items-center space-y-6 py-8">
            <a href="#about" className="hover:text-accent transition-colors duration-300">./about</a>
            <a href="#domains" className="hover:text-accent transition-colors duration-300">./focus</a>
            <a href="#events" className="hover:text-accent transition-colors duration-300">./events</a>
            <a href="#cta" className="hover:text-accent transition-colors duration-300">./join</a>
          </nav>
        </div>
      </header>

      <div className="relative z-10">
        <main className="container px-6">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center items-center text-center pt-16 pb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 glass text-neutral-300 text-xs md:text-sm mb-5">
              <span className="h-2 w-2 rounded-full bg-accent animate-float" />
              <span>Student-led • We create experiences</span>
            </div>

            <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold type-cursor leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">Execute</span>
            </h1>

            <p className="mt-4 text-accent text-md md:text-lg tracking-widest uppercase">For the Students, By the Students</p>

            <p className="mt-2 text-lg md:text-xl text-gray-400 max-w-3xl">
              A flagship student-run club for event management and creative production.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#about" className="px-6 py-3 bg-accent text-black font-bold rounded-md hover:opacity-90 transition-all duration-300 shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60">
                Explore Club &gt;
              </a>
              <a href="#" target="_blank" rel="noreferrer noopener" className="px-6 py-3 border-2 border-neutral-700 font-bold rounded-md hover:border-accent hover:text-accent transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60">
                Join Zenith
              </a>
            </div>

            {/* Decorative floating orbs */}
            <div className="relative w-full max-w-3xl mt-14">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl animate-float" />
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl animate-float" style={{ animationDelay: '.7s' }} />
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="pt-24 pb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="text-accent">$</span> who we are</h2>
            <div className="max-w-4xl gradient-border rounded-xl p-[1px]">
              <div className="text-gray-300 text-lg leading-relaxed space-y-4 p-6 rounded-[11px] glass">
                <p>
                  <span className="text-accent font-semibold">Zenith</span> is the driving force behind our most ambitious events. We are a community of creators, developers, and strategists united by a passion for technology and a talent for execution. Our mission is to transform bold ideas into impactful experiences.
                </p>
                <p>
                  From organizing flagship hackathons like Nexify to hosting cutting-edge workshops, we manage every detail from concept to completion. We are the architects of innovation, building platforms for others to learn, compete, and grow. If you thrive on bringing tech-focused events to life, Zenith is where you belong.
                </p>
              </div>
            </div>
          </section>

          {/* Domains Section */}
          <section id="domains" className="py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal"><span className="text-accent">#</span> What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="gradient-border rounded-xl p-[1px] reveal">
                <div className="rounded-[11px] h-full p-6 hover:-translate-y-2 transition-all duration-300 glass border border-neutral-800/70 group">
                  <div className="text-accent mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-105 transition-transform"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Corporate &amp; Professional</h3>
                  <p className="text-gray-400">Organizing conferences, seminars, and networking events that connect students with industry leaders.</p>
                </div>
              </div>
              <div className="gradient-border rounded-xl p-[1px] reveal">
                <div className="rounded-[11px] h-full p-6 hover:-translate-y-2 transition-all duration-300 glass border border-neutral-800/70 group">
                  <div className="text-accent mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-105 transition-transform"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Cultural &amp; Social Events</h3>
                  <p className="text-gray-400">Creating vibrant fests, concerts, and social gatherings that define the campus experience.</p>
                </div>
              </div>
              <div className="gradient-border rounded-xl p-[1px] reveal">
                <div className="rounded-[11px] h-full p-6 hover:-translate-y-2 transition-all duration-300 glass border border-neutral-800/70 group">
                  <div className="text-accent mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-105 transition-transform"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Creative Workshops</h3>
                  <p className="text-gray-400">Hosting hands-on workshops and competitions that nurture talent in various creative fields.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Events Section */}
          <section id="events" className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal"><span className="text-accent">&gt;</span> Major Events</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <article className="reveal gradient-border rounded-xl p-[1px]">
                <div className="rounded-[11px] p-6 glass border border-neutral-800/70">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <p className="text-gray-400 bg-white/5 border border-white/10 inline-flex items-center gap-2 px-3 py-1 rounded-md text-[13px] font-bold mb-2">
                        <span className="h-2 w-2 rounded-full bg-gray-400" /> Past Event
                      </p>
                      <h3 className="text-2xl font-bold">Nexify'25 Hackathon</h3>
                      <p className="text-gray-400">A 24-hour flagship offline hackathon focused on AI, Cybersecurity, and Open Innovation.</p>
                    </div>
                    <time className="text-left sm:text-right flex-shrink-0 min-w-[96px]">
                      <p className="text-lg font-semibold">Apr 16–17</p>
                      <p className="text-gray-500">2025</p>
                    </time>
                  </div>
                </div>
              </article>

              <article className="reveal gradient-border rounded-xl p-[1px]">
                <div className="rounded-[11px] p-6 glass border border-neutral-800/70">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <p className="text-gray-400 bg-white/5 border border-white/10 inline-flex items-center gap-2 px-3 py-1 rounded-md text-[13px] font-bold mb-2">
                        <span className="h-2 w-2 rounded-full bg-gray-400" /> Past Event
                      </p>
                      <h3 className="text-2xl font-bold">Future Forge</h3>
                      <p className="text-gray-400">A 5-day workshop series covering the fundamentals of modern web development, from version control to deployment.</p>
                    </div>
                    <time className="text-left sm:text-right flex-shrink-0 min-w-[96px]">
                      <p className="text-lg font-semibold">Feb 10–14</p>
                      <p className="text-gray-500">2025</p>
                    </time>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* CTA Section */}
          <section id="cta" className="py-20">
            <div className="max-w-3xl mx-auto text-center border-2 border-dashed border-neutral-700 rounded-2xl p-10 reveal glass">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create?</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Become a part of our active event management community. Lead projects, learn new skills, and create unforgettable experiences with us.
              </p>
              <a
                href="https://chat.whatsapp.com/EJ6QbY6BEd45fe5T7KTHAy?mode=ems_copy_t"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block px-8 py-4 bg-accent text-black font-bold rounded-md hover:opacity-90 transition-all shadow-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                Join The Community
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-neutral-800 mt-10">
          <div className="container px-6 py-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Zenith Club. All rights reserved.</p>
            <p className="mt-2">Gurugram, India</p>
            <div className="flex items-center justify-center gap-5 mt-4 text-sm">
              <a className="hover:text-accent transition-colors" href="mailto:info@zenithclub.com" aria-label="Contact With Email">Email Us</a>
              <span className="text-neutral-700">•</span>
              <a className="hover:text-accent transition-colors" href="https://www.instagram.com/su_zenith/" aria-label="Instagram">Instagram</a>
              <span className="text-neutral-700">•</span>
              <a className="hover:text-accent transition-colors" href="https://www.linkedin.com/company/zenithofsu/" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Back-to-top Fab */}
      <button
        id="to-top"
        className="fixed bottom-6 right-6 h-10 w-10 rounded-full bg-white/5 border border-white/10 backdrop-blur text-white hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 hidden"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="m-auto"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
      </button>

      {/* tsParticles CDN */}
      <Script
        src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  )
}
