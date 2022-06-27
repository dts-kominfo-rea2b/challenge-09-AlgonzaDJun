// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  const { photo, name, email, phone } = props.data;
  return (
    <div className="container">
      <div className="avatar">
        <img src={photo} alt="" />
      </div>
      <div className="content">
        <h2>{name}</h2>
        <p id="phone">{phone}</p>
        <p id="email">{email}</p>
      </div>
    </div>
  );
};

export default Contact;
