
import Carousel from "@/components/carousel";
import TechnologyCard from "../technologycard";
import style from "./css/projectdetail.module.css"
export default function ProjectDetail(projectDetail: ProjectDetails){
    return (
        <div>
        <h3> {projectDetail.subtitle}</h3>
       <div className={style.technologies}>{projectDetail?.technology.map((tech, index) => <TechnologyCard key={index} technology={tech}/>)}</div>
       <Carousel>
               {projectDetail.images.map((img, index)=>{
               return (<div key={index}>
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt}/>
                </div>)
                })}
            </Carousel>
        <p>{projectDetail?.description}</p>
        </div>
    )
}