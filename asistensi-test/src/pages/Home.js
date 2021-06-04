import React, { Fragment } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <section className="card-home-container d-flex">
                <Card />
            </section>
        </Fragment>
    );
}

export default Home;