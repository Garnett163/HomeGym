'use client';

import { useEffect, useRef } from 'react';
import { Section } from '@/shared/ui';
import styles from './BouncingBall.module.css';

export function BouncingBall() {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      startTime ??= timestamp;
      const seconds = (timestamp - startTime) / 1000;

      const height = Math.abs(Math.sin(seconds * Math.PI)) * 140;
      ball.style.transform = `translateY(${-height}px)`;

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <Section>
      <div ref={ballRef} className={styles.ball} />
      <div className={styles.floor} />
    </Section>
  );
}
