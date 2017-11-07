

export default {
    namespace: 'mainpage',
    state: {

    },

    subscriptions: {
        setup({ dispatch, history }) {
            dispatch()
        },
    },

    effects: {
    },

    reducers: {
        save(state, payload) {
            return { ...state };
        }
    }
}