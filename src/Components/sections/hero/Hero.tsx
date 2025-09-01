import AnchorLink from "react-anchor-link-smooth-scroll";
import GridientBtn from "../../common/ui/gridient-btn/GridientBtn";
import GridientText from "../../common/ui/gridient-text/GridientText";
import PlaneBtn from "../../common/ui/plane-btn/PlaneBtn";
import "./Hero.css";
const Hero = () => {
  return (
    <section id="hero" className="fj-center">
      <div>
        <div className="fj-center">
          <video
            className="hero-profile-video "
            src={import.meta.env.VITE_API_SAMURAI_VIDEO}
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
            <GridientBtn>
              {" "}
              <AnchorLink className="anchor-link" href="#get_in_touch">
                Contact with me
              </AnchorLink>
            </GridientBtn>
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
