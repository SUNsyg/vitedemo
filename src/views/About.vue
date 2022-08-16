<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-01 14:03:20
 * @LastEditTime: 2022-08-16 14:51:24
 * @LastEditors: Sun yinge
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="item.imageUrl" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getSliders } from '../api/sliders'

let list = ref([]);

onBeforeMount(() => {
  getSliders().then((res) => {
    list.value = res.data.list;
  })
})


</script>
<!-- <script type="text/javascript">
export default {
  created() {
    console.log(this.$route.params)
  }
}
</script> -->

<style scoped>
img {
  width: 100%;
  height: 200px;
}
</style>

