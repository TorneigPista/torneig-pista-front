import DynamicTable from "@/app/components/DynamicTable";
import Image from "next/image";

export default function TeamTemplate() {
  const headers = [
    {
      title: 'Jugador',
      style: 'text-start'
    }, 'Posicion', 'Edad', 'Goles'];
  const players = [
    {
      id: 1,
      name: 'Pau Sánchez',
      posicion: 'pivot',
      image: 'https://example.com/pau.jpg',
      edad: 24,
      goles: 12
    },
    {
      id: 2,
      name: 'Jorge Torres',
      posicion: 'alas',
      image: 'https://example.com/jorge.jpg',
      edad: 22,
      goles: 8
    },
    {
      id: 3,
      name: 'Lucas García',
      posicion: 'alas',
      image: 'https://example.com/lucas.jpg',
      edad: 27,
      goles: 15
    },
    {
      id: 4,
      name: 'Andres Ruiz',
      posicion: 'cierre',
      image: 'https://example.com/andres.jpg',
      edad: 21,
      goles: 5
    },
    {
      id: 5,
      name: 'Marc Fernández',
      posicion: 'portero',
      image: 'https://example.com/marc.jpg',
      edad: 25,
      goles: 10
    }
  ];

  return (
    <>
      <h1 className="text-cyan-300 text-4xl mb-4 text-start mt-9">Plantilla del Equipo</h1>
      <DynamicTable headers={headers} borderColor='border-blue-400' headerBackgroundColor='bg-blue-400'>
        {players.map((player, i) => (
          <tr key={i} className='border-t border-green-300 text-sm'>
            <td className="px-4 py-2 flex  gap-2 text-start">
              <Image
                aria-hidden
                source={{ uri: `${player.image}` }}
                alt={`${player.name} logo`}
                src='/images/hero-image.svg'
                width={200}
                height={200}
                className="w-6 h-6 rounded-full"
              />
              {player.name}
            </td>
            <td className="px-4 py-2">{player.posicion}</td>
            <td className="px-4 py-2">{player.edad}</td>
            <td className="px-4 py-2">{player.goles}</td>
          </tr>
        ))}
      </DynamicTable>
    </>
  )
}