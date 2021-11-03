import React from "react";
import Card from "../Basic/Card";
import "./index.css";

export default function Hobbie({ title, hobbies }) {
  return (
    <section id="hobbies">
      <Card>
        <h1 className="title">{title}</h1>
        <ul className="hobbie-itens">
          {hobbies.map((hobbie, index) => {
            return (
              <li className="hobbie-item" key={index}>
                <div className="box-img">
                  <img src={hobbie.img.src} alt={hobbie.img.alt} />
                </div>
                <div className="name">{hobbie.name}</div>
                <p className="description">{hobbie.description}</p>
              </li>
            );
          })}
        </ul>
      </Card>
    </section>
  );
}
