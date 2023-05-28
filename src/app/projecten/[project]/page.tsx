import ProjectDetail from '@/components/Projects/projectDetail';
import projecten from '../../../data/projecten.json';
export default function Page({ params }: { params: { project: number } }) {
    const project = projecten.find(project => Number(project.id) === Number(params.project));
    return (
        <div>
            <h2> {project?.title}</h2>
            <p>{project?.description_short}</p>
            {
                project?.details.map((detail, index) => <ProjectDetail key={index} {...detail} />)
            }
        </div>
    )
}