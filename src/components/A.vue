<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-04 15:44:51
 * @LastEditTime: 2022-08-05 16:40:38
 * @LastEditors: Sun yinge
-->
<template>
    <div>
        <h1>A组件</h1>
        {{num}}
        <button @click="favBtn(1)">按钮</button>
    </div>
</template>

<script>
import { fav } from '../../mixins/mixin'
export default {
    data() {
        return {
            str: '你好'
        }
    },
    mixins: [fav]
}
</script>

