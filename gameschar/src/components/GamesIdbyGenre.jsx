import React, { useEffect } from "react";

function GamesIdbyGenre({ gameList,selectGenreName }) {
  useEffect(() => {
  }, []);
  return (
    <div className="mt-5 cursor-pointer">
      <h1 className=" text-gray-950 dark:text-slate-50 font-bold text-3xl py-4">
        {selectGenreName} Games
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameList.map((item, index) => (
          <div
            key={index}
            className=" dark:text-gray-950 text-gray-50 font-semibold  bg-slate-600 dark:bg-slate-300 rounded-lg p-3 pb-7 h-full group hover:scale-110 transition-all ease-in-out duration-300"
          >
            <img
              src={item.background_image}
              alt={item.slug}
              width={1080}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2>
              {item.name}
              <span className="bg-green-100 p-1 rounded-sm ml-2 text-[10px] font-medium  text-green-700">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-300 dark:text-gray-900">
              ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesIdbyGenre;
