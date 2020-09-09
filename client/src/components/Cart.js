import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';
import {getNumbers} from '../actions/getAction'
import p1 from '../images/1.jpeg';
import p2 from '../images/2.jpeg';
import p3 from '../images/3.jpeg';
import p4 from '../images/4.jpg';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

const Cart = ({ basketProps, productQuantity, clearProduct, getNumbers }) => {

    let productsInCart = [];

    Object.keys(basketProps.products).forEach((item) => {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if (basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item]);
        }
        console.log(productsInCart);
    });

    useEffect(() => {
        getNumbers();
        // eslint-disable-next-line
    },[])

    const productImages = [p1, p2, p3, p4];

    const orderProduct = () => {
         
    }
         productsInCart = productsInCart.map((product, index) => {
             console.log(product);
              
             return (
                 <Fragment key={index}>
                     <div className="product">
                         <i
                             onClick={() => clearProduct(product.name)}
                             className="far fa-times-circle"
                         ></i>
                         <img src={productImages[index]} alt="Loading..." />
                         <span className="sm-hide">{product.name}</span>
                     </div>
                     <div className="price sm-hide">${product.price},</div>
                     <div className="quantity">
                         <i
                             onClick={() =>
                                 productQuantity('decrease', product.name)
                             }
                             className="decrease far fa-arrow-alt-circle-left"
                         ></i>
                         <span>{product.numbers}</span>
                         <i
                             onClick={() =>
                                 productQuantity('increase', product.name)
                             }
                             className="increase far fa-arrow-alt-circle-right"
                         ></i>
                     </div>
                     <div className="total">${product.numbers * product.price}</div>
                 </Fragment>
             );
         });
    


    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">{productsInCart}</div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost}</h4>
            </div>
            <Link to="/order"><button id="orderbtn" onClick={orderProduct}>Order Now</button></Link>
            
        </div>
    );
};



const mapStateToProps = (state) => ({
    basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct, getNumbers })(
    Cart
);
