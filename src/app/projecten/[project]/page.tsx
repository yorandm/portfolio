import ProjectDetail from '@/components/Projects/projectDetail';
import projecten from '../../../data/projecten.json';
import GroupMember from '@/components/Projects/groupmember';
import style from './css/project.module.css';
export default function Page({ params }: { params: { project: number } }) {
    const project = projecten.find(project => Number(project.id) === Number(params.project));
    return (
        <div>
            <h2> {project?.title}</h2>
            <p>{project?.description_short}</p>
            <h4>This project was made together with: </h4>
            <div className={style.groupmembers}>{project?.group.map((member, index) => <GroupMember key={index} groupmember={member} />)}</div>
            {
                project?.details.map((detail, index) => <ProjectDetail key={index} {...detail} />)
            }
        </div>
    )
}