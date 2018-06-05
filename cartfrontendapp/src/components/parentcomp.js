import React from 'react';
import { connect } from 'react-redux';
import apiDetails from '../../config';

class ParentComp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.fetchCartData();
    };

    render() {
        //this.props.fetchCartData();
        return (
            <div>
                <input type="button" onClick={this.props.fetchCartData} value="Click kr le"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allCartData: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCartData: () => {
            dispatch({
                type: "FETCH_CART_DATA",
                payload: {}
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentComp);

