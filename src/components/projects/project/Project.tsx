import React from 'react';
import style from './Project.module.css'

type PropsType = {
    img: string
    title: string
    description: string
    reference: string
}

export const Project = ({img, title, description, reference}: PropsType) => {

    const onClickHandler = () => {
        alert('VIEW')
    }

    return (
        <div className={style.projectBlock}>

            <div className={style.imgContainer} style={{backgroundImage: `url(${img})`}}>
                <button className={style.reference}
                        onClick={onClickHandler}>VIEW
                </button>
            </div>

            <h3 className={style.title}>{title}</h3>

            <span className={style.description}>{description}</span>


        </div>
    );
};