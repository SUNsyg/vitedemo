/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-01 14:03:20
 * @LastEditTime: 2022-08-10 15:03:00
 * @LastEditors: Sun yinge
 */
import { defineStore } from 'pinia'

export const user = defineStore('user', {
  state: () => {
    return {
      nickName: '张三',
      age: 18
    }
  },
  getters:{
    changeAge() {
      // 有缓存，只会打印一次
      console.log('getters')
      return this.age+10
    }
  },
  actions:{
    upAge( val ) {
      this.age += val
      this.nickName='李四'
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'my_user',
        storage: localStorage,
        paths: ['age']
      }
    ],
  }
})