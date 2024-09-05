<template>
  <div class="grid grid-cols-[max-content_1fr]">
    <LayoutSidebar v-model:show-menu="showMenu" />

    <div>
      <LayoutHeader @toggle-menu="toggleMenu" />
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import LayoutHeader from '@/components/Layout/Header/Header.vue'
import LayoutSidebar from '@/components/Layout/Sidebar/Sidebar.vue'

const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>
