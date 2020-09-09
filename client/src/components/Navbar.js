import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown'

const Navbar = (props) => {
    useEffect(() => {
        getNumbers();
    }, []);
    return (
        <header>
            <div className="overlay"></div>
            <nav>
                <h2>
                    <Link to="/">Beauty Shop</Link>
                </h2>
                <ul>
                <li>
               
                </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="cart">
                        <Link to="/">
                        <i  className="fas fa-shopping-basket"></i> 
                        <button id="btn">
                        <Dropdown />
                        <span>{props.basketProps.basketNumbers}</span> 
                        </button> 
                            
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const mapStateToProps = (state) => ({
    basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
