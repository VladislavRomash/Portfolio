import React from 'react';
import style from './Header.module.css'
import {Navigation} from '../navigation/Navigation';

export const Header = () => {
    return (
        <header className={style.header}>

            <Navigation/>

        </header>
    );
};