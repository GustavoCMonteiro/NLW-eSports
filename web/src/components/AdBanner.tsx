import React from "react";

interface GameAdsProps {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

const AdBanner = (props: GameAdsProps) => {
  return (
    <div className="bg-[#2A2634] min-w-[240px] flex flex-col gap-2 p-4 rounded-md">
      <div className="flex flex-col">
        <span className="text-zinc-400">Nome</span>
        <strong className="text-white">{props.name}</strong>
      </div>
      <div className="flex flex-col">
        <span className="text-zinc-400">Tempo de jogo</span>
        <strong className="text-white">{props.yearsPlaying} anos</strong>
      </div>
      <div className="flex flex-col">
        <span className="text-zinc-400">Disponibilidade</span>
        <strong className="text-white">
          {props.weekDays.length} dias / {props.hourStart} - {props.hourEnd}
        </strong>
      </div>
      <div className="flex flex-col">
        <span className="text-zinc-400">Chamada de áudio?</span>
        <strong
          className={`${
            props.useVoiceChannel ? "text-green-400" : "text-red-500"
          }`}
        >
          {props.useVoiceChannel ? "Sim" : "Não"}
        </strong>
      </div>
      <button className="py-2 px-3 hover:bg-violet-600 bg-violet-500 text-white rounded mt-4">
        Conectar
      </button>
    </div>
  );
};

export default AdBanner;
