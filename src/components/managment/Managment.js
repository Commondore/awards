
import './_Managment.sass';
import man from './man.png'
import person from './person.png'

import React from 'react'

function Managment() {
    return (
        <div className="wrapper">
            <div className="managment">
                <div className="container">
                    <h2 className="manag-title">Руководство</h2>
                    <div className="card__group">
                        <div className="card__item">
                            <div className="img-card">
                                <img src={man} alt="" className="person-img" />

                            </div>
                            <div className="family-title">
                                <p className="name-title">Нурманбетов Кадырбек Ракымбекович</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Директор ПИИ "Кыргыздортранспроект"</p>
                            </div>
                        </div>
                        <div className="card__item">
                            <div className="img-card">
                                <img src={man} alt="" className="person-img" />

                            </div>
                            <div className="family-title">
                                <p className="name-title">Ашымбеков Талайьек Нурланович</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Заместитель Генерального Директора ПИИ "Кыргыздортранспроект"</p>
                            </div>
                        </div>
                        <div className="card__item">
                            <div className="img-card">
                                <img src={man} alt="" className="person-img" />

                            </div>
                            <div className="family-title">
                                <p className="name-title">Ормонов Кубанычбек Калыевич</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Заместитель Генерального Директора ПИИ "Кыргыздортранспроект"</p>
                            </div>
                        </div>
                        <h2 className="manag-title">Начальники отделов</h2>
                        <div className="card__group">
                        <div className="card__item">
                            <div className="img-card">
                                <img src={man} alt="" className="person-img" />

                            </div>
                            <div className="family-title">
                                <p className="name-title">Исаев Уланбек Жусупалиевич</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Начальник Дорожного Отдела Управления проектами</p>
                            </div>
                        </div>
                        <div className="card__item">
                            <div className="img-card">
                                <img src={person} alt="" className="person-img" />

                            </div>
                            <div className="family-title">
                                <p className="name-title">Кабулова Жанылбубу Адыгинеевна</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Начальник Отдела Инженерных Изысканий Управления проектами </p>
                            </div>
                        </div>
                        <div className="card__item">
                            <div className="img-card">
                                <img src={man} alt="" className="person-img" />

                            </div>
                            <div className="family-title">
                            <p className="name-title">Мельник Евгений Владимирович</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Начальник Отдела Искусственных Сооружений и Инженерных 
                                расчетов Управления проектами
                                </p>
                            </div>
                        </div>
                        <div className="card__item">
                            <div className="img-card">
                                <img src={person} alt="" className="person-img" />
                            </div>
       
                            <div className="family-title">
                                <p className="name-title">Рокина Наталья Алексеевна</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Начальник Отдела Смет Управления проектами</p>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Managment
