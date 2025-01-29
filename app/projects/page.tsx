import { Metadata } from "next";
import projectList from "../../public/projects.json";
import Project from "../components/project";


export const metadata: Metadata = {
    title: "projects"
}

export default function Projects() {
    return (
        <>
            <p>
                <b>projects</b>
                <br /><br />
                🚧 ٩( ᐛ )( ᐖ )۶ 🚧
                <br />
                work in progress, please check back later!
            </p>
            .................
            <br /><br />
            <div className="flex flex-col gap-4">
                {projectList.map((item, index) => (
                    <Project key={index} item={item} index={index}/>
                ))}
            </div>
        </>
    );
}