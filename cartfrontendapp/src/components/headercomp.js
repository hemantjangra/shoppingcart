import React from 'react';

class HeaderComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className='section header'>
                <h1>Your Shopping Bag</h1>
            </section>
        )
    }
}

export default HeaderComp;