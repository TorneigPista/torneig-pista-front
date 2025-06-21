import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTiktok, FaFacebookSquare} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="text-white  px-6 py-3 flex justify-between items-center border-t border-green-400">
      <div className="flex items-center gap-2">
        <span className="text-cyan-400 text-xl">⚽</span>
        <span className="text-sm">Torneig la pista</span>
      </div>
      <div className="flex gap-4 text-xl text-cyan-300">
        <BiLogoInstagramAlt />
        <FaTiktok />
        <FaFacebookSquare />
      </div>
      <div className="text-xs text-right">© 2025 MovistarPlus</div>
    </footer>
  );
}
