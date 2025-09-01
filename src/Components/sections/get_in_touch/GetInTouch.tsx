import { LocationEdit, Mail, Phone } from "lucide-react";
import GridientBtn from "../../common/ui/gridient-btn/GridientBtn";
import GridientText from "../../common/ui/gridient-text/GridientText";
import "./GetInTouch.css";

const GetInTouch = () => {
  const contact = [
    {
      logo: <Mail />,
      description: "mailitttome@gmail.com",
    },
    {
      logo: <Phone />,
      description: "9702632323",
    },
    {
      logo: <LocationEdit />,
      description: "Mu,Germany",
    },
  ];

  const formSections = {
    input: [
      {
        label: "Your Name",
        type: "text",
        placeholder: "Enter your name",
        id: "name",
        name: "name",
      },
      {
        label: "Your Email",
        type: "email",
        placeholder: "Enter your email",
        id: "email",
        name: "email",
      },
    ],
    textarea: [
      {
        label: "Write your message here",
        type: "text",
        placeholder: "Enter your message",
        rows: 10,
        cols: 10,
        id: "message",
        name: "message",
      },
    ],
  };
  console.log(formSections);
  return (
    <section>
      <header>Get in touch</header>
      <div className=" get-in-touch-cointainer">
        {/* about contact section  */}
        <div className="get-in-touch-text-area-cointainer">
          <GridientText>
            <div className="get-in-touch-text-area-header">Let's talk</div>
          </GridientText>
          <div className="get-in-touch-text-area-description">
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </div>
          <div className="get-in-touch-text-area-details-cointainer">
            {contact.map((data, index) => (
              <div key={index} className="">
                <div>{data.logo}</div>
                <div>{data.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* form fill up section  */}
        <div className="get-in-touch-form-area-cointainer">
          {/* inputfields  */}

          <div className="get-in-touch-form-area-input-cointainer">
            {formSections?.input?.map((data, index) => (
              <div key={index}>
                <label
                  className="get-in-touch-form-area-input-label-cointainer"
                  htmlFor={data.name}
                >
                  {data.label}
                </label>
                <input
                  className="get-in-touch-form-area-input-field-cointainer"
                  type={data.type}
                  placeholder={data.placeholder}
                  id={data.id}
                  name={data.name}
                />
              </div>
            ))}
            {formSections?.textarea?.map((data, index) => (
              <div key={index}>
                <label
                  className="get-in-touch-form-area-input-label-cointainer"
                  htmlFor={data.name}
                >
                  {data.label}
                </label>
                <textarea
                  className="get-in-touch-form-area-textarea-field-cointainer"
                  placeholder={data.placeholder}
                  id={data.id}
                  name={data.name}
                  rows={data.rows}
                  cols={data.cols}
                />
              </div>
            ))}
          </div>
          {/* submit btn */}
          <div className="get-in-touch-btn">
            {/* <button>submit now</button> */}
            <GridientBtn>Submit Now</GridientBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
