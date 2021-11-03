import React from "react";
import "./index.css";
import Card from "../Basic/Card";
export default function Skill({ skills }) {
  return (
    <section id="skills">
      {skills.map((skill, index) => {
        return (
          <Card key={index}>
            <h1 className="title">{skill.title}</h1>
            <ul className="skills-itens">
              {skill.skills.map((el, index) => {
                return (
                  <li className="skill-item" key={index}>
                    <div className="skill-name">{el.name}</div>
                    <div className="skill-per">
                      <div
                        className="skill-per-after"
                        style={{ width: el.per }}
                      >
                        {el.per}%
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Card>
        );
      })}
    </section>
  );
}
