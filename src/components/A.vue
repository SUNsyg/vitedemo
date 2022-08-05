<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-04 15:44:51
 * @LastEditTime: 2022-08-05 15:58:02
 * @LastEditors: Sun yinge
-->
<template>
    <div>A组件</div>
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