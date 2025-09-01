import Card from "../card/Card";
import "./CardSection.css";
export interface ICardDeaatils {
  title: string;
  description: string;
}
const CardSection = () => {
  const cardDeaatils: ICardDeaatils[] = [
    {
      title: "Web design",
      description: "Web development is the process of building, programming...",
    },
    {
      title: "Graphics design",
      description: "Web development is the process of building, programming...",
    },
    {
      title: "Social media",
      description: "Web development is the process of building, programming...",
    },
    {
      title: "App design",
      description: "Web development is the process of building, programming...",
    },
    {
      title: "Digital marketing",
      description: "Web development is the process of building, programming...",
    },
    {
      title: "Content writing",
      description: "Web development is the process of building, programming...",
    },
  ];
  return (
    <div className="card-section-card-cointainer">
      {cardDeaatils.map((data:ICardDeaatils, index: number) => (
        <div key={index}>
          <Card data={data} index={index + 1} />
        </div>
      ))}
    </div>
  );
};

export default CardSection;
