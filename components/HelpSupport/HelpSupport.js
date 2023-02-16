import React from "react";
import { SiGooglemeet } from "react-icons/si";
import { useQuery } from "react-query";
import HelpSupportCard from "./HelpSupportCard";

const HelpSupport = () => {

  const {data: liveSession = [], refetch, isLoading } = useQuery({
    queryKey: ['liveSession'],
    queryFn: async () => {
        const res = await fetch(`https://hello-talk-webserver.vercel.app/getlives`);
        const data = await res.json();
        return data
    }
})

refetch()

if(isLoading){
  return <progress className="progress w-full p-20"></progress>
}

  return (
    <div className="px-10 min-h-screen font-featherBold">
      <h2 className="text-xl text-[#2C5F9E] py-3">Live sessions</h2>
      {
        liveSession.length > 0 ?
        <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-10">
      {
        liveSession?.map(lives => <HelpSupportCard
          key={lives?._id}
          lives={lives}
        ></HelpSupportCard>)
      }
      </div>
      :
      <div className="font-featherBold rounded-xl bg-[#d7e9ff] p-3 md:p-4 border-4 border-[#2D609F] shadow-xl">
          <h2 className="text-xl text-[#2D609F] ">There are no live sessions currently in progress</h2>
      </div> 
      }
    </div>
  );
};

export default HelpSupport;
