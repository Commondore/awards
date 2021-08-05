import './_Navigation.sass';
import search from './search.png';
import down from './down.png';
import {FaCaretDown} from 'react-icons/fa'
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
                       
                        <ul className="drop__menu">
                            <li className="drop__item">
                                <Link to="/management" className="drop__link">Руководство </Link>
                            </li>
                            <li className="drop__item">
                                <a href="#" className="drop__link">Структура</a>
                            </li>
                            <li className="drop__item">
                                <Link to ="/history" className="drop__link">История</Link>
                            </li>
                            <li className="drop__item">
                                <Link to="/award" className="drop__link">Награды</Link>
                            </li>
                            <li className="drop__item">
                                <a href="#" className="drop__link">Сертификаты</a>
                            </li>
                            <li className="drop__item">
                                <Link to ="/license" className="drop__link"> Лицензии</Link>
                            </li>
                            <li className="drop__item">
                                <a href="#" className="drop__link">Реквизиты</a>
                            </li>
                            <li className="drop__item">
                                <a href="#" className="drop__link">Вакансии</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">Деятельность <img src={down} alt="" className="nav_down" /> </a>
                        <ul className="drop__menu">
                        <li className="drop__item">
                                <a href="#" className="drop__link">Изыскание и проектирование </a>
                            </li>
                            <li className="drop__item">
                                <a href="#" className="drop__link">Контроль и надзор за выполнением и разработкой проектов</a>
                            </li>
                            <li className="drop__item">
                                <a href="#" className="drop__link">Оказание консультационных услуг</a>
                            </li>
                            <li className="drop__item">
                                <a href="#" className="drop__link">Научная деятельность</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">Все обьекты  <img src={down} alt="" className="nav_down" /> </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">Партнеры  <img src={down} alt="" className="nav_down" /></a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">Госзакупки</a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">Новoсти</a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">Контакты</a>
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
               

