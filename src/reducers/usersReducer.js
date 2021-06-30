export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            console.log("here at reducer")
            return [...state, action.payload]; // push to array 
        default:
            return state;
    }
};
