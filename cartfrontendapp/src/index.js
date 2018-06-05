import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import cartReducer from './reducers/index';

import ParentComp from './components/parentcomp';

const store = createStore(cartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(`store.getStore() is ${store.getStore}`);



class Index extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <ParentComp />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><Index /></Provider>, document.getElementById('app'));