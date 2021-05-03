import React from 'react'
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";




function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className= {`${styleContainer.container} ${style.projectsContainer}`}>
               <Title title={"Projects"} />
                <div className={style.projects}>
                   <Project projectName={"Projects 1"} projectDescription={"Lorem ipsuming elit, sed do eiusmod tempor incididunt ut labfkjw jifwejk jfkwejl kjf kjewfkl ore et dolore magna aliqua. Ut enim ad minim veniam, quis n"} />
                   <Project projectName={"Projects 2"} projectDescription={"Lorem ipsuming elit, sed do eiusmod tempor incididunt ut labore et dol incididunt u  incididunt u  incididunt uore magna aliqua. Ut enim ad minim veniam, quis n"} />
                </div>
            </div>
        </div>
    );
}

export default Projects;