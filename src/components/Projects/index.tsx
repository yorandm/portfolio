import ProjectCard from "./projectCard";
import projects from './../../data/projecten.json';
import style from './css/projects.module.css';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className={style.projects}>
        {
          projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />
          })
        }
      </div>
     
    </section>
  )
}