"use client";
import Link from 'next/link';
import Image from 'next/image';

export function TeamCard({ team, borderPrimaryColor = 'border-green-400', borderSecondaryColor = 'border-blue-400', textColor = 'text-green-400' }) {
  return (
    <Link href={`/team-details/${team.id}`}>
      <div
        className={`
          flex flex-col items-center
          cursor-pointer border ${borderPrimaryColor} rounded-lg p-4 h-full w-48 text-center
          transform transition duration-300 hover:scale-105 hover:shadow-lg
        `}
        style={{ backgroundColor: '#191B24' }}
      >
        <div className={`w-24 h-24 rounded-full border-4 ${borderSecondaryColor} overflow-hidden`}>
          {team.imagen?.url ? (
            <Image unoptimized
              aria-hidden
              src={team.imagen.url}
              alt={team.nombre}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          ) : (
            <Image
              aria-hidden
              src="/images/default-team-shield.svg"
              alt={team.nombre}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <h3 className="text-white mt-3 font-semibold line-clamp-2"> {team.nombre}</h3>
        {team.captain && (
          <p className={`${textColor} text-sm`}>Capità: {team.captain}</p>
        )}
      </div>
    </Link>
  );
}
