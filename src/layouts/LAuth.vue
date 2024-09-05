<template>
  <main class="min-h-screen flex">
    <div
      class="w-1/2 relative hidden md:flex items-center justify-center px-5 overflow-hidden"
    >
      <div
        class="w-2/3 absolute z-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      >
        <svg
          class="w-full"
          viewBox="0 0 488 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M182.733 21.7333C177.4 33.2 164.6 60.9333 154.2 83.3333C108.867 181.067 93.4 214.4 85.6667 231.333C75.4 253.867 54.7333 298.4 23.9333 364.667L0.0666504 416L3.53332 416.933C5.39998 417.467 30.3333 419.733 59 422C87.6667 424.267 139.8 428.533 175 431.333C210.2 434.267 251.267 437.6 266.333 438.667C281.4 439.733 295.933 441.067 298.6 441.467L303.667 442.267L303.933 581.067C304.333 698 304.6 720 306.2 720C307.8 720 313.8 706.933 337.133 652.667C340.2 645.733 345.8 632.8 349.667 624C353.533 615.2 367.667 582.8 381 552C394.333 521.2 407.267 491.467 409.667 486C412.067 480.533 417.133 468.8 421 460C424.867 451.2 429.933 439.467 432.333 434C434.733 428.533 444.733 405.733 454.333 383.333C464.067 360.933 475.533 334.667 479.8 324.933C487.667 306.933 488.467 304.667 486.733 304.667C485.667 304.667 471.933 302.4 331 278.667C240.6 263.467 202.467 257.067 196.733 255.867L193 255.067L192.733 128L192.333 0.799962L182.733 21.7333Z"
            class="fill-slate-100"
          />
        </svg>
      </div>
      <div class="w-full max-w-[300px] z-20">
        <img src="@/assets/image/logo-black.svg" class="w-full" alt="Logo" />
      </div>
    </div>
    <div
      class="w-full md:w-1/2 grid grid-rows-[60px_minmax(max-content,1fr)_60px] bg-white"
    >
      <header class="flex items-center h-full justify-end px-5">
        <UILangSwitcher />
      </header>
      <div class="w-full h-full flex items-center justify-center px-7">
        <RouterView />
      </div>
      <footer></footer>
    </div>
  </main>
</template>

<script setup lang="ts">
import UILangSwitcher from '@/components/UI/LangSwitcher/LangSwitcher.vue'
</script>
