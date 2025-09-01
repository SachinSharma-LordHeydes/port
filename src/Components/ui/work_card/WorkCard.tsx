import type { IWorkCardDetails } from "../work_card_section/WorkCardSection";
import "./WorkCard.css";
const WorkCard = ({ data }:{data:IWorkCardDetails}) => {
  return (
    <div className="work-card-card-cointainer">
      <img src={data.src} alt="image" />
    </div>
  );
};

export default WorkCard;
