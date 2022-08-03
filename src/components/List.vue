<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-02 15:08:23
 * @LastEditTime: 2022-08-03 14:06:53
 * @LastEditors: Sun yinge
-->
<template>
    <div>
        <h1>这是List文件</h1>
        <hr/>
        子：{{num}}
        <button @click="btn">按钮</button>
    </div>
</template>

<script setup>
let props = defineProps({
    num:{
        type:Number,
        default:100
    }
})
const emit = defineEmits(['update:num'])
const btn = () => {
    emit('update:num', 200)
}
</script>