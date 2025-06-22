"use client";
import Link from 'next/link';
import Image from 'next/image';

export function TeamCard({ team, borderColor = 'border-green-400', textColor = 'text-green-400' }) {
  return (
    <Link href={`/team-details/${team.id}`}>
      <div
        className={`cursor-pointer border ${borderColor} rounded-lg p-4 w-48 text-center`}
        style={{ backgroundColor: '#191B24' }}
      >
        <div className={`w-24 h-24 mx-auto rounded-full border-4 ${borderColor} overflow-hidden`}>
          {team.imgUrl ? (
            <Image
              aria-hidden
              src='/images/hero-image.svg'
              source={{uri: `${team.imgUrl}`}}
              alt={team.name}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-transparent flex items-center justify-center text-3xl" />
          )}
        </div>
        <h3 className="text-white mt-3 font-semibold">{team.name}</h3>
        <p className={`${textColor} text-sm`}>Capità: {team.captain}</p>
      </div>
    </Link>
  );
}

