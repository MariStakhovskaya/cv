import React from 'react'
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Main() {
    return (
        <div className={style.mainBlock}>

            <div className={styleContainer.container}>



            <div className={style.text}>
                <h4>Hello World! I am</h4>

                <h2>Maria Stahovskaya </h2>
                <p> Frontend React developer</p>
            </div>
            <div className={style.photo}>

            </div>
            </div>
        </div>
    );
}

export default Main;