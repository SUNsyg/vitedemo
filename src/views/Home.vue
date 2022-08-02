<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-07-28 15:04:44
 * @LastEditTime: 2022-08-02 17:57:28
 * @LastEditors: Sun yinge
-->
<template>
  <div>
    <List :msg="msg" @fn="changeHome"></List>
  </div>
</template>

<script setup>
import List from '../components/List.vue'
let changeHome = (n)=> {
  console.log(n.value)
}
</script>
<!-- <script type="text/javascript">
import List from '../components/List.vue'
export default {
    components: {
      List
    },
    setup() {
        const msg = ref('1111111')
        let changeHome = (n)=> {
          console.log(n.value)
        }
        return {
          msg,
          changeHome
        }
    }
}
</script> -->
<!-- <script type="text/javascript">
import List from '../components/List.vue'

export default {
  data() {
    return {
      n:0,
      msg: '这是传过去的数据'
    }
  },
  components: {
    List
  },
  methods: {
    changeHome(n) {
      this.n = n;
      console.log(n)
    }
  }
}
</script> -->
