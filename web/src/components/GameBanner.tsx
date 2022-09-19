interface GameBannerProps {
  banner: string;
  title: string;
  adsCount: number;
  gameId: string;
  handleClick: (gameId: string, title: string) => void;
}

const GameBanner = (props: GameBannerProps) => {
  function getGameId() {
    props.handleClick(props.gameId, props.title);
  }

  return (
    <button onClick={getGameId} className="relative rounded-lg overflow-hidden">
      <img src={props.banner} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="text-white block">{props.title}</strong>
        <span className="text-zinc-300 block">{props.adsCount} anúncio(s)</span>
      </div>
    </button>
  );
};

export default GameBanner;
