import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesIdbyGenre from "../components/GamesIdbyGenre";

export const Home = () => {
  const [gameList, setGameList] = useState();
  const [gameById, setGameById] = useState([]);
  const [selectGenreName,setSelecGenreName] = useState('Action')
  useEffect(() => {
    getAllGames();
    getGamesById(4);
  }, []);
  const getAllGames = async () => {
    try {
      const res = await GlobalApi.getGameList();
      const data = await res.data.results;
      setGameList(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getGamesById = async (id) => {
    try {
      const res = await GlobalApi.getGameListbyGenre(id);
      const data = await res.data.results;
      setGameById(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block">
        <GenreList genreId={(genreId) => getGamesById(genreId)}
        selectGenreName={(name) => setSelecGenreName(name)}/>
      </div>
      <div className="col-span-4  md:col-span-3">
        {gameList?.length > 0 && gameById.length > 0 ? (
          <div>
            <Banner gameBanner={gameList[0]} />
            <TrendingGames gameList={gameList} />
            <GamesIdbyGenre gameList={gameById} selectGenreName={selectGenreName}/>
          </div>
        ) : null}
      </div>
    </div>
  );
};
