import './_Navigation.sass';
import search from './search.png';
import down from './down.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import React from 'react'

function Navigation() {
    return (
        <div className="wrapper">

      
        <div className="nav">
            <div className="container">
                <div className="header__nav">
                    <div className="nav__item">
                        <NavLink to="/" exact className="nav__link">Главная <img src={down} alt="" className="nav_down" /></NavLink>
                        <ul className="nav__menu nav__menu-left">
                            <li className="item">
                                <Link to="/managment" className="link">Руководство </Link>
                            </li>
                            <li className="item">
                                <Link to ="/ceiling" className="link">Структура</Link>
                            </li>
                            <li className="item">
                                <Link to ="/history" className="link">История</Link>
                            </li>
                            <li className="item">
                                <Link to="/award" className="link">Награды</Link>
                            </li>
                            <li className="item">
                                <Link to ="/table" className="link">Сертификаты</Link>
                            </li>
                            <li className="item">
                                <Link to ="/license" className="link"> Лицензии</Link>
                            </li>
                            <li className="item">
                                <Link to ="/balcon" className="link">Реквизиты</Link>
                            </li>
                            <li className="item">
                                <Link to ="/job" className="link">Вакансии</Link>
                            </li>
                            <li className="item">
                                <Link to ="/contact" className="link">Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__item">
                        <NavLink to ="/effort" className="nav__link">Деятельность <img src={down} alt="" className="nav_down" /> </NavLink>
                        <ul className="nav__menu nav__menu-decor">
                            <li className="item">
                                <Link to ="/effort" className="link">Изыскание и проектирование </Link>
                            </li>
                            <li className="item">
                                <Link to ="/control" className="link">Контроль и надзор за выполнением и разработкой проектов</Link>
                            </li>
                            <li className="item">
                                <Link to ="/service" className="link">Оказание консультационных услуг</Link>
                            </li>
                            <li className="item">
                                <Link to="/study" className="link">Научная деятельность</Link>
                            </li>
                        </ul>
                    </div>
                    <NavLink to ="/pen" className="nav__link">Все обьекты  
                    {/* <img src={down} alt="" className="nav_down" />  */}
                        
                    </NavLink>
                    <NavLink to ="/plane" className="nav__link">Партнеры  
                    {/* <img src={down} alt="" className="nav_down"/> */}
                    </NavLink>
                    <NavLink to ="/purchase" className="nav__link">Госзакупки</NavLink>
                    <NavLink to ="/news" className="nav__link">Новoсти</NavLink>
                    <form action="" className="search__form">
                        <input type="text" className="search__input" placeholder="Введите слово..."/>
                        <img src={search} alt="" className="search__img" />
                    </form>
                </div>

             
        </div>
            </div>
        </div>
    )
}

export default Navigation
               

