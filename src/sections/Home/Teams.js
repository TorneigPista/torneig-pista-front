'use client'
import { useState, useEffect } from 'react';
import { CategoryFilter } from "@/app/components/CategoryFilter";
import { TeamCard } from "@/app/components/TeamCard";
import { getCategoriesWithTeams } from "@/services/categoryService";

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
          {filteredTeams.map((team, index) => {
            const borderPrimaryColor = index % 2 === 0 ? 'border-green-400' : 'border-blue-400';
            const borderSecondaryColor = index % 2 === 0 ? 'border-blue-400' : 'border-green-400';
            const textColor = index % 2 === 0 ? 'text-blue-400' : 'text-green-400';
            return (
              <TeamCard key={team.id} team={team} borderPrimaryColor={borderPrimaryColor} borderSecondaryColor={borderSecondaryColor} textColor={textColor} />
            );
          })}
        </div>
      </div>
    </section>
  )
}