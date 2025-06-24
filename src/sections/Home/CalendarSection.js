'use client'
import { useState } from 'react';
import { CategoryFilter } from "@/app/components/CategoryFilter";
import TableHeader from '@/app/components/TableHeader';
import DynamicTable from '@/app/components/DynamicTable';
import Image from 'next/image';

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

  const headers = ['Fecha', 'Hora', 'Equipo A', 'VS', 'Equipo B', 'Cancha'];
  return (
    <section id='calendari' className="text-white mt-16">
      <div className='flex justify-between'>
        <h1 className="text-cyan-300 text-4xl mb-4">Calendari de Partits</h1>
        <CategoryFilter
          categories={categories}
          active={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
       <DynamicTable headers={headers}>
        {filteredMatches.map((match,i) =>(
          <tr key={i} className='border-t border-green-300 text-sm'>
            <td className="px-4 py-2">{match.date}</td>
            <td className="px-4 py-2">{match.time}</td>
            <td className="px-4 py-2 flex items-center justify-center gap-2">
            <Image 
              aria-hidden 
              source={{uri: `${match.teamAImg}`}}
              alt={`${match.teamA} logo`}
              src='/images/hero-image.svg'
              width={200} 
              height={200} 
              className="w-6 h-6 rounded-full"
            />
            {match.teamA}
            </td>
            <td className="px-4 py-2 text-green-400 font-bold text-sm text-center">VS</td>
            <td className="px-4 py-2 flex items-center justify-center gap-2">
              <Image 
                aria-hidden 
                src='/images/hero-image.svg'
                source={{uri: `${match.teamBImg}`}}
                alt={`${match.teamA} logo`}
                width={200} 
                height={200} 
                className="w-6 h-6 rounded-full"
              />
              {match.teamB}
            </td>
            <td className="px-4 py-2">{match.field}</td>
          </tr>
        ))}
      </DynamicTable>
    </section>
  )
}