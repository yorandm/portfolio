import Link from "next/link"
import style from "./css/projectCard.module.css"

export default function ProjectCard({ project}: { project: Project }) {
  return (<>
  <Link href={`/projecten/${project.id}`}>
    <div className={style.card}>
     { /* eslint-disable-next-line @next/next/no-img-element*/}
      <img className={style.img} src={project.headerImg.src} alt={project.headerImg.alt} />
      <div className={style.cardText}>
        <h3>{project.title}</h3>
        <p>{project.title}</p>
      </div>
    </div>
  </Link>
  </>)
}