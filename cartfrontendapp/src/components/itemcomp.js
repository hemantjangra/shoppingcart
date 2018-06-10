import React from 'react';
import { connect } from 'react-redux';
import ModalComp from './modalcomp';

class ItemComp extends React.Component {
    constructor(props) {
        super(props);
    };

    

    render() {
        const openModal = () =>{
            document.querySelector('.edit-modal').classList.toggle("hide-modal");
        };

        const createcartItem = () => {
            const compCartData = this.props.allCartData;
            let imgPath = "src/img/";
            let cartItem = [];
            for (let i = 0; i < compCartData.length; i++) {
                cartItem.push(
                    <div key={i} className="row cartitem">
                        <div className="item-img">
                            <figure>
                                <img src={`${imgPath}${compCartData[i].imageName}`} alt="tshirt" />
                            </figure>
                        </div>

                        {/*<div className="item-content-wrapper">*/}
                            <div className="item-content">
                                <ul className="item-content-details">
                                    <li>{compCartData[i].item_Description}</li>
                                    <li>Style #: {compCartData[i].style}</li>
                                    <li>Color: {compCartData[i].color}</li>
                                </ul>
                                <div className="item-size">
                                    <p><span>{`Size: `}</span>{compCartData[i].size_Available.Small.isAvailable ? compCartData[i].size_Available.Small.size : ``}</p>
                                </div>
                                <div className="item-quant">
                                    <p><span>{`QTY: `}</span>{compCartData[i].default_Quantity}</p>
                                </div>
                                <div className="item-price">
                                    <p><sup>{compCartData[i].currency.symbol}</sup>{compCartData[i].price}</p>
                                </div>
                            </div>
                            <div className="item-operations">
                                <ul className="item-content-options">
                                    <li onClick={openModal}>EDIT</li>
                                    <li><strong>X</strong> Remove</li>
                                    <li>Save for Later</li>
                                </ul>
                            </div>

                        {/*</div>*/}
                        <ModalComp /> 
                    </div>);
            }
            return cartItem;
        };
        return (
            <section className="section cartitems">
                {createcartItem()}
            </section>
        )
    };
}

const mapStateToProps = state => {
    return {
        allCartData: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemComp);