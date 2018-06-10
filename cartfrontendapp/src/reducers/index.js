

let data= [];
// getData(apiDetails.apiUrl)
//     .then(data => cartData = data);


const cartReducer = (state = data, action) => {
    console.log(`Global state is ${state.dataFirstTime}`);
    switch (action.type) {
        case 'FETCH_CART_DATA':
            //state.data= action.payload.data;
            //state.dataFirstTime = action.payload.dataUpdated;
            return action.payload;

            break;
        case "REMOVE_CART_ITEM":
            state = state.filter((current, index, array) => current.sku_Id !== action.payload)
            return state;
            break;
    }
    return state;
}

export default cartReducer;