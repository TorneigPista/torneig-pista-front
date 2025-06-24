import Link from "next/link";
import { IoIosFootball } from "react-icons/io";

export default function Navbar() {
    return ( 
    <header className=" bg-gradient-to-r from-cyan-500 to-green-400 text-whitepx-6 px-4 py-2 flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2 cursor-pointer">
        <IoIosFootball className="text-black text-3xl" />
        <div className="text-start">
          <h1 className="text-lg font-semibold leading-none">Torneig la Pista</h1>
          <p className="text-xs text-cyan-100">Pàgina no oficial</p>
        </div>
      </Link>
      <nav className="flex space-x-6 text-black font-semibold text-sm">
        <Link href="/#equips" className="hover:underline">Equips</Link>
        <Link href="/#calendari" className="hover:underline">Calendari</Link>
        <Link href="/#classificacio" className="hover:underline">Classificació</Link>
      </nav>
    </header>
    )
}