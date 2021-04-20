export default function (state = [], actions){
    switch(actions.type){
        case 'GET_POSTS':
            // console.log(actions.payload);
        return actions.payload;
        case 'CREATE_POST':
            // console.log(actions.payload);
            return [...state, actions.payload]
        default: return state;
    }
}