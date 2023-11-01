const POPULATE = 'produce/POPULATE';
const LIKEPRODUCE = 'produce/LIKE'


export const produceReducer = (state = {}, action) => {
    let nextState = Object.assign({}, Object.freeze(state));

    switch (action.type) {
        case POPULATE:
            action.produce.forEach((produce, i) => {
                nextState[produce.id] = produce;
            });
            return nextState;
        case LIKEPRODUCE:  
            // console.log(action.produceId);
            nextState[action.produceId].liked ? nextState[action.produceId].liked= false :nextState[action.produceId].liked=true;
            return nextState;
        default:
            return nextState;
    }
}

const allProduce = require("../mockData/produce.json");
// const action = populateProduce(allProduce);
// store.dispatch(produceReducer({}, action))

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: allProduce
    }
}

export const likeProduce = (produceId) => {
    return {
        type: LIKEPRODUCE, 
        produceId: produceId
    }
}