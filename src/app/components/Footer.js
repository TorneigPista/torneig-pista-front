import Image from "next/image";
import Link from "next/link";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTiktok, FaFacebookSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="text-white  px-6 py-3 flex justify-between items-center border-t border-green-400">
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo-torneig-la-pista.png"
          alt="Logo Torneig la Pista"
          width={40}
          height={40}
        />
        <span className="text-sm">Torneig la pista</span>
      </div>
      <div className="flex gap-4 text-xl text-cyan-300">
        <Link href="https://www.instagram.com/torneigestiulapista/" target="_blank" rel="noopener noreferrer">
          <BiLogoInstagramAlt />
        </Link>
        {/* <FaTiktok /> */}
        {/* <FaFacebookSquare /> */}
      </div>
      <div className="text-xs text-right">
        <p>© 2025 Pol Dotras Roca</p>
        <p>amb la colaboració de Mario Sanchez</p>
        <p>i el suport de <a href="https://www.instagram.com/torneigestiulapista/" className="text-cyan-400 hover:underline">@torneigestiulapista</a></p>
      </div>
    </footer >
  );
}
