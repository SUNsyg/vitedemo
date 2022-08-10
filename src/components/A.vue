<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-04 15:44:51
 * @LastEditTime: 2022-08-10 14:46:53
 * @LastEditors: Sun yinge
-->
<template>
    <div>
        <h1>A组件</h1>
        {{age}} {{nickName}}
        <hr/>
        getters: {{changeAge}}
        <hr/>
        actions: <button @click="btn">+=</button>
        <hr/>
        shopList: {{ shopList }}
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { user } from '../store/user'
import { shop } from '../store/shop'
const userStore = user();
const shopStore = shop();

let { age, nickName, changeAge } = storeToRefs(userStore);
let {shopList} = storeToRefs(shopStore);
console.log(shopList.value)
const btn = ()=>{
    userStore.upAge(100)
}

console.log(userStore)
</script>