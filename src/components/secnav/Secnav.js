
import './_Secnav.sass';

import React from 'react'
import { Link } from 'react-router-dom';

function Secnav() {
    return (
        <div className="secnav">
            <div className="container">
                <ul className="secnav__menu">
                    <li className="secnav__item">
                        <Link to="/managment" className="secnav__link">Руководство</Link>
                    </li>
                    <li className="secnav__item">
                        <Link to ="/ceiling" className="secnav__link">Структура</Link>
                    </li>
                    <li className="secnav__item">
                        <Link to ="/history" className="secnav__link">История</Link>
                    </li>
                    <li className="secnav__item">
                        <Link to="/award" className="secnav__link">Награды</Link>
                    </li>
                    <li className="secnav__item">
                        <a href="/table" className="secnav__link">Сертификаты</a>
                    </li>
                    <li className="secnav__item">
                        <Link to ="/license" className="secnav__link">Лицензии</Link>
                    </li>
                    <li className="secnav__item">
                        <Link to ="/balcon" className="secnav__link">Реквизиты</Link>
                    </li>
                    <li className="secnav__item">
                        <Link to ="/job" className="secnav__link">Вакансии</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Secnav


