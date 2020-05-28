import React from "react";


export default ContactCard;

function ContactCard (props)
{
    return (
        <div className="contact-card">
            <img src={ props.contact.imgUrl } alt="" />
            <h3>name: { props.contact.name }</h3>
            <p>phone: { props.contact.number }</p>
            <p>email: { props.contact.email }</p>
        </div>
    );
}