import React from 'react';
import style from './Freelance.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Freelance = () => {

    const title = 'I Am Considering Options For Remote Work'

    const onClickHandler = () => {
        alert('HIRE ME')
    }

    return (
        <section className={style.freelanceBlock}>

            <div className={`${styleContainer.container} ${style.freelanceContainer}`}>

                <h2>{title}</h2>

                <div>
                    <button onClick={onClickHandler}>HIRE ME</button>
                </div>

            </div>

        </section>
    );
};