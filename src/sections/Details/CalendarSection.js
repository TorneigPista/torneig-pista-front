'use client'
import { useState, useEffect } from 'react';
import DynamicTable from '@/app/components/DynamicTable';
import Image from 'next/image';
import { getFields, getNextMatchesByTeam } from '@/services/categoryService';
import { formatDate } from '@/lib/formatDate';

export default function CalendarSection({ idTeam }) {
  const headers = ['Fecha', 'Hora', 'Equipo A', 'VS', 'Equipo B', 'Ubicació'];
  const [matches, setMatches] = useState([]);
  const [fields, setFields] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const fields = await getFields();
        setFields(fields);
      }
      catch (err) {
        console.error('Error al cargar campos:', err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const matches = await getNextMatchesByTeam(idTeam);
        setMatches(matches);
      }
      catch (err) {
        console.error('Error al cargar campos:', err);
      }
    })();
  }, []);

  return (
    <section id='calendari' className="text-white mt-16">
      <div className='flex justify-between'>
        <h1 className="text-cyan-300 text-4xl mb-4">Proxims Partits</h1>
      </div>
      <DynamicTable headers={headers}>
        {matches.map((match, i) => (
          <tr key={i} className='border-t border-green-300 text-sm'>
            <td className="px-4 py-2">{formatDate(match.fecha_programada)}</td>
            <td className="px-4 py-2">{formatDate(match.fecha_programada, 'HH:mm')}</td>
            <td className="px-4 py-2 flex items-center justify-center gap-2">
              <Image
                aria-hidden
                src={match.equipo_local.imagen?.url ?? '/images/default-team-shield.svg'}
                alt={`${match.equipo_local.nombre} logo`}
                width={200}
                height={200}
                className="w-6 h-6 rounded-full"
                unoptimized={!!match.equipo_local.imagen?.url}
              />
              {match.equipo_local.nombre}
            </td>
            <td className="px-4 py-2 text-green-400 font-bold text-sm text-center">VS</td>
            <td className="px-4 py-2 flex items-center justify-center gap-2">
              <Image
                aria-hidden
                src={match.equipo_visitante.imagen?.url ?? '/images/default-team-shield.svg'}
                alt={`${match.equipo_visitante.nombre} logo`}
                width={200}
                height={200}
                className="w-6 h-6 rounded-full"
                unoptimized={!!match.equipo_local.imagen?.url}
              />
              {match.equipo_visitante.nombre}
            </td>
            <td className="px-4 py-2">{fields.find(field => field.id === match.campo_id)?.nombre || 'Desconegut'}</td>
          </tr>
        ))}
      </DynamicTable>
    </section>
  )
}