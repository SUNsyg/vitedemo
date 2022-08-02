<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-07-28 15:04:44
 * @LastEditTime: 2022-08-02 11:21:37
 * @LastEditors: Sun yinge
-->
<template>
  <div>
    <router-link to="/about">关于我们</router-link>
    <button @click="go">关于我们</button>
  </div>
</template>

<script type="text/javascript">
// import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    console.log(this)
    let useR = new useRouter;
    let go = ()=>{
      useR.push('/about/1')
      console.log('useRouter', useR, new useRouter())
      console.log(useRoute)
    }
    return { go }
  },
  // methods: {
  //   go() {
  //     this.$router.push('/about')
  //   }
  // }
}
</script>
