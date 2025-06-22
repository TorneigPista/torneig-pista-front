import { StatsCard } from "@/app/components/StatsCard";
import { TeamDetailsCard } from "@/app/components/TeamDetailsCard";

export default function Details({team}) {
    return (
      <>
        <h1 className="text-4xl text-green-400 text-start">
          {team.name}
        </h1>
        <div className=" text-white pt-6 flex flex-col items-center gap-6 md:flex-row md:justify-between" >
        <TeamDetailsCard/>
        <StatsCard/>
        </div>
      </>
    )
}