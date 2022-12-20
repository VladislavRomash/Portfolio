import React from 'react';
import style from './Navigation.module.css'

type NavigationType = {
    id: string
    title: string
    reference: string
}

export const Navigation = () => {

    const nav: NavigationType[] = [
        {id: '1', title: 'Main', reference: ''},
        {id: '2', title: 'Skills', reference: ''},
        {id: '3', title: 'Projects', reference: ''},
        {id: '4', title: 'Contacts', reference: ''},
    ]


    return (
        <div className={style.nav}>
            {
                nav.map(m => <a key={m.id} href={m.reference}>{m.title}</a>)
            }
        </div>
    );
};