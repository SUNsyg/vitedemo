<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-07-28 15:04:44
 * @LastEditTime: 2022-08-02 15:25:46
 * @LastEditors: Sun yinge
-->
<template>
  <div>
    <List :msg="msg"></List>
  </div>
</template>

<script setup>
import List from '../components/List.vue'
let msg = ref('这是父传过去的数据')
</script>

<!-- <script type="text/javascript">
import List from '../components/List.vue'

export default {
  data() {
    return {
      msg: '这是传过去的数据'
    }
  },
  components: {
    List
  }
}
</script> -->
