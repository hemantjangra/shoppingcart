import React from 'react';

class FooterComp extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <footer className="row footer">
                    <p>Secure checkout. Shopping is always safe &amp; secure</p>
                    <img src="src/img/lock.png" alt="Secure Checkout" />
                    <p><span>SIGN IN</span> to save your cart and have access to your items on mobile, 
                    tablet, and desktop.</p>
            </footer>
        )
    }
}

export default FooterComp;