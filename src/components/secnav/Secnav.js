
import './_Secnav.sass';

import React from 'react'
import { Link} from 'react-router-dom'


function Secnav() {
    return (
        <div className="secnav">
            <div className="container">
                <ul className="secnav__menu">
                    <li className="secnav__item">
                        <Link to="/managment" className="secnav__link">Руководство</Link>
                    </li>
                    {/* <li className="secnav__item">
                        <NavLink to ="/ceiling" className="secnav__link">Структура</NavLink>
                    </li> */}
                    <li className="secnav__item">
                        <Link to ="/history" className="secnav__link">История</Link>
                    </li>
                    <li className="secnav__item">
                        <Link to="/award" className="secnav__link">Награды</Link>
                    </li>
                    {/* <li className="secnav__item">
                        <NavLink to="/table" className="secnav__link">Сертификаты</NavLink>
                    </li> */}
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


