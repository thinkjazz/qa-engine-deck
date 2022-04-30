
export default {
  createList(context: any, payload: any) {
    context.commit('createNewList', payload);
  },
  createCard(context: any, payload: any) {
    context.commit('createNewCard', payload);
  },
  toggleOverlay(context: any) {
    context.commit('toggleOverlay');
  },
  openForm(context: any, payload: any) {
    context.commit('openForm', payload);
  },
  saveCard(context: any, payload: any) {
    context.commit('saveCard', payload);
  },
  deleteCard(context: any, payload: any) {
    context.commit('deleteCard', payload);
  },
}