'use client'
import { useState } from 'react';
import { CategoryFilter } from "@/app/components/CategoryFilter";
import TableHeader from '@/app/components/TableHeader';
import MatchRow from '@/app/components/MatchRow';

export default function CalendarSection() {
  const categories = ['Todas', 'Cat. A', 'Cat. B', 'Juvenil'];
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const matches = [
    {
      date: '22 Jun',
      time: '18:00',
      teamA: 'Futbolines',
      teamAImg: '/futbolines.png',
      teamB: 'TechStars',
      teamBImg: '/techstars.png',
      field: 'Campo 1',
      category: 'Cat. A',
    },
    {
      date: '23 Jun',
      time: '20:00',
      teamA: 'Neon United',
      teamAImg: '/neon.png',
      teamB: 'Quantum FC',
      teamBImg: '/quantum.png',
      field: 'Campo 2',
      category: 'Cat. B',
    },
  ];
  const filteredMatches =
    selectedCategory === 'Todas'
      ? matches
      : matches.filter((m) => m.category === selectedCategory);
  return (
    <section className="text-white mt-16">
      <div className='flex justify-between'>
        <h1 className="text-cyan-300 text-4xl mb-4">Calendari de Partits</h1>
        <CategoryFilter
          categories={categories}
          active={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
      <div className="rounded-lg border border-green-300 overflow-auto mt-3">
        <table className="w-full border-collapse">
          <TableHeader />
          <tbody>
            {filteredMatches.map((match, i) => (
              <MatchRow key={i} match={match} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}