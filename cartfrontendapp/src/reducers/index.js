import getData from '../utilities/getResult';
import apiDetails from '../../config';


let cartData = {
    data: [],
    dataFirstTime: true
};
// getData(apiDetails.apiUrl)
//     .then(data => cartData = data);


const cartReducer = (state = cartData, action) => {
    console.log(`Global state is ${state.dataFirstTime}`);
    switch (action.type) {
        case 'FETCH_CART_DATA':
            console.log(`Global state is ${state.dataFirstTime} BTN Click`);
            getData(apiDetails.apiUrl)
                .then(data =>{
                    state.data=data;
                    state.dataFirstTime = false;
                });
                
            break;
    }
    return state;
}

export default cartReducer;