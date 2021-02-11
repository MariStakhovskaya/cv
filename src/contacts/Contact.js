import React from 'react'
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'




function Contacts() {
    return (
        <div className={style.contsctsBlock}>
            <div className= {`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.myContacts}>Контакты</h2>

                  <form className={style.contactForm}>
                      <input />
                      <input/>
                      <textarea></textarea>
                  </form>
                    <button className={style.MyButton}>Отправить</button>
                </div>

        </div>
    );
}

export default Contacts;