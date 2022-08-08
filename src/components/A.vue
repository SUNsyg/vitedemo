<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-04 15:44:51
 * @LastEditTime: 2022-08-08 14:00:30
 * @LastEditors: Sun yinge
-->
<template>
    <div>
        <h1>A组件</h1>
        {{aNum}}
        <hr />
        <B></B>
    </div>
</template>

<script setup>
import B from './B.vue';
const aNum = inject('changeNum');
</script>