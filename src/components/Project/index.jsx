import React, { useEffect, useState } from "react";
import "./index.css";
import Card from "../Basic/Card";

export default function Project({ title, projects }) {
  const [filter, setFilter] = useState("all");
  const [categories, setCategories] = useState([]);

  /* Função responsavel pelo estado filtro */
  function handleFilter(e) {
    e.preventDefault();
    setFilter(e.target.dataset.value);
  }

  /* função respnsavel por mostrar as categorias no filtro */
  function handlecategories(projects) {
    let cat = [];
    projects.map((proj) => {
      proj.categories.map((category) => {
        cat.push(category.name);
      });
    });
    let newCat = cat.filter((e, i) => {
      return cat.indexOf(e) === i;
    });
    setCategories(newCat);
  }

  /* Inicialização */
  useEffect(() => {
    handlecategories(projects);
  }, [filter]);

  /* Função responsavel pelo filtro do projetos */
  const projsFilter = projects
    .map((project) => {
      let cat = [];
      project.categories.map((c) => {
        if (c.name.toLowerCase() === filter.toLowerCase() || filter === "all") {
          cat = [...cat, c];
        }
      });
      if (cat.length > 0) {
        return project;
      }
    })
    .filter((project) => project != "" && project != undefined);

  return (
    <section id="projects">
      <Card>
        <h1 className="title">{`${title} (${projsFilter.length})`}</h1>
        <ul className="filter">
          <li
            className={`filter-item ${filter === "all" ? "ative" : ""}`}
            key="all"
            onClick={handleFilter}
          >
            <a href="#" data-value="all">
              all
            </a>
          </li>
          {categories.map((category, index) => {
            return (
              <li
                className={`filter-item ${
                  filter === category.toLowerCase() ? "ative" : ""
                }`}
                key={index}
              >
                <a
                  href="#"
                  data-value={category.toLowerCase()}
                  onClick={handleFilter}
                >
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
      </Card>
      {projsFilter.map((project, index) => {
        return (
          <Card className="project-item" key={index}>
            <div className="box-img">
              <img src={project.img.src} alt={project.img.alt} />
            </div>
            <ul className="categories">
              {project.categories.map((category, index) => {
                return (
                  <li className="category-item" key={index}>
                    #{category.name}
                  </li>
                );
              })}
            </ul>
            <div className="name">{project.name}</div>
            <p className="description">{project.description}</p>
            <div className="btns">
              <a href={project.urls[0].to}>{project.urls[0].name}</a>
              <a href={project.urls[1].to}>{project.urls[1].name}</a>
            </div>
          </Card>
        );
      })}
    </section>
  );
}
