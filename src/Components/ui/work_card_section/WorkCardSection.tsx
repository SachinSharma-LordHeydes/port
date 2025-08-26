import samurai from "../../../assets/Screenshot 2025-08-25 081920.png";
import WorkCard from "../work_card/WorkCard";
import "./WorkCardSection.css";

const WorkCardSection = () => {
  const workCardDetails = [
    {
      id: 1,
      src: samurai,
    },
    {
      id: 2,
      src: samurai,
    },
    {
      id: 3,
      src: samurai,
    },
    {
      id: 4,
      src: samurai,
    },
    {
      id: 5,
      src: samurai,
    },
    {
      id: 6,
      src: samurai,
    },
  ];
  return (
    <div className="work-card-section-card-cointainer">
      {workCardDetails.map((data, index: number) => (
        <div key={index}>
          <WorkCard data={data} index={index + 1} />
        </div>
      ))}
    </div>
  );
};

export default WorkCardSection;
