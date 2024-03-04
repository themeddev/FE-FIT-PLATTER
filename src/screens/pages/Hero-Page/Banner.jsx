import parallax from '../../../images/parallax.avif';

const Banner = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-96 bg-fixed bg-parallax bg-cover"
      style={{ backgroundImage: `url(${parallax})` }}
    >
      <h1 className="text-5xl font-Outfit text-white uppercase">Empower Your Journey</h1>
    </div>
  );
};

export default Banner;
