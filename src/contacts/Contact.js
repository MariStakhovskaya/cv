import React from 'react'
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'




function Contacts() {
    return (
        <div className={style.contsctsBlock}>
            <div className= {`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.myContacts}>Контакты</h2>
                <div className={style.contact}>
                  <form className={style.contactForm}>
                      <input className={style.contactInput}/>
                      <input className={style.contactInput}/>
                      <textarea className={style.contactTextArea}></textarea>
                  </form>
                    <button className={style.MyButton}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;