
import './_Navdecor.sass';
import { Link } from 'react-router-dom';

import React from 'react'

function Navdecor() {
    return (
        <div className="navdecor">
        <div className="subnav__menu ">
            <Link to ="/pen" className="subnav__link ">Объекты, заданные в эксплуатацию</Link>
            <Link to ="/stripe" className="subnav__link ">Проектируемые</Link>
            <Link to ="/zone" className="subnav__link">Реконструируемые</Link>
           
        </div>
    </div>
    )
}

export default Navdecor
