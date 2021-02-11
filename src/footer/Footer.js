import React from 'react'
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className= {`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.myName}>Мария Стаховская</h2>
                <div className={style.footerSoc}>
                        <div className={style.social}></div>
                        <div className={style.social}></div>
                        <div className={style.social}></div>
                        <div className={style.social}></div>
                </div>
                <p>@2021 Все права защищены</p>
            </div>
        </div>
    );
}

export default Footer;