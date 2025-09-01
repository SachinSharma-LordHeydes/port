import samurai from "../../../assets/Screenshot 2025-08-25 081920.png";
import WorkCard from "../work_card/WorkCard";
import "./WorkCardSection.css";
export interface IWorkCardDetails{
  id:number;
  src:string
}
const WorkCardSection = () => {
  const workCardDetails:IWorkCardDetails[] = [
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
      {workCardDetails.map((data:IWorkCardDetails, index: number) => (
        <div key={index}>
          <WorkCard data={data}  />
        </div>
      ))}
    </div>
  );
};

export default WorkCardSection;
