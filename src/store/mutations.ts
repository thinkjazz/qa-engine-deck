//* Great! Our Vuex configuration is over now 👍
export default {
  createNewList(state: any, payload: any) {
    state.lastListId++;
    const list = {
      id: state.lastListId,
      name: payload,
    };
    state.lists.push(list);
  },
  createNewCard(state: any, payload: any) {
    state.lastCardId++;
    const card = {
      //! id: this.lastCardId, надо думать почему в оринале this.lastCardId,
      id: state.lastCardId,
      name: payload.name,
      listId: payload.listId,
    };
    state.cards.push(card);
  },
  toggleOverlay(state: any) {
    state.overlay = !state.overlay;
  },
  openForm(state: any, payload: any) {
    state.currentData = payload;
  },
  saveCard(state: any, payload: any) {
    state.cards = state.cards.map((card: any) => {
      if (card.id === payload.id) {
        return Object.assign({}, card, payload);
      }
      return card;
    });
  },
  deleteCard(state: any, payload: any) {
    const indexToDelete = state.cards
      .map((card: any) => card.id)
      .indexOf(payload.id);
    state.cards.splice(indexToDelete, 1);
  },

};