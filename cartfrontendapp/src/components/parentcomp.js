import React from 'react';
import { connect } from 'react-redux';
import apiDetails from '../../config';
import getData from '../utilities/getResult';
import HeaderComp from '../components/headercomp';
import ItemHeader from '../components/itemheader';
import ItemComp from './itemcomp';
import CartComp from './cartcomp';
import FooterComp from './footercomp';

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
                outdata.data = data;
                outdata.dataUpdated = true;
                dispatch({
                    type: "FETCH_CART_DATA",
                    payload: outdata
                });
            });
        },
    }
}
function fetchPostsRequest() {
    return {
        type: "FETCH_REQUEST"
    }
}

function fetchPostsSuccess(payload) {
    return {
        type: "FETCH_SUCCESS",
        payload
    }
}

function fetchPostsError() {
    return {
        type: "FETCH_ERROR"
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentComp);

