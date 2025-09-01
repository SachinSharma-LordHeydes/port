import { User } from "lucide-react";
import GridientBtn from "../../common/ui/gridient-btn/GridientBtn";
import "./Footer.css";

const Footer = () => {
  return (
    <section>
      <div className="footer-container">
        {/* Upper side */}
        <div className="footer-suscribe-cointainer">
          <div className="footer-suscribe-left-side-cointainer">
            <h1>Sachin</h1>
            <div>
              I am a frontend developer from the USA with 10 years of experience in
              companies like Microsoft, Tesla, and Apple.
            </div>
          </div>
          <div className="footer-suscribe-right-side-cointainer">
            <div className="footer-suscribe-right-side-input-cointainer">
              <User
                className="footer-suscribe-right-side-input-profile-cointainer"
                size={24}
              />
              <input
                className="footer-suscribe-right-side-input"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <GridientBtn>Subscribe</GridientBtn>
          </div>
        </div>
        <hr className="footer-hr" />

        {/* Lower side */}
        <div className="footer-copy-right-cointainer">
          <div className="footer-copy-right-right-side-cointainer">
            © 2025 Sachin. All rights reserved.
          </div>
          <div className="footer-copy-right-left-side-cointainer">
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
            <div>Connect with me</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;