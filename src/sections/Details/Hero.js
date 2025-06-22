import Image from "next/image";

export default function Hero() {
    return(
      <section className=" text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto a la izquierda */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-start">
              Detalles del  
              <span className="text-green-300"> Equipo</span>
            </h1>
  
            <p className="mt-6 text-lg text-gray-300 text-start">
              Conoce toda la información sobre tu equipo favorito y sus estadísticas en el torneo.
            </p>
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
    )
}