import TechnologyCard from "../technologycard";
import style from "./css/projectdetail.module.css"
export default function ProjectDetail(projectDetail: ProjectDetails){
    return (
        <div>
        <h3> {projectDetail.subtitle}</h3>
        <div className={style.technologies}>{projectDetail?.technology.map((tech, index) => <TechnologyCard key={index} technology={tech}/>)}</div>
        <p>{projectDetail?.description}</p>
        </div>
    )
}