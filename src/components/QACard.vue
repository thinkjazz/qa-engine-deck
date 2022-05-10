<template>
  <input
  class="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-emerald-500"
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

</style>