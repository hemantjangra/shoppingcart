import React from 'react';
import { connect } from 'react-redux';

class CartComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const getSum = (total, num) => {
            return total + num;
        };

        const getTotalPrice = () => {
            const cartItems = this.props.allCartData;
            const itemPrice = cartItems.map(current => current.price);
            let totalSum = itemPrice.length > 0 ? itemPrice.reduce(getSum) : 0;
            return totalSum;
        };



        return (
            <section className="row cart">
                <div className="contact-us">
                    <ul className="contact-us-items">
                        <li>Need help<br />or have questions?</li>
                        <li>Call Customer Service at<br />1-800-555-5555</li>
                        <li>Chat with one of our<br />stylists</li>
                        <li>See return<br /> & exchange policy</li>
                    </ul>
                </div>
                <div className="cart-details">
                    <div className="row coupon">
                        <div className="promo-text">
                            <label>Enter promotion code <br />or gift card</label>
                        </div>
                        <div className="promo-code-box">
                            <input type="text" name="name" id="promo-code" placeholder="" />
                        </div>
                        <div className="btn-border">
                            <input type="submit" value="Apply" />
                        </div>
                    </div>
                    <div className="calculations">
                        <div className="row">
                            <div className="cal-labels">
                                <ul className="labels">
                                    <li>SubTotal</li>
                                    <li>Promotion Code JF10 Applied</li>
                                    <li>Estimated Sipping<span>You qualify for free shipping<br/>bacause your orderis over $50*</span></li>
                                </ul>
                            </div>
                            <div className="cal-prices">
                                <ul className="prices">
                                    <li><sup>$</sup>{getTotalPrice()}</li>
                                    <li><sup>$</sup>-7.00</li>
                                    <li>Free</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <div className="row">
                            <div className="total-label">
                                <p>EStimated Total<span>Tax will be applied during checkout</span></p>
                            </div>
                            <div className="total-price">
                                <p><sup>$</sup>{getTotalPrice()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="checkout">
                        <input type="submit" value="CHECKOUT" />
                        <p>Continue Shopping</p>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        allCartData: state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComp);