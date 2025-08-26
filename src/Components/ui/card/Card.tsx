import { ArrowRight } from "lucide-react";
import "./Card.css";
const Card = ({ data,index }) => {
  return (
    <div className="card-card-cointainer">
      <div className="card-card-index">0{index}</div>
      <div className="card-card-title">{data.title}</div>
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
