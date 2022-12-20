import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

type IconsType = {
    id: string
    title: string
    reference: string
}

export const Footer = () => {

    const icons: IconsType[] = [
        {id: '1', title: 'Facebook', reference: ''},
        {id: '2', title: 'Instagram', reference: ''},
        {id: '3', title: 'GitHub', reference: ''},
        {id: '4', title: 'Linkedin', reference: ''},
    ]

    return (
        <footer className={style.footerBlock}>

            <div className={`${styleContainer.container} ${style.footerContainer}`}>

                <span>Vladislav Romashkan</span>

                <div className={style.icons}>
                    {
                        icons.map(m => <a key={m.id} href={m.reference}>{m.title}</a>)
                    }
                </div>

                <span>Copyright © 2022. All rights reserved</span>

            </div>

        </footer>
    );
};