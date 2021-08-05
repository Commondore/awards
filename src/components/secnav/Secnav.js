
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
                        <a href="" className="secnav__link">Структура</a>
                    </li>
                    <li className="secnav__item">
                        <Link to ="/history" className="secnav__link">История</Link>
                    </li>
                    <li className="secnav__item">
                        <Link to="/award" className="secnav__link">Награды</Link>
                    </li>
                    <li className="secnav__item">
                        <a href="" className="secnav__link">Сертификаты</a>
                    </li>
                    <li className="secnav__item">
                        <Link to ="/license" className="secnav__link">Лицензии</Link>
                    </li>
                    <li className="secnav__item">
                        <a href="" className="secnav__link">Реквизиты</a>
                    </li>
                    <li className="secnav__item">
                        <a href="" className="secnav__link">Вакансии</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Secnav


