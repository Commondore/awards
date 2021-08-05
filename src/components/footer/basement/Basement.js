
import './_Basement.sass';
import {FaCopyright} from 'react-icons/fa'
import React from 'react'

function Footbottom() {
    return (
       
        <div className="foot-bottom">
            <div className="container">
                <div className="foot-copy">
                    <FaCopyright className="copy-icon"/>
                    <a href="#" className="copy-decor">Все права защищены "МТиК КР"</a>
                </div>
            </div>
        </div>
    
    )
}

export default Footbottom

