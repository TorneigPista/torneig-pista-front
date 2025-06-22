// StatsCard.jsx
export const StatsCard = () => {
  return (
    <div className="border border-green-400 rounded-md p-9 w-full max-w-md bg-black/20 text-white">
      <h2 className="text-cyan-400 text-lg font-semibold mb-4 text-start">Estadísticas</h2>
      <div className="grid grid-cols-2 gap-4 text-center text-sm">
        <div>
          <p className="text-green-400 text-2xl font-bold">6</p>
          <p>Puntos</p>
        </div>
        <div>
          <p className="text-green-400 text-2xl font-bold">2</p>
          <p>Victorias</p>
        </div>
        <div>
          <p className="text-blue-400 text-2xl font-bold">0</p>
          <p>Empates</p>
        </div>
        <div>
          <p className="text-red-400 text-2xl font-bold">0</p>
          <p>Derrotas</p>
        </div>
      </div>
    </div>
  );
};
