import './_Logo.sass';
import logo from './Logo.png';

import React from 'react'

function Logo() {
    return (
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt="" className="header_logo" />
                </div>
                <div className="header__title">
                    <p className="header__title-kg title-top">Кыргыз Республикасынын Транспорт жана Жол Министрлигине Караштуу 
                    "Кыргызжолтрансдолбоор" Долбоорлоо-Изилдөө Институту Мамлекеттик ишканасы
                    </p>
                    <p className="header__title-kg">Государственное Предприятие Проектно-Изыскательский Институт
                    "Кыргыздортранспроект" при Министерстве Транспорта и коммуникаций Кыргызской Республики 
                    </p>
                    <p className="header__title-kg title-bottom">State Enterprise Project and survey Institute 
                    "Kyrgyzdortransproject" under the Ministry of Transport and Communications of the Kyrgyz Republic
                    </p>
                </div>
            </div>
        </div>
    )
}



export default Logo
