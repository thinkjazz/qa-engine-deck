import {createStore} from 'vuex'
//* Great! Our Vuex configuration is over now 👍

import rootMutations from './mutations'
import rootGetters from './getters'
import rootActions from './actions'

const store = createStore({
    state() {
        return {
            overlay: false,
            lastListId: 3,
            lastCardId: 5,
            currentData: null,
            lists: [
              {
                id: 1,
                name: 'To Do',
              },
              {
                id: 2,
                name: 'In Progress',
              },
              {
                id: 3,
                name: 'Done',
              }
            ],
            cards: [
              {
                listId: 1,
                id: 1,
                name: 'Card 1',
              },
              {
                listId: 2,
                id: 2,
                name: 'Card 2',
              },
              {
                listId: 3,
                id: 3,
                name: 'Card 3',
              },
            ],
        }
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions,
});

export default store;