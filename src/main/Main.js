import React from 'react'
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import firstImg from '../common/assets/myphotof.jpg'
import secondImg from '../common/assets/myphoto.jpg'

function Main() {
    return (
        <div className={style.mainBlock}>

            <div className={styleContainer.container}>

                <div className={style.text}>
                    <h4>Hello World! I am</h4>

                    <h2>Maria Stakhovskaya </h2>
                    <p> Frontend React developer</p>
                </div>
                <div className={style.photo}>
                    <div>
                        <img src={firstImg} alt='firstScreen'/>
                    </div>
                    <img src={secondImg} alt='secondScreen'/>
                </div>
                <div className={style.text}>
                    <h4>Hello World! I am</h4>

                    <h2>Maria Stakhovskaya </h2>
                    <p> Frontend React developer</p>
                </div>
            </div>
        </div>
    );
}

export default Main;