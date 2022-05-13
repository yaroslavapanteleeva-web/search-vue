export default {
    namespaced: true,
    state() {
        return {
            tabValue: 'all',
            enteredSearch: '',
            items: []
        }
    },
    mutations: {
        getValueTab(state, payload) {
            state.tabValue = payload;
        },
        getEnterSearch(state, payload) {
            state.enteredSearch = payload;
        },
        getListEmployees(state, payload) {
            state.items = payload;
        }
    }, 
    actions: {
        getListEmployees(context, payload) {
            context.commit('getListEmployees', payload);
        }
    },
    getters: {
        tab(state) {
            return state.tabValue;
        },
        search(state) {
            return state.enteredSearch;
        },
        listEmployees(state) {
            return state.items;
        }

    }
}