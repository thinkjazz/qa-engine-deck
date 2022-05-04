<template>
 <transition>
    <div v-if="overlay" class="modal">
      <h2>List Name: {{ currentData.listName }} </h2>
      <input  :placeholder="currentData.name" v-model="cardName"/>
      <div class="container-button">
        <button class="blue" @click="saveElement">save</button>
        <button class="red" @click="deleteElement">delete</button>
      </div>
    </div>
 </transition>
</template>

<script lang="ts">
import { mapGetters} from 'vuex';

export default {
  data() {
    return {
      cardName: null,
    };
  },
  computed: {
    ...mapGetters(['overlay', 'currentData']),
  },
  methods: {
    saveElement(): void {
      if (this.cardName === null) {
        this.cardName = this.currentData.name;
      }
      const card = {
        id: this.currentData.id,
        name: this.cardName,
        listId: this.currentData.listId,
      };
      this.$store.dispatch('saveCard', card);
      this.cardName = null;
      this.$store.dispatch('toggleOverlay');
      },
    deleteElement(): void {
      this.$store.dispatch('deleteCard', this.currentData);
      this.$store.dispatch('toggleOverlay');
    },
    }
  };

</script>

<style>
.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-from {
  opacity: 1;
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
}

.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  height: 500px;
  width: 500px;
  border-radius: 10px;
  background-color: rgba(235, 236, 240, 1);
  z-index: 550;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input {
  width: 250px;
  height: 50px;
  padding: 10px 20px 10px 20px;
  border: 1px solid rgba(60, 60, 60, 0.2);
  border-radius: 15px;
}

button {
  display: flex;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  transition-duration: 0.4s;
}

button:hover {
  color: white;
}

.blue {
  background-color: rgba(1, 100, 255, 1);
}

.blue:hover {
  background-color: rgba(1, 100, 255, 0.8);
}

.red {
  background-color: rgba(250, 52, 75, 1);
}
.red:hover {
  background-color: rgba(250, 52, 75, 0.8);
}

.container-button {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
</style>