import React from 'react';
import { connect } from 'react-redux';

class ItemHeader extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const totalItemCount = this.props.totalItemCount;
        return (
            <section className="section itemheader">
                <ul className="item-header-items">
                    <li>{`${totalItemCount} `}Items</li>
                    <li>Size</li>
                    <li>QTY</li>
                    <li>Price</li>
                </ul>
            </section>
        )
    };
}

const mapStateToProps = state => {
    return {
        totalItemCount: state.data.length
    }
};
const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemHeader);