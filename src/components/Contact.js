// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  // const { photo, name, email, phone } = props.data;
  return (
    <>
        { props.data.map((contact) => {
          return (
            <div key={contact.email} className="container">
              <div className="avatar">
                <img src={contact.photo} alt="" />
              </div>
              <div className="content">
                <h2> {contact.name}</h2>
                <p id="phone">{contact.phone}</p>
                <p id="email">{contact.email}</p>
              </div>
            </div>
        )
        })}
    </>
  )
}

export default Contact;
