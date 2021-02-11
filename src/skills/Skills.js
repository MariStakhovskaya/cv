import React from 'react'
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill skillTitle={"JS"} skillDescription={"Lorem ipncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex pariatur. Excepteu"} />
                    <Skill skillTitle={"React"} skillDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noslla pariatur. Excepteu"}/>
                    <Skill skillTitle={"HTML"} skillDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mm, quis nosat nulla pariatur. Excepteu"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;