<template>
  <input
  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500"
  type="text"
  placeholder="Создать тикет"
  v-model="cardName"
  @keyup.enter="createCard">
</template>

<script lang="ts">
export default {
  props: ['listId'],
  methods: {
    createCard(): void {
      const card = {
        name: this.cardName,
        listId: this.listId,
      };
      this.$store.dispatch('createCard', card);
      this.cardName = '';
    }
  }

}
</script>

<style>
/* .input-card {
  position: relative;
  background-color: white;
  min-height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  word-break: break-all;
  font-size: 16px;
} */
</style>