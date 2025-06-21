import Image from "next/image";

export function TeamCard({ name, captain, imgUrl, borderColor = 'border-green-400', textColor = 'text-green-400' }) {
  return (
    <div className={`border ${borderColor} rounded-lg p-4 w-48 text-center backgroun`} style={{ backgroundColor: '#191B24' }}>
      <div className={`w-24 h-24 mx-auto rounded-full border-4 ${borderColor} overflow-hidden`}>
        {imgUrl ? (
          <Image 
            aria-hidden 
            source={{uri: {imgUrl}}}
            alt={name} 
            // width={200} 
            // height={200} 
            className="object-cover w-full h-full"
          />
        ) : 
        (<div className="w-full h-full bg-transparent flex items-center justify-center text-3xl">{/* Placeholder */}</div>)}
      </div>
      <h3 className="text-white mt-3 font-semibold">{name}</h3>
      <p className={`${textColor} text-sm`}>Capità: {captain}</p>
    </div>
  );
}
