import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

type MainType = {
    greeting: string
    name: string
    vocation: string
    photo: string
}

export const Main = () => {

    const information: MainType = {
        greeting: 'Hi There',
        name: 'I\'m Vladislav Romashkan',
        vocation: 'I\'m A Front-End Developer',
        photo: ''
    }

    return (
        <section className={style.mainBlock}>

            <div className={styleContainer.container}>

                <div className={style.greeting}>
                    <span>{information.greeting}</span>
                    <h1>{information.name}</h1>
                    <p>{information.vocation}</p>
                </div>

                <div className={style.photo}>
                    <img src={information.photo}
                         alt={'My Photo'}/>
                </div>

            </div>

        </section>
    );
};