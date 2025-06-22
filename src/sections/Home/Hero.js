import { GiTrophyCup  } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa6";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className=" text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Texto a la izquierda */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-start">
            ¡Bienvenido al inicio del 
            <span className="text-green-300">Torneo</span>
            <span> Fútbol </span>
            <span className="text-blue-300">Tech!</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 text-start">
            Vive la emoción del fútbol local con una experiencia moderna, energética y divertida. 
            ¡Forma tu equipo y compite por la gloria!
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition">
              Inscribir Equipo
            </button>
            <button className="bg-transparent border border-blue-300 hover:bg-blue-300 hover:text-black text-blue-300 font-semibold py-2 px-6 rounded-lg transition">
              Ver Fechas
            </button>
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <GiTrophyCup  className="text-green-300 size-7" />
              <span>Premios Increíbles</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGamepad className="size-7"/>
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
