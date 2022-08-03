<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-07-28 15:04:44
 * @LastEditTime: 2022-08-03 14:00:47
 * @LastEditors: Sun yinge
-->
<template>
  <div>
    <List v-model:num="num"></List>
  </div>
</template>

<script setup>
import List from '../components/List.vue'
let num = ref(1);
</script>
