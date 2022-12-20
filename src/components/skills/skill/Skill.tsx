import React from 'react';
import style from './Skill.module.css'

type PropsType = {
    skillTitle: string
    logo: string
    description: string
}

export const Skill = ({skillTitle, logo, description}: PropsType) => {
    return (
        <div className={style.skillBlock}>

            <div className={style.icon}>{logo}</div>

            <h3 className={style.title}>{skillTitle}</h3>

            <span className={style.description}>{description}</span>

        </div>
    );
};