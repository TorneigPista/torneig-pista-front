
export default function TeamsDetails({ params }) {
    const { id } = params;
    return (
        <main className="p-6 text-white">
        <h1 className="text-2xl font-bold">Detalles del equipo</h1>
        <p>ID del equipo: {id}</p>
        </main>
  ); 
}