import React from 'react';

class FooterComp extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <footer className="footer">
                    <img src="src/img/lock.png" alt="Secure Checkout" />
                    <p>Secure checkout. Shopping is always safe &amp; secure</p>
            </footer>
        )
    }
}

export default FooterComp;