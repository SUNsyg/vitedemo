<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-04 15:44:51
 * @LastEditTime: 2022-08-08 16:26:54
 * @LastEditors: Sun yinge
-->
<template>
    <div>
        {{userInfo}}
        <button @click="btn">修改Info</button>
        <h1>A组件</h1>
        {{aNum}}
        <hr />
        <B></B>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
let store = useStore();

let userInfo = computed( () => store.state.user.userInfo );
let btn = () => {
    store.commit('changeInfo')
    // store.dispatch('changeBtn')
}

import B from './B.vue';
const aNum = inject('changeNum');
</script>
<!-- <script setup>
import { useStore } from 'vuex'
import B from './B.vue';

let store = useStore();
let num = computed( () => store.state.num );
let total = store.getters.total;
let btn = () => {
    // store.commit('changeNum', 300)
    store.dispatch('changeBtn')
}
const aNum = inject('changeNum');
</script> -->