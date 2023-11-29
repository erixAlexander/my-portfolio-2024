import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const [templateParams, setTemplateParams] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = React.useState(false);

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      templateParams.name === "" ||
      templateParams.email === "" ||
      templateParams.message === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (!validateEmail(templateParams.email)) {
      alert("Invalid email format");
      return;
    }

    try {
      emailjs
        .send(
          "service_ouqy928",
          "template_uwotnmo",
          templateParams,
          "R49ygC4GCKUsulNa5"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setError("Message sent successfully");
            setTimeout(() => {
              setError(false);
            }, 5000);
          },
          function (error) {
            console.log("FAILED...", error);
            setError("Something went wrong, please try again later");
          }
        );
    } catch (error) {
      console.log(error);
      setError("Something went wrong, please try again later");
    }

    setTemplateParams({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="information">
        <h1>Let's Work Together!</h1>
        <div className="info-item">
          <h5>Mail</h5>
          <p>erix.gutierrez@gmail.com</p>
        </div>
        <div className="info-item">
          <h5>Phone</h5>
          <p>+58 0424 4607888</p>
        </div>
        <div className="info-item">
          <h5>Whatsapp</h5>
          <a href=" https://wa.me/+5804244607888">
            <p>+58 0424 4607888</p>
          </a>
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="contact-form">
        <div className="form-group">
          <input
            value={templateParams.name}
            onChange={(e) => {
              setTemplateParams({ ...templateParams, name: e.target.value });
            }}
            type="text"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            value={templateParams.email}
            onChange={(e) => {
              setTemplateParams({ ...templateParams, email: e.target.value });
            }}
            type="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <textarea
            value={templateParams.message}
            onChange={(e) => {
              setTemplateParams({ ...templateParams, message: e.target.value });
            }}
            id="message"
            placeholder="Message"
            rows={7}
          />
        </div>
        <button className="submit-btn">Send</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Contact;
