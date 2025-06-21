import Image from "next/image";

export default function MatchRow({ match }) {
  return (
    <tr className="border-t border-green-400 text-sm">
      <td className="px-4 py-2">{match.date}</td>
      <td className="px-4 py-2">{match.time}</td>
      <td className="px-4 py-2 flex items-center justify-center gap-2">
        <Image 
          aria-hidden 
          source={{uri: `${match.teamAImg}`}}
          alt={`${match.teamA} logo`}
          // width={200} 
          // height={200} 
          className="w-6 h-6 rounded-full"
        />
        {match.teamA}
      </td>
      <td className="px-4 py-2 text-green-400 font-bold text-sm text-center">VS</td>
      <td className="px-4 py-2 flex items-center justify-center gap-2">
        <Image 
          aria-hidden 
          source={{uri: `${match.teamBImg}`}}
          alt={`${match.teamA} logo`}
          // width={200} 
          // height={200} 
          className="w-6 h-6 rounded-full"
        />
        {match.teamB}
      </td>
      <td className="px-4 py-2">{match.field}</td>
    </tr>
  );
}