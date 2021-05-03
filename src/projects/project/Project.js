import React from 'react'
import style from './Project.module.css';



function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgProject}>

                <button>Смотреть</button>
            </div>
            <h3 className={style.projectTitle}>{props.projectName}</h3>
            <span className={style.description}>{props.projectDescription}</span>
        </div>
    );
}

export default Project;