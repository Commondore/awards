import './_Logo.sass';
import logo from './Logo.png';
import Hamburger from 'hamburger-react';
import {useState} from 'react'
import Mobil from './../../../containers/mobil/Mobil';
import React from 'react'

function Logo() {
    const [open, setOpen] = useState(false);

    const menuToggle = () => {
        setOpen(!open);
    }

    return (
        <div className="container">
            <div className="header-content">

                <div className="logo">
                    <img src={logo} alt="" className="header__logo"/>
                </div>
                     {/* <div className="header__title-box"> */}
                        {/* <p className="title-small">
                         Кыргыз Республикасынын Транспорт жана Жол Министрлигине Караштуу 
                        "Кыргызжолтрансдолбоор" Долбоорлоо-Изилдөө Институту Мамлекеттик ишканасы
                        
                        </p> */}
                        {/* <p className="header__title-kg">
                        Кыргыздортранспроект при Министерстве Транспорта и коммуникаций Кыргызской Республики 
                        </p> */}
                    {/* </div> */}

                    <div className="title-box-kg">
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

               

                    <div className="burger__menu" onClick={menuToggle}>
                        <Hamburger 
                    
                        color="#357ECB" 
                        width="44px"  className="header-burger"/>
                    </div> 
                    {
                        open ? <Mobil/> : null
                    }
                 </div>
        </div>
    )
}



export default Logo
