<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-07-28 15:04:44
 * @LastEditTime: 2022-08-08 13:52:28
 * @LastEditors: Sun yinge
-->
<template>
  <div>
    <A></A>
  </div>
</template>

<script setup>
import A from '../components/A.vue'
let num = ref(100);
provide('changeNum', num);

</script>
