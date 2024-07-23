import React, { useEffect } from "react";

function TrendingGames({ gameList }) {
  useEffect(() => {});
  return (
    <div className="hidden md:block">
      <h2 className="font-bold text-3xl dark:text-white text-gray-950 mt-5 py-5 ">
        Trending Games
      </h2>
      <div className="hidden md:grid-cols-3 md:grid lg:grid-cols-4 gap-2 cursor-pointer">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div className=" bg-slate-400 dark:bg-slate-600 rounded-lg group hover:scale-110 transition-all ease-in-out" key={item.id}>
                <img
                  src={item.background_image}
                  alt={item.name}
                  className="object-cover h-[260px] rounded-t"
                />
                <h2 className="text-center font-bold text-2xl dark:text-white text-gray-950 p-2">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
