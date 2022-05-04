<template>
  <transition>
    <div v-if="overlayIsActive" class="overlay" @click="closeOverlay"></div>
  </transition>
</template>


<script lang="ts">
export default {
  computed: {
    overlayIsActive(): boolean {
      return this.$store.getters['overlay'];
    },
  },
  methods: {
    closeOverlay(): void {
      this.$store.dispatch('toggleOverlay');
    },
  },
};
</script>


<style>
.overlay {
  background-color: rgba(0, 0, 0, 0.100);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 500;
}

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
</style>