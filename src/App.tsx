import React, { useRef, useEffect } from 'react';
import { FmLogo } from './components/FmLogo';

// Creator & Client Data
interface Client {
  name: string;
  subs: string;
  avatar: string;
  url: string;
}

const clients: Client[] = [
  {
    name: 'Kiki',
    subs: '258K subscribers',
    avatar: 'https://yt3.googleusercontent.com/aReJWx3BwuFIoqvi31j0d6pvST-2NWdOTwP39qV69QOBjMBuiBWYW0IcduhM_mmc-oFYMS5z=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@KikiBloxx',
  },
  {
    name: 'Eves',
    subs: '1.49M subscribers',
    avatar: 'https://yt3.googleusercontent.com/9_PokhtOjOZqzfLzhW2spwn4QWCVWT59k_N2Ua4OEGUA-l_XBnueXAewBvy-sY_x_GzyL0u2wA=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@evesforrealz',
  },
  {
    name: "Kiki's Life",
    subs: '55.3K subscribers',
    avatar: 'https://yt3.googleusercontent.com/OFHG8VxyaOKEsYI48ZfOUvrUyEmOJfnH4fH0cKyoYzGO3vwbEx6svNvLmRzz6zqrsIOstwMGMoI=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@KikisLifeIRL',
  },
  {
    name: 'Chapati Hindustani Gamer',
    subs: '8.78M subscribers',
    avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_mmHwIKksj5ZHR3PzGIJhbMosr4w6PczTLKHm-WahorMG8=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@ChapatiHindustaniGamer',
  },
  {
    name: 'Loggy',
    subs: '7.56M subscribers',
    avatar: 'https://yt3.googleusercontent.com/gE8CsD4AsBtJ3gjXGL0E-c1SpTdp5TxjqAv2J9eaikKoiaoMxLhhQWMp2hEm-_YhbZIKT4Qekw=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@Loggy_0',
  },
  {
    name: 'Bulky Star',
    subs: '1.41M subscribers',
    avatar: 'https://yt3.googleusercontent.com/onjfczfUydxUep2_XV3Dw663ZVIELx8w0thnodqtWufxHQ04pQffrcelRjVpjmnQSiCQPSDMAss=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@BulkyStar',
  },
];

// Portfolio Work Videos
interface WorkVideo {
  id: string;
  title: string;
  channel: string;
  embedUrl: string;
}

const workVideos: WorkVideo[] = [
  {
    id: 'JYYrEglkgU0',
    title: 'Extreme SPICY vs SOUR Foods Challenge! (Ft. Eves)',
    channel: "Kiki's Life",
    embedUrl: 'https://www.youtube-nocookie.com/embed/JYYrEglkgU0?start=48',
  },
  {
    id: '0jrfTufImLo',
    title: 'I Flew Across The COUNTRY To SURPRISE My SISTER!',
    channel: "Kiki's Life",
    embedUrl: 'https://www.youtube-nocookie.com/embed/0jrfTufImLo?start=396',
  },
  {
    id: 'f8ahqcMTlDo',
    title: 'I Tried EVERY VIRAL JAPANESE SNACK!',
    channel: "Kiki's Life",
    embedUrl: 'https://www.youtube-nocookie.com/embed/f8ahqcMTlDo',
  },
  {
    id: '4DKCCFwnmQY',
    title: 'I Let MY DOG Control My ENTIRE LIFE!',
    channel: "Kiki's Life",
    embedUrl: 'https://www.youtube-nocookie.com/embed/4DKCCFwnmQY?start=10',
  },
];

// Testimonials Data
interface Testimonial {
  quote: string;
  author: string;
  subs: string;
  avatar: string;
  stat: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'FmEdits absolutely killed it with this edit. The pacing and storytelling were exactly what I wanted',
    author: 'Kiki',
    subs: '258K subscribers',
    avatar:
      'https://yt3.googleusercontent.com/aReJWx3BwuFIoqvi31j0d6pvST-2NWdOTwP39qV69QOBjMBuiBWYW0IcduhM_mmc-oFYMS5z=s900-c-k-c0x00ffffff-no-rj',
    stat: '1M+ Views',
  },
  {
    quote:
      'One of the fastest editors I’ve worked with. Great communication and the final videos always came out clean',
    author: 'Eves',
    subs: '1.49M subscribers',
    avatar:
      'https://yt3.googleusercontent.com/9_PokhtOjOZqzfLzhW2spwn4QWCVWT59k_N2Ua4OEGUA-l_XBnueXAewBvy-sY_x_GzyL0u2wA=s900-c-k-c0x00ffffff-no-rj',
    stat: '70%+ Audience Retention',
  },
  {
    quote:
      'He understood the style almost immediately and barely needed any revisions',
    author: 'Chapati Hindustani Gamer',
    subs: '8.78M subscribers',
    avatar:
      'https://yt3.googleusercontent.com/ytc/AIdro_mmHwIKksj5ZHR3PzGIJhbMosr4w6PczTLKHm-WahorMG8=s900-c-k-c0x00ffffff-no-rj',
    stat: '20M+ Total Views generated',
  },
  {
    quote:
      'The edits genuinely made the videos more engaging. Would definitely work with him again',
    author: 'Bulky Star',
    subs: '1.41M subscribers',
    avatar:
      'https://yt3.googleusercontent.com/onjfczfUydxUep2_XV3Dw663ZVIELx8w0thnodqtWufxHQ04pQffrcelRjVpjmnQSiCQPSDMAss=s900-c-k-c0x00ffffff-no-rj',
    stat: '500K+ Views in 7 Days',
  },
  {
    quote:
      'Super reliable editor with really good attention to detail. He always delivered exactly what I needed',
    author: 'Loggy',
    subs: '1.34M subscribers',
    avatar:
      'https://yt3.googleusercontent.com/gE8CsD4AsBtJ3gjXGL0E-c1SpTdp5TxjqAv2J9eaikKoiaoMxLhhQWMp2hEm-_YhbZIKT4Qekw=s900-c-k-c0x00ffffff-no-rj',
    stat: '1/10 video on the channel',
  },
];

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.8;

    const step = () => {
      if (!isHoveredRef.current && !isDraggingRef.current && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX - (carouselRef.current?.offsetLeft || 0);
    scrollLeftRef.current = carouselRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startXRef.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="min-h-full flex flex-col bg-paper text-ink selection:bg-[#A2FF11] selection:text-[#0a0a0a]">
      {/* 1. FLOATING PILL-SHAPED NAVBAR ON TOP CENTRE */}
      <header className="fixed top-4 sm:top-6 inset-x-0 mx-auto w-[92%] sm:w-auto max-w-3xl z-50 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto bg-paper border-[3px] border-ink rounded-full px-3.5 py-2 sm:px-5 sm:py-2.5 shadow-[5px_5px_0_0_#0a0a0a] flex items-center justify-between gap-3 sm:gap-6 backdrop-blur-md"
        >
          {/* Left: Avatar + FmEdits */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group hover:opacity-85 transition-opacity"
            aria-label="FmEdits Home"
          >
            <div className="relative flex-shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-[2.5px] border-ink bg-paper overflow-hidden flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="FmEdits Logo"
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-[family-name:var(--font-display)] font-extrabold text-base sm:text-lg tracking-tight leading-none">
                FmEdits
              </span>
            </div>
          </a>

          {/* Center: Work / Testimonials */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#work"
              className="text-sm font-extrabold uppercase tracking-wider text-ink/75 hover:text-ink hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Work
            </a>
            <a
              href="#testimonials"
              className="text-sm font-extrabold uppercase tracking-wider text-ink/75 hover:text-ink hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Testimonials
            </a>
          </div>

          {/* Right: LET'S COOK NOW! → */}
          <a
            href="https://x.com/fm_addon"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#A2FF11] text-black border-[2.5px] border-black rounded-full text-xs sm:text-sm font-black py-1.5 px-4 sm:py-2 sm:px-5 shadow-[1.5px_1.5px_0_0_#0a0a0a] hover:shadow-[2.5px_2.5px_0_0_#0a0a0a] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0_0_#0a0a0a] flex items-center gap-1.5 whitespace-nowrap transition-all"
          >
            <span>LET&apos;S COOK NOW!</span>
            <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      {/* HERO SECTION — TOP */}
      <section
        id="top"
        aria-labelledby="hero-heading"
        className="relative overflow-hidden border-b-[3px] border-ink w-full flex flex-col justify-center items-center pt-24 pb-16 sm:pt-28 sm:pb-24"
      >
        {/* Single pattern: Dots with Circular Fade */}
        <div className="absolute inset-0 bg-dots mask-radial-fade pointer-events-none" aria-hidden="true" />

        <div
          className="absolute -top-10 -right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'var(--accent)', filter: 'blur(90px)', opacity: 0.55 }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'var(--accent-2)', filter: 'blur(110px)', opacity: 0.35 }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-8 text-center flex flex-col items-center w-full">
          {/* Centered Huge Headline */}
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-display)] font-extrabold leading-[0.96] tracking-[-0.035em] text-[clamp(2.25rem,5.2vw,4.5rem)] max-w-3xl"
          >
            <span className="block">Make Every</span>
            <span className="block mt-1 sm:mt-2">
              <span className="relative inline-block">
                <span className="marker-highlight">Second</span>
              </span>{' '}
              Count<span className="text-black">.</span>
            </span>
          </h1>

          {/* Looping Showcase Video using public/ff.mp4 */}
          <div className="mt-8 sm:mt-12 w-full max-w-4xl mx-auto scale-[1.01] transition-transform duration-300">
            <video
              ref={videoRef}
              src="/FmEdits/ff.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video rounded-2xl sm:rounded-3xl object-cover block pointer-events-none"
            >
              <source src="/FmEdits/ff.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* 2. CLIENTS / SOCIAL PROOF SECTION */}
      <section
        id="clients"
        aria-labelledby="clients-heading"
        className="border-b-[3px] border-ink pt-8 sm:pt-12 pb-20 sm:pb-28 bg-soft relative overflow-hidden"
      >
        {/* Single pattern: Grid with Circular Fade */}
        <div className="absolute inset-0 bg-grid mask-radial-fade pointer-events-none" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
          {/* Centered Headline */}
          <h2
            id="clients-heading"
            className="font-[family-name:var(--font-display)] font-bold leading-[0.92] tracking-[-0.03em] text-4xl sm:text-6xl md:text-7xl max-w-4xl text-center mx-auto"
          >
            Worked with <span className="doodle-underline">AMAZING creators</span> like you
          </h2>

          {/* Creator Proof Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {clients.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 sm:p-6 flex items-center gap-4 bg-paper rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer block"
              >
                {/* Circular creator avatar / logo (no stroke, no shadow, subtle hover zoom) */}
                <img
                  src={client.avatar}
                  alt={client.name}
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover flex-none group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Creator Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <h3 className="font-[family-name:var(--font-display)] font-extrabold text-xl sm:text-2xl tracking-tight truncate text-ink group-hover:text-black transition-colors duration-200">
                      {client.name}
                    </h3>
                    {/* YouTube Verified Badge Icon */}
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-ink/60 group-hover:text-ink flex-shrink-0 transition-colors"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-label="Verified channel"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.5l-4-4 1.41-1.41L10.2 13.68l6.19-6.19 1.41 1.41-7.6 7.6z" />
                    </svg>
                  </div>

                  {/* Subscriber only text no green rectangle */}
                  <p className="mt-1 text-sm sm:text-base font-semibold text-ink/70">
                    {client.subs}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Button: LET'S COOK NOW! → */}
          <div className="mt-14 text-center">
            <a
              href="https://x.com/fm_addon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A2FF11] text-black border-[2.5px] sm:border-[3px] border-black rounded-full text-lg sm:text-xl font-black px-8 py-4 shadow-[2px_2px_0_0_#0a0a0a] hover:shadow-[3.5px_3.5px_0_0_#0a0a0a] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0_0_#0a0a0a] inline-flex items-center gap-2 transition-all"
            >
              <span>LET&apos;S COOK NOW!</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO / WORK SECTION */}
      <section
        id="work"
        aria-labelledby="work-heading"
        className="relative overflow-hidden border-b-[3px] border-ink pt-8 sm:pt-12 pb-20 sm:pb-28"
      >
        {/* Single pattern: Dots with Circular Fade */}
        <div className="absolute inset-0 bg-dots mask-radial-fade pointer-events-none" aria-hidden="true" />

        {/* Ambient Circular Glows */}
        <div
          className="absolute -top-16 -right-16 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'var(--accent)', filter: 'blur(120px)', opacity: 0.35 }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-20 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'var(--accent-2)', filter: 'blur(130px)', opacity: 0.25 }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <h2
              id="work-heading"
              className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-3xl sm:text-5xl md:text-6xl"
            >
              <span className="inline-block">Client Videos</span>{' '}
              <span className="inline-block">
                I’ve <span className="doodle-underline">Worked</span> On
              </span>
            </h2>
          </div>

          {/* 2-Column Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {workVideos.map((video) => (
              <article
                key={video.id}
                className="bg-paper rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_28px_rgba(0,0,0,0.14)] hover:shadow-[0_0_42px_rgba(0,0,0,0.22)] transition-shadow duration-300 flex flex-col"
              >
                {/* 16:9 Video Player */}
                <div className="relative aspect-video w-full bg-black overflow-hidden">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* Bottom Information in light theme (title + channel name only) */}
                <div className="p-5 sm:p-6 flex flex-col">
                  <h3 className="font-[family-name:var(--font-display)] font-extrabold text-xl sm:text-2xl tracking-tight text-ink leading-snug">
                    {video.title}
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base font-medium text-ink/70">
                    {video.channel}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Button: LET'S COOK NOW! → */}
          <div className="mt-14 sm:mt-18 text-center">
            <a
              href="https://x.com/fm_addon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A2FF11] text-black border-[2.5px] sm:border-[3px] border-black rounded-full text-lg sm:text-xl font-black px-8 py-4 shadow-[2px_2px_0_0_#0a0a0a] hover:shadow-[3.5px_3.5px_0_0_#0a0a0a] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0_0_#0a0a0a] inline-flex items-center gap-2 transition-all"
            >
              <span>LET&apos;S COOK NOW!</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="border-b-[3px] border-ink pt-8 sm:pt-12 pb-20 sm:pb-28 bg-soft relative overflow-hidden"
      >
        {/* Single pattern: Grid with Circular Fade */}
        <div className="absolute inset-0 bg-grid mask-radial-fade pointer-events-none" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-8 mb-10 sm:mb-14 text-center">
          <h2
            id="testimonials-heading"
            className="font-[family-name:var(--font-display)] font-bold leading-[0.9] tracking-[-0.03em] text-4xl sm:text-6xl md:text-7xl text-center mx-auto"
          >
            Hear it from the <span className="doodle-underline doodle-underline--pink">creators</span>
          </h2>
        </div>

        {/* Auto-scrolling carousel with fade on left and right, 0deg rotation, compact scale + manual scroll support */}
        <div className="relative w-full overflow-hidden mask-horizontal-fade py-2">
          <div
            ref={carouselRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none px-6 sm:px-12 py-2"
            onMouseEnter={() => {
              isHoveredRef.current = true;
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false;
              handleMouseUpOrLeave();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onTouchStart={() => {
              isHoveredRef.current = true;
            }}
            onTouchEnd={() => {
              isHoveredRef.current = false;
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="card-pop p-5 sm:p-6 rotate-0 transform-none flex-none w-[280px] sm:w-[350px] flex flex-col justify-between bg-paper select-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-[family-name:var(--font-display)] text-4xl leading-none text-accent-2 select-none">
                      “
                    </span>
                    <span className="px-2.5 py-1 rounded-full border-2 border-ink text-[11px] sm:text-xs font-black bg-accent text-ink whitespace-nowrap">
                      {t.stat}
                    </span>
                  </div>
                  <blockquote className="text-sm sm:text-base font-medium leading-snug text-ink/90">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-ink/10 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover flex-none pointer-events-none"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-[family-name:var(--font-display)] font-extrabold text-base sm:text-lg leading-tight truncate text-ink">
                      {t.author}
                    </div>
                    <div className="text-xs font-medium text-ink/70 truncate">
                      {t.subs}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section
        id="cta"
        aria-labelledby="cta-heading"
        className="relative border-b-[3px] border-ink py-24 sm:py-36 overflow-hidden bg-paper text-center"
      >
        {/* Single pattern: Dots with Circular Fade */}
        <div className="absolute inset-0 bg-dots mask-radial-fade pointer-events-none" aria-hidden="true" />
        <div
          className="absolute -top-12 -left-12 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: '#FF2D87', filter: 'blur(120px)', opacity: 0.3 }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: '#A2FF11', filter: 'blur(120px)', opacity: 0.3 }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-6 sm:px-8 flex flex-col items-center">
          {/* Large centered heading */}
          <h2
            id="cta-heading"
            className="font-[family-name:var(--font-display)] font-extrabold leading-[0.88] tracking-[-0.04em] text-5xl sm:text-7xl md:text-8xl"
          >
            Ready to <span className="marker-highlight">level up</span>?
          </h2>

          {/* Final CTA Button */}
          <div className="mt-10">
            <a
              href="https://x.com/fm_addon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A2FF11] text-black border-[3px] border-black rounded-full text-xl sm:text-2xl font-black px-9 sm:px-12 py-4 sm:py-5 shadow-[3px_3px_0_0_#0a0a0a] hover:shadow-[5px_5px_0_0_#0a0a0a] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0_0_#0a0a0a] inline-flex items-center gap-2.5 transition-all"
            >
              <span>LET&apos;S COOK NOW!</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
