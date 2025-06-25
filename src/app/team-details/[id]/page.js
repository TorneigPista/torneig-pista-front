import Navbar from "@/app/components/navbar";
import Details from "@/sections/Details/Details";
import Hero from "@/sections/Details/Hero";
import LastMatches from "@/sections/Details/LastMatches";
import TeamTemplate from "@/sections/Details/TeamTemplate";
import { getTeamDetails } from "@/services/categoryService";

export default async function TeamsDetails({ params }) {
  const { id } = await params;
  const team = await getTeamDetails(id);
  console.log('Team Details:', team);

  const team2 = {
    id: id,
    name: 'Quantum FC',
    captain: 'Paula S.',
    imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
    category: 'Juvenil',
    borderColor: 'border-blue-400',
    textColor: 'text-blue-400',
  };
  return (
    <>
      <Navbar />
      <p>{`Team ID: ${id}`}</p>
      <div className="body-main">
        <main className="body-container">
          <Hero team={team} />
          <Details team={team} />
          <TeamTemplate />
          <LastMatches />
        </main>
      </div>
    </>
  );
}