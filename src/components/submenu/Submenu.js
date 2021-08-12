
import './_Submenu.sass';
import { Link } from 'react-router-dom';

import React from 'react'

function Submenu() {
    return (
        <div className="submenu">
            <div className="subnav__menu">
                <Link to ="/effort" className="subnav__link subnav__link-decor ">Изыскание и проектирование</Link>
                <Link to ="/control" className="subnav__link subnav__link-decor">Контроль и надзор</Link>
                <Link to ="/service" className="subnav__link subnav__link-decor ">Оказание Консультационных услуг</Link>
                <Link to ="/study" className="subnav__link subnav__link-decor ">Научная деятельность</Link>
            </div>
        </div>
    )
}

export default Submenu

