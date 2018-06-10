import React from 'react';
import { connect } from 'react-redux';
import apiDetails from '../../config';
import cartData from '../data/data';
import getData from '../utilities/getResult';
import HeaderComp from '../components/headercomp';
import ItemHeader from '../components/itemheader';
import ItemComp from './itemcomp';
import CartComp from './cartcomp';
import FooterComp from './footercomp';
import ModalComp from './modalcomp';

class ParentComp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchCartData();
    };

    render() {
        //this.props.fetchCartData();
        return (
            <section className="row">
                <HeaderComp />
                <ItemHeader />
                <ItemComp />
                <CartComp />
                <FooterComp />
                <ModalComp />
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        allCartData: state
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchCartData: () => {
//             dispatch({
//                 type: "FETCH_CART_DATA",
//                 payload: {}
//             })
//         }
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        fetchCartData: () => {
            let data = [];
            const apiResult = getData(apiDetails.apiUrl);
            apiResult.then(res => {
                data = res;
                dispatch({
                    type: "FETCH_CART_DATA",
                    payload: data
                });
            });
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentComp);