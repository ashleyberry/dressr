// Used to store the clothing types
const types = (state = [], action) => {
    console.log( 'in type reducer:', action.payload )
    switch (action.type) {
        case 'SET_TYPES':
            console.log('updated type reducer:', action.payload )
            return action.payload;
        default:
            return state;
    }
}

export default types;