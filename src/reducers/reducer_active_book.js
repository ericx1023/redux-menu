
//state arg. is not app state, only the state ths reducer is responsible for 
export default function(state = null, action) {
    debugger;
    switch (action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}