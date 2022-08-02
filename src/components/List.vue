<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-02 15:08:23
 * @LastEditTime: 2022-08-02 15:35:57
 * @LastEditors: Sun yinge
-->
<template>
    <div>
        这是子组件 ===> {{msg}}
    </div>
</template>

<script setup>
defineProps({
    msg: {
        type: String,
        default: '111'
    }
})
</script>

<!-- <script type="text/javascript">
export default {
    props: ['msg']
}
</script> -->