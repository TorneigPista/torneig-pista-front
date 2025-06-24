export function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap mb-6">
      {categories.map((cat, index) => {
        const isActive = active === cat;
        const baseClass = `px-4 py-1 rounded-full border text-sm font-semibold transition cursor-pointer`;

        return (
          <button
            key={index}
            onClick={() => onChange(cat)}
            className={`${baseClass} ${
              isActive
                ? 'bg-green-400 text-black'
                : 'border-green-400 text-green-400 hover:bg-green-600 hover:text-black'
            }`}
            style={{ backgroundColor: !isActive ? '#191B24'  : '' }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
