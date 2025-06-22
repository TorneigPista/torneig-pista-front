export const TeamDetailsCard = () => {
  return (
    <div className="border border-cyan-500 rounded-md p-9 w-full max-w-md bg-black/20 text-white">
      <div className="flex items-center gap-4">
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="Capitana"
          className="w-16 h-16 rounded-full border-2 border-cyan-400"
        />
        <div>
          <h2 className="text-lg font-semibold">TechStars FC</h2>
          <p className="text-cyan-400 text-sm text-start">Categoría A</p>
        </div>
      </div>
      <div className="mt-4 text-sm space-y-1 text-white">
        <div className="flex justify-between text-gray-400">
            <span>Capitana:</span>
            <span className="text-white">Sofía M.</span>
        </div>
        <div className="flex justify-between text-gray-400">
            <span>Fundado:</span>
            <span className="text-white">2023</span>
        </div>
        <div className="flex justify-between text-gray-400">
            <span>Jugadores:</span>
            <span className="text-white">15</span>
        </div>
			</div>

    </div>
  );
};