'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  // Note: ScrollSmoother is a GSAP Premium plugin. 
  // For a free alternative, we can use Lenis or just standard GSAP ScrollTrigger
  // The original site used a custom ScrollSmooth.js.
  // We'll implement a basic GSAP scroll behavior for now.

  return (
    <div ref={container} id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}
