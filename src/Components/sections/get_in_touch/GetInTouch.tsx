import { LocationEdit, Mail, Phone } from "lucide-react";
import GridientBtn from "../../common/ui/gridient-btn/GridientBtn";
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
        rows: 15,
        cols: 15,
        id: "message",
        name: "message",
      },
    ],
  };
  console.log(formSections);
  return (
    <section>
      <header>Get in touch</header>
      <div className="fj-center">
        {/* about contact section  */}
        <div>
          <div>Let's talk</div>
          <div>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </div>
          <div>
            {contact.map((data, index) => (
              <div key={index}>
                <div>{data.logo}</div>
                <div>{data.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* form fill up section  */}
        <div>
          {/* inputfields  */}

          <div>
            {formSections?.input?.map((data, index) => (
              <div key={index}>
                <label htmlFor={data.name}>{data.label}</label>
                <input
                  type={data.type}
                  placeholder={data.placeholder}
                  id={data.id}
                  name={data.name}
                />
              </div>
            ))}
            {formSections?.textarea?.map((data, index) => (
              <div key={index}>
                <label htmlFor={data.name}>{data.label}</label>
                <textarea
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
          <div>
            {/* <button>submit now</button> */}
            <GridientBtn>Submit Now</GridientBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
