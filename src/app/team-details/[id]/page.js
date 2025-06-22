import Details from "@/sections/Details/Details";
import Hero from "@/sections/Details/Hero";
import TeamTemplate from "@/sections/Details/TeamTemplate";

export default function TeamsDetails({ params }) {
    // const { id } = params;
    const team = {
      id:4,
      name: 'Quantum FC',
      captain: 'Paula S.',
      imgUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
      category: 'Juvenil',
      borderColor: 'border-blue-400',
      textColor: 'text-blue-400',
    };
    return (
      <>
        <div className="body-main">
          <main className="body-container">
            <Hero/>
            <Details team={team}/>
            <TeamTemplate/>
          </main>
        </div>
      </>
  ); 
}