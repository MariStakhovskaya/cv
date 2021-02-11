import React from 'react'
import style from './Skill.module.css';



function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.skillTitle}</h3>
            <span>{props.skillDescription}</span>
        </div>
    );
}

export default Skill;