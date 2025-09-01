import GridientText from "../../common/ui/gridient-text/GridientText";
import "./About.css";
const About = () => {
  interface ITableData {
    name: string;
    value: string;
  }
  interface IAchivementData {
    achivements: string;
    numbers: string;
  }
  const tableData: ITableData[] = [
    {
      name: "HTML , CSS & Tailwind",
      value: "50%",
    },
    {
      name: "Java Script",
      value: "35%",
    },
    {
      name: "React",
      value: "50%",
    },
    {
      name: "Node Js",
      value: "45%",
    },
    {
      name: "Next Js",
      value: "40%",
    },
  ];

  const achivementData: IAchivementData[] = [
    {
      achivements: "YEARS OF EXPERIENCE",
      numbers: "10+",
    },
    {
      achivements: "PROJECTS COMPLETED",
      numbers: "90+",
    },
    {
      achivements: "HAPPY CLIENTS",
      numbers: "69+",
    },
  ];

  return (
    <div id="about">
      <header>About me</header>
      <div className="about-cointainer">
        <div className="about-img-details-cointainer">
          {/* <img src="" alt="" /> */}

          <div className="about-details-cointainer">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
            <div className="about-table-cointainer">
              {tableData.map((data: ITableData, index: number) => (
                <div key={index} className="about-skill-table">
                  <div className="about-skill-name">{data.name}</div>
                  <hr
                    className="about-skill-level-hr"
                    style={{ width: data.value }}
                  />
                </div>
              ))}
            </div>
          </div>
          <video
            className="about-me-lone-girl-img"
            src={import.meta.env.VITE_API_LONE_GIRL}
            height={290}
            width={290}
            muted
            loop
            playsInline
            autoPlay
          ></video>
        </div>
      </div>
      <div className="about-achivement-table-cointainer">
        {achivementData.map((data:IAchivementData, index:number) => (
          <div key={index} className="about-achivement-table">
            <div className="about-achivement-table-details">
              <GridientText>
                <div className="about-achivement-table-details-number">
                  {data.numbers}
                </div>{" "}
              </GridientText>
              <div className="about-achivement-table-details">
                {data.achivements}
              </div>
            </div>

            <div>
              {index <= 1 && <div className="about-achivement-table-pipe" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
