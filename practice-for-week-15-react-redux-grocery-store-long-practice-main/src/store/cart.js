const ADDPRODUCETOCART = 'cart/ADDPRODUCETOCART'

export const cartReducer = (state = {}, action) => {
    let nextState = Object.assign({}, Object.freeze(state));
    let count = null;
    if (!nextState[action.produceId]) {
        count = 0;
    } else {
        count = nextState[action.produceId].count;
    }

    switch (action.type) {
        case ADDPRODUCETOCART:
            nextState[action.produceId] = {id: action.produceId, count: count+1};
        default:
            return nextState;
    }
}

export const addToCart = (produceId) => {
    return {
        type: ADDPRODUCETOCART,
        produceId: produceId
    }
}