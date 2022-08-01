<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-07-28 15:04:44
 * @LastEditTime: 2022-08-01 17:37:07
 * @LastEditors: Sun yinge
-->
<template>
  <div>
    <input type="" name="" v-model="msg">
    <input type="" name="" v-model="str">
  </div>
</template>

<!-- <script setup>
import { reactive } from "@vue/reactivity";

const obj = reactive({
  a:1
})

watch(obj, (newVal, oldVal)=>{
  console.log( newVal, oldVal )
})

</script> -->
<script>
import { reactive, watch } from '@vue/runtime-core';
export default {
  setup(){

    let msg = ref('这是一个数据');
    let str = ref('这是str');
    let obj = reactive({
      a:1,
      arr:['a','b','c']
    })

    watch(obj, (newVal, oldVal)=>{
      console.log( newVal, oldVal )
    },{
      immediate:true
    })

    // watch(msg, (newVal, oldVal)=>{
    //   console.log( newVal, oldVal )
    // },{
    //   immediate:true
    // })

    // watch(str, (newVal, oldVal) => {
    //   console.log( newVal, oldVal )
    // },{
    //   immediate:true
    // })

    watch([msg,str], (newVal, oldVal)=>{
      console.log( newVal, oldVal )
    },{
      immediate:true
    })

    return {
      msg,
      str
    }

  }
}
</script>

<!-- <script type="text/javascript">
export default {
  data() {
    return {
      msg: '这是一个数据',
      obj:{
        a:1,
      }
    }
  },
  watch:{
    msg(newVal, oldVal) {
      console.log(newVal, oldVal)
    },
    msg:{
      handler(newVal, oldVal){
        console.log( newVal, oldVal )
      },
      immediate:true
    },
    obj:{
      handler(newVal, oldVal){
        console.log( newVal, oldVal )
      },
      immediate:true,
      deep: true
    },
  }
}
</script> -->
