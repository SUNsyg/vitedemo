import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      num: 0,
      name: '张三',
      age: 18
    }
  },
  getters:{
    changeNum() {
      // 有缓存，只会打印一次
      console.log('getters')
      return this.num+1000
    }
  },
  actions:{
    upNum( val ) {
      this.num += val
    }
  }
})