<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-04 15:44:51
 * @LastEditTime: 2022-08-09 16:02:09
 * @LastEditors: Sun yinge
-->
<template>
    <div>
        {{changeNum}}
        {{changeNum}}
        {{changeNum}}
        <h1>A组件</h1>
        {{num}}
        {{name}}
        <button @click="changeName">修改</button>
        <button @click="btn">+=操作</button>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from '../store'
const store = useStore();

let {num,name,changeNum} = storeToRefs(store);
let changeName = () => {
    // name.value = '李四'
    // num.value = 10
    
    // 批量更新
    store.$patch(state=>{
		state.num++;
        state.name='李四'
	})
}

const btn = () => {
    store.upNum(200)
}
</script>