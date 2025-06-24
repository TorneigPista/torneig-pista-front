'use client'
import { useState } from 'react';
import { CategoryFilter } from "@/app/components/CategoryFilter";
import DynamicTable from '@/app/components/DynamicTable';
import Image from 'next/image';

export default function CurrentClassification(){
  const teams = [
    { name: 'TechStars', img: '/techstars.png', pj: 2, g: 2, e: 0, p: 0, pts: 6 },
    { name: 'Neon United', img: '/neon.png', pj: 2, g: 1, e: 1, p: 0, pts: 4 },
    { name: 'Futbolines', img: '/futbolines.png', pj: 2, g: 0, e: 1, p: 1, pts: 1 },
    { name: 'Quantum FC', img: '/quantum.png', pj: 2, g: 0, e: 0, p: 2, pts: 0 },
  ];

  const categories = ['Todas', 'Cat. A', 'Cat. B', 'Juvenil'];
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const filteredMatches =
    selectedCategory === 'Todas'
      ? teams
      : teams.filter((m) => m.category === selectedCategory);
  const headers = [
    '#',
    {
      title : 'Equipo',
      style : 'text-left'
    },
    'PJ', 
    'G', 
    'E', 
    'P', 
    'PTS'
  ];

  return (
    <section id='classificacio' className="text-white mt-16">
        <div className='flex justify-between'>
          <h1 className="text-green-400 text-4xl mb-4">Classificació Actual</h1>
          <CategoryFilter
            categories={categories}
            active={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
        <DynamicTable headers={headers} borderColor='border-blue-400' headerBackgroundColor='bg-blue-400'>
          {filteredMatches.map((team,i) =>(
            <tr key={i} className='border-t border-green-400 text-sm'>
              <td className="px-4 py-2">{i + 1}</td>
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <img src={team.img} alt={`${team.name} logo`} className="w-6 h-6 rounded-full" />
                  <span>{team.name}</span>
                </div>
              </td>
              <td className="px-4 py-2 text-center">{team.pj}</td>
              <td className="px-4 py-2 text-center">{team.g}</td>
              <td className="px-4 py-2 text-center">{team.e}</td>
              <td className="px-4 py-2 text-center">{team.p}</td>
              <td className="px-4 py-2 text-center font-semibold">{team.pts}</td>
            </tr>
          ))}
        </DynamicTable>
    </section>
  )
}