import React from 'react';
import p1 from '../images/1.jpeg';
import p2 from '../images/2.jpeg';
import p3 from '../images/3.jpeg';
import p4 from '../images/4.jpg';

import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);

    return (
        <div className="container">
            <div className="image">
                <img src={p1} alt="Loading..." />
                <h3>Makeup</h3>
                <h3>$10.03</h3>
                <button
                    onClick={() => props.addBasket('Makeup')}
                    className="addToCart cart1"
                >
                    Add to Cart
                </button>
            </div>
            <div className="image">
                <img src={p2} alt="Loading..." />
                <h3>Brushes</h3>
                <h3>$15.03</h3>
                <button
                    onClick={() => props.addBasket('Brushes')}
                    className="addToCart cart2"
                >
                    Add to Cart
                </button>
            </div>
            <div className="image">
                <img src={p3} alt="Loading..." />
                <h3>Polisher</h3>
                <h3>$5.00</h3>
                <button
                    onClick={() => props.addBasket('Polisher')}
                    className="addToCart cart3"
                >
                    Add to Cart
                </button>
            </div>
            <div className="image">
                <img src={p4} alt="Loading..." />
                <h3>Liner</h3>
                <h3>$25.03</h3>
                <button
                    onClick={() => props.addBasket('Liner')}
                    className="addToCart cart4"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default connect(null, { addBasket })(Home);