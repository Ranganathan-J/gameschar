import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({genreId,selectGenreName}) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const getGenreList = async () => {
    try {
      const response = await GlobalApi.getGenreList();
      const genres = response.data.results;
      if (Array.isArray(genres)) {
        setGenreList(genres);
      } else {
        console.error("Fetched data is not an array:", genres);
        setGenreList([]);
      }
    } catch (error) {
      console.error("Error fetching genre list:", error);
      setGenreList([]);
    }
  };

  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <div className="cursor-pointer">
      <h2 className="text-4xl font-bold dark:text-blue-500">Genre</h2>
      {genreList.length === 0 ? (
        <p>No genres available</p>
      ) : (
        genreList.map((item, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
              genreId(item.id);
              selectGenreName(item.name)
            }}
            key={item.id}
            className={`flex gap-2 items-center mb-2 hover:bg-gray-200 p-2 rounded-lg hover:dark:bg-gray-600 group hover:scale-105 transition-all ease-out duration-300
              ${activeIndex === index ? "bg-gray-200 dark:bg-gray-300" : null}`}
          >
            <img
              src={item.image_background}
              alt={item.name}
              className="w-[40px] h-[40px] object-cover rounded-lg"
            />
            <h3
              className="font-semibold text-[15px] dark:text-slate-100 
            group-hover:font-extrabold scale-105 transition-all ease-out duration-300"
            >
              {item.name}
            </h3>
          </div>
        ))
      )}
    </div>
  );
}

export default GenreList;
