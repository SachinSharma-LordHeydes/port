import samurai_video from "../../../assets/video/Hình nền _Samurai Boss Fight Fantasy Dragon_ _ Live Wallpaper.mp4";
import GridientBtn from "../../common/ui/gridient-btn/GridientBtn";
import GridientText from "../../common/ui/gridient-text/GridientText";
import PlaneBtn from "../../common/ui/plane-btn/PlaneBtn";
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
          <h1 className=" hero-main-description">
            <GridientText>Hii I am Sachin </GridientText>
            <span>, Full Stack Developer From Nepal</span>
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
            {/* <button className="nav-contact">Contact with me</button> */}
            <GridientBtn>Contact with me</GridientBtn>
          </div>
          <div>
            {/* <button className="hero-my-resume-btn">My Resume</button> */}
            <PlaneBtn>My Resume</PlaneBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
