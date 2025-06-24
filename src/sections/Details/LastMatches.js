import DynamicTable from "@/app/components/DynamicTable"
import Image from "next/image"

export default function LastMatches() {
    const headers = ['Fecha',{
      title: 'Rival',
      style: 'text-start'
    }, 'Resultados', 'Goles', 'Estado']
    const matches = [
      {
        date: '15 jun',
        rivalImage: 'dkalsd',
        rivalName: 'Futbolines',
        resultado: '3-1',
        goles: 'S. Martín (2), A. López (1)',
        status: 'victoria'

      }
    ]
    return (
      <>
      <h1 className="text-green-300 text-4xl mb-4 text-start mt-9">Últimos Partidos</h1>
      <DynamicTable headers={headers}>
          {matches.map((match,i) => (
            <tr key={i} className='border-t border-green-300 text-sm'>
            <td className="px-4 py-2">{match.date}</td>
            <td className="px-4 py-2 flex  gap-2 text-start">
                <Image 
                aria-hidden 
                source={{uri: `${match.rivalImage}`}}
                alt={`${match.rivalName} logo`}
                src='/images/hero-image.svg'
                width={200} 
                height={200} 
                className="w-6 h-6 rounded-full"
                />
                {match.rivalName}
            </td>
            
            <td className="px-4 py-2">{match.resultado}</td>
            <td className="px-4 py-2">{match.goles}</td>
            <td className="px-4 py-2">{match.status}</td>
            </tr>
          ))}
      </DynamicTable>
      </>
    )
}