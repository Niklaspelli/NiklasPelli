import { useEffect, useState } from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_secret", "template_secret", values, "secret").then(
      (response) => {
        console.log("SUCCESS!", response);
        setValues({
          fullName: "",
          email: "",
          role: "",
          message: "",
        });
        setStatus("SUCCESS");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="container">
      <h2>Send me a message!</h2>

      {status && renderAlert()}
      <form onSubmit={handleSubmit} className="--flex-center --dir-column">
        <InputField
          value={values.user_name}
          handleChange={handleChange}
          label="Name:"
          name="user_name"
          type="text"
          placeholder="John Doe"
        />

        <InputField
          value={values.user_email}
          handleChange={handleChange}
          label="E-Mail:"
          name="user_email"
          type="email"
          placeholder="jphn@example.com"
        />

        <TextareaField
          value={values.message}
          handleChange={handleChange}
          name="message"
        />
        <button type="submit" className="--btn --btn -primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

const renderAlert = () => (
  <div className="popup">
    <p>Your mail sent!</p>
  </div>
);

export default ContactForm;
