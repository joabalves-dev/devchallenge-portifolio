import React from "react";
import Card from "../Basic/Card";
import "boxicons";
import "./index.css";

export default function Profile({ profile }) {

  return (
    <section id="profile">
      <Card>
        <div className="box-img">
          <img src={profile.img.src} alt={profile.img.alt} />
        </div>
        <h1 className="name">{profile.name}</h1>
        <h2 className="fuc">{profile.fuc}</h2>
        <ul className="contact-itens">
          {profile.contacts.map((contact, index) => {
            return (
              <li className="contact-item" key={index}>
                <a href={contact.link}>
                  <span className="material-icons">{contact.icon}</span>
                  <span className="info">{contact.info}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social-media">
          {profile.social_media.map((media, index) => {
            return (
              <li className="social-item" key={index}>
                <a href={media.link}>
                  <box-icon type="logo" name={media.icon}></box-icon>
                </a>
              </li>
            );
          })}
        </ul>
        <p className='description'>{profile.description}</p>
      </Card>
    </section>
  );
}
