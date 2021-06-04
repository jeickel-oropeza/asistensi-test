import React, {useEffect, useState} from 'react';
import logo from '../assets/img/visa.png';
import chip from '../assets/img/chip.png';

export default function Card() {
    return (
        <div className="card white-text">
            <div className="logo-card d-flex">
                <img src={logo} alt="Logo visa" />
            </div>
            <div className="chip-card">
                <img src={chip} alt="Card chip" />
            </div>
            <div className="number-card">
                <p>2671 9860 8300 0202</p>
                <span className="small-number">4841</span>
            </div>
            <div className="date-card">
                <div className="expiration">
                    Expiration date
                </div>
                <div className="date">
                    06/16
                </div>
            </div>
            <div className="name">
                DAVID GUETTA
            </div>
        </div>
    )
}