
import './_Pen.sass';
import Mininav from '../mininav/Mininav';
import React from 'react'
import Navdecor from '../navdecor/Navdecor';

function Pen() {
    return (
        <div className="wrapper">
            <div className="container">
                    <Navdecor/>
                    <Mininav/>
                <h2 className="pen-title">Объекты заданные в эксплуатацию</h2>
            </div>
        </div>
    )
}

export default Pen
