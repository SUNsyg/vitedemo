<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-07-28 15:04:44
 * @LastEditTime: 2022-08-04 16:57:00
 * @LastEditors: Sun yinge
-->
<template>
  <div>
    <Suspense>
      <template #default>
        <A></A>
      </template>
      <template #fallback>
        加载中...
      </template>
    </Suspense>
    <B></B>
    <div ref="target">
      <C v-if="targetIsVisible"></C>
    </div>
  </div>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'
// import A from '../components/A.vue'
import B from '../components/B.vue'
// import C from '../components/C.vue'
const A = defineAsyncComponent(() =>
  import('../components/A.vue')
)
const C = defineAsyncComponent(() =>
  import('../components/C.vue')
)

const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting
    }
  },
)
</script>
