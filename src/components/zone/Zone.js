
import './_Zone.sass';
import Navdecor from '../navdecor/Navdecor';
import React from 'react'
import Mininav from '../mininav/Mininav';

function Zone() {
    return (
        <div className="wrapper">
            <div className="container">
                    <Navdecor/>
                    <Mininav/>
                <h2 className="study-title">Реконструируемые</h2>
            </div>
        </div>
    )
}

export default Zone
