<template>
  <draggable :options="{ group: 'cards'}" group="cards" ghostClass="ghost">
    <span
      class="element-card"
      v-for="(card, index) in cards"
      :key="index"
      @click="togglePopup(card)">
      {{ card.name }}
      </span>

  </draggable>
</template>

<script lang="ts">
import {VueDraggableNext} from 'vue-draggable-next'

export default {
  props: ['listId', "listName"],
  component: {
    draggable: VueDraggableNext,
  },
  methods: {
    togglePopup(data: any): void {
      const currentData = {
        listId: this.listId,
        listName: this.listName,
        id: data.id,
        name: data.name,
      };
      this.$store.dispatch('toggleOverlay');
      this.$store.dispatch('openForm', currentData);
    },
  },
  computed:{
    cards(): any {
      const cardFilteredByListId = this.$store.getters['cards'];
      return cardFilteredByListId.filter((card: any) => card.listId === this.listId ? true : false);

    },
    overlayIsActive(): boolean {
      return this.$store.getters['overlay'];
    },
  },
};

</script>


<style>
.element-card {
  position: relative;
  background-color: white;
  height: auto;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  min-height: 30px;
  margin-bottom: 10px;
  word-break: break-all;
  text-align: left;
}
</style>