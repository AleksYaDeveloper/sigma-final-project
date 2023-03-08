import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    name: "Interior Design1",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    image: "https://via.placeholder.com/50",
    filter: "interior",
  },
  {
    id: 2,
    name: "Architectur 1",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    image: "https://via.placeholder.com/50",
    filter: "architecture",
  },
  {
    id: 3,
    name: "Planning 1",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    image: "https://via.placeholder.com/50",
    filter: "planning",
  },
  {
    id: 4,
    name: "Interior Design 2",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    image: "https://via.placeholder.com/50",
    filter: "interior",
  },
  {
    id: 5,
    name: "Architectur 2",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    image: "https://via.placeholder.com/50",
    filter: "architecture",
  },
  {
    id: 6,
    name: "Planning 2",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    image: "https://via.placeholder.com/50",
    filter: "planning",
  },
  {
    id: 7,
    name: "Interior Design 3",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    image: "https://via.placeholder.com/50",
    filter: "interior",
  },
  {
    id: 8,
    name: "Interior Design 4",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    image: "https://via.placeholder.com/50",
    filter: "interior",
  },
  {
    id: 9,
    name: "Interior Design 5",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    image: "https://via.placeholder.com/50",
    filter: "interior",
  },
  {
    id: 10,
    name: "Architectur 3",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    image: "https://via.placeholder.com/50",
    filter: "architecture",
  },
  {
    id: 11,
    name: "Architectur 4",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    image: "https://via.placeholder.com/50",
    filter: "architecture",
  },
];

const Service = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState(projectsData);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  const filteredProjects =
    activeFilter === "all"
      ? projects.filter((project, index, arr) => {
          // Фильтруем только последний проект в каждой серии
          const lastProject = arr.find(
            (p) => p.filter === project.filter && p.id > project.id
          );
          return !lastProject;
        })
      : projects.filter((project) => project.filter === activeFilter);

  const renderedProjects = filteredProjects.map((project) => (
    <div key={project.id} className="service__project">
      <img
        src={project.image}
        alt={project.name}
        className="service__project-image"
      />
      <h3 className="service__project-name">{project.name}</h3>
      <p className="service__project-description">{project.description}</p>
    </div>
  ));

  return (
    <div className="service">
      <h2 className="hero-block__title_2">WHAT WE DO</h2>
      <h2 className="service__title">Our Service</h2>
      <div className="service__filters">
        <button
          className={`service__filter ${
            activeFilter === "all" ? "service__filter--active" : ""
          }`}
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
        <button
          className={`service__filter ${
            activeFilter === "interior" ? "service__filter--active" : ""
          }`}
          onClick={() => handleFilterClick("interior")}
        >
          Interior Design
        </button>
        <button
          className={`service__filter ${
            activeFilter === "architecture" ? "service__filter--active" : ""
          }`}
          onClick={() => handleFilterClick("architecture")}
        >
          Architecture
        </button>
        <button
          className={`service__filter ${
            activeFilter === "planning" ? "service__filter--active" : ""
          }`}
          onClick={() => handleFilterClick("planning")}
        >
          Planning
        </button>
      </div>
      <div className="service__projects">{renderedProjects}</div>
    </div>
  );
};

export default Service;
