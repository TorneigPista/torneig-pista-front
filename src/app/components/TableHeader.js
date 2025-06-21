export default function TableHeader() {
  return (
    <thead className="bg-green-400 text-black text-sm font-semibold">
      <tr>
        <th className="px-4 py-2">Fecha</th>
        <th className="px-4 py-2">Hora</th>
        <th className="px-4 py-2">Equipo A</th>
        <th className="px-4 py-2">VS</th>
        <th className="px-4 py-2">Equipo B</th>
        <th className="px-4 py-2">Cancha</th>
      </tr>
    </thead>
  );
}