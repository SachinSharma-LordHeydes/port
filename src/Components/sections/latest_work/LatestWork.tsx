import { ArrowRight } from "lucide-react";
import WorkCardSection from "../../ui/work_card_section/WorkCardSection";
import "./LatestWork.css";
const LatestWork = () => {
  return (
    <section id="latest_work">
      <div>
        <header>My latest work</header>
      </div>
      <div>
        <WorkCardSection />
      </div>
      <div className="fj-center">
        <button className="work-btn-cointainer fj-center">
          <div>Show More</div>
          <div><ArrowRight/></div>
        </button>
      </div>
    </section>
  );
};

export default LatestWork;
