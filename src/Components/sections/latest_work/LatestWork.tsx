import { ArrowRight } from "lucide-react";
import WorkCardSection from "../../ui/work_card_section/WorkCardSection";
import "./LatestWork.css";
const LatestWork = () => {
  return (
    <section>
      <div>
        <header>My latest work</header>
      </div>
      <div>
        <WorkCardSection />
      </div>
      <div className="fj-center">
        <button>
          <div>Show More</div>
          <div><ArrowRight/></div>
        </button>
      </div>
    </section>
  );
};

export default LatestWork;
