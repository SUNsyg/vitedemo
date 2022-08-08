<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-04 15:44:55
 * @LastEditTime: 2022-08-08 14:05:17
 * @LastEditors: Sun yinge
-->
<template>
    <div>
        <h1>B组件</h1>
        {{bNum}}
        <button @click="btn">按钮</button>
    </div>
</template>

<script setup>
const bNum = inject('changeNum');
console.log('bNum', bNum)
const btn = () => {
    bNum.value = 200
}
</script>