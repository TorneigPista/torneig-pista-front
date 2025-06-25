'use client'
import { useState, useEffect } from 'react';
import { CategoryFilter } from "@/app/components/CategoryFilter";
import { TeamCard } from "@/app/components/TeamCard";
import { getCategoriesWithTeams } from "@/services/categoryService";
// const mockCategories = [
//   {
//     id: 1,
//     name: 'Futbolines',
//     captain: 'Lucas G.',
//     imgUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
//     category: 'Categoria A',
//     borderColor: 'border-green-400',
//     textColor: 'text-green-400',
//   },
//   {
//     id: 2,
//     name: 'TechStars',
//     captain: 'Sofía M.',
//     imgUrl: '', // Sin imagen
//     category: 'Categoria B',
//     borderColor: 'border-green-400',
//     textColor: 'text-green-400',
//   },
//   {
//     id: 3,
//     name: 'Neon United',
//     captain: 'Andrés T.',
//     imgUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
//     category: 'Categoria A',
//     borderColor: 'border-green-400',
//     textColor: 'text-green-400',
//   },
//   {
//     id: 4,
//     name: 'Quantum FC',
//     captain: 'Paula S.',
//     imgUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
//     category: 'Juvenil',
//     borderColor: 'border-blue-400',
//     textColor: 'text-blue-400',
//   },

// ];

export default function TeamsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [categoriasWithTeams, setCategoriesWithTeams] = useState([]);

  // Fetch de datos al montar el componente
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCategoriesWithTeams();
        setCategoriesWithTeams(data);
      } catch (err) {
        console.error('Error al cargar categorías:', err);
      }
    }

    fetchData();
  }, []);

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
        .find((cat) => cat.id === activeCategory)?.equipos || [];
  return (
    <section id='equip' className="mt-16 text-start">
      <h1 className="text-4xl text-green-400">
        Equips Participants
      </h1>
      <div className="pt-4  ">
        <CategoryFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />
        <div className="flex flex-wrap gap-6 justify-start">
          {filteredTeams.map((team, index) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  )
}