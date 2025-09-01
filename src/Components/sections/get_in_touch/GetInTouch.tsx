import { LocationEdit, Mail, Phone } from "lucide-react";
import { useState } from "react";
import GridientBtn from "../../common/ui/gridient-btn/GridientBtn";
import GridientText from "../../common/ui/gridient-text/GridientText";
import "./GetInTouch.css";

// Types
interface IContact {
  logo: React.ReactNode;
  description: string;
}

interface IInput {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
}

interface ITextArea {
  label: string;
  type: string;
  placeholder: string;
  rows: number;
  cols: number;
  id: string;
  name: string;
}

interface IFormSection {
  input: IInput[];
  textarea: ITextArea[];
}

const sendMail = async (
  event: React.FormEvent<HTMLFormElement>,
  setResult: React.Dispatch<React.SetStateAction<string>>
) => {
  event.preventDefault();
  setResult("Sending....");
  console.log("event,", event.target);
  const formData = new FormData(event.currentTarget);

  formData.append("access_key", import.meta.env.VITE_API_WEB3_FORM_API);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully");
    event.currentTarget.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
};

const GetInTouch = () => {
  const [result, setResult] = useState<string>("");

  const contact: IContact[] = [
    { logo: <Mail />, description: "mailitttome@gmail.com" },
    { logo: <Phone />, description: "9702632323" },
    { logo: <LocationEdit />, description: "Mu, Germany" },
  ];

  const formSections: IFormSection = {
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

  return (
    <section id="get_in_touch">
      <header>Get in touch</header>
      <div className="get-in-touch-cointainer">
        {/* Contact Info */}
        <div className="get-in-touch-text-area-cointainer">
          <GridientText>
            <div className="get-in-touch-text-area-header">Let's talk</div>
          </GridientText>
          <div className="get-in-touch-text-area-description">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </div>
          <div className="get-in-touch-text-area-details-cointainer">
            {contact.map((data: IContact, index: number) => (
              <div key={index}>
                <div>{data.logo}</div>
                <div>{data.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="get-in-touch-form-area-cointainer">
          <form onSubmit={(e) => sendMail(e, setResult)}>
            <div className="get-in-touch-form-area-input-cointainer">
              {formSections.input.map((data: IInput, index: number) => (
                <div key={index}>
                  <label
                    htmlFor={data.name}
                    className="get-in-touch-form-area-input-label-cointainer"
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

              {formSections.textarea.map((data: ITextArea, index: number) => (
                <div key={index}>
                  <label
                    htmlFor={data.name}
                    className="get-in-touch-form-area-input-label-cointainer"
                  >
                    {data.label}
                  </label>
                  <textarea
                    className="get-in-touch-form-area-textarea-field-cointainer"
                    placeholder={data.placeholder}
                    id={data.id.toString()}
                    name={data.name}
                    rows={data.rows}
                    cols={data.cols}
                  />
                </div>
              ))}
            </div>

            <div className="get-in-touch-btn">
              <GridientBtn>Submit Now</GridientBtn>
            </div>
          </form>
          {result && (
            <p style={{ marginTop: "10px", color: "white" }}>{result}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
