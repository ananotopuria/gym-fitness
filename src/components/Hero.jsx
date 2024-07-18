import hero from "../assets/hero.jpeg";
function Hero() {
  return (
    <div className="hero">
      <div className="hero__card">
        <div className="hero__card-banner">
          <div className="hero__card-container">
            <img src={hero} alt="user-image" className="hero__card-img" />
          </div>
          <div className="hero__card-info">
            <h1 className="hero__card-title">Gym fitnness</h1>
            <p className="hero__card-position">Gym Trainer</p>
            <p className="hero__card-position2">Gym fitness Trainer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
