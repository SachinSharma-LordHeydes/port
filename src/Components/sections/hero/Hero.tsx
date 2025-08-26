import samurai_video from "../../../assets/video/Hình nền _Samurai Boss Fight Fantasy Dragon_ _ Live Wallpaper.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="fj-center">
      <div>
        <div className="fj-center">
          <video
            className="hero-profile-video "
            src={samurai_video}
            height={290}
            width={290}
            muted
            loop
            playsInline
            autoPlay
          ></video>
        </div>
        <div className="fj-center">
          <h1 className="fj-center hero-main-description">
            Hii I am Sachin , Full Stack Developer From Nepal
          </h1>
        </div>
        <div className="fj-center">
          <h3 className="fj-center hero-supportive-description">
            I am a MERN Stack developer from nepal with more than 2 years of
            experiance{" "}
          </h3>
        </div>
        <div className="fj-center hero-btn-cointainer">
          <div>
            <button className="nav-contact">Contact with me</button>
          </div>
          <div>
            <button className="hero-my-resume-btn">My Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
