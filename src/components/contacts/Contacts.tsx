import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {

    const onClickHandler = () => {
        alert('SEND MESSAGE')
    }

    return (
        <section className={style.contactsBlock}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                <h2 className={style.title}>Contacts</h2>

                <form className={style.form}>

                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textarea}/>

                </form>

                <button onClick={onClickHandler}>SEND MESSAGE</button>

            </div>

        </section>
    );
};