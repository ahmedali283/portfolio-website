'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import CursorTrail from '@/components/CursorTrail';
import Clock from '@/components/Clock';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(0);
  const [activePricing, setActivePricing] = useState<'monthly' | 'annual'>('monthly');
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setHasMounted(true);

    // Scroll progress
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressAngle = (scrollPercent / 100) * 360;
      setScrollProgress(progressAngle);
      setShowScrollTop(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    if (!hasMounted) return;

    // Preloader animation
    const innerBars = document.querySelectorAll(".inner-bar");
    let increment = 0;

    const animateBars = () => {
      if (increment >= innerBars.length) {
          const preloaderTL = gsap.timeline({
              onComplete: () => {
                setIsLoaded(true);
                runMainAnimations();
              },
            });

            preloaderTL.to(".preloader", {
              opacity: 0,
              duration: 0.5,
              ease: "none",
            });
          return;
      }

      for (let i = 0; i < 2; i++) {
        if (innerBars[i + increment]) {
          const randomWidth = Math.floor(Math.random() * 101);
          gsap.to(innerBars[i + increment], {
              width: randomWidth + "%",
              duration: 0.3,
              ease: "none",
            });
        }
      }

      gsap.delayedCall(0.3, () => {
        for (let i = 0; i < 2; i++) {
          if (innerBars[i + increment]) {
              gsap.to(innerBars[i + increment], {
              width: "100%",
              duration: 0.3,
              ease: "none",
              });
          }
        }

        increment += 2;
        animateBars();
      });
    };

    if (!isLoaded) {
      animateBars();
    }

    const runMainAnimations = () => {
      // Effect Fade Animations
      const effectFades = document.querySelectorAll(".effectFade");
      effectFades.forEach((el: any) => {
        let fromVars: any = { autoAlpha: 0 };
        let toVars: any = { autoAlpha: 1, duration: 1, ease: "power3.out" };
        let delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
        toVars.delay = delay;

        if (el.classList.contains("fadeUp")) {
          fromVars.y = 50;
          toVars.y = 0;
        } else if (el.classList.contains("fadeDown")) {
          fromVars.y = -50;
          toVars.y = 0;
        } else if (el.classList.contains("fadeLeft")) {
          fromVars.x = -50;
          toVars.x = 0;
        } else if (el.classList.contains("fadeRight")) {
          fromVars.x = 50;
          toVars.x = 0;
        } else if (el.classList.contains("fadeZoom")) {
          fromVars.scale = 0.8;
          toVars.scale = 1;
        }

        gsap.fromTo(el, fromVars, {
          ...toVars,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      });

      // Stack Element Animation
      if (document.querySelector(".stack-element")) {
        const elements = document.querySelectorAll(".element:not(:last-child)");
        const container = document.querySelector(".stack-element-main");
        const containerHeight = container?.clientHeight || 0;

        elements.forEach((element: any) => {
          const elementHeight = element.offsetHeight;
          ScrollTrigger.create({
            trigger: element,
            scrub: 1,
            start: "top top+=30",
            end: `+=${containerHeight - elementHeight}`,
            pin: true,
            pinSpacing: false,
            animation: gsap.to(element, {
              scale: 0.9,
              opacity: 0,
            }),
          });
        });
      }

      // GSAP Anime 2
      const cards = document.querySelectorAll(".flip-image");
      if (cards.length > 0) {
          const isMobile = window.innerWidth < 767;
          const cardW = isMobile ? 150 : 325;
          const cardH = isMobile ? 150 : 325;
          const parent: any = cards[0].parentElement;
          const centerX = parent.clientWidth / 2 - cardW / 2;
          const centerY = parent.clientHeight / 2 - cardH / 2;
          cards.forEach((card: any, i) => {
            gsap.set(card, { position: "absolute", zIndex: i + 1, x: centerX, y: centerY, opacity: 0 });
          });
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".gsap-anime-2",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
          tl.to(cards, { opacity: 1, duration: 1, stagger: 0.1 })
            .to(cards, {
              x: (i) => {
                if (i === 0) return centerX - (isMobile ? 180 : 400);
                if (i === 1) return centerX - (isMobile ? 110 : 240);
                if (i === 2) return centerX - (isMobile ? 40 : 80);
                if (i === 3) return centerX + (isMobile ? 40 : 80);
                if (i === 4) return centerX + (isMobile ? 110 : 240);
                if (i === 5) return centerX + (isMobile ? 180 : 400);
                return centerX;
              },
              y: (i) => {
                if (i === 0) return centerY - (isMobile ? 120 : 300);
                if (i === 1) return centerY - (isMobile ? 70 : 180);
                if (i === 2) return centerY - (isMobile ? 25 : 60);
                if (i === 3) return centerY + (isMobile ? 25 : 60);
                if (i === 4) return centerY + (isMobile ? 70 : 180);
                if (i === 5) return centerY + (isMobile ? 120 : 300);
                return centerY;
              },
              rotation: -10, rotateX: 4, rotateY: 10, duration: 1, ease: "power2.out", delay: 0.3,
            });
      }

      // Text Color Change
      const textChange = document.querySelectorAll(".text-color-change");
      textChange.forEach((el: any) => {
        const text = el.innerText;
        el.innerHTML = text.split(' ').map((word: string) => `<span>${word} </span>`).join('');
        const spans = el.querySelectorAll('span');
        gsap.set(spans, { color: "rgba(255, 255, 255, 0.32)" });
        gsap.to(spans, {
          color: "#ffffff",
          stagger: 0.03,
          scrollTrigger: { trigger: el, start: "top 70%", end: "bottom 20%", scrub: true },
        });
      });

      // Infinite Slide
      const slides = document.querySelectorAll(".infiniteSlide");
      slides.forEach((slide: any) => {
        gsap.to(slide, { xPercent: -50, repeat: -1, duration: 20, ease: "linear" });
      });
    };
  }, { scope: mainRef, dependencies: [hasMounted] });

  return (
    <main id="wrapper" ref={mainRef} className={!hasMounted ? "bg-black h-screen w-screen" : ""}>
      {hasMounted && (
        <>
          <CursorTrail />

          {/* Preloader - handled by CSS/GSAP instead of conditional rendering to avoid removeChild errors */}
          <div className={`preloader overflow-hidden ${isLoaded ? 'pointer-events-none' : ''}`} style={{ opacity: isLoaded ? 0 : 1, visibility: isLoaded ? 'hidden' : 'visible', transition: 'opacity 0.5s, visibility 0.5s' }}>
            <div className="site-name"><span>DAVES</span></div>
            <div className="preloader-gutters">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bar">
                  <div className="inner-bar"></div>
                </div>
              ))}
            </div>
          </div>

          <SmoothScroll>
            {/* Header */}
            <header className="tf-header style-2">
              <div className="header-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-6 col-md-1">
                      <Link href="/" className="logo-site">
                        <i className="icon icon-davies-logo"></i>
                      </Link>
                    </div>
                    <div className="col-3 col-md-2 ms-xl-auto d-none d-md-block">
                      <ul className="tf-list vertical">
                        <li> <Link href="#workScroll" className="link text-caption">WORKS</Link></li>
                        <li> <Link href="#serviceScroll" className="link text-caption">SERVICES</Link></li>
                        <li> <Link href="#aboutScroll" className="link text-caption">ABOUT</Link></li>
                        <li> <Link href="#contactScroll" className="link text-caption">CONTACT</Link></li>
                      </ul>
                    </div>
                    <div className="col-3 col-md-2 d-none d-sm-block ms-auto ms-xl-0">
                      <div className="header-contact">
                        <a href="mailto:davies@gmail.com" className="link text-caption">DAVIES@GMAIL.COM</a>
                        <p className="text-caption text-utc">
                          <i className="icon icon-globe"></i>
                          CUPERTINO, CA
                        </p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-3 col-md-2 d-flex justify-content-end align-items-start d-md-none">
                      <button type="button" className="btn-mobile-menu open-mb-menu text-caption text-white link" onClick={() => setShowMobileMenu(true)}>
                        <i className="icon icon-menu"></i>
                        MENU
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Hero Banner */}
            <div className="section-hero-v2 flat-spacing">
              <div className="overlay"></div>
              <div className="bg-video">
                <video muted autoPlay loop playsInline>
                  <source src="/media/wave-bg.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="container">
                <div className="image-wrap">
                  <div className="img-item image-1">
                    <img className="effectFade fadeDown" loading="lazy" width="400" height="600" src="/images/davies-main.jpg" alt="Image" />
                    <div className="image-child">
                      <img className="effectFade fadeZoom" loading="lazy" width="1296" height="279" src="/images/davies-stroke.svg" alt="Image" />
                    </div>
                  </div>
                  <div className="img-item-2">
                    <img className="effectFade fadeZoom" loading="lazy" width="1296" height="279" src="/images/davies-fill.svg" alt="Image" />
                  </div>
                </div>
                <div className="bottom">
                  <ul className="tf-list text-caption letter-space--1 fw-medium scroll-fadeUp2">
                    <li><a href="#" className="link effectFade view-visible">WEB-DESIGNER</a></li>
                    <li className="effectFade view-visible" data-delay="0.1">/</li>
                    <li><a href="#" className="link effectFade view-visible" data-delay="0.2">BLOGGER</a></li>
                    <li className="effectFade view-visible" data-delay="0.3">/</li>
                    <li><a href="#" className="link effectFade view-visible" data-delay="0.4">TREND ANALYST</a></li>
                  </ul>
                  <div className="effectFade fadeUp no-div view-visible" data-delay="0.1">
                    <a href="#contactScroll" className="tf-btn style-2 style-fill-white animate-btn animate-dark">
                      <span className="text-caption letter-space--1 fw-medium">START A PROJECT</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Work */}
            <section className="section-selected-work-v2 flat-spacing stack-element" id="workScroll">
              <div className="s-header d-block overflow-hidden">
                <div className="infiniteSlide infiniteSlide_select_work d-flex" data-clone="5">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="d-flex align-items-center gap-4 flex-shrink-0" style={{ paddingRight: '40px' }}>
                      <p className="text-display-1 letter-space--3 fw-semibold">Selected Work</p>
                      <div className="icon-app">
                        <img loading="lazy" width="120" height="120" src="/images/global.svg" alt="Image" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="container">
                <div className="work-list stack-element-main position-relative">
                  <div className="element">
                    <a href="#" className="wg-work effectFade fadeUp no-div">
                      <div className="work-image">
                        <video muted autoPlay loop playsInline>
                          <source src="/media/nexbot.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="work-content">
                        <div className="work_top">
                          <h5 className="letter-space--2">Nexbot_</h5>
                          <ul className="tf-list vertical text-end">
                            <li className="text-white-64">Industry</li>
                            <li className="effectFade fadeUp">Artificial Intelligence</li>
                            <li className="effectFade fadeUp">Web3</li>
                          </ul>
                        </div>
                        <div className="work_bottom">
                          <ul className="tf-list vertical">
                            <li className="text-white-64">Services</li>
                            <li className="effectFade fadeUp">Branding</li>
                          </ul>
                          <h5 className="letter-space--2">2025</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="element">
                    <a href="#" className="wg-work">
                      <div className="work-image">
                        <img loading="lazy" width="1296" height="648" src="/images/work-5.jpg" alt="Image" />
                      </div>
                      <div className="work-content">
                        <div className="work_top">
                          <h5 className="letter-space--2">Landa_</h5>
                          <ul className="tf-list vertical text-end">
                            <li className="text-white-64">Industry</li>
                            <li className="effectFade fadeUp">SAAS</li>
                            <li className="effectFade fadeUp">Productivity</li>
                          </ul>
                        </div>
                        <div className="work_bottom">
                          <ul className="tf-list vertical">
                            <li className="text-white-64">Services</li>
                            <li className="effectFade fadeUp">Website Design</li>
                            <li className="effectFade fadeUp">Visual Identity</li>
                            <li className="effectFade fadeUp">Framer Development</li>
                          </ul>
                          <h5 className="letter-space--2">2025</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="element">
                    <a href="#" className="wg-work">
                      <div className="work-image">
                        <img loading="lazy" width="1296" height="648" src="/images/work-6.jpg" alt="Image" />
                      </div>
                      <div className="work-content">
                        <div className="work_top">
                          <h5 className="letter-space--2">Brandon_</h5>
                          <ul className="tf-list vertical text-end">
                            <li className="text-white-64">Industry</li>
                            <li className="effectFade fadeUp">Portfolio</li>
                            <li className="effectFade fadeUp">Photography</li>
                          </ul>
                        </div>
                        <div className="work_bottom">
                          <ul className="tf-list vertical">
                            <li className="text-white-64">Services</li>
                            <li className="effectFade fadeUp">Website Design</li>
                            <li className="effectFade fadeUp">Visual Identity</li>
                            <li className="effectFade fadeUp">Framer Development</li>
                          </ul>
                          <h5 className="letter-space--2">2025</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#contactScroll" className="tf-btn style-2">
                    + YOUR PROJECT
                  </a>
                </div>
              </div>
            </section>

            {/* About Me */}
            <section className="section-about-me-v2 flat-spacing" id="aboutScroll">
              <div className="container">
                <div className="about-main flat-spacing-bottom">
                  <div className="davies-video">
                    <video className="video" muted autoPlay loop playsInline>
                      <source src="/media/davies-video.mp4" type="video/mp4" />
                    </video>
                    <div className="overlay mark"></div>
                    <div className="overlay bg-effect">
                      <img loading="lazy" width="1296" height="729" src="/images/dither-effect.svg" alt="Image" />
                    </div>
                  </div>
                  <div className="content">
                    <div className="top text-display-1 fw-semibold letter-space--3">
                      <p className="effectFade fadeUp">About</p>
                      <p className="effectFade fadeUp" data-delay="0.1">Davies<span className="text-primary">_</span></p>
                    </div>
                    <h5 className="text-color-change letter-space--2 fw-normal">
                      I’m a designer and no-code developer creating bold, functional, and award-winning digital experiences that help brands
                      connect with their audience.
                    </h5>
                  </div>
                </div>
                <div className="br-line d-flex flat-spacing-bottom"></div>
                <div className="award-main">
                    <div className="left">
                        <div className="badget animate-box">
                            <img loading="lazy" width="156" height="156" src="/images/badge-design.png" alt="Image" />
                        </div>
                    </div>
                    <ul className="experience-list overflow-hidden">
                        <li>Work Experience</li>
                        <li className="effectFade fadeRight">
                            <p className="exp_name">Independent Product Designer</p>
                            <p className="exp_year">2025</p>
                        </li>
                        <li className="effectFade fadeRight">
                            <p className="exp_name">Senior UX Designer at CloudForge</p>
                            <p className="exp_year">2024 - 2025</p>
                        </li>
                        <li className="effectFade fadeRight">
                            <p className="exp_name">Product Designer at Orbit Systems</p>
                            <p className="exp_year">2022 - 2024</p>
                        </li>
                        <li className="effectFade fadeRight">
                            <p className="exp_name">UI/UX Designer at PixelHaus</p>
                            <p className="exp_year">2021 - 2022</p>
                        </li>
                        <li className="effectFade fadeRight">
                            <p className="exp_name">Junior Designer at Brightline Studio</p>
                            <p className="exp_year">2020 - 2021</p>
                        </li>
                    </ul>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="section-tech-stack-v2 flat-spacing">
                <div className="container">
                    <div className="s-header d-block">
                        <h2 className="text-display-2 letter-space--3 text-center effectFade fadeUp">Tech Stack</h2>
                    </div>
                    <div className="tf-grid-layout lg-col-3">
                        <div className="wg-tech-v2">
                            <div className="tech-content">
                                <h5 className="tech-name letter-space--2">Figma</h5>
                                <p className="tech-desc letter-space--1">
                                    Collaborerative design tool for <br />
                                    creating, prototyping, and refining <br />
                                    modern interfaces.
                                </p>
                                <div className="ic-img">
                                    <img loading="lazy" width="33" height="48" src="/images/figma.svg" alt="Image Icon" />
                                </div>
                            </div>
                        </div>
                        <div className="wg-tech-v2">
                            <div className="tech-content">
                                <h5 className="tech-name letter-space--2">Framer</h5>
                                <p className="tech-desc letter-space--1">
                                    No-code platform for <br />
                                    building high-fidelity, interactive <br />
                                    websites with ease.
                                </p>
                                <div className="ic-img">
                                    <img loading="lazy" width="32" height="48" src="/images/framer.svg" alt="Image Icon" />
                                </div>
                            </div>
                        </div>
                        <div className="wg-tech-v2">
                            <div className="tech-content">
                                <h5 className="tech-name letter-space--2">Webflow</h5>
                                <p className="tech-desc letter-space--1">
                                    Visual development tool for <br />
                                    designing, building, and launching <br />
                                    responsive websites.
                                </p>
                                <div className="ic-img">
                                    <img loading="lazy" width="77" height="48" src="/images/webflow.svg" alt="Image Icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service */}
            <section className="section-service-v2 flat-spacing" id="serviceScroll">
                <div className="container">
                    <div className="br-line d-flex"></div>
                    <div className="service-accordion-main" id="service-accordion-main">
                        {[
                            { id: 0, title: 'Branding', img: '/images/service-4.jpg', order: '01' },
                            { id: 1, title: 'Web Design', img: '/images/service-5.jpg', order: '02' },
                            { id: 2, title: 'No-Code Sites', img: '/images/service-6.jpg', order: '03' }
                        ].map((service) => (
                            <div key={service.id} className="service-accordion_item effectFade fadeUp no-div">
                                <div 
                                    className={`accordion-action ${activeService === service.id ? '' : 'collapsed'}`} 
                                    onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h5 className="text-display-1 letter-space--3">{service.title}</h5>
                                </div>
                                <div className={`collapse ${activeService === service.id ? 'show' : ''}`} style={{ display: activeService === service.id ? 'block' : 'none' }}>
                                    <div className="accordion-content">
                                        <div className="image-left">
                                            <img width="860" height="373" src={service.img} alt="Image" />
                                        </div>
                                        <div className="content-right">
                                            <p className="number-order text-display-1 fw-medium letter-space--3 text-white-32">{service.order}</p>
                                            <ul className="tf-list vertical gap-12 text-body-1">
                                                <li><span className="text-primary">//</span> Brand Strategy</li>
                                                <li><span className="text-primary">//</span> Visual Identity Design</li>
                                                <li><span className="text-primary">//</span> Logo & Typography</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand */}
            <div className="section-brand flat-spacing bg-surface">
                <div className="container">
                    <h6 className="mini-title text-caption text-black-64">BRANDS AND PARTNERS</h6>
                    <div className="brand-list type-line-2">
                        {[...Array(10)].map((_, i) => (
                            <a key={i} href="#" className="img-brand">
                                <img loading="lazy" src={`/images/brandv2-${i + 1}.svg`} alt="Brand" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Awards */}
            <section className="section-award flat-spacing bg-surface">
              <div className="container">
                <div className="row">
                  <div className="col-md-5 ms-auto">
                    <div className="col-right">
                      <h6 className="mini-title text-caption text-black-64">AWARDS</h6>
                      <h5 className="fw-normal letter-space--2 text-black">
                        Since 2020, my work has been honored by leading design platforms around the world. Each award represents a project where creativity, precision, and impact came together.
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="col-left">
                      <p className="desc text-black-64 mini-title">
                        157 industry awards. <br />
                        Bold ideas. Flawless execution.
                      </p>
                      <div className="swiper tf-swiper swiper-t2" style={{ height: '300px' }}>
                        <div className="swiper-wrapper">
                          {[
                            { name: 'Behance', count: 'x28' },
                            { name: 'Awwwards', count: 'x41' },
                            { name: 'CSS Design Awards', count: 'x67' },
                            { name: 'Behance', count: 'x28' },
                            { name: 'Awwwards', count: 'x41' },
                            { name: 'CSS Design Awards', count: 'x67' },
                          ].map((award, i) => (
                            <div key={i} className="swiper-slide">
                              <div className="award-item h4 letter-space--2 text-black">
                                {award.name}
                                <span className="text-body-1 letter-space--1">{award.count}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap-flip-image flat-spacing">
                  <div className="container">
                    <div className="flip-image-list gsap-anime-2" style={{ height: '600px', position: 'relative' }}>
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="flip-image">
                          <img loading="lazy" width="325" height="325" src={`/images/award-${i + 1}.jpg`} alt="Image" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="section-testimonial flat-spacing tf-btn-swiper-main">
              <h6 className="mini-title text-caption text-white-64 text-center">
                TRUSTED BY FOUNDERS
              </h6>
              <div className="swiper tf-swiper swiper-testimonial mt-4">
                <div className="swiper-wrapper">
                  {[
                    { img: '/images/tes-v2-1.jpg', name: 'Liam Carter', role: 'Founder, Arcadia Tech', text: 'Working with Davies was seamless. He nailed our vision and delivered a modern, functional website that feels distinctly ours.' },
                    { img: '/images/tes-v2-2.jpg', name: 'Liam Carter', role: 'Founder, Arcadia Tech', text: 'Working with Davies was seamless. He nailed our vision and delivered a modern, functional website that feels distinctly ours.' },
                    { img: '/images/tes-v2-3.jpg', name: 'Liam Carter', role: 'Founder, Arcadia Tech', text: 'Working with Davies was seamless. He nailed our vision and delivered a modern, functional website that feels distinctly ours.' },
                    { img: '/images/tes-v2-1.jpg', name: 'Liam Carter', role: 'Founder, Arcadia Tech', text: 'Working with Davies was seamless. He nailed our vision and delivered a modern, functional website that feels distinctly ours.' },
                  ].map((item, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="testimonial-v01">
                        <div className="tes-author">
                          <div className="author_image">
                            <img loading="lazy" width="437" height="328" src={item.img} alt="Image" />
                          </div>
                          <div className="author_info">
                            <h6 className="info__name text-body-1 letter-space--1">{item.name}</h6>
                            <p className="info__duty">{item.role}</p>
                          </div>
                        </div>
                        <div className="br-line"></div>
                        <p className="tes-text text-body-1">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="indicator-wrap flat-spacing">
                <div className="bg-img">
                  <img loading="lazy" width="1440" height="800" src="/images/gird-net.png" alt="Image" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="wg-indicator mb-md-0">
                        <p className="indicate-title text-body-1 letter-space--1">
                          <span className="text-primary">//</span> Projects Delivered
                        </p>
                        <p className="indicate-counter wg-counter text-display-1 fw-medium">
                          <span className="odometer" data-number="40">40</span> <span className="text-primary">+</span>
                        </p>
                        <p className="indicate-sub">
                          Creative work that drive <br />
                          real results
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="wg-indicator mb-md-0">
                        <p className="indicate-title text-body-1 letter-space--1">
                          <span className="text-primary">//</span> Clients Satisfaction
                        </p>
                        <p className="indicate-counter wg-counter text-display-1 fw-medium">
                          <span className="odometer" data-number="96">96</span> <span className="text-primary">%</span>
                        </p>
                        <p className="indicate-sub">
                          I mostly focus on <br />
                          exceeding expectations
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="wg-indicator mb-0">
                        <p className="indicate-title text-body-1 letter-space--1">
                          <span className="text-primary">//</span> Years of Experience
                        </p>
                        <p className="indicate-counter wg-counter text-display-1 fw-medium">
                          <span className="odometer" data-number="10">10</span> <span className="text-primary">+</span>
                        </p>
                        <p className="indicate-sub">
                          Mastering the art of animation <br />
                          content and design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="section-pricing type-2 flat-spacing flat-animate-tab">
              <div className="s-header d-block overflow-hidden">
                <div className="infiniteSlide infiniteSlide_select_work d-flex" data-clone="5">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="d-flex align-items-center gap-4 flex-shrink-0" style={{ paddingRight: '40px' }}>
                      <p className="text-display-1 letter-space--3 fw-semibold">Pricing Plan</p>
                      <div className="icon-app">
                        <img loading="lazy" width="120" height="120" src="/images/global.svg" alt="Image" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="container">
                <ul className="pricing-tab_btn" role="tablist">
                  <li className="nav-tab-item" role="presentation">
                    <button
                      onClick={() => setActivePricing('monthly')}
                      className={`tf-btn-tab ${activePricing === 'monthly' ? 'active' : ''}`}
                    >
                      <span className="dot-active"></span>
                      Monthly
                    </button>
                  </li>
                  <li className="nav-tab-item" role="presentation">
                    <button
                      onClick={() => setActivePricing('annual')}
                      className={`tf-btn-tab ${activePricing === 'annual' ? 'active' : ''}`}
                    >
                      <span className="dot-active"></span>
                      <span>Annually - <span className="text-primary">Save 20%</span></span>
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className={`tab-pane ${activePricing === 'monthly' ? 'active show' : ''}`}>
                    <div className="tf-grid-layout md-col-2 lg-col-3">
                      <div className="wg-plan">
                        <div className="br-line"></div>
                        <div className="plan-name letter-space--1 fw-medium">Basic</div>
                        <h4 className="plan-price">
                          $640 <span className="text-body-2 fw-normal text-white-64">/month</span>
                        </h4>
                        <p className="plan-desc text-white-64 letter-space--1">
                          Perfect for early-stage teams or startups ready to launch their first online presence.
                        </p>
                        <a href="#contactScroll" className="btn-action tf-btn style-2 style-troke w-100">
                          <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                        </a>
                        <ul className="benefit-list tf-list vertical">
                          <li className="benefit_title letter-space--1 text-white-64">What's included:</li>
                          <li><span>//</span> Custom website design</li>
                          <li><span>//</span> Responsive layouts</li>
                          <li><span>//</span> Basic SEO setup</li>
                          <li><span>//</span> Tool integrations</li>
                          <li><span>//</span> Ongoing support</li>
                        </ul>
                      </div>
                      <div className="wg-plan style-2 type-2">
                        <div className="bg-img bg-img_2">
                          <img loading="lazy" width="416" height="625" src="/images/bg-6.png" alt="Image" />
                        </div>
                        <div className="br-line bg-primary"></div>
                        <div className="plan-name letter-space--1 fw-medium">Pro</div>
                        <h4 className="plan-price">
                          <span><span className="text-primary">$</span>1,280</span>
                          <span className="text-body-2 fw-normal text-white-64">/month</span>
                        </h4>
                        <p className="plan-desc text-white-64 letter-space--1">
                          Ideal for growing brands that require added features and enhanced creative flexibility.
                        </p>
                        <a href="#contactScroll" className="btn-action tf-btn style-2 style-fill w-100 animate-btn animate-dark">
                          <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                        </a>
                        <ul className="benefit-list tf-list vertical">
                          <li className="benefit_title letter-space--1 text-white-64">What's included:</li>
                          <li><span className="text-primary">//</span> Advanced web design</li>
                          <li><span className="text-primary">//</span> Interactive elements</li>
                          <li><span className="text-primary">//</span> Full SEO services</li>
                          <li><span className="text-primary">//</span> E-commerce setup</li>
                          <li><span className="text-primary">//</span> Monthly reports</li>
                        </ul>
                      </div>
                      <div className="wg-plan style-2 type-3">
                        <div className="bg-img bg-img_1"></div>
                        <div className="br-line bg-white"></div>
                        <div className="plan-name letter-space--1 fw-medium">Max</div>
                        <h4 className="plan-price">
                          $2,560 <span className="text-body-2 fw-normal text-white-64">/month</span>
                        </h4>
                        <p className="plan-desc text-white-64 letter-space--1">
                          Designed for established companies seeking a completely bespoke digital solution.
                        </p>
                        <a href="#contactScroll" className="btn-action tf-btn style-2 style-fill-white w-100 animate-btn animate-dark">
                          <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                        </a>
                        <ul className="benefit-list tf-list vertical">
                          <li className="benefit_title letter-space--1 text-white-64">What's included:</li>
                          <li><span>//</span> Complete branding</li>
                          <li><span>//</span> Premium visuals</li>
                          <li><span>//</span> Enterprise systems</li>
                          <li><span>//</span> Dedicated manager</li>
                          <li><span>//</span> Priority support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane ${activePricing === 'annual' ? 'active show' : ''}`}>
                    <div className="tf-grid-layout md-col-2 lg-col-3">
                      <div className="wg-plan">
                        <div className="br-line"></div>
                        <div className="plan-name letter-space--1 fw-medium">Basic</div>
                        <h4 className="plan-price">
                          $6,400 <span className="text-body-2 fw-normal text-white-64">/annual</span>
                        </h4>
                        <p className="plan-desc text-white-64 letter-space--1">
                          Perfect for early-stage teams or startups ready to launch their first online presence.
                        </p>
                        <a href="#contactScroll" className="btn-action tf-btn style-2 style-troke w-100">
                          <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                        </a>
                        <ul className="benefit-list tf-list vertical">
                          <li className="benefit_title letter-space--1 text-white-64">What's included:</li>
                          <li><span>//</span> Custom website design</li>
                          <li><span>//</span> Responsive layouts</li>
                          <li><span>//</span> Basic SEO setup</li>
                          <li><span>//</span> Tool integrations</li>
                          <li><span>//</span> Ongoing support</li>
                        </ul>
                      </div>
                      <div className="wg-plan style-2 type-2">
                        <div className="bg-img bg-img_2">
                          <img loading="lazy" width="416" height="625" src="/images/bg-6.png" alt="Image" />
                        </div>
                        <div className="br-line bg-primary"></div>
                        <div className="plan-name letter-space--1 fw-medium">Pro</div>
                        <h4 className="plan-price">
                          <span><span className="text-primary">$</span>12,800</span>
                          <span className="text-body-2 fw-normal text-white-64">/annual</span>
                        </h4>
                        <p className="plan-desc text-white-64 letter-space--1">
                          Ideal for growing brands that require added features and enhanced creative flexibility.
                        </p>
                        <a href="#contactScroll" className="btn-action tf-btn style-2 style-fill w-100 animate-btn animate-dark">
                          <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                        </a>
                        <ul className="benefit-list tf-list vertical">
                          <li className="benefit_title letter-space--1 text-white-64">What's included:</li>
                          <li><span className="text-primary">//</span> Advanced web design</li>
                          <li><span className="text-primary">//</span> Interactive elements</li>
                          <li><span className="text-primary">//</span> Full SEO services</li>
                          <li><span className="text-primary">//</span> E-commerce setup</li>
                          <li><span className="text-primary">//</span> Monthly reports</li>
                        </ul>
                      </div>
                      <div className="wg-plan style-2 type-3">
                        <div className="bg-img bg-img_1"></div>
                        <div className="br-line bg-white"></div>
                        <div className="plan-name letter-space--1 fw-medium">Max</div>
                        <h4 className="plan-price">
                          $25,600 <span className="text-body-2 fw-normal text-white-64">/annual</span>
                        </h4>
                        <p className="plan-desc text-white-64 letter-space--1">
                          Designed for established companies seeking a completely bespoke digital solution.
                        </p>
                        <a href="#contactScroll" className="btn-action tf-btn style-2 style-fill-white w-100 animate-btn animate-dark">
                          <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                        </a>
                        <ul className="benefit-list tf-list vertical">
                          <li className="benefit_title letter-space--1 text-white-64">What's included:</li>
                          <li><span>//</span> Complete branding</li>
                          <li><span>//</span> Premium visuals</li>
                          <li><span>//</span> Enterprise systems</li>
                          <li><span>//</span> Dedicated manager</li>
                          <li><span>//</span> Priority support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="section-faq type-2 flat-spacing bg-surface">
              <div className="container">
                <div className="s-header d-block">
                  <h2 className="title text-display-2 letter-space--3 text-center text-black effectFade fadeUp">
                    <span className="text">
                      Frequently
                      <span className="icon"><img loading="lazy" width="80" height="80" src="/images/global-2.svg" alt="Image" /></span>
                    </span> <br />
                    asked questions
                  </h2>
                </div>
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="accordion-faq_list" id="accordion-faq_list">
                      {[
                        { id: 0, order: '01', question: 'How long does a project usually take?', answer: 'Most projects are completed within 4–8 weeks, depending on complexity, revisions, and scope. I will always provide a clear timeline before starting.' },
                        { id: 1, order: '02', question: 'Do you work with international clients?', answer: 'Yes, I collaborate with clients worldwide using online meetings, project management tools, and shared design platforms to ensure smooth communication.' },
                        { id: 2, order: '03', question: 'Can you help with both design and development?', answer: 'Absolutely. I handle branding, UI/UX design, and no-code or coded development to deliver a complete end-to-end solution.' },
                        { id: 3, order: '04', question: "What's your payment process?", answer: 'I typically require a 50% deposit to begin work, with the remaining balance due upon project completion and approval.' },
                        { id: 4, order: '05', question: 'Do you provide ongoing support after launch?', answer: 'Yes. I offer maintenance, updates, and performance monitoring packages to keep your website or product running smoothly long-term.' },
                      ].map((faq) => (
                        <div key={faq.id} className="accordion-faq_item cl-line-2" role="presentation">
                          <div
                            className={`accordion-action text-body-1 letter-space--1 fw-medium ${activeFaq === faq.id ? '' : 'collapsed'}`}
                            onClick={() => setActiveFaq(activeFaq === faq.id ? -1 : faq.id)}
                            style={{ cursor: 'pointer' }}
                          >
                            <span className="accordion-order text-black-64">{faq.order}</span>
                            <p className="accordion-text text-black">{faq.question}</p>
                            <div className="ic-wrap d-flex">
                              <i className="icon icon-arrow-caret-down fs-10 text-black"></i>
                            </div>
                          </div>
                          <div className={`collapse ${activeFaq === faq.id ? 'show' : ''}`} style={{ display: activeFaq === faq.id ? 'block' : 'none' }}>
                            <p className="accordion-content text-black-64">{faq.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="section-cta flat-spacing" id="contactScroll">
              <div className="s-header d-block">
                <div className="container">
                  <div className="row">
                    <div className="col-2 offset-lg-2 col-lg-2">
                      <div className="col-left">
                        <a href="/" className="logo-custom">
                          <div className="logo-site-sv">
                            <svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.21094 0.400391C15.9908 0.392629 21.8983 0.597548 27.1426 5.65918C35.1922 13.4293 35.2468 26.7035 27.5312 34.7549C22.0053 40.1145 16.6295 40.3989 9.48535 40.4004L0.75 40.3945L0.751953 0.407227L9.21094 0.400391ZM21.5244 6.83496C16.6613 3.86011 10.4273 4.54391 4.91113 4.55664L17.2607 22.3262C19.5017 25.5466 21.7744 28.9254 24.0615 32.0889C24.847 31.468 25.7087 30.3488 26.2646 29.5088C28.7144 25.5207 29.444 20.7119 28.2871 16.1777C27.305 12.2252 25.0035 8.9637 21.5244 6.83496Z" fill="#07C42C"></path>
                            </svg>
                          </div>
                          <span className="line-vertical left"></span>
                          <span className="line-vertical right"></span>
                          <span className="line-horizontal top"></span>
                          <span className="line-horizontal bottom"></span>
                        </a>
                      </div>
                    </div>
                    <div className="col-10 col-lg-6">
                      <h2 className="text-display-2 letter-space--3 text-end effectFade fadeUp">
                        Let's start <br />
                        creating together
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <form className="form-cta">
                      <div className="form-content">
                        <div className="tf-grid-layout sm-col-2">
                          <fieldset className="tf-field">
                            <input className="tf-input" type="text" placeholder="" required />
                            <label className="tf-lable">Name <span className="text-primary">*</span></label>
                          </fieldset>
                          <fieldset className="tf-field">
                            <input className="tf-input" type="email" placeholder="" required />
                            <label className="tf-lable">Email <span className="text-primary">*</span></label>
                          </fieldset>
                        </div>
                        <div className="tf-grid-layout sm-col-2">
                          <fieldset className="tf-field">
                            <select className="tf-input" defaultValue="">
                              <option value="" disabled>You are interested in</option>
                              <option>Web Development</option>
                              <option>UI/UX Design</option>
                              <option>Digital Marketing</option>
                            </select>
                          </fieldset>
                          <fieldset className="tf-field">
                            <select className="tf-input" defaultValue="">
                              <option value="" disabled>Budget in USD</option>
                              <option>$0 – $100</option>
                              <option>$100 – $500</option>
                              <option>$500 – $1,000</option>
                            </select>
                          </fieldset>
                        </div>
                        <fieldset className="tf-field">
                          <input className="tf-input" type="text" placeholder="" required />
                          <label className="tf-lable">Project details</label>
                        </fieldset>
                      </div>
                      <div className="form-action">
                        <button type="submit" className="tf-btn">
                          <span className="text-caption">SUBMIT MESSAGE</span>
                        </button>
                        <p className="text-body-1">
                          say hello - <a href="mailto:davies@gmail.com" className="text-primary">davies@gmail.com</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="tf-footer style-2">
              <div className="container">
                <div className="br-line"></div>
                <div className="footer-inner text-caption letter-space--1 fw-medium">
                  <Link href="#workScroll" className="link">WORKS</Link>
                  <Link href="#serviceScroll" className="link">SERVICES</Link>
                  <Link href="#aboutScroll" className="link">ABOUT</Link>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="action-go-top tf-link-icon link">
                    BACK TO TOP
                    <i className="icon icon-arrow-long-right"></i>
                  </button>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="container">
                  <div className="img-agency scroll-fadeZoom">
                    <img className="effectFade fadeZoom" loading="lazy" width="1293" height="269" src="/images/agency.png" alt="Image" />
                  </div>
                  <div className="bottom text-caption letter-space--1 fw-medium">
                    <p className="text-nocopy">© DAVIES'S PERSONAL PORTFOLIO</p>
                    <p>CUPERTINO → <Clock /></p>
                    <div className="right">
                      <a href="#" className="tf-link-icon link">TWITTER (X)</a>
                      <a href="#" className="tf-link-icon link">DRIBBBLE</a>
                      <a href="#" className="tf-link-icon link">LINKEDIN</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </SmoothScroll>

          {/* Scroll Top Button */}
          <button
            id="goTop"
            className={showScrollTop ? 'show' : ''}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 1000,
            }}
          >
            <span
              className="border-progress"
              style={{ '--progress-angle': `${scrollProgress}deg` } as React.CSSProperties}
            ></span>
            <span className="ic-wrap">
              <span className="icon icon-arrow-caret-right"></span>
            </span>
          </button>

          {/* Mobile Menu */}
          <div className={`offcanvas-menu ${showMobileMenu ? 'show' : ''}`}>
            <div className="offcanvas-content">
              <div className="container h-100">
                <div className="offcanvas-content_wrapin">
                  <div className="canvas_head">
                    <Link href="/" className="logo-site">
                      <i className="icon icon-davies-logo"></i>
                    </Link>
                    <div className="btn-mobile-menu close-mb-menu text-caption link" onClick={() => setShowMobileMenu(false)}>
                      <i className="icon icon-close"></i>
                      CLOSE
                    </div>
                  </div>
                  <div className="canvas_center">
                    <ul className="nav-ul-mb">
                      <li>
                        <div className="item close-mb-menu">
                          <Link href="#workScroll" className="mb-menu-link text-display-1" onClick={() => setShowMobileMenu(false)}>
                            <span className="text">Works</span>
                            <div className="infiniteSlide_text_main">
                              <div className="infiniteSlide infiniteSlide_text" data-clone="5">
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View Works
                                </p>
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View Works
                                </p>
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View Works
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="item close-mb-menu">
                          <Link href="#aboutScroll" className="mb-menu-link text-display-1" onClick={() => setShowMobileMenu(false)}>
                            <span className="text">About</span>
                            <div className="infiniteSlide_text_main">
                              <div className="infiniteSlide infiniteSlide_text" data-clone="5">
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View About
                                </p>
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View About
                                </p>
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View About
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="item close-mb-menu">
                          <Link href="#serviceScroll" className="mb-menu-link text-display-1" onClick={() => setShowMobileMenu(false)}>
                            <span className="text">Services</span>
                            <div className="infiniteSlide_text_main">
                              <div className="infiniteSlide infiniteSlide_text" data-clone="5">
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View Services
                                </p>
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View Services
                                </p>
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View Services
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="item close-mb-menu">
                          <Link href="#contactScroll" className="mb-menu-link text-display-1" onClick={() => setShowMobileMenu(false)}>
                            <span className="text">Contact</span>
                            <div className="infiniteSlide_text_main">
                              <div className="infiniteSlide infiniteSlide_text" data-clone="5">
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View Contact
                                </p>
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View Contact
                                </p>
                                <p className="text-body-2 letter-space--1">
                                  <span className="text-primary">//</span> View Contact
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="canvas_foot">
                    <div className="left">
                      <a href="mailto:davies@gmail.com" className="link text-caption">DAVIES@GMAIL.COM</a>
                      <p className="text-caption">
                        CUP <Clock />
                      </p>
                    </div>
                    <div className="right">
                      <a href="#" className="tf-link-icon text-caption link">
                        <i className="icon icon-arrow-top-right"></i>
                        TWITTER (X)
                      </a>
                      <a href="#" className="tf-link-icon text-caption link">
                        <i className="icon icon-arrow-top-right"></i>
                        DRIBBBLE
                      </a>
                      <a href="#" className="tf-link-icon text-caption link">
                        <i className="icon icon-arrow-top-right"></i>
                        LINKEDIN
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
