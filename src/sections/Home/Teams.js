'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { CategoryFilter } from '@/app/components/CategoryFilter';
import { TeamCard } from '@/app/components/TeamCard';
import { getCategoriesWithTeams } from '@/services/categoryService';

const PX_PER_SEC = 85;
const IDLE_AFTER = 5000;

export default function TeamsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [categoriasWithTeams, setCategories] = useState([]);
  const scrollRef = useRef(null);
  const rafId = useRef();
  const idleTimer = useRef();

  useEffect(() => {
    (async () => {
      try {
        setCategories(await getCategoriesWithTeams());
      }
      catch (err) {
        console.error('Error al cargar categorías:', err);
      }
    })();
  }, []);

  const startAutoScroll = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    cancelAnimationFrame(rafId.current);

    const el = scrollRef.current;
    let lastTime = performance.now();

    const step = (now) => {
      const dt = now - lastTime;
      lastTime = now;

      if (el) {
        el.scrollLeft += (PX_PER_SEC * dt) / 1000;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth) el.scrollLeft = 0;
      }
      rafId.current = requestAnimationFrame(step);
    };

    rafId.current = requestAnimationFrame(step);
  }, []);

  const stopAutoScroll = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(startAutoScroll, IDLE_AFTER);
  }, [startAutoScroll]);

  useEffect(() => {
    startAutoScroll();

    const el = scrollRef.current;
    el.addEventListener('pointerdown', stopAutoScroll, { passive: true });

    return () => {
      el.removeEventListener('pointerdown', stopAutoScroll);
      cancelAnimationFrame(rafId.current);
      clearTimeout(idleTimer.current);
    };
  }, [startAutoScroll, stopAutoScroll]);

  const categories = [
    { id: 'all', name: 'Totes les Categories' },
    ...categoriasWithTeams.map((cat) => ({
      id: cat.id,
      name: cat.nombre,
    })),
  ];

  const filteredTeams =
    activeCategory === 'all'
      ? categoriasWithTeams.flatMap((cat) => cat.equipos)
      : categoriasWithTeams
        .find((cat) => cat.id === activeCategory)?.equipos ?? [];

  const useColumns = filteredTeams.length > 18;

  return (
    <section id="equip" className="mt-16 text-start">
      <h1 className="text-4xl text-green-400">
        Equips Participants
      </h1>
      <div className="pt-4">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={(id) => {
            setActiveCategory(id);
            stopAutoScroll();
          }}
        />

        <div
          ref={scrollRef}
          className={
            useColumns
              ? "grid grid-flow-col grid-rows-3 auto-rows-fr gap-8 overflow-x-auto max-w-full py-2 scroller"
              : "flex flex-row flex-wrap gap-8 py-2"
          }
          style={useColumns ? { WebkitOverflowScrolling: 'touch' } : {}}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          {filteredTeams.map((team, index) => {
            const isGreenBlock = index % 2 === 0
            const borderPrimaryColor = isGreenBlock ? 'border-green-400' : 'border-blue-400';
            const borderSecondaryColor = isGreenBlock ? 'border-blue-400' : 'border-green-400';
            const textColor = isGreenBlock ? 'text-green-400' : 'text-blue-400';
            return (
              <TeamCard
                key={team.id}
                team={team}
                borderPrimaryColor={borderPrimaryColor}
                borderSecondaryColor={borderSecondaryColor}
                textColor={textColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}