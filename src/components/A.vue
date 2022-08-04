<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-04 15:44:51
 * @LastEditTime: 2022-08-04 16:51:04
 * @LastEditors: Sun yinge
-->
<template>
    <div>A组件</div>
    {{list}}
</template>

<script setup>
import axios from 'axios';

const list = ref([]);

let res = await axios.get('http://testapi.xuexiluxian.cn/api/slider/getSliders');
list.value = res.data.data.list;
</script>