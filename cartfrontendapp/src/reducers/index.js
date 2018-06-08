

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
            return action.payload;

            break;
    }
    return state;
}

export default cartReducer;