<template>
  <div class="flex items-center gap-3 mb-5">
    <h1 :class="titleSizes[size]" class="w-full">{{ title }}</h1>
    <div :class="actionsClass">
      <slot name="actions" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TClassName } from '@/types/common.ts'

defineOptions({
  name: 'UIPageTitle',
})

interface Props {
  title: string
  actionsClass?: TClassName
  size?: Sizes
}
withDefaults(defineProps<Props>(), {
  size: 'md',
})

type Sizes = 'md' | 'sm'

const titleSizes: Record<Sizes, TClassName> = {
  md: 'text-3xl font-semibold',
  sm: 'text-2xl font-medium',
}
</script>
