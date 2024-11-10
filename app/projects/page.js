import ProjectCard from '/components/ProjectCard'
import Image from 'next/image'
const projects = [
    {title: "Project 1", description:"Movie app",image:"/project 2.jpg"},
    {title: "Project 2",description:"ToDo list app", image:"/Screenshot from 2024-11-10 16-13-20.png" },
];
export default function ProjectsPage(){
    return(
        <div>
            <h1>My Projects</h1>
        
        <div>
            {projects.map((project, index)=>(
            <ProjectCard key={index} {...project} />
        ))}
        </div>
        </div>
    );
}