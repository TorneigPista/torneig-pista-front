import { GiTrophyCup  } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className=" text-white">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        {/* Texto a la izquierda */}
        <div>
          <h1 className="text-4xl grid grid-rows-2 sm:block md:text-6xl font-bold leading-tight sm:text-start">
            Benvingut al 
            <span className="text-green-300"> Torneig</span>
            <span> de la </span>
            <span className="text-blue-300">Pista!</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 sm:text-start">
            Viu l’emoció del torneig de la pista desde cualsevol lloc, estigues informat en directe a traves de la nostre web,
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-normal">
            <Link href="/#calendari">
              <button className="cursor-pointer bg-transparent border border-blue-300 hover:bg-blue-300 hover:text-black text-blue-300 font-semibold py-2 px-6 rounded-lg transition ">
                Ver Fechas
              </button>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm text-gray-400 justify-center sm:justify-normal">
            <div className="flex items-center gap-2">
              <GiTrophyCup  className="text-green-300 size-7" />
              <span>Premios Increíbles</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGamepad className="size-7 text-blue-300"/>
              <span>Reglas innovadoras</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <Image
            aria-hidden
            src="/images/hero-image.svg"
            alt="File icon"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
