<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-04 15:44:55
 * @LastEditTime: 2022-08-05 15:59:23
 * @LastEditors: Sun yinge
-->
<template>
    <div>B组件</div>
    {{ num }}
    <button @click="favBtn">
        {{ fav ? '收藏中...' : '收藏' }}
    </button>
</template>

<script setup>
import mixin from '../../mixins/mixin.js'
let { num, fav, favBtn } = mixin();
console.log(mixin)
</script>