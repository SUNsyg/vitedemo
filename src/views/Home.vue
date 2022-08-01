<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-07-28 15:04:44
 * @LastEditTime: 2022-08-01 15:40:53
 * @LastEditors: Sun yinge
-->
<template>
  <div class="home">
    {{msg}} ===> {{msgChange}}
    <hr/>
    {{name}} {{age}}
    <button @click="btn">按钮</button>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core"

let msg = ref('这是ref相应数据')
let obj = reactive({
  name: '张三',
  age: 18
})

// let msgChange = computed(()=>{
//   return msg.value.slice(1,3);
// })
let msgChange = computed({
  get() {
    return msg.value.slice(1,3);
  },
  set(val) {
    console.log('设置了', val)
  }
})

let {name,age} = toRefs(obj)
const btn = () => {
  msgChange.value = 111111
  console.log(msgChange)
  // name.value = '李四'
  // msg.value = '你好修改了'
}
</script>
<!-- <script>
import { reactive, toRefs, computed } from '@vue/reactivity';
export default {
  name: "Home",
  setup() {
    let obj = reactive({
      name:'张三',
      age:18
    })
    const btn = ()=>{
      obj.name = '李四'
    }
    onMounted(()=>{
      console.log('onMounted')
    })
    return {
      ...toRefs(obj),
      btn
    }
  },
  mounted() {
    console.log('mounted')
  }
};
</script> -->
