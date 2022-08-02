<!--
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-02 15:08:23
 * @LastEditTime: 2022-08-02 17:54:04
 * @LastEditors: Sun yinge
-->
<template>
    <div>
        这是子组件 ===> {{num}}
        <button @click="changNum">按钮</button>
    </div>
</template>

<script setup lang="ts">
let num = ref(200);

const emit = defineEmits<{
  (e: 'fn', id: number): void
}>()

const changNum = ()=>{
    emit('fn', num)
}
</script>

<!-- <script type="text/javascript">
export default {
    setup(props, { emit }) {
        let num = ref('100')
        const changNum = ()=>{
            emit('fn', num)
        }
        return {
            num,
            changNum
        }
    }
}
</script> -->
<!-- <script type="text/javascript">
export default {
    data(){
        return {
            num: 10
        }
    },
    methods: {
        changNum() {
            this.$emit('fn', this.num)
        }
    }
}
</script> -->