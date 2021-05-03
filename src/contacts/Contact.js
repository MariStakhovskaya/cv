import React from 'react'
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";




function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className= {`${styleContainer.container} ${style.contactsContainer}`}>
               <Title title={"Контакты"} />

                  <form className={style.contactForm}>
                      <input type="text" />
                      <input type="text"/>
                      <textarea></textarea>
                  </form>
                    <button className={style.MyButton} type="submit">Отправить</button>
                </div>

        </div>
    );
}

export default Contacts;