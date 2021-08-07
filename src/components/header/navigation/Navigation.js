import './_Navigation.sass';
import search from './search.png';
import down from './down.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import React from 'react'

function Navigation() {
    return (
        <div className="nav">
            <div className="container">
                <ul className="header__nav">
                    <li className="nav__item ">
                        <NavLink to="/" exact className="nav__link">Главная <img src={down} alt="" className="nav_down" /></NavLink>
                       
                        <ul className="nav__menu">
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
                        </ul>
                    </li>
                    <li className="nav__item">
                        <NavLink to ="/effort" className="nav__link">Деятельность <img src={down} alt="" className="nav_down" /> </NavLink>
                        <ul className="nav__menu">
                        <li className="item">
                                <Link to ="effort" className="link">Изыскание и проектирование </Link>
                            </li>
                            <li className="item">
                                <Link to ="control" className="link">Контроль и надзор за выполнением и разработкой проектов</Link>
                            </li>
                            <li className="item">
                                <Link to ="/service" className="link">Оказание консультационных услуг</Link>
                            </li>
                            <li className="item">
                                <Link to="/study" className="link">Научная деятельность</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav__item">
                        <NavLink to ="/pen" className="nav__link">Все обьекты  <img src={down} alt="" className="nav_down" /> </NavLink>
                        <ul className="nav__menu">
                            <li className="item">
                                <Link to ="/pen" className="link">Объекты заданные в эксплуатацию</Link>
                            </li>
                            <li className="item">
                                <Link to ="/stripe" className="link">Проектируемые</Link>
                            </li>
                            <li className="item">
                                <Link to ="/zone" className="link">Реконструируемые</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav__item">
                        <NavLink to ="/plane" className="nav__link">Партнеры  <img src={down} alt="" className="nav_down" /></NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to ="/purchase" className="nav__link">Госзакупки</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to ="/news" className="nav__link">Новoсти</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to ="/contact" className="nav__link">Контакты</NavLink>
                    </li>
                    <form action="" className="form">
                        <input type="search" className="input__header" placeholder="Введите ключевое слово..." />
                        <img src={search} alt="" className="header__search" />
                    </form>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
               

