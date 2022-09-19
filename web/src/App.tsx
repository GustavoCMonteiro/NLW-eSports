import React from "react";
import axios from "axios";
import GameBanner from "./components/GameBanner";
import * as Dialog from "@radix-ui/react-dialog";

import "./styles/main.css";

import logoImg from "./assets/Logo.svg";
import CreateAdModal from "./components/CreateAdModal";
import CreateAdBanner from "./components/CreateAdBanner";
import AdBanner from "./components/AdBanner";

interface Game {
  id: string;
  title: string;
  baner: string;
  _count: {
    ads: number;
  };
}

interface GameAds {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

function App() {
  const [games, setGames] = React.useState<Game[]>([]);
  const [gameAds, setGameAds] = React.useState<GameAds[]>([]);
  const [selectedGame, setSelectedGame] = React.useState("");

  const handleClick = (id: string, title: string) => {
    setSelectedGame(title);
    axios(`http://localhost:3333/games/${id}/ads`).then((response) =>
      setGameAds(response.data)
    );
  };

  React.useEffect(() => {
    axios("http://localhost:3333/games").then((response) =>
      setGames(response.data)
    );
  }, []);

  return (
    <div>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-20">
        <img src={logoImg} alt="" />
        <h1 className="text-6xl text-white font-black mt-10">
          Seu{" "}
          <span className="text-transparent bg-nlw-gradient bg-clip-text">
            duo
          </span>{" "}
          está aqui!
        </h1>
        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map((game) => {
            return (
              <GameBanner
                key={game.id}
                gameId={game.id}
                banner={game.baner}
                title={game.title}
                adsCount={game._count.ads}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
      <h1 className="text-white text-center text-4xl block m-4 font-bold">
        {selectedGame}
      </h1>
      <div className="max-w-[1344px] mx-auto flex gap-6 mt-5 overflow-x-auto">
        {gameAds.map((ad) => {
          return (
            <AdBanner
              key={ad.id}
              hourEnd={ad.hourEnd}
              hourStart={ad.hourStart}
              id={ad.id}
              name={ad.name}
              useVoiceChannel={ad.useVoiceChannel}
              weekDays={ad.weekDays}
              yearsPlaying={ad.yearsPlaying}
            />
          );
        })}
      </div>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center mb-20">
        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
      </div>
    </div>
  );
}

export default App;
