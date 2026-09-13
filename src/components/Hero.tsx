import "./Hero.css"
import bannerStack from "../assets/banner-stack.png"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Build Your Ideal
          <span> Development Stack </span>
        </h1>

        <p>
          Explore frontend, backend, database, and tooling options, <br />{" "}
          compare them side by side, and put together the stack that fits your{" "}
          <br /> next project.
        </p>

        <button className="Explore-Technologies">Explore Technologies</button>
        <button className="Learn-More">Learn More</button>
      </div>

      <div className="hero-img">
        <img src={bannerStack} alt="Development Steck" />
      </div>
    </section>
  );
}
export default Hero;
