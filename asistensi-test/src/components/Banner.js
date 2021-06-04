import React from 'react';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="banner d-flex">
            <div className="principal-text d-flex">
                <div className="title-banner text-center white-text">
                    <h1>Be Smart Take Card</h1>
                </div>
                <div className="subtitle-text text-center white-text">
                    <p className="m-0">So you have your new digital camera and clicking away to glory anything and everything in sight. Now you want to print them and you need.</p>
                </div>
                <div className="button-banner-container text-center">
                    <Link 
                        className="button-banner" 
                        to="/users"
                        title="Users">Apply for card</Link>
                </div>
            </div>
        </section>
    )
}

export default Banner;