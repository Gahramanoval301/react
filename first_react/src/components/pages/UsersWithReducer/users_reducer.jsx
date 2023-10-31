export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return action.payload;
        case 'ADD_USER':
            let username = prompt('enter name:')
            let email = prompt('enter email:')
            let id = state.length + 1
            // let id = v4()
            return [...state, { username, email, id }];
        case 'DELETE_USER':
            return state.filter(({ id }) => id != action.payload)
        case 'RM_LAST_USER':
            const removedLastUser = [...state]
            removedLastUser.pop();
            return removedLastUser
        default:
            return state;
    }
}