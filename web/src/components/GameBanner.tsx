interface GameBannerProps {
  banner: string;
  title: string;
  adsCount: number;
}

const GameBanner = (props: GameBannerProps) => {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.banner} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="text-white block">{props.title}</strong>
        <span className="text-zinc-300 block">{props.adsCount} anúncio(s)</span>
      </div>
    </a>
  );
};

export default GameBanner;
