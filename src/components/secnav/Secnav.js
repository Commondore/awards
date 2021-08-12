
import './_Secnav.sass';

import React from 'react'
import { NavLink } from 'react-router-dom';

function Secnav() {
    return (
        <div className="secnav">
            <div className="container">
                <ul className="secnav__menu">
                    <li className="secnav__item">
                        <NavLink to="/managment" className="secnav__link">Руководство</NavLink>
                    </li>
                    {/* <li className="secnav__item">
                        <NavLink to ="/ceiling" className="secnav__link">Структура</NavLink>
                    </li> */}
                    <li className="secnav__item">
                        <NavLink to ="/history" className="secnav__link">История</NavLink>
                    </li>
                    <li className="secnav__item">
                        <NavLink to="/award" className="secnav__link">Награды</NavLink>
                    </li>
                    {/* <li className="secnav__item">
                        <NavLink to="/table" className="secnav__link">Сертификаты</NavLink>
                    </li> */}
                    <li className="secnav__item">
                        <NavLink to ="/license" className="secnav__link">Лицензии</NavLink>
                    </li>
                    <li className="secnav__item">
                        <NavLink to ="/balcon" className="secnav__link">Реквизиты</NavLink>
                    </li>
                    <li className="secnav__item">
                        <NavLink to ="/job" className="secnav__link">Вакансии</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Secnav


