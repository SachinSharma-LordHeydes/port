import { ArrowRight } from "lucide-react";
import GridientText from "../../common/ui/gridient-text/GridientText";
import "./Card.css";
const Card = ({ data, index }) => {
  return (
    <div className="card-card-cointainer">
      <div className="card-card-index">0{index}</div>
      <GridientText>
        <div className="card-card-title">{data.title}</div>
      </GridientText>
      <div className="card-card-description">{data.description}</div>
      <div className="card-read-more-cointainer">
        <div>Read More</div>
        <div>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Card;
