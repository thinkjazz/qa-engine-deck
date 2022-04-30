//* Great! Our Vuex configuration is over now 👍
export default {
  lastListId(state: any) {
    return state.lastListId;
  },
  lastCardId(state: any) {
    return state.lastCardId;
  },
  currentData(state: any) {
    return state.currentData;
  },
  lists(state: any) {
    return state.lists;
  },
  cards(state: any) {
    return state.cards;
  },
  overlay(state: any) {
    return state.overlay;
  },
};