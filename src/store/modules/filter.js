export default {
    namespaced: true,
    state() {
        return {
            value: 'all',
            items: [],
            sortItems: [],
            enteredSearch: ''
        }
    },
    mutations: {
        changeFiter(state, payload) {
            state.value = payload;
            if (state.value === 'all') {
                state.sortItems = JSON.parse(JSON.stringify(state.items))
            } else {
                state.sortItems = state.items.filter(item => item.position === state.value);

            }
        },
        getArrayEmployees(state, payload) {
            // state.sortItems = JSON.parse(JSON.stringify(state.items));
            state.sortItems = payload;
            state.items = payload;
        },
        getEnteredSearch(state, payload) {
            state.enteredSearch = payload;

            // const newState = state.sortItems.filter(item => {
            //     if (state.enteredSearch === "") return item;
            //     else if (item.firstName.toLowerCase().indexOf(state.enteredSearch.toLowerCase()) !== -1 || 
            //         item.lastName.toLowerCase().indexOf(state.enteredSearch.toLowerCase()) !== -1 || 
            //         item.userTag.toLowerCase().indexOf(state.enteredSearch.toLowerCase()) !== -1
            //     ) {
            //         return item;
            //     }
            //     return '';
            // })

        }
    },
    actions: {
        getArrayEmployees(context, payload) {
            context.commit('getArrayEmployees', payload);
        }
    },
    getters: {
        filter(state) {
            return state.value;
        },
        employees(state) {
            return state.sortItems;
        }
    }
}