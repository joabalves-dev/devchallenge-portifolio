import React from "react";
import "./index.css";
import Card from "../Basic/Card";

export default function Experience({ title, experiences }) {
  return (
    <section id="experiences">
      <Card>
        <h1 className="title">{title}</h1>
        <ul className="exp-itens">
          {experiences.map((experience, index) => {
            return (
              <li className="exp-item" key={index}>
                <div className="box-img">
                  <img src={experience.img.src} alt={experience.img.alt} />
                </div>
                <div className="time">{`${experience.time.in} - ${
                  experience.time.out ? experience.time.out : "current"
                }`}</div>
                <div className="fuc">{experience.fuc}</div>
                <p className="description">{experience.description}</p>
              </li>
            );
          })}
        </ul>
      </Card>
    </section>
  );
}
