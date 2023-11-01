const ADDPRODUCETOCART = 'cart/ADDPRODUCETOCART'
const DECREMENTINCART = 'cart/DECREMENTINCART'
const REMOVEFROMCART = 'cart/REMOVEFROMCART'

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
            return nextState;
        case DECREMENTINCART: 
            nextState[action.produceId] = {id: action.produceId, count: count-1};
            return nextState;
        case REMOVEFROMCART:
            delete  nextState[action.produceId]
            return nextState;
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

export const decrementInCart = (produceId) => {
    return {
        type: DECREMENTINCART,
        produceId: produceId
    }
}

export const removeFromCart = (produceId) => {
    return {
        type: REMOVEFROMCART,
        produceId: produceId
    }
}