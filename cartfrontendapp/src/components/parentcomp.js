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
            let outdata = {
                data: '',
                dataUpdated: true
            };
            const apiResult = getData(apiDetails.apiUrl);
            apiResult.then(data => {
                if (data !== null && data.length > 0) {
                    outdata.data = data;
                    outdata.dataUpdated = true;
                }
                else {
                    outdata.data = cartData;
                    outdata.dataUpdated = true;
                }
                dispatch({
                    type: "FETCH_CART_DATA",
                    payload: outdata
                });
            });
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentComp);