
import './_Mininav.sass';
import { Link } from 'react-router-dom';
import React from 'react'

function Mininav() {
    return (
        <div className="mini-nav">
            <Link to ="/" className="mini__link">Главная страница /</Link>
            <Link to ="/news" className="mini__link">Новости /</Link>
            <Link to ="/newsday" className="mini__link">Новость дня</Link>
        </div>

    )
}
export default Mininav
