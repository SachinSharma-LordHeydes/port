import "./WorkCard.css";
const WorkCard = ({ data, index }) => {
  return (
    <div className="work-card-card-cointainer">
      <img src={data.src} alt="image" />
    </div>
  );
};

export default WorkCard;
