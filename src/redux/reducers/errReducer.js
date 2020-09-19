export default function (store = {status: false, message: null}, action) {
    switch (action.type) {
        case 'ERR_IN_APP':
            return {status: true, message: action.payload}
        default:
            return store;
    }
};
