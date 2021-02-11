import React from 'react'
import style from './Project.module.css';



function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgProject}>
                <img />
                <button>Смотреть</button>
            </div>
            <h3>{props.projectName}</h3>
            <span>{props.projectDescription}</span>
        </div>
    );
}

export default Project;